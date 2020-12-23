/*
  Used to get the backup quotes from the back-end API
  This backup quotes will be used by the client to show the quotes when offline
  When the API call fails, quotes are recieved from a static file
*/
import fetch from 'isomorphic-fetch';

import API from 'utils/api';
import tempQuote from 'utils/backup-quotes';
import { getRandomItemFromArray } from 'utils/utils';

// Type of Action- When the backup has been received after an API call
export const BACKUP_RECEIVED = 'backup_received';

// Async Action to get the backup quotes from the API
export function get_backup_quote() {
  return function(dispatch) {
    return fetch(API.root + API.path.popularQuote)
      .then(response => response.json())
      .then((json) => {
        dispatch(backup_received(json));
      })
      .catch(() => {
        // On API failure, use backup quotes from static files
        dispatch(backup_received(tempQuote));
      });
  }
}

// Action creator - Used when the backup is received from back end API
export function backup_received(data) {
  return {
    type: BACKUP_RECEIVED,
    data
  }
}

// Actual reducer for the backup.
export default function backup(state = {}, action) {
  switch(action.type) {
    case BACKUP_RECEIVED:
      if (action.data.length) {
        const item = getRandomItemFromArray(action.data);
        return Object.assign({}, state, {content: item.content.rendered, title: item.title.rendered});
      }
      return state;
    default:
      return state;
  }
}

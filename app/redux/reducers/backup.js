import fetch from 'isomorphic-fetch';

import API from 'utils/api';

export const BACKUP_RECEIVED = 'backup_received';
const tempQuote = {
  content: 'A computer lets you make more mistakes faster than any other invention in human history, with the possible exceptions of handguns and tequila.',
  title: 'Mitch Ratcliffe'
};

export function get_backup_quote() {
  return function(dispatch) {
    return fetch(API.root + API.path.popularQuote)
      .then(response => response.json())
      .then((json) => {
        dispatch(backup_received(json));
      })
      .catch(() => {
        dispatch(backup_received([tempQuote]));
      });
  }
}

export function backup_received(data) {
  return {
    type: BACKUP_RECEIVED,
    data
  }
}

export default function backup(state = [], action) {
  switch(action.type) {
    case BACKUP_RECEIVED:
      return [...action.data];
    default:
      return state;
  }
}

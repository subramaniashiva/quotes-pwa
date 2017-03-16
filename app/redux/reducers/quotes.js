import fetch from 'isomorphic-fetch';

import API from 'utils/api';
import { set_loading } from './loading';

export const QUOTE_RECEIVED = 'quote_received';

export function get_quote() {
  return function(dispatch) {
    dispatch(set_loading(true));
    return fetch(API.root + API.path.randomQuote)
      .then(response => response.json())
      .then((json) => {
        dispatch(set_loading(false));
        dispatch(quote_received(json));
      });
  }
}

export function quote_received(data) {
  return {
    type: QUOTE_RECEIVED,
    data
  }
}

export default function quote(state = {}, action) {
  switch(action.type) {
    case QUOTE_RECEIVED:
      return Object.assign({}, state, {value: action.data.quote, author: action.data.author});
    default:
      return state;
  }
}
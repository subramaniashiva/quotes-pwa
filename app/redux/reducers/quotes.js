/*
  The main reducer file to fetch the quotes from the back end API
  Dispatches loading action to true when a network request is fired
  Updates with the quote and then dispataches loading to false on API call completion
*/
import fetch from 'isomorphic-fetch';

import API from 'utils/api';
import { set_loading } from './loading';

// Action Type - When the actual quote is received
export const QUOTE_RECEIVED = 'quote_received';

// Async Action - To get the actual quotes from the back-end API
export function get_quote() {
  return function(dispatch) {
    dispatch(set_loading(true));
    // Don't use cached value from the API
    return fetch(API.root + API.path.randomQuote, {cache: 'no-store'})
      .then(response => response.json())
      .then((json) => {
        dispatch(set_loading(false));
        dispatch(quote_received(json));
      })
      .catch(() => {
        dispatch(set_loading(false));
        dispatch(quote_received({}));
      });
  }
}

// Action Creator - When the quote is received succesfully
export function quote_received(data) {
  return {
    type: QUOTE_RECEIVED,
    data
  }
}

// Actual reducer for getting the new quote.
export default function quote(state = {}, action) {
  switch(action.type) {
    case QUOTE_RECEIVED:
      return action.data.length ? Object.assign({}, state, {content: action.data[0].content, title: action.data[0].title}): state;
    default:
      return state;
  }
}

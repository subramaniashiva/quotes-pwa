const intialState = {
  value: 'Test Quote',
  author: 'Siva'
};

export const GET_QUOTE = 'get_quote';

export function get_quote() {
  return {
    type: GET_QUOTE
  }
}

export default function quote(state = {}, action) {
  switch(action.type) {
    case GET_QUOTE:
      return intialState;
    default:
      return {}
  }
}
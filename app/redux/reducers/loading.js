export const SET_LOADING = 'set_loading';

export function set_loading(data) {
  return {
    type: SET_LOADING,
    data
  }
}

export default function loading(state = false, action) {
  switch(action.type) {
    case SET_LOADING:
      return action.data;
    default:
      return state;
  }
}
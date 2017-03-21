import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';

import * as quotes from 'redux/reducers/quotes';
import * as loading from 'redux/reducers/loading';
import API from 'utils/api';

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

describe('quotes reducer', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('dispatches loading and quote received action when API call is succesful', () => {
    nock(API.root)
      .get(API.path.randomQuote)
      .reply(200, { body: { author: 'Test', quote: 'Test' } } );

    const expectedActions = [
      { type: loading.SET_LOADING, data: true },
      { type: loading.SET_LOADING, data: false },
      { type: quotes.QUOTE_RECEIVED, data: { body: { author: 'Test', quote: 'Test' } } }
    ]
    const store = mockStore();

    return store.dispatch(quotes.get_quote())
      .then(() => { // return of async actions
        expect(store.getActions()).toEqual(expectedActions)
      })
  })
})
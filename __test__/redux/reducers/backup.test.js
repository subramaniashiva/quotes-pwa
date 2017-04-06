import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';

import * as backup from 'redux/reducers/backup';
import API from 'utils/api';

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

describe('backup reducer', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('dispatches backup received action when API call is succesful', () => {
    nock(API.root)
      .get(API.path.popularQuote)
      .reply(200, { body: { title: 'Test', content: 'Test' } } );

    const expectedActions = [
      { type: backup.BACKUP_RECEIVED, data: { body: { title: 'Test', content: 'Test' } } }
    ]
    const store = mockStore();

    return store.dispatch(backup.get_backup_quote())
      .then(() => { // return of async actions
        expect(store.getActions()).toEqual(expectedActions)
      })
  })
})

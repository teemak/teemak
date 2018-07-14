import * as actions from './actions';
import * as types from './types';
import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
import thunk from 'redux-thunk';

export const mockStore = configureMockStore([thunk]);

describe('actions', () => {
    it('should return an array of objects', () => {
        const result = [{}, {}, {}];
        const expectedAction = {
            type: types.GET_PROJECTS,
            payload: result
        }
        expect(actions.getProjects()).toEqual(expectedAction);
    });
});


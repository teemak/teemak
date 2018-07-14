import { combineReducers } from 'redux';
import projectReducer from './ProjectReducers';

const rootReducers = combineReducers({
    projects: projectReducer
});

export default rootReducers;

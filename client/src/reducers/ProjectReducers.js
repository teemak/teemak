import { GET_PROJECTS } from '../actions/types';

//CASE HAS TO MATCH TYPE IN ACTIONS
const ProjectReducers = (state = [], action) => {
    switch(action.type) {
        case GET_PROJECTS:
            return [ ...state, ...action.payload ];
        default:
            return state;
    }
}

export default ProjectReducers;

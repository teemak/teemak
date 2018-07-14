import axios from 'axios';
import { GET_PROJECTS } from './types';

export const getProjects = () => dispatch => {
    axios
        .get('/api/projects')
        .then(projects => {
            return dispatch({ type: GET_PROJECTS, payload: projects.data });
        })
        .catch(err => console.log(err));
};

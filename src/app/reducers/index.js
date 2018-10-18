import {combineReducers} from 'redux';

import Task from './tasks-reducers';
import DetailTask from './task-detail-reducer';

//combineReducers combine nhung reducer lai voi nhau
const allReducers = combineReducers({
    tasks: Task,
    taskDetail: DetailTask,
});

export default allReducers;
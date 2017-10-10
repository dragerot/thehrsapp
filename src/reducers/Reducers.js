import {combineReducers} from 'redux';
import loginReducer from '../component/login/loginReducer'
import todos from '../component/todo/reducers/TodoRedusers'
import visibilityFilter from '../component/todo/reducers/VisibilityFilterReduser'

const reducers = combineReducers({
    loginReducer,
    todos,
    visibilityFilter
});

export default reducers;

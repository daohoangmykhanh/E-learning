import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import CourseReducer from "./CourseReducer";
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    CourseReducer: CourseReducer,

});

export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);
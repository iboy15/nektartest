import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import homeReducer from "../modules/home/reducer";
import detailReducer from "../modules/Detail/reducer";

const reducers = combineReducers({
  homeReducer: homeReducer,
  detailReducer: detailReducer
});

const middleware = applyMiddleware(thunk);

export default createStore(reducers, middleware);

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from "./reducers/index";
const Store = createStore(
    rootReducer,
  composeWithDevTools(
    applyMiddleware()
    // other store enhancers if any
  )
);


export default Store;
import { combineReducers } from "redux";
import productReducer from "./product/reducer/reducer";

const rootReducer = combineReducers({
    productReducer
})

export default rootReducer;
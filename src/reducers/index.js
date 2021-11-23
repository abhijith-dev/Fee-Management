import LoginReducer from "./loginReducer"
import FeeReducer from "./feeReducer"
import {combineReducers} from  'redux'

const rootReducer =combineReducers({
    LoginReducer,
    FeeReducer
})

export default rootReducer
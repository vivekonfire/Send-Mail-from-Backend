import { combineReducers } from "redux";
import Mail from "./MailReducer";

const RootReducer = combineReducers({
    Mail: Mail,
});

export default RootReducer;

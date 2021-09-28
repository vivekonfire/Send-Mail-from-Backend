import { SEND_MAIL } from "../types";

const initialState = {
    msg: "",
};
const MailReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MAIL:
            return {
                ...state,
                msg: action.payload,
            };
        default:
            return state;
    }
};

export default MailReducer;

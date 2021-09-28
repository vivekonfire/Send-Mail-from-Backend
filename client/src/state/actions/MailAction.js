import axios from "axios";
import { SEND_MAIL } from "../types";

export const sendMail = (formData) => async (dispatch) => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };

        const res = await axios.post("/api/mail", formData, config);
        dispatch({
            type: SEND_MAIL,
            payload: res.data.msg,
        });
    } catch (err) {
        console.error(err);
    }
};

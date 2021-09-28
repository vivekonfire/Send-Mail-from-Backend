import React, { useState, useEffect } from "react";
import "../styles/Form.css";
import { connect } from "react-redux";
import { sendMail } from "../state/actions/MailAction";

const Form = ({ Mail: { msg: mesg }, sendMail }) => {
    const [form, setForm] = useState({
        name: "",
        mno: 0,
        email: "",
        msg: "",
    });

    const { name, mno, email, msg } = form;

    useEffect(() => {
        console.log(mesg);
    }, [mesg]);

    const onChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        sendMail(form);
    };

    return (
        <div>
            {mesg && <div className="alert">{mesg}</div>}
            <form className="form" onSubmit={onSubmit}>
                <h2>Contact Us!</h2>
                <input
                    className="box"
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={name}
                    onChange={onChange}
                ></input>
                <br />
                <input
                    className="box"
                    type="number"
                    placeholder="Mobile Number"
                    name="mno"
                    value={mno}
                    onChange={onChange}
                ></input>
                <br />
                <input
                    className="box"
                    type="email"
                    placeholder="email"
                    name="email"
                    value={email}
                    onChange={onChange}
                ></input>
                <br />
                <input
                    className="box"
                    type="text"
                    placeholder="Message"
                    name="msg"
                    value={msg}
                    onChange={onChange}
                ></input>
                <br />
                <button className="btn" type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
};

const mapStateToProps = (state) => ({
    Mail: state.Mail,
});

export default connect(mapStateToProps, { sendMail })(Form);

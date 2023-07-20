import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUserMiddleware } from "../actions/actionCreators";

const Register = () => {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [address, setAddress] = useState("");

    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();

        const user = {
            userName,
            email,
            password,
            role: "admin",
            phoneNumber,
            address
        };

        dispatch(addUserMiddleware(user));

        setUserName("");
        setEmail("");
        setPassword("");
        setPhoneNumber("");
        setAddress("");
    };

    return (
        <div className="container mt-4">
            <form id="register-form" onSubmit={handleSubmit}>
                <h1 className="h3 mb-3 fw-normal text-center">Sign up and enjoy</h1>
                <div className="mb-3">
                    <label htmlFor="register-username" className="form-label">Username</label>
                    <input
                        type="text"
                        className="form-control"
                        id="register-username"
                        placeholder="Enter your username ..."
                        autoComplete="off"
                        required
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="register-email" className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="register-email"
                        placeholder="Enter email address ..."
                        autoComplete="off"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="register-password" className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="register-password"
                        placeholder="Enter your password ..."
                        autoComplete="off"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="register-phone" className="form-label">Phone Number</label>
                    <input
                        type="text"
                        className="form-control"
                        id="register-phone"
                        placeholder="Enter phone number (optional) ..."
                        autoComplete="off"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="register-address" className="form-label">Address</label>
                    <textarea
                        id="register-address"
                        className="form-control"
                        rows="3"
                        placeholder="Enter your address (optional) ..."
                        autoComplete="off"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    ></textarea>
                </div>
                <button className="btn btn-primary btn-lg w-100" type="submit">
                    Sign Up
                </button>
            </form>
        </div>
    );

};

export default Register;

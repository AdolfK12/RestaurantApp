import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginMiddleware } from '../actions/actionCreators'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });

  const handleLoginChange = e => {
    setLoginForm({ ...loginForm, [e.target.id]: e.target.value });
  };

  const dispatch = useDispatch()
  const navigate = useNavigate();

  const submitLoginForm = (e) => {
    e.preventDefault();

    dispatch(loginMiddleware(loginForm));
    navigate("/")
  }
  // const submitLoginForm = e => {
  //   e.preventDefault();
  //   // Simulate a login request;--
  //   fetch('http://localhost:3000/login', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(loginForm)
  //   }).then(response => {
  //     if (response.ok) {
  //       console.log("Login successful");
  //       // Redirect to another page
  //     } else {
  //       console.log("Login failed");
  //     }
  //   }).catch(error => {
  //     console.log("Login error:", error);
  //   });
  // };

  return (
    <div className="container w-100">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-lg p-3 mb-5 bg-white rounded mt-5">
            <div className="card-body">
              <h3 className="text-center mb-4">Log in to your account</h3>
              <form id="login-form" onSubmit={submitLoginForm}>
                <div className="form-group">
                  <label htmlFor="email">Email <span className="text-danger">*</span></label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter email address ..."
                    required
                    onChange={handleLoginChange}
                    value={loginForm.email}
                  />
                </div>
                <div className="form-group mt-3">
                  <label htmlFor="password">Password <span className="text-danger">*</span></label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter your password ..."
                    required
                    onChange={handleLoginChange}
                    value={loginForm.password}
                  />
                </div>
                <button className="btn btn-primary btn-block rounded-pill w-100 p-2 mt-4" type="submit">
                  Log In
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

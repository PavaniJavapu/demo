import React,{useState} from "react";
import "./Login.css";
import 'bootstrap/dist/css/bootstrap.min.css';


function Login() {
  
  const initialValues = { email: "", password: "" };
  const [formValues, setformValues] = useState(initialValues);
  const [formErrors, setformErrors] = useState({});
  const [isShow, setIsShow] = useState(false);

 

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setformValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setformErrors(handleValidation(formValues));
  };

  const handleValidation = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password !== "password") {
      errors.password = "Invalid password";
    }
    return errors;
  };
  return (
    <section className="container-fluid">
      <div className="row content d-flex justify-content-center align-items-center">
        <div className="col-md-4">
          <div className="card shadow-sm bg-secondary p-4">
            <h3 className="nm-4 text-center fs-1 m-4">Login</h3>
            <form className="mb-3" onSubmit={handleSubmit}>
              <div className="form-group mb-3">
                <input
                  type="email"
                  name="email"
                  className="form-control mt-1 py-3"
                  placeholder="Enter your email address"
                  value={formValues.email}
                  id="email"
                  onChange={handleChanges}
                />
              </div>
              <p className="text-danger">{formErrors.email}</p>
              <div className="form-group mb-3">
                <div className="input-group">
                  <input
                    type={isShow ? "text" : "password"}
                    name="password"
                    className="form-control mt-1 py-3"
                    placeholder="Enter your password"
                    value={formValues.password}
                    id="password"
                    onChange={handleChanges}
                    data-toggle="password"
                  />
                </div>
              </div>
              <p className="text-danger">{formErrors.password}</p>
              <div className="d-grid gap-2">
                <button className="btn btn-primary btn-lg border-0">
                  Login
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;

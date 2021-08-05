import React, { useState } from "react";
import styles from "./login.module.scss";
import "./Override.module.scss";
import Logo from "../../Assets/Logo.png";
import { Container, Col, Row, CardBody, Button, Card, Alert } from "reactstrap";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [state, setState] = useState({
    email: false,
    password: false,
  });
  const history = useHistory();
  const [email, setEmail] = useState();
  const [correctEmail, setCorrectEmail] = useState("admin@triggproduction.com");
  const [password, setPassword] = useState();
  const [correctPassword, setCorrectPassword] = useState("12345password");
  const [errors, setError] = useState("");

  const onFocusHandler = (event) => {
    setError("");
    setState({ ...state, [event.target.name]: true });
  };
  const onBlurHandler = (event) => {
    setError("");

    setState({ ...state, [event.target.name]: false });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (email && password) {
      if (email === correctEmail && password === correctPassword) {
        history.push("/dashboard");
        localStorage.setItem(
          "token",
          "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJmb28iLCJleHAiOjE2MjIyMzEwMjEsImlhdCI6MTYyMjE5NTAyMX0.GZdSeVbC0vqCfWiWZ69M7I2roQz_L1p8FSwCGbJtkRQ"
        );
      } else {
        setError("Wrong credentails!");
      }
    } else {
      setError("All fields required!");
    }
  };

  return (
    <>
      <div>
        <Container className={`${styles.main_container}`}>
          <Row className={styles.setrow}>
            <Col xs={12} md={12} className={`${styles.background} p-0`}>
              <div className={styles.container_left}>
                <Container>
                  <Card className={`${styles.cardPayment} mt-5 mb-4 `}>
                    <CardBody className=" pt-0">
                      <div className={styles.logoImage}>
                        <img src={Logo} alt="logo" width="100%" />
                      </div>
                      <p className={styles.head}>Login</p>
                      <p className={styles.texthead}>
                        Login here to get all access of Amazon Admin Panel
                      </p>
                      {errors ? <Alert color="danger">{errors}</Alert> : null}

                      <div
                        className={`${
                          state.email
                            ? styles.inputBoxwhite1
                            : styles.inputBoxwhite
                        }`}
                        style={{ marginBottom: "20px" }}
                      >
                        <label for="Email">Email</label>

                        <div className={styles.input}>
                          <input
                            type="email"
                            name="email"
                            placeholder="John Doe"
                            onBlur={onBlurHandler}
                            onFocus={onFocusHandler}
                            value={email}
                            onChange={(e) => {
                              setEmail(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                      <div
                        className={`${
                          state.password
                            ? styles.inputBoxwhite1
                            : styles.inputBoxwhite
                        }`}
                        style={{ marginBottom: "20px" }}
                      >
                        <label for="Password">Password</label>

                        <div className={styles.input}>
                          <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            onBlur={onBlurHandler}
                            onFocus={onFocusHandler}
                            value={password}
                            onChange={(e) => {
                              setPassword(e.target.value);
                            }}
                          />
                        </div>
                      </div>

                      <Row>
                        <Col xs="12" className={`mb-3`}>
                          <Button
                            onClick={submitHandler}
                            className={styles.buttonPayment}
                          >
                            Login
                          </Button>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </Container>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Login;

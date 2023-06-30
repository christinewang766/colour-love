import ThemeStyles from "../styling/Theme.module.css";
import FormStyles from "../styling/Form.module.css";
import PaletteStyles from "../styling/Palette.module.css";
import Icon from "../components/images/icon.svg";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { loginUser } from "../components/redux/userSlice";
import { motion } from "framer-motion";

export function LoginRegister() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [submit, setSubmit] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [available, setAvailable] = useState(true);
  const [user, setUser] = useState("");
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");

  /** SERVER COMMUNICATION ========================================= */

  const checkAvailability = () => {
    Axios.post("http://localhost:3001/checkusername", {
      username: usernameReg,
    }).then((response) => {
      if (response.data.message) {
        setAvailable(true);
      } else {
        setAvailable(false);
      }
    });
  };

  const check = () => {
    Axios.post("http://localhost:3001/login", {
      username: usernameReg,
      password: passwordReg,
    }).then((response) => {
      if (response.data.message) {
        setIsLogin(false);
      } else {
        setIsLogin(true);
      }
    });
  };

  const login = () => {
    Axios.post("http://localhost:3001/login", {
      username: usernameReg,
      password: passwordReg,
    }).then((response) => {
      if (response.data.message) {
        setUser(response.data.message);
      } else {
        setUser(response.data[0].username);
      }
    });
  };

  const register = () => {
    Axios.post("http://localhost:3001/register", {
      username: usernameReg,
      password: passwordReg,
    }).then((response) => {
      console.log(response);
    });
  };

  /** HELPERS ========================================= */

  const isValidSyntax = (str1: string, str2: string) => {
    if (
      /^[a-z0-9]+$/gi.test(str1) &&
      /^[a-z0-9]+$/gi.test(str2) &&
      str1.length > 3 &&
      str2.length > 3
    ) {
      setSubmit(true);
    } else {
      setSubmit(false);
    }
  };

  const handleValueChange = () => {
    isValidSyntax(usernameReg, passwordReg);
    checkAvailability();
    check();
  };

  useEffect(() => {
    handleValueChange();
  }, [usernameReg, passwordReg]);

  const clearForm = () => {
    var getValueU = document.getElementById("username");
    var getValueP = document.getElementById("password");
    getValueU.value = "";
    getValueP.value = "";
  };

  return (
    <div className={ThemeStyles.outerFrame}>
      <div className={ThemeStyles.innerFrame}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          {/* ICON ======================================================*/}
          <motion.div
            className="box"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <img
              onClick={() => navigate("/")}
              src={Icon}
              style={{ maxWidth: "80px", paddingRight: "25px" }}
              alt="icon"
            />
          </motion.div>
          {/* TITLE ======================================================*/}

          <h1 className={PaletteStyles.title}>Welcome</h1>
        </div>

        {/* FORM BOX ======================================================*/}

        <div className={FormStyles.container}>
          <div style={{ display: "grid", padding: "20px" }}>
            {/* USERNAME ======================================================*/}

            <label className={FormStyles.label}>Username:</label>
            <input
              id="username"
              required
              type="username"
              className={FormStyles.input}
              placeholder="ex. ComputerScienceIsSoCool"
              onChange={(e) => {
                setUsernameReg(e.target.value.toLowerCase());
              }}
            />

            {/* PASSWORD ======================================================*/}

            <label style={{ paddingTop: "20px" }} className={FormStyles.label}>
              Password:
            </label>
            <input
              id="password"
              required
              type="password"
              className={FormStyles.input}
              placeholder="ex. mustOnlyBeAlphaNum766"
              onChange={(e) => {
                setPasswordReg(e.target.value.toLowerCase());
              }}
            />
          </div>

          {/* SYNTAX ALERT ======================================================*/}

          <Alert
            style={{ maxWidth: "80%" }}
            show={!submit}
            key="danger"
            variant="danger"
          >
            Only use letters and numbers in your username and password.
          </Alert>
          <Alert
            style={{ maxWidth: "80%" }}
            show={!submit}
            key="warning"
            variant="warning"
          >
            Username and password must be more than 3 characters long.
          </Alert>
          <Alert
            style={{ maxWidth: "80%" }}
            show={!available}
            key="info"
            variant="info"
          >
            "{usernameReg}" is an existing user. If you are trying to register,
            choose another username.
          </Alert>

          {/* LOGIN BUTTON ======================================================*/}
          {/* disabled: true when can not submit or is not login */}

          <div className={FormStyles.buttonContainer}>
            <motion.div whileHover={{ scale: submit && isLogin ? 0.8 : 1 }}>
              <button
                disabled={!submit || !isLogin}
                style={{
                  background: submit && isLogin ? "#FFFFFF" : "#8A8A8A",
                  border:
                    submit && isLogin ? "5px solid #BF7037" : "5px solid black",
                  color: submit && isLogin ? "#BF7037" : "black",
                }}
                className={FormStyles.button}
                onClick={() => {
                  login();
                  clearForm();
                  setIsLogin(false);
                  setSubmit(false);
                  navigate("/home");
                  dispatch(
                    loginUser({
                      username: usernameReg,
                      password: passwordReg,
                      loggedIn: true,
                    })
                  );
                }}
                value="login"
              >
                login
              </button>
            </motion.div>

            {/* REGISTRATION BUTTON ======================================================*/}
            {/* disabled: true when can not submit or when user is not available */}
            <motion.div whileHover={{ scale: submit && available ? 0.8 : 1 }}>
              <button
                disabled={!submit || !available}
                style={{
                  marginRight: "20px",
                  background: submit && available ? "#FFFFFF" : "#8A8A8A",
                  border:
                    submit && available
                      ? "5px solid #BF7037"
                      : "5px solid black",
                  color: submit && available ? "#BF7037" : "black",
                }}
                className={FormStyles.button}
                value="register"
                onClick={() => {
                  register();
                  clearForm();
                  setSubmit(false);
                  navigate("/home");
                  dispatch(
                    loginUser({
                      username: usernameReg,
                      password: passwordReg,
                      loggedIn: true,
                    })
                  );
                }}
              >
                register
              </button>
            </motion.div>
          </div>
          <h1>{user}</h1>
        </div>
      </div>
    </div>
  );
}

export default LoginRegister;

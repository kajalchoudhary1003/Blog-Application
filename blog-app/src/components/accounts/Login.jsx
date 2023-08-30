import { Box, TextField, Button, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import p1 from "../../images/p1.png";
import { API } from "../../service/api.js";
import { DataContext } from "../../context/DataProvider";
import "./login.css";

//importing so that the login page can navigate to homepage
import { useNavigate } from "react-router-dom";

const loginValues = {
  username: "",
  password: "",
};

const signupValues = {
  name: "",
  username: "",
  password: "",
};
const Login = ({ isUserAuthenticated }) => {
  const [account, toggleAccount] = useState("login");
  const [signup, setSignup] = useState(signupValues);
  const [error, setError] = useState("");
  const [login, setLogin] = useState(loginValues);

  // using of context api
  const { setAccount } = useContext(DataContext);

  const navigate = useNavigate();

  const toggleSignup = () => {
    account === "signup" ? toggleAccount("login") : toggleAccount("signup");
  };

  const InputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };

  const signupUser = async () => {
    let response = await API.userSignup(signup);
    if (response.isSuccess) {
      setError("");
      setSignup(signupValues);
      toggleAccount("login");
    } else {
      setError("Something weny wrong! Please try again");
    }
  };

  const onValueChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const loginUser = async () => {
    let response = await API.userLogin(login);
    if (response.isSuccess) {
      setError("");

      sessionStorage.setItem(
        "accessToken",
        `Bearer ${response.data.accessToken}`
      );
      sessionStorage.setItem(
        "refreshToken",
        `Bearer ${response.data.refreshToken}`
      );

      // context api
      setAccount({
        username: response.data.username,
        name: response.data.name,
      });

      isUserAuthenticated(true);

      navigate("/");
    } else {
      setError("Something went wrong. Please try again later");
    }
  };

  return (
    <box-content>
      {/* condition for login and signup page */}
      {account === "login" ? (
        // login page
        <Box class="flex flex-col mt-10 items-center shadow-2xl p-8 h-fit w-fit rounded-xl">
          <img src={p1} alt="logo" class="w-60" />
          <TextField
            sx={{ mt: 3, width: 250 }}
            required
            id="outlined-required"
            label="Username"
            onChange={(e) => onValueChange(e)}
            name="username"
            value={login.username}
          />
          <TextField
            sx={{ mt: 3, width: 250 }}
            required
            id="outlined-required"
            type="password"
            label="Password"
            onChange={(e) => onValueChange(e)}
            name="password"
            value={login.password}
          />
          <Button
            sx={{
              mt: 3,
              width: 100,
              bgcolor: "#4FC0D0",
              ":hover": { bgcolor: "#FF55BB" },
            }}
            disabled={false}
            size="medium"
            variant="contained"
            onClick={() => loginUser()}
          >
            Login
          </Button>
          <p className="mt-2">OR</p>
          <Button
            disabled={false}
            variant="outlined"
            onClick={() => {
              toggleSignup();
            }}
            sx={{ mt: 2, width: 200, ":hover": { boxShadow: 2 } }}
          >
            Create an account
          </Button>
        </Box>
      ) : (
        // signup page
        <Box class="flex flex-col mt-10 items-center shadow-2xl p-8 h-fit w-fit rounded-xl">
          <img src={p1} alt="logo" class="w-60" />
          <TextField
            sx={{ mt: 3, width: 250 }}
            required
            id="filled-required"
            variant="filled"
            label="Name"
            name="name"
            onChange={(e) => InputChange(e)}
          />
          <TextField
            sx={{ mt: 3, width: 250 }}
            required
            id="filled-required"
            variant="filled"
            label="Username"
            name="username"
            onChange={(e) => InputChange(e)}
          />
          <TextField
            sx={{ mt: 3, width: 250 }}
            required
            id="filled-password-input"
            variant="filled"
            type="password"
            label="Password"
            name="password"
            onChange={(e) => InputChange(e)}
          />
          {error && <Typography>{error}</Typography>}
          <Button
            sx={{
              mt: 3,
              width: 100,
              bgcolor: "#4FC0D0",
              ":hover": { bgcolor: "#FF55BB" },
            }}
            disabled={false}
            size="medium"
            variant="contained"
            onClick={() => {
              signupUser();
            }}
          >
            Sign Up
          </Button>
          <p className="mt-2">OR</p>
          <Button
            disabled={false}
            variant="outlined"
            onClick={() => {
              toggleSignup();
            }}
            sx={{ mt: 2, width: 250, ":hover": { boxShadow: 2 } }}
          >
            Already have an account
          </Button>
        </Box>
      )}
    </box-content>
  );
};

export default Login;

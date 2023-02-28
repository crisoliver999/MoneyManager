import { useState } from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { setLoggedIn } from "state";
import {
  Box,
  TextField,
  Button,
  InputAdornment,
  IconButton,
  useTheme,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import KeyIcon from "@mui/icons-material/Key";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

// login form validation using yup
const loginValidationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(5, "Password should be of minimum 5 characters length")
    .required("Password is required"),
});

// new user form validation using yup
const newUserValidationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(5, "Password should be of minimum 5 characters length")
    .required("Password is required"),
  firstName: yup
    .string("Enter your first name")
    .min(2, "First name should be of minimum 2 characters length")
    .required("First name is required"),
  lastName: yup
    .string("Enter your last name")
    .min(2, "Last name should be of minimum 2 characters length")
    .required("Last name is required"),
});

const LoginForm = () => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const loginForm = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginValidationSchema,
    onSubmit: (values) => {
      dispatch(setLoggedIn(true));
    },
  });

  const newUserForm = useFormik({
    initialValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
    },
    validationSchema: newUserValidationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  // state that controlls if password is shown or hidden
  const [showPassword, setShowPassword] = useState(false);

  // function that changes showPassword state
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  // state that controlls which from to show
  const [isLoginForm, setIsLoginForm] = useState(true);

  // function that changes isLoginForm state
  const handleChangeForm = () => setIsLoginForm((form) => !form);

  return (
    <Box
      backgroundColor={theme.palette.primary[700]}
      borderRadius="1rem"
      p="1rem"
    >
      {isLoginForm ? (
        <form onSubmit={loginForm.handleSubmit} method="POST">
          <Box display="flex" alignItems="center" gap=".5rem" m=".5rem">
            <MailOutlineIcon fontSize="large" />
            <TextField
              fullWidth
              id="email"
              name="email"
              label="Email"
              value={loginForm.values.email}
              onChange={loginForm.handleChange}
              error={loginForm.touched.email && Boolean(loginForm.errors.email)}
              helperText={loginForm.touched.email && loginForm.errors.email}
            />
          </Box>
          <Box display="flex" alignItems="center" gap=".5rem" m=".5rem">
            <KeyIcon fontSize="large" />
            <TextField
              fullWidth
              id="password"
              name="password"
              label="Password"
              value={loginForm.values.password}
              onChange={loginForm.handleChange}
              type={showPassword ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleClickShowPassword}>
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            gap=".5rem"
            m=".5rem"
          >
            <Button color="primary" variant="" onClick={handleChangeForm}>
              new account
            </Button>
            <Button color="primary" variant="contained" type="submit">
              Login
            </Button>
          </Box>
        </form>
      ) : (
        <form onSubmit={newUserForm.handleSubmit} method="POST">
          <Box display="flex" alignItems="center" gap=".5rem" m=".5rem">
            <AccountCircleIcon fontSize="large" />
            <TextField
              fullWidth
              id="firstName"
              name="firstName"
              label="First Name"
              value={newUserForm.values.firstName}
              onChange={newUserForm.handleChange}
              error={
                newUserForm.touched.firstName &&
                Boolean(newUserForm.errors.firstName)
              }
              helperText={
                newUserForm.touched.firstName && newUserForm.errors.firstName
              }
            />
            <TextField
              fullWidth
              id="lastName"
              name="lastName"
              label="Last Name"
              value={newUserForm.values.lastName}
              onChange={newUserForm.handleChange}
              error={
                newUserForm.touched.lastName &&
                Boolean(newUserForm.errors.lastName)
              }
              helperText={
                newUserForm.touched.lastName && newUserForm.errors.lastName
              }
            />
          </Box>
          <Box display="flex" alignItems="center" gap=".5rem" m=".5rem">
            <MailOutlineIcon fontSize="large" />
            <TextField
              fullWidth
              id="email"
              name="email"
              label="Email"
              value={newUserForm.values.email}
              onChange={newUserForm.handleChange}
              error={
                newUserForm.touched.email && Boolean(newUserForm.errors.email)
              }
              helperText={newUserForm.touched.email && newUserForm.errors.email}
            />
          </Box>
          <Box display="flex" alignItems="center" gap=".5rem" m=".5rem">
            <KeyIcon fontSize="large" />
            <TextField
              fullWidth
              id="password"
              name="password"
              label="Password"
              value={newUserForm.values.password}
              onChange={newUserForm.handleChange}
              type={showPassword ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleClickShowPassword}>
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            gap=".5rem"
            m=".5rem"
          >
            <Button color="primary" variant="" onClick={handleChangeForm}>
              exsiting user
            </Button>
            <Button color="primary" variant="contained" type="submit">
              create account
            </Button>
          </Box>
        </form>
      )}
    </Box>
  );
};

export default LoginForm;

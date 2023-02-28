import { Box, Typography } from "@mui/material";
import LoginForm from "components/LoginForm";

const Login = () => {
  return (
    <Box
      width="100vw"
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="appName" mb="1rem">MoneyManager</Typography>
        <LoginForm />
      </Box>
    </Box>
  );
};

export default Login;

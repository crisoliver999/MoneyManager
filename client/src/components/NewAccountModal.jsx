import * as yup from "yup";
import { useFormik } from "formik";

import {
  Modal,
  Box,
  Typography,
  IconButton,
  useTheme,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import FlexBetween from "./FlexBetween";
import accountColours from "consts/accountColours";
import accountIcons from "consts/accountIcons";

const NewAccountModal = ({ isOpen, toggleIsOpen }) => {
  const theme = useTheme();

  return (
    <Modal open={true}>
      <Box
        backgroundColor={theme.palette.background.alt}
        borderRadius="1rem"
        p="1rem"
        display="flex"
        flexDirection="column"
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <FlexBetween mb="0.5rem">
          <Typography variant="h3">New Account</Typography>
          <IconButton sx={{ padding: "0" }} onClick={() => toggleIsOpen(false)}>
            <CloseIcon p="0px" fontSize="large" />
          </IconButton>
        </FlexBetween>
        <form>
          <Box display="flex">
            <Box display="flex" flexDirection="column" gap="0.5rem">
              <TextField label="Account Name" variant="standard" />
              <FormControl variant="standard" sx={{ minWidth: 120 }}>
                <InputLabel id="account-type-label">Account Type</InputLabel>
                <Select
                  labelId="account-type-label"
                  value=""
                  label="Account Type"
                >
                  <MenuItem value="current">Current Account</MenuItem>
                  <MenuItem value="savings">Savings Account</MenuItem>
                  <MenuItem value="credit-card">Credit Card</MenuItem>
                  <MenuItem value="loan">Loan</MenuItem>
                </Select>
              </FormControl>
              <TextField
                label="Opening Balance"
                variant="standard"
                type="number"
              />
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              gap="0.5rem"
            >
              <Box>
                <Button variant="outlined">icon</Button>
              </Box>
              <Box>
                <Button variant="outlined">colour</Button>
              </Box>
            </Box>
          </Box>
        </form>
      </Box>
    </Modal>
  );
};

export default NewAccountModal;

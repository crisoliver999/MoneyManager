import {
  AppBar,
  Box,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  useTheme,
} from "@mui/material";
import FlexBetween from "./FlexBetween";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { setLoggedIn } from "state";
import { useDispatch } from "react-redux";
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import { setMode } from "state";

const Navbar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const dispatch = useDispatch();
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = "profile-menu";
  const profileMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem
        onClick={() => {
          handleMenuClose();
          dispatch(setLoggedIn(false));
        }}
      >
        Log out
      </MenuItem>
    </Menu>
  );

  return (
    <Box>
      <AppBar
        sx={{
          position: "static",
          background: "none",
          boxShadow: "none",
        }}
      >
        <FlexBetween>
          <Box>
            {isSidebarOpen ? (
              ""
            ) : (
              <IconButton
                onClick={() => {
                  setIsSidebarOpen(!isSidebarOpen);
                }}
              >
                <MenuIcon fontSize="large" />
              </IconButton>
            )}
            <Typography ml="1rem" variant="appNameSmall">
              MoneyManager
            </Typography>
          </Box>
          <Box>
            <IconButton onClick={() => dispatch(setMode())}>
              {theme.palette.mode === "dark" ? (
                <DarkModeOutlinedIcon />
              ) : (
                <LightModeOutlinedIcon />
              )}
            </IconButton>
            <IconButton
              size="large"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
            >
              <AccountCircleIcon fontSize="large" />
            </IconButton>
          </Box>
        </FlexBetween>
      </AppBar>
      {profileMenu}
    </Box>
  );
};

export default Navbar;

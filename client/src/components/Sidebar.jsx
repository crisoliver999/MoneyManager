import {
  Drawer,
  Box,
  IconButton,
  useTheme,
  List,
  ListItemButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import navItems from "consts/navItems";
import { useNavigate } from "react-router";
import { useState } from "react";
import { ChevronRightOutlined } from "@mui/icons-material";

const Sidebar = ({ drawerWidth, isSidebarOpen, setIsSidebarOpen }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [active, setActive] = useState("");

  return (
    <Box component="nav">
      {isSidebarOpen && (
        <Drawer
          open={isSidebarOpen}
          variant="persistent"
          anchor="left"
          sx={{
            width: drawerWidth,
            "& .MuiDrawer-paper": {
              color: theme.palette.secondary[200],
              backgroundColor: theme.palette.background.alt,
              boxSizing: "border-box",
              borderWidth: "2px",
              width: drawerWidth,
            },
          }}
        >
          <Box alignitems="right">
            <IconButton onClick={() => setIsSidebarOpen(false)}>
              <CloseIcon fontSize="large" />
            </IconButton>
          </Box>
          <List>
            {navItems.map(({ text, icon, path }) => {
              if (!icon) {
                return <Divider key={text} />;
              }
              return (
                <ListItem key={text} disablePadding>
                  <ListItemButton
                    onClick={() => {
                      navigate(path);
                      setActive(path);
                    }}
                    sx={{
                      backgroundColor:
                        active === path
                          ? theme.palette.secondary[300]
                          : "transparent",
                      color:
                        active === path
                          ? theme.palette.primary[600]
                          : theme.palette.secondary[100],
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        ml: "2rem",
                        color:
                          active === path
                            ? theme.palette.primary[600]
                            : theme.palette.secondary[200],
                      }}
                    >
                      {icon}
                    </ListItemIcon>
                    <ListItemText primary={text}>
                      {active === path && (
                        <ChevronRightOutlined sx={{ ml: "auto" }} />
                      )}
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Drawer>
      )}
    </Box>
  );
};

export default Sidebar;

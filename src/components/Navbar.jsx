import React, { useState } from "react";
import {
  Facebook,
  Badge,
  MailLock,
  NotificationsActive,
} from "@mui/icons-material";

import { deepOrange } from "@mui/material/colors";
import {
  AppBar,
  Avatar,
  Box,
  InputBase,
  Toolbar,
  Typography,
  styled,
  Menu,
  MenuItem,
} from "@mui/material";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const Search = styled("div")(({ theme }) => ({
  backgroundcolor: "white",
  padding: "0 10px",
  width: "40%",
  borderRadius: theme.shape.borderRadius,
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  justifyContent: "space-between",
  alignItems: "center",
  width: "150px",
  cursor: "pointer",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <Box sx={{ flexGrow: 1 }} mb={1}>
      <AppBar position="fixed">
        <StyledToolbar>
          <Typography
            variant="h6"
            sx={{ display: { xs: "none", sm: "block" } }}>
            FACEBOOK
          </Typography>
          <Facebook sx={{ display: { xs: "block", sm: "none" } }} />
          <Search sx={{backgroundColor:"#fff"}}>
            <InputBase placeholder="search..."></InputBase>
          </Search>
          <Icons spacing={5} sx={{ display: { xs: "none", sm: "flex" } }}>
            <Badge color="white" badgecontent={4}>
              <MailLock />
            </Badge>
            <Badge color="white" badgecontent={2}>
              <NotificationsActive />
            </Badge>
            <Avatar
              onClick={(e) => setOpen(true)}
              sx={{ bgcolor: deepOrange[500], width: 25, height: 25 }}>
              Jhon
            </Avatar>
          </Icons>
          <UserBox>
            <Avatar
              onClick={(e) => setOpen(true)}
              sx={{ bgcolor: deepOrange[500], width: 25, height: 25 }}>
              N
            </Avatar>
          </UserBox>
        </StyledToolbar>
        <Box>
          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            open={open}
            onClose={(e) => setOpen(false)}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}>
            <MenuItem>Profile</MenuItem>
            <MenuItem>My account</MenuItem>
            <MenuItem>Logout</MenuItem>
          </Menu>
        </Box>
      </AppBar>
    </Box>
  );
}

export default Navbar;

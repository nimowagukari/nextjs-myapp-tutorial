"use client";
import { Home, Person, Search } from "@mui/icons-material";
import {
  Button,
  Divider,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  MenuList,
  Paper,
  Typography,
} from "@mui/material";
import { useState } from "react";

export default function Page() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Typography variant="h3">MUI Navigation: Menu</Typography>
      <div className="my-4">
        <Button
          id="basic-button"
          variant="contained"
          onClick={handleClick}
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup={true}
          aria-expanded={open ? "true" : undefined}
        >
          Open Basic Menu
        </Button>
        <Menu
          id="basic-menu"
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </div>
      <div className="my-4">
        <Paper className="w-[400px]">
          <MenuList>
            <MenuItem>
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText>Home</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <Search />
              </ListItemIcon>
              <ListItemText>Search</ListItemText>
            </MenuItem>
            <Divider />
            <MenuItem>
              <ListItemIcon>
                <Person />
              </ListItemIcon>
              <ListItemText>Profile</ListItemText>
            </MenuItem>
          </MenuList>
        </Paper>
      </div>
    </>
  );
}

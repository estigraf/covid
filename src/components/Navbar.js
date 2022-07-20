import { Link } from "react-router-dom";
import * as React from "react";
import { styled} from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import ComboBox from "./ComboBox";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";

const Search = styled("div")(() => ({
  backgroundColor: "yellow",
  "&:hover": {
    backgroundColor: "red",
  },
}));

const SearchIconWrapper = styled("div")(() => ({
  position: "absolute",
}));

export default function Navbar(setName) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton color="inherit">
            <Link to="/About">
              <MenuIcon />
            </Link>
          </IconButton>
          <Typography
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <Link to="/">
              <HomeIcon />
            </Link>
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <ComboBox setName={setName} />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import { Link } from "react-router-dom";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const handleCloseNavMenu = () => {
  // setAnchorElNav(null);
};

const accessPages = ["Sign in", "Join for free"];

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function LowerNavbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const mobileMenuId = "primary-search-account-menu-mobile";

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "left",
              mr: 5,
              fontFamily: "Georgia",
            }}
          >
            {
              <Button
                key={"explore course"}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 0,
                  bgcolor: "#eee",
                  color: "#333",
                  display: "block",
                  mr: 1,
                  ml: 3,
                  "&:hover": { bgcolor: "#197aff", color: "#fff" },
                }}
                variant="outlined"
              >
              <Link to="/courses" style={{textDecoration: 'none'}}> Explore courses </Link> 
              </Button>
            }
          </Box>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "right",
              mr: 5,
              fontFamily: "Georgia",
            }}
          >
            {accessPages.map((accessPage) => (
              <Button
                key={accessPage}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 0,
                  bgcolor: "#fff",
                  color: "#197aff",
                  fontSize: 15,
                  display: "block",
                  mr: 1,
                  "&:hover": {
                    bgcolor: "#197aff",
                    color: "#fff",
                    borderColor: "#fff",
                  },
                }}
                variant="outlined"
              >
                {accessPage}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

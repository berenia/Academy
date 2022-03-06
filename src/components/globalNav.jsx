import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { styles } from "./assets/MUIstyles/customStyles";
import { Link } from "react-router-dom";

const pages = ["About", "Contact Us", "Become Instructor", "Partner with Us"];
const settings = [
  "Home",
  "About",
  "Sign in",
  "Dashboard",
  "Become Instructor",
  "Partner with Us",
  "Logout",
];
const news =
  "Bootcamp starts on march 10 2022. Be inform and inform your friends!";

const InfoNav = (props) => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        backgroundColor: "#f3d747f0",
        width: "100%",
        zIndex: 100,
      }}
    >
      <Typography component="div" variant="h6">
        <marquee>{props.news}</marquee>
      </Typography>
    </div>
  );
};
const GlobalNav = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const classes = styles;

  return (
    <div>
      <div>
        <InfoNav news={news} />
      </div>
      <AppBar position="static" style={classes.customizeAppbar}>
        <Container maxWidth="xl">
          <Toolbar style={classes.customizeToolbar}>
            <Typography
              variant="h5"
              noWrap
              component="div"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                color: "#192eff",
                fontWeight: "bold",
                pd: 0,
              }}
            >
              <Link to="/" style={classes.link}>
                Berenia Academy
              </Link>
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    {page == "Contact Us" ? (
                      <Link to="contact">
                        <Typography textAlign="center">{page}</Typography>
                      </Link>
                    ) : (
                      <Typography textAlign="center">{page}</Typography>
                    )}
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
                color: "#197aff",
                fontWeight: "bold",
              }}
            >
              <Link to="/" style={classes.link}>
                Berenia Academy
              </Link>
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "right",
                mr: 5,
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 0,
                    color: "#333",
                    display: "block",
                    mr: 1,
                    "&:hover": { bgcolor: "#197aff", color: "#fff" },
                  }}
                  variant="outlined"
                >
                   {page == "Contact Us" ? (
                      <Link to="contact">
                        {page}
                      </Link>
                    ) : (
                      page
                    )}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    sx={{ bgcolor: "#0099ff" }}
                    src="/static/images/avatar/g1.png"
                  />
                </IconButton>
              </Tooltip>

              <Menu
                sx={{ mt: 0 }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    {page == "Sign in" ? (
                      <Link to="sign-up">
                        <Typography textAlign="center">{page}</Typography>
                      </Link>
                    ) : (
                      <Typography textAlign="center">{page}</Typography>
                    )}
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};
export default GlobalNav;

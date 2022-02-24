import { css } from "@emotion/react";
import styled from "styled-components";
import headerImage from "../../static/images/png/header.png";

export const HeaderStyle = {
  header: {
    backgroundImage: `url(${headerImage})`,
    backgroundSize: { xs: "cover 100vh", lg: "cover 70vh" },
    display: "flex",
    justifyContent: "left",
  },
  textArea: {
    backgroundColor: "transparent",
    padding: "40px",
    marginLeft: "9px",
    marginTop: "50px",
    width: { xs: "100%", md: "50%" },
    color: "#eee",
    marginBottom: "50px",
  },
  innerText: {
    marginTop: "20px",
    color: "#ddd",
  },
  defaultButton: {
    backgroundColor: "#197aff",
    color: "#fff",
    marginTop: "50px",
    "&:hover": {
      backgroundColor: "#fff",
      color: "#197aff",
    },
  },
};

export const HeaderPaperStyle = {
  BoxStyle: {
    display: "grid",
    gridTemplateColumns: { md: "repeat(2, 1fr)", sm: "repeat(1, 1fr)" },
    paddingLeft: { md: 5, xs: 0.5 },
    paddingRight: { md: 5, xs: 0.5 },
    paddingBottom: { md: 0.5, xs: 0 },
    paddingTop: 2,
    backgroundColor: "#e7ecf2",
  },
  PaperStyle: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 2,
    width: { xs: "100%", md: "90%" },
    border: "none",
    boxShadow: "2px 8px 12px 2px #ddd",
    textAlign: "center",
    marginBottom: { xs: 2, md: 0 },
  },
};

export const ResolutionStyle = {
  column: {
    display: "grid",
    gridTemplateColumns: "auto",
  },
  row: {
    display: "grid",
    gridTemplateRows: "auto",
  },
};



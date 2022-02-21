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

export const FlatCard = styled.div`
  max-width: ${(props) => (props.width ? props.width : '300px')};
  min-height: 200px;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "#fff"};
  color: ${(props) => (props.color ? props.color : "#333")};
  padding: 10px;
  z-index: 500px;
  border-radius: 10px;
  box-shadow: ${(props) => (props.boxShadow ? props.boxShadow : "0px")};
`;
export const FlatCardIcon = styled.div`
  background: #f2f7fb;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  color: ${(props) => (props.color ? props.color : "#1270df")};
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`;

export const FlatCardHeader = styled.h2`
  color: inherit;
  text-align: center;
`;
export const FlatCardContent = styled.div`
  background: inherit;
  color: #555;
  text-align: ${(props) => (props.textAlign ? props.textAlign : "center")};
`;
export const FlatCardMedia = styled.div``;

export const Button = styled.button`
  ${(props) => {
    switch (props.variant) {
      case "filled":
        return css`
          background-color: blue;
          color: white;
          &:hover {
            background-color: white;
            color: blue;
          }
        `;
      case "outlined":
        return css`
          background-color: transparent;
          color: white;
          &:hover {
            background-color: inherit;
            color: inherit;
          }
        `;
      default:
        return css`
          background-color: white;
          color: #555;
          &:hover {
            color: #333;
          }
        `;
    }
  }}
`;

import { css } from "@emotion/react";
import styled from "styled-components";

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

  &:nth-child(even) img {
    order: 2;
  }
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
export const FlatCardImage = styled.img``;

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
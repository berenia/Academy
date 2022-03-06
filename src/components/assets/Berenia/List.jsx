
import styled, {css} from "styled-components";

export const List = styled.ul`
  max-width: ${(props) => (props.width ? props.width : "300px")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "14px")};
  line-height: 20px;
  list-style-type: none;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "transparent"};
  color: ${(props) => (props.color ? props.color : "#fff")};
  padding: 10px;
  box-shadow: ${(props) => (props.boxShadow ? props.boxShadow : "0px")};
`;
export const ListIcon = styled.span`
  background: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "#eee"};
  color: ${(props) => (props.color ? props.color : "#1270df")};
  width: 30px;
  height: 30px;
  border-radius: 50%;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  margin: 5px;

  &:hover {
        transform: translateY(-20%);
        transition: 0.4s;
  }
  ${(props) => {
    switch (props.iconName) {
      case "Facebook":
        return css`
        color: #2222ff;
          &:hover {
            background-color: #2222ff;
            color: #fff;
          }
      }
      `;
      case "Instagram":
        return css`
        color: #ff2288;
          &:hover {
            background-color:#ff2288;
            color: #fff;
          }
      }
      `;
      case "Twitter":
        return css`
        color: #19c2ff;
          &:hover {
            background-color: #19c2ff;
            color: #fff;
          }
      }
      `;
      case "LinkedIn":
        return css`
        color: #1972ff;
          &:hover {
            background-color: #1972ff;
            color: #fff;
          }
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
export const ListIconWrapper = styled.span`
  display: inline-flex;
  justify-content: left;
  flex-direction: row;
  width: 100%;
`;

export const ListText = styled.li`
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "transparent"};
  color: ${(props) => (props.color ? props.color : "inherit")};
  padding: ${(props) => (props.padding ? props.padding : "8px 8px 8px 12px")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "inherit")};
  text-align: ${(props) => (props.textAlign ? props.textAlign : "left")};
  &:hover {
    background-color: ${(props) => (props.color ? props.color : "inherit")};
    color: ${(props) =>
      props.backgroundColor ? props.backgroundColor : "inherit"};
      font-size: 18px;
    transition: 1s;
  }
`;
export const ListHeader = styled.div`
  display: block;
  font-size: ${(props) => (props.fontSize ? props.fontSize : "25px")};
  font-weight: bold;
  padding: 10px;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "transparent"};
  color: ${(props) => (props.color ? props.color : "inherit")};
  text-align: ${(props) => (props.textAlign ? props.textAlign : "left")};
`;
export const ListMedia = styled.div``;

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

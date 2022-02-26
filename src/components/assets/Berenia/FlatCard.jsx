
import styled, {css} from "styled-components";

export const FlatCard = styled.div`
  max-width: ${(props) => (props.width ? props.width : '300px')};
  min-height: 200px;
  font-size: 20px;
  display: ${(props) => (props.display ? props.display : 'flex')};
  grid-template-columns: ${(props) => (props.gridTemplateColumns ? props.gridTemplateColumns : 'none')};
  grid-template-rows: ${(props) => (props.gridTemplateRows ? props.gridTemplateRows : 'none')};
  justify-content: center;
  align-items: center;
  flex-direction: ${(props) => (props.flexDirection ? props.flexDirection : 'column')};
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "#fff"};
  color: ${(props) => (props.color ? props.color : "#333")};
  padding: 10px;
  z-index: 2;
  border-radius: 10px;
  box-shadow: ${(props) => (props.boxShadow ? props.boxShadow : "0px")};

  &:nth-child(odd) img {
    order: 1;
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
export const FlatCardImage = styled.img`
  width: 100%,
  boxShadow: '0px 8px 20px 20px #ddd',
`;

export const Button = styled.button`
  ${(props) => {
    switch (props.variant) {
      case "filled":
        return css`
          background-color: blue;
          color: white;
          border-radius: 20px;
          &:hover {
            background-color: white;
            color: blue;
          }
        `;
      case "outlined":
        return css`
          background-color: transparent;
          color: #19c3ff;
          border-radius:20px;
          border: 1px solid #19c3ff;
          &:hover {
            background-color: #eee;
            color: #1953ff;;
          }
        `;
      default:
        return css`
          background-color: yellow;
          color: #555;
          &:hover {
            color: #333;
          }
        `;
    }
  }}
`;
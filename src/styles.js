import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const theme = {
  textColor: "black", // main font color
  backGroundColor: "#DFEEEA", // main background color
  secoundColor: "#2940d3",
  thirdColor: "#5E8B7E",
};

export const GlobalStyle = createGlobalStyle`
  
  
  body{
  background-color: ${(props) => props.theme.backGroundColor};
  color:  ${(props) => props.theme.textColor};
  
  
  }
  `;

export const FlexStyle = styled.div`
  margin-top: 20px;

  display: flex;
  justify-content: space-around;
`;

export const FlexStyleVer = styled.div`
  margin-top: 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Center = styled.div`
  text-align: center;

  :input {
    height: 50px;
  }
`;

export const ListStyle = styled.div`
  width: 40%;
  border: 2px solid;
  border-radius: 20px;
`;

export const CardStyle = styled.div`
  border-top: 2px solid;
`;

export const DeleteButton = styled.button`
  background-color: #e99497;
  color: black;
  border: 2px solid #e99497;
  border-radius: 5px;
  margin: 10px;

  :hover {
    background-color: #810000;
  }
`;

export const OtherButton = styled.button`
  background-color: ${(props) => props.theme.thirdColor};
  color: black;
  border: 2px solid ${(props) => props.theme.thirdColor};
  border-radius: 5px;
  margin: 10px;

  :hover {
    background-color: #2f5d62;
  }
`;

export const SearchStyle = styled.input`
  height: 30px;
  padding: 10px;
  font-size: 17px;
  border: 1px solid grey;
  float: left;

  background: #f1f1f1;
`;

export const SearchButton = styled.button`
  background-color: ${(props) => props.theme.thirdColor};
  color: black;
  border: 2px solid ${(props) => props.theme.thirdColor};
  border-radius: 5px;
  margin: 10px;
  height: 35px;

  :hover {
    background-color: #2f5d62;
  }
`;

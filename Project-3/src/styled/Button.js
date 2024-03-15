import styled from "styled-components";

export const Button = styled.button`
    float: right;
    background: #000000;
    color: white;
    padding: 10px 18px;
    border-radius: 5px;
    border: 1px solid transparent;
    min-width: 220px;
    font-size: 16px;
    cursor: pointer;  
    transition: 0.4s background ease-in;
    &:hover{
        background-color: white;
        border: 1px solid black;
        color: black;
        transition: 0.3s background ease-in;
    }
`;

export const OutlineButton = styled(Button)`

    background-color: white;
    border: 1px solid black;
    color: black;
    &:hover{
        background-color: black;
        border: 1px solid transparent;
        color: white;
    }
`;
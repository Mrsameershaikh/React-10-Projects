import { useState } from "react";
import styled from "styled-components";


const NumberSelector = () => {

    const numberArray = [1, 2, 3, 4, 5, 6];
    const [selectedNumber, setSelectedNumber] = useState();

    return (
        <NumberSelectorContainer>
            <div className="flex">
                {numberArray.map((num, i) => <Box key={i} onClick={() => setSelectedNumber(num)} isSelected={num === selectedNumber}>{num}</Box>)}
            </div>
            <p>Select Number</p>
        </NumberSelectorContainer>
    )
}

export default NumberSelector;

const NumberSelectorContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    gap: 10px;
    .flex{
        display: flex;
        gap: 24px;
    }

    p{
        font-size: 24px;
        font-weight: 700;
    }
`;

const Box = styled.div`
    height: 72px;
    width: 72px;
    border: 1px solid black;
    display: grid;
    place-items: center;
    font-size: 24px;
    font-weight: 700;
    cursor: pointer;
    background-color: ${(props) => (props.isSelected ? "black" : "white")};
    color: ${(props) =>(props.isSelected ? "white" : "black")};
`;
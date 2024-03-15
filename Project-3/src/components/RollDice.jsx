import styled from "styled-components";

const RollDice = ({roleDice,selectedDiceIcon}) => {
  

  
  return (
    <DiceContainer>

      <div className="dice" onClick={roleDice}>
        <img src={selectedDiceIcon} alt="dice1" />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  )
}

export default RollDice;


const DiceContainer = styled.div`
  margin-top: 48px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  .dice{
    cursor: pointer;
  }

  p{
    font: 24px;
  }
`;
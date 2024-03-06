import styled from "styled-components";
import Dice1 from "/dice/dice_1.png";
import Dice2 from "/dice/dice_2.png";
import Dice3 from "/dice/dice_3.png";
import Dice4 from "/dice/dice_4.png";
import Dice5 from "/dice/dice_5.png";
import Dice6 from "/dice/dice_6.png";

const RollDice = () => {
  return (
    <DiceContainer>

      <div>
        <img src={Dice1} alt="dice1" />
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
`;
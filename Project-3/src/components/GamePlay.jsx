import React, { useState } from 'react'
import TotalScore from './TotalScore';
import NumberSelector from './NumberSelector';
import styled from 'styled-components';
import RollDice from './RollDice';
import Dice1 from "/dice/dice_1.png";
import Dice2 from "/dice/dice_2.png";
import Dice3 from "/dice/dice_3.png";
import Dice4 from "/dice/dice_4.png";
import Dice5 from "/dice/dice_5.png";
import Dice6 from "/dice/dice_6.png";
import { Button, OutlineButton } from '../styled/Button';

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState(1);
  const [currentDice, setCurrentDice] = useState(1);
  const [selectedDiceIcon, setSelectedDiceIcon] = useState(Dice1);
  const [error, setError] = useState("");
  const diceIcons = [{id:1,img:Dice1},{id:2,img:Dice2},{id:3,img:Dice3},{id:4,img:Dice4},{id:5,img:Dice5},{id:6,img:Dice6}]

  const generateRandomNumber = (min, max)=>{
    return Math.floor(Math.random() * (max-min) + min)
  };

  const roleDice = ()=>{
    if(!selectedNumber){
      setError("You have not selected any number")
      return;
    } 
    const randomNumber = generateRandomNumber(1,7);
    setCurrentDice((prev)=>randomNumber);

    const selectedDiceIcon = diceIcons.find((num)=> num?.id === randomNumber);
    setSelectedDiceIcon(selectedDiceIcon?.img);

    if(selectedNumber === randomNumber){
      setScore((prev)=>prev + randomNumber);
    }else{
      setScore((prev)=> prev - 2);
    };

    setSelectedNumber(undefined);
  };

  const resetScore = () =>{
    setScore(0);
  }

  
  
  return (
    <MainContainer>
        <div className='top_section'>
        <TotalScore score={score}/>
        <NumberSelector selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} error={error} setError={setError}/>
        </div>
        <RollDice roleDice={roleDice} selectedDiceIcon={selectedDiceIcon}/>

        <div className='btns'>
          <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
          <Button>Show Rules</Button>
        </div>
    </MainContainer>
  )
}

export default GamePlay;

const MainContainer = styled.main`
    padding-top: 50px;
  .top_section{
    display: flex;
    justify-content: space-around;
    align-items: end;
  }

  .btns{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin-top: 40px;
  }
`;
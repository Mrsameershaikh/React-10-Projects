import stayled, { styled } from "styled-components";
import Logo from "/dices.png";

const StartGame = ({toggle}) => {
    return (
        <Container>
            <div>
                <img src={Logo} alt="logo" />
            </div>
            <div className="content">
                <h1>Dice Game</h1>
                <Button onClick={toggle}>Play Now</Button>
            </div>
        </Container>
    )
}

export default StartGame;


const Container = styled.div`
    max-width: 1180px;
    width: 100%;
    display: flex;
    align-items: center;
    margin: 0 auto;
    height: 100vh;

    .content {
        h1{
            font-size: 96px;
            white-space: nowrap;
        }

    }
`;

const Button = styled.button`
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
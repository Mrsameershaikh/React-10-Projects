import { styled } from "styled-components";
import { Button } from "../styled/Button";
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


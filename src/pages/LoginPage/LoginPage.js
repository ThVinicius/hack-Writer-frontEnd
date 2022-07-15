import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../lib/images/login.png";

export default function LoginPage() {
  const navigate = useNavigate()
  return (
    <LoginContainer>
      <img src={Logo} alt="Logo Hack-Writer" />
      <h3>Desbloqueie uma nova forma de fazer anotações</h3>

      <input type="email" placeholder="Entre com o seu Email"></input>
      <input type="password" placeholder="Entre com a sua Senha"></input>
      <button onClick={() => navigate("/homepage")}>Login</button>
      <span onClick={() => navigate("/register")}>Não tem uma conta? Faça seu cadastro agora!</span>
    </LoginContainer>
  );
}

const LoginContainer = styled.div`
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

background-color: #000000;

  img{
    width: 95%;
    height: 400px;
    object-fit: contain;
  }
 
  h3{
    color: #ffffff;
    font-family: "Montserrat";
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 200;
    text-align: center;

    margin-top: -50px;
    margin-bottom: 20px;
  }

input{
  width: 80%;
  height: 50px;
  margin-bottom: 10px;

  padding: 10px;
  border-radius: 5px;
  font-family: "Montserrat";
  font-weight: 200;
  color: #000000;

  transition: 0.3s all;
  :hover{
    box-shadow: 0px 0px 20px rgba(0,234,198,0.8);
  }
}

button{
  width: 80%;
  height: 50px;
  margin-bottom: 20px;

  padding: 10px;
  border-radius: 5px;
  text-transform: uppercase;
  letter-spacing: 4px;
  font-size: 20px;
  font-family: "Montserrat";
  font-weight: 600;
  color: #000000;
  background-color: #00eac6;
  border: thin solid #00eac6;

  transition: 0.3s all;
  :hover{
    cursor: pointer;
    font-weight: 800;
    box-shadow: 0px 0px 20px rgba(0,234,198,0.9);

  }
}
span{
  font-family: "Montserrat";
  font-weight: 200;
  color: #ffffff;
  margin-top: 30px;


  :hover{
    cursor: pointer;
    font-weight: 300;
  }
}
`

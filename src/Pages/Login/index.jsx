import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import seta from "../../assets/seta.svg";
import "./style.css";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from "../../Services/fireBaseconfig";
import { useState } from "react";


export function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [signInWithEmailAndPassword, user, loading, error] = 
  useSignInWithEmailAndPassword(auth);

  function handleSingIn(e) {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);

    try {
      handleSingIn
    } catch (error) {
      message.error('Invalid email or passwword')
    }

  }
  if (user) {
    return console.log(user);
  }

  return (
    <div className="container">
      <header className="header">
        <img src={logo} className="img_logo" alt="" />
        <span> ECOREDUCE </span>
      </header>

      <form>
        <div className="InputContainer">
          <label htmlFor="email"> E-mail </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="email@email.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="InputContainer">
          <label htmlFor="senha"> Senha </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="***************"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="button" onClick={handleSingIn}>
          Entrar <Link to="/Home"> </Link>
        </button>

        <div className="footer">
          <p>Você não tem uma conta ? <Link to="/Register"> Crie uma conta aqui </Link> </p>
        </div>

      </form>


    </div>
  )
}



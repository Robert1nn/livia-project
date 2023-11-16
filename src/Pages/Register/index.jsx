import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import "../../global.css";
import { useState } from "react";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from "../../Services/fireBaseconfig"; 

export function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [ createUserWithEmailAndPassword, user, loading, error] = 
    useCreateUserWithEmailAndPassword(auth);

    function handleSingOut(e) {
      e.preventDefault();
      createUserWithEmailAndPassword(email, password);
    }

  return (
    <div className="container">
      <header className="header">
        <img src= {logo} className="img_logo" alt="" />
        <span> ECOREDUCE 
        <p> Digite suas informações de cadastro </p> 
        </span>
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
        <button className="button" onClick={handleSingOut}>
          Casdastrar <img src="" alt="" />
        </button>

        <div className="footer">
          <p> Já tem registro ? <Link to="/">  Acesse sua conta </Link> </p> 
        </div>
        
      </form>


    </div>
  )
}

 

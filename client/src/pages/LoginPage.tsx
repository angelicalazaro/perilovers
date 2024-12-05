import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

const LoginPage: React.FC = () => {
  const [localUserName, setLocalUserName] = useState<string>(""); // Nom d'utilisateur
  const [password, setPassword] = useState<string>(""); // Mot de passe
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false); // État de connexion
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Validation des champs
    if (localUserName.trim() && password.trim()) {
      setIsLoggedIn(true);
      alert(`Bienvenue, ${localUserName}!`);
      navigate("/"); // Redirection vers la page d'accueil

      // Réinitialisation des champs
      setLocalUserName("");
      setPassword("");
    } else {
      alert("Veuillez remplir tous les champs !");
    }
  };

  return (
    <section className="loginPage">
        <section className="logoLoginPage">
            <img src="./src/assets/images/logo_perilove.png" alt="logoPerilove"/>
        </section>
      <div className="formulaire">
        <form onSubmit={handleSubmit}>
          <div className="label1">
            <label htmlFor="identifiant">Username</label>
            <input
              type="text"
              id="identifiant"
              placeholder="username"
              value={localUserName}
              onChange={(e) => setLocalUserName(e.target.value)}
              required
            />
          </div>
          <div className="label2">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="Homebutton">
            Connect
          </button>
        </form>

        {/* Affichage conditionnel pour indiquer si l'utilisateur est connecté */}
        {isLoggedIn && <p className="welcomeMessage">Vous êtes connecté !</p>}
      </div>
    </section>
  );
};

export default LoginPage;

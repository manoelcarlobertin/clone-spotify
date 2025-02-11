// import React from "react";
import logoSpotify from "../assets/logo/spotify-logo.png";

const Header = () => {
  return (
    <div>
      <img src={logoSpotify} alt="Logo do Spotify" />

      <a href="https://">
      
        <h1>Spotify</h1>
      </a>
      <p>Sua plataforma de música</p>
      <button>Iniciar Sessão</button>
      <button>Criar Conta</button>
      <button>Ajuda</button>
      <button>Conectar-se com outros aplicativos</button>
      <button>Área Restrita</button>
      <button>Sair</button>
    </div>
  );
};

export default Header;
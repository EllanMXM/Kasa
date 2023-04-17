import React from 'react';
import { Link } from 'react-router-dom';
import './errorPage.css';

function ErrorPage() {
  return (
      <div className="errorContainer">
        <div className="errorTitle">404</div>
        <p className="errorParagraph">Oups ! La page que vous demandez n’existe pas.</p>
        <Link className="errorLink" to="/">Retourner sur la page d’accueil</Link>
      </div>
  )
}

export default ErrorPage;
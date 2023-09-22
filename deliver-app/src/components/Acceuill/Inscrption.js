import React, { useEffect, useState } from 'react';
import Style from './Inscription.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../Redux/userdata';

const Inscrption = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const Userdata = useSelector((state) => state.user.Users);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogin = () => {
    // Vérification des données d'inscription
    const user = Userdata.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      // Utilisateur trouvé
      alert('Utilisateur connecté');
      dispatch(login(user.id));
      if (user.email === 'admin@gmail.com' && user.password === '2344YT') {
        // L'utilisateur connecté est admin, rediriger vers la page admin
        navigate('/admin');
      } else {
        // L'utilisateur connecté n'est pas admin, rediriger vers une autre page par exemple '/'
        navigate('/');
      }
    } else {
      // Aucun utilisateur correspondant trouvé, afficher une alerte rouge
      alert('Identifiants invalides');
    }
  };

  return (
    <div className={Style.Inscription}>
      <div className={Style.Inscription_partie_1}>
        <Link to={'/'}>
          {' '}
          <img
            src="data:image/png;base64,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"
            alt=""
          />
        </Link>
        <div className={Style.Inscription_partie_1_content}>
          <h1>S'identifier</h1>
          <div className={Style.form_fieldset_inscription}>
            {' '}
            <fieldset>
              <legend>Addresse Email</legend>
              <input
                type="email"
                required
                placeholder=" Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </fieldset>
            <fieldset>
              <legend>Mot de passe</legend>
              <input
                type="password"
                required
                placeholder="Mot de passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </fieldset>
          </div>
          <div>Mot de passe oublié?</div>
          <div className={Style.connexion}>
            <button onClick={handleLogin}> CONNEXION</button>
            <div>Ou connectez-vous en utilisant</div>
          </div>
        </div>
      </div>
      <div className={Style.Inscription_partie_2}>
        {' '}
        <div className={Style.Inscription_partie_2_content}>
          <h2>Vous n'avez pas encore de compte?</h2>
          <div className={Style.Inscription_partie_2_text}>
            Inscrivez-vous en simple clic et explorez immédiatement nos services
          </div>
          <div className={Style.Inscription_partie_2_buton}>
            <Link to={'/connexion'}>
              {' '}
              <button>S'INSCRIRE</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inscrption;

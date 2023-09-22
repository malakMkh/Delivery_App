import React, { useEffect, useState } from 'react';
import Style from './Header.module.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../../Redux/userdata';

const NavBar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth); // État pour stocker la largeur de la fenêtre
  const [showSidebar, setShowSidebar] = useState(false);
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const loggedInEmail = useSelector((state) => state.user.loggedInEmail);
  const userdata = useSelector((state) => state.user.Users);
  const loggedInUser = userdata.find((user) => user.id === loggedInEmail);
  console.log(loggedInEmail);

  // Récupérez l'email de l'utilisateur connecté
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout()); // Dispatch l'action pour déconnecter l'utilisateur
  };
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const [sidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };
  const closeSidebar = () => {
    setShowSidebar(false);
  };
  useEffect(() => {
    const storedIsLoggedIn = localStorage.getItem('isLoggedIn');
    const storedLoggedInEmail = localStorage.getItem('loggedInEmail');

    if (storedIsLoggedIn && storedLoggedInEmail) {
      dispatch(login(storedLoggedInEmail)); // Envoyez loggedInEmail avec l'action
    }
  }, [dispatch]);

  useEffect(() => {
    if (isLoggedIn && loggedInEmail) {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('loggedInEmail', loggedInEmail); // Stockez l'email ou d'autres informations pertinentes
      dispatch(login(loggedInEmail));
    } else {
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('loggedInEmail');
    }
  }, [isLoggedIn, loggedInEmail, dispatch]);

  return (
    <nav className={`${Style.navbar}`}>
      {windowWidth < 1120 && (
        <div
          className={Style.icon}
          onClick={() => setShowSidebar(!showSidebar)}
        >
          &#9776;
        </div>
      )}
      <img
        className={Style.logo}
        src="https://hezli.tn/static/media/YellowLogo.d289153b718ec79bcef3.png"
        alt="Yellow Logo"
      />

      {windowWidth > 1120 ? (
        <div className={Style.menu}>
          <ul>
            <li>
              <Link to="/" className={Style.navLink}>
                ACCUEIL
              </Link>
            </li>
            <li>
              <Link to="/apropos" className={Style.navLink}>
                A PROPOS DE NOUS
              </Link>
            </li>

            <li>
              <Link to="/service" className={Style.navLink}>
                NOS SERVICES
              </Link>
            </li>
            <li>
              <Link to="/admin" className={Style.navLink}>
                CONTACT
              </Link>
            </li>
            <li>
              <Link to="/estimation" className={Style.navLink}>
                OBTENIR UNE ESTIMATION
              </Link>
            </li>
            <li>
              <Link to="" className={Style.navLink}>
                DEVENIR UN PARTENAIRE
              </Link>
            </li>
            {/* ... Autres éléments de la liste ... */}
          </ul>

          <div className={Style.language_selector}>
            <select className={Style.js_language_selector}>
              <option value="http://begrowingfamilies/fr-be">Fr</option>
              <option value="http://begrowingfamilies/nl-be">Nl</option>
            </select>
          </div>
        </div>
      ) : (
        // Affiche la barre latérale si showSidebar est vrai
        showSidebar && (
          <div
            className={`${Style.sidebar} ${showSidebar ? '' : Style.hidden}`}
          >
            <i
              className={`fas fa-times ${Style.icon_x}`}
              onClick={closeSidebar}
            />
            <ul>
              <li>
                <Link to="/" className={Style.navLink}>
                  ACCUEIL
                </Link>
              </li>
              <li>
                <Link to="/apropos" className={Style.navLink}>
                  A PROPOS DE NOUS
                </Link>
              </li>

              <li>
                <Link to="/service" className={Style.navLink}>
                  NOS SERVICES
                </Link>
              </li>
              <li>
                <Link to="" className={Style.navLink}>
                  CONTACT
                </Link>
              </li>
              <li>
                <Link to="/estimation" className={Style.navLink}>
                  OBTENIR UNE ESTIMATION
                </Link>
              </li>
              <li>
                <Link to="" className={Style.navLink}>
                  DEVENIR UN PARTENAIRE
                </Link>
              </li>
              {/* ... Autres éléments de la liste ... */}
            </ul>
            <div className={Style.language_selector}>
              <select className={Style.js_language_selector}>
                <option value="http://begrowingfamilies/fr-be">Fr</option>
                <option value="http://begrowingfamilies/nl-be">Nl</option>
              </select>
            </div>
          </div>
        )
      )}
      {isLoggedIn ? (
        <div className={Style.profile_menu}>
          <div className={Style.profile_header}>
            <i className={`fas fa-user-circle ${Style.icon_profile}`} />
            <span className={Style.profile}>
              {loggedInUser ? loggedInUser.prenom : 'Utilisateur inconnu'}
            </span>
          </div>
          <div className={Style.dropdown_content}>
            <Link to={`/updateprofile/${loggedInEmail}`}>Modifier Profile</Link>
            <Link to="/history">Historique de commandes</Link>
            <Link onClick={handleLogout}>Déconnexion</Link>
          </div>
        </div>
      ) : (
        <div className={Style.menu}>
          <Link to="/inscription">
            {' '}
            <button className={Style.btn_sn}>Connexion</button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;

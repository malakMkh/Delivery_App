import React, { useEffect } from 'react';
import Style from './Admin.module.css';
import 'boxicons/css/boxicons.min.css';
import { Link } from 'react-router-dom';
import Chart from 'react-google-charts';
import { logout } from '../../Redux/userdata';
import { useDispatch, useSelector } from 'react-redux';
const Admin = () => {
  const Objetdata = useSelector((state) => state.orders);
  const objetQuantiteMap = {};

  // Parcourir chaque élément de Objetdata
  for (let j = 0; j < Objetdata.length; j++) {
    const ordre = Objetdata[j];
    const { Data_o } = ordre; // Accédez à Data_o à partir de chaque élément de Objetdata

    // Parcourir les tableaux objetList et quantities dans Data_o
    if (Data_o[0].objetList.length === Data_o[0].quantities.length) {
      for (let i = 0; i < Data_o[0].objetList.length; i++) {
        const obj = Data_o[0].objetList[i];
        const qty = Data_o[0].quantities[i].slice(0, -1);

        // Parcourir les éléments du tableau obj
        for (let k = 0; k < obj.length; k++) {
          const objet = obj[k];
          const quatite = qty[k];
          console.log(objet);
          console.log(quatite);

          // Vérifier si l'objet existe déjà dans objetQuantiteMap
          if (objetQuantiteMap[objet]) {
            objetQuantiteMap[objet] += parseFloat(quatite);
          } else {
            objetQuantiteMap[objet] = parseFloat(quatite);
          }
        }
      }
    }
  }

  console.log(objetQuantiteMap);
  const pieData = [['Objet', 'Quantité']];
  Object.entries(objetQuantiteMap).forEach(([objet, quatite]) => {
    pieData.push([objet, quatite]);
  });
  const pieOptions = {
    title: 'Objets les plus demandés',
    pieHole: 0.4,
  };
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout()); // Dispatch l'action pour déconnecter l'utilisateur
  };

  const nombreDesOrdres = Objetdata.length;
  const users = useSelector((state) => state.user.Users);
  const nombreDesUsers = users.length;

  const sommeTotaleDesObjets = (objetData) => {
    let somme = 0;

    for (let i = 0; i < objetData.length; i++) {
      const objet = objetData[i];

      // Assurez-vous que chaque objet a une propriété "total" valide
      if (objet && typeof objet.totale === 'number') {
        somme += objet.totale;
      }
    }

    return somme;
  };
  // Utilisez la fonction pour calculer la somme totale des objets dans Objetdata

  const somme = sommeTotaleDesObjets(Objetdata);

  useEffect(() => {
    const handleSideMenuClick = (e) => {
      const li = e.currentTarget.parentElement;
      const allSideMenu = document.querySelectorAll(
        `.${Style.sidebar} .${Style['side-menu']}.top li a `
      );
      allSideMenu.forEach((item) => {
        item.parentElement.classList.remove(Style.marche);
      });
      li.classList.add(Style.marche);
    };

    const handleMenuBarClick = () => {
      const sidebar = document.querySelector(`.${Style.sidebar}`);
      sidebar.classList.toggle(Style.hide);
    };

    const handleSearchButtonClick = (e) => {
      if (window.innerWidth < 576) {
        e.preventDefault();
        const searchForm = document.querySelector(`.${Style['form-input']}`);
        searchForm.classList.toggle(Style.show);
        const searchButtonIcon = document.querySelector(
          `.${Style['search-btn']} i.bx`
        );
        if (searchForm.classList.contains(Style.show)) {
          searchButtonIcon.classList.replace('bx-search', 'bx-x');
        } else {
          searchButtonIcon.classList.replace('bx-x', 'bx-search');
        }
      }
    };

    const handleWindowResize = () => {
      if (window.innerWidth > 576) {
        const searchForm = document.querySelector(`.${Style['form-input']}`);
        const searchButtonIcon = document.querySelector(
          `.${Style['search-btn']} i.bx`
        );
        searchButtonIcon.classList.replace('bx-x', 'bx-search');
        searchForm.classList.remove(Style.show);
      }
    };

    const allSideMenu = document.querySelectorAll(
      `.${Style.sidebar} .${Style['side-menu']} li a`
    );
    const menuBar = document.querySelector(`.${Style.content} nav .bx.bx-menu`);
    const searchButton = document.querySelector(
      `.${Style['form-input']} button`
    );

    allSideMenu.forEach((item) => {
      item.addEventListener('click', handleSideMenuClick);
    });

    menuBar.addEventListener('click', handleMenuBarClick);

    searchButton.addEventListener('click', handleSearchButtonClick);

    window.addEventListener('resize', handleWindowResize);

    // Nettoyer les écouteurs d'événements lorsque le composant est démonté
    return () => {
      allSideMenu.forEach((item) => {
        item.removeEventListener('click', handleSideMenuClick);
      });
      menuBar.removeEventListener('click', handleMenuBarClick);
      searchButton.removeEventListener('click', handleSearchButtonClick);
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []); // Les crochets vides [] signifient que cet effet ne doit s'exécuter qu'une fois

  return (
    <div>
      {/* <!-- SIDEBAR --> */}
      <section className={Style.sidebar}>
        <a href="#" className={Style.brand}>
          <img
            className={Style.logo}
            src="https://hezli.tn/static/media/YellowLogo.d289153b718ec79bcef3.png"
            alt="Yellow Logo"
          />
        </a>
        <ul className={`${Style['side-menu']} ${Style.top}`}>
          <li className={Style.marche}>
            <a href="#">
              <i className={`bx bxs-dashboard ${Style['bx']}`}></i>

              <span className={Style.text}>Tableau de bord</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className={`bx bxs-shopping-bag-alt ${Style['bx']}`}></i>

              <span className={Style.text}>Mon magasin</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className={`bx bxs-doughnut-chart ${Style['bx']}`}></i>

              <span className={Style.text}>Analytique</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className={`bx bxs-message-dots ${Style['bx']}`}></i>

              <span className={Style.text}>Message</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className={`bx bxs-user ${Style.bx}`}></i>

              <span className={Style.text}>Équipe</span>
            </a>
          </li>
        </ul>
        <ul className={`${Style['side-menu']}`}>
          <li>
            <a href="#">
              <i className={`bx bxs-cog ${Style['bx']}`}></i>
              <span className={Style.text}>Paramètres</span>
            </a>
          </li>
          <li>
            <a href="#" class="logout">
              <i className={`bx bxs-log-out-circle ${Style['bx']}`}></i>

              <Link to={'/'}>
                {' '}
                <span className={Style.text} onClick={handleLogout}>
                  Se déconnecter
                </span>
              </Link>
            </a>
          </li>
        </ul>
      </section>
      {/* <!-- SIDEBAR --> */}

      {/* <!-- CONTENT --> */}
      <section className={Style.content}>
        {/* <!-- NAVBAR --> */}
        <nav>
          <i className={`bx bx-menu ${Style['bx']}`}></i>

          <a href="#" className={`${Style['nav-link']} `}>
            Categories
          </a>
          <form action="#">
            <div className={`${Style['form-input']} `}>
              <input type="search" placeholder="chercher ..." />
              <button type="submit" className={`${Style['search-btn']} `}>
                <i className={`bx bx-search ${Style['bx']}`}></i>
              </button>
            </div>
          </form>

          <a href="#" className={Style.notification}>
            <i className={`bx bxs-bell ${Style['bx']}`}></i>

            <span className={Style.num}>1</span>
          </a>
          <span className={Style.text}>Admin</span>
          <a href="#" className={Style.profile}>
            <img src="https://img.freepik.com/photos-gratuite/portrait-taille-beau-homme-serieux-mal-rase-garde-mains-jointes-vetu-chemise-bleu-fonce-parle-interlocuteur-se-tient-contre-mur-blanc-freelance-homme-confiant_273609-16320.jpg?size=626&ext=jpg&ga=GA1.2.2000279754.1682814533&semt=sph" />
          </a>
        </nav>
        {/* <!-- NAVBAR --> */}

        {/* <!-- MAIN --> */}
        <main>
          <div className={`${Style['head-title']} `}>
            <div className={Style.left}>
              <h1>Tableau de bord</h1>
              <ul className={Style.breadcrumb}>
                <li>
                  <a className={Style.marche} href="#">
                    Hezli
                  </a>
                </li>
              </ul>
            </div>
            <a href="#" className={`${Style['btn-download']} `}>
              <i className={`bx bxs-cloud-download ${Style['bx']}`}></i>

              <span className={Style.text}>Télécharger le PDF</span>
            </a>
          </div>

          <ul className={`${Style['box-info']} `}>
            <li>
              <i className={`bx bxs-calendar-check ${Style['bx']}`}></i>

              <span className={Style.text}>
                <h3>{nombreDesOrdres}</h3>
                <p> Orders</p>
              </span>
            </li>
            <li>
              <i className={`bx  bxs-group ${Style['bx']}`}></i>

              <span className={Style.text}>
                <h3>{nombreDesUsers}</h3>
                <p>Clients</p>
              </span>
            </li>
            <li>
              <i className={`bx  bxs-dollar-circle ${Style['bx']}`}></i>

              <span className={Style.text}>
                <h3>€{somme}</h3>
                <p>Totale de orders</p>
              </span>
            </li>
          </ul>

          <div className={`${Style['table-data']} `}>
            <div className={Style.order}>
              <div className={Style.head}>
                <h3>dernieres Orders</h3>
                <i className={`bx  bx-search ${Style['bx']}`}></i>

                <i className={`bx  bx-filter ${Style['bx']}`}></i>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>Client</th>
                    <th>Date de l'ordre</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {Objetdata.map((obj, index) => (
                    <tr key={index}>
                      <td>
                        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" />
                        <p>{obj.userId}</p>
                      </td>
                      <td>{obj.Data[0].dateValue}</td>
                      <td>
                        <span
                          className={`${Style['status']} ${Style.completed}`}
                        >
                          en cours
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className={Style.todo}>
              <div className={Style.head}>
                <h3>charte</h3>
                <i className={`bx bx-plus ${Style['bx']}`}></i>
                <i className={`bx bx-filter ${Style['bx']}`}></i>
              </div>
              <Chart
                width={'600px'}
                height={'320px'}
                chartType="PieChart"
                loader={<div>Loading Chart</div>}
                data={pieData}
                options={pieOptions}
                rootProps={{ 'data-testid': '3' }}
              />
            </div>
          </div>
        </main>
        {/* <!-- MAIN --> */}
      </section>
      {/* <!-- CONTENT --> */}
    </div>
  );
};

export default Admin;

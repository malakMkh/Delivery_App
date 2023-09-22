import React, { useState } from 'react';
import Style from './style.module.css';

import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';
import Chekoutstep from '../Part1/Chekoutstep';
import NavBar from '../Part1/NavBar';
import { useDispatch } from 'react-redux';
import { addData_a } from '../../Redux/Arivee';
import Footer from '../Acceuill/Footer';
/*-----------------------------------------------------------------------------------------------------*/

const Arrivée = () => {
  const currentStep = 2;
  /*--------------script------------------ */
  const dispatch = useDispatch();
  /*--------------------------conditional form-------------------------------- */
  /*--------------------------condition 1-------------------------------- */
  const [adresseArrivee, setAdresseArrivee] = useState('');
  const [showConditionals, setShowConditionals] = useState(false);

  const handleInputChange = (e) => {
    const adresse = e.target.value;
    setAdresseArrivee(adresse);
  };
  const handleKeyPress = (e) => {
    if (adresseArrivee !== '' && e.key === 'Enter') {
      setShowConditionals(true);
    } else if (adresseArrivee === '') {
      setShowConditionals(false);
    }
  };

  /*------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
  const [iconPosition, setIconPosition] = useState('right');
  /*--------------------------condition 2-------------------------------- */

  const [isAtTruck, setIsAtTruck] = useState('chez moi');
  const [showisAtTruck, setShowIsAtTruck] = useState(true);
  const [iselevator, setIselevator] = useState('Sans Ascenceur');
  const Ascensseur = () => {
    if (iselevator === 'Sans Ascenseur') {
      setIselevator('Avec Ascenseur');
    } else {
      setIselevator('Sans Ascenseur');
    }
  };
  // Fonction qui met à jour l'état pour indiquer que l'utilisateur n'est plus au camion
  const AuCamion = () => {
    setIsAtTruck('au pied de camion');
    setIconPosition('left');
    setShowIsAtTruck(false);
  };

  // Fonction qui met à jour l'état pour indiquer que l'utilisateur est de retour chez lui
  const ChezMoi = () => {
    setIsAtTruck('chez moi');
    setIconPosition('right');
    setShowIsAtTruck(true);
  };

  /*--------------------------condition 3-------------------------------- */
  const [quantities, setQuantities] = useState([0]);

  const handleDecreaseQuantity = (index) => {
    if (quantities[index] > 0) {
      const newQuantities = [...quantities];
      newQuantities[index] = newQuantities[index] - 1;
      setQuantities(newQuantities);
    }
  };

  const handleIncreaseQuantity = (index) => {
    const newQuantities = [...quantities];
    newQuantities[index] = newQuantities[index] + 1;
    setQuantities(newQuantities);
  };
  /*---------------------------------------------------------------------- */
  const [showAscensseur, setShowAscensseur] = useState(false);

  const handlesetShowAscensseur = (index) => {
    const newQuantities = [...quantities];
    if (newQuantities[index] === 0) {
      setShowAscensseur(true);
    }
  };

  const handlesethideAscensseur = (index) => {
    const newQuantities = [...quantities];
    if (newQuantities[index] === 0) {
      setShowAscensseur(false);
    }
  };
  /*------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
  return (
    <div className={Style.centred_header}>
      <div className={Style.centred_container}>
        <NavBar />
        <div className={Style.container}>
          <Chekoutstep currentStep={currentStep} />
        </div>
        <div className={Style.form}>
          <div className={Style.form_header}>
            <h2>ARRIVÉE</h2>
            <i className={`fas fa-times ${Style.icon}`} />
          </div>{' '}
          <div className={Style.form_fields}>
            {/* -------------------input adresse d'arrivée---------------------------- */}
            <div className={Style.form_input}>
              <input
                type="text"
                placeholder="Adresse d'arrivée"
                required
                onChange={handleInputChange}
                onKeyDown={handleKeyPress}
              />{' '}
            </div>
            {/* ------------------------------------------Partie conditionnel---------------------------------------------------------------------------------------------------- */}
            {/* ------------------ mode de reception---------------------------- */}
            {/* ------------------condition n2----------------------------------- */}
            {showConditionals && (
              <>
                <div className={Style.form_switch_button}>
                  <div>
                    {' '}
                    <strong>Accès</strong>
                  </div>

                  <div className={Style.switch_button}>
                    <button
                      className={`${Style.left_button} ${
                        iconPosition === 'left' ? Style.active : ''
                      }`}
                      onClick={AuCamion}
                    >
                      <i className={`fas fa-check ${Style.check_icon}`} />
                      Au pied de camion
                    </button>
                    <button
                      className={`${Style.right_button} ${
                        iconPosition === 'right' ? Style.active : ''
                      }`}
                      onClick={ChezMoi}
                    >
                      <i className={`fas fa-check ${Style.check_icon}`} />
                      Chez moi
                    </button>
                  </div>
                </div>
                {/* ------------------ Sans/avec ascenceur ---------------------------- */}
                {showisAtTruck && (
                  <div className={Style.form_conter}>
                    {quantities.map((quantity, index) => (
                      <div className={Style.counter} key={index}>
                        <button
                          className={Style.minus}
                          onClick={() => {
                            handleDecreaseQuantity(index);
                            handlesethideAscensseur(index); // Utiliser l'index ici
                          }}
                        >
                          <i className="fas fa-minus" />
                        </button>
                        <div className={Style.count}>
                          <span className={Style.count}>
                            {quantity === 0 ? 'RDC' : ` ${quantity}`}
                          </span>
                        </div>
                        <button
                          className={Style.plus}
                          onClick={() => {
                            handleIncreaseQuantity(index);
                            handlesetShowAscensseur(index); // Utiliser l'index ici
                          }}
                        >
                          <i className="fas fa-plus" />
                        </button>
                      </div>
                    ))}

                    {showAscensseur && (
                      <div className={Style.ascen}>
                        <label className={Style.toggle_switch}>
                          <input type="checkbox" onClick={Ascensseur} />
                          <span className={Style.slider}></span>
                        </label>
                        <div>Avec ascenseur</div>
                      </div>
                    )}
                  </div>
                )}
                {/* ------------------ Indication------------------------------------------------------------------------------------------ */}
                <div className={Style.form_indication}>
                  <i
                    className={`fas fa-info-circle ${Style.indication_icon}`}
                  />
                  <div className={Style.indication}>
                    Emballez vos objets,nos chauffeurs les transportent avec
                    soin dans la camion,protégés par sangles et couvertures.{' '}
                  </div>
                </div>
                {/* ------------------ Button--------------------------------------------------------------------------------------------------------------- */}
                <div className={Style.button_warpper}>
                  <Link to="/objets">
                    {' '}
                    <button
                      className={Style.form_button}
                      onClick={() => {
                        dispatch(
                          addData_a({
                            adresseArrivee: adresseArrivee,
                            isAtTruck: isAtTruck,
                            quantities: quantities,
                            iselevator: iselevator,
                          })
                        );
                      }}
                    >
                      <strong>saisir vos objets</strong>
                    </button>
                  </Link>
                </div>
              </>
            )}
          </div>{' '}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Arrivée;

import React, { useEffect, useState } from 'react';
import Style from './style.module.css';
import Chekoutstep from '../Part1/Chekoutstep';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';
import NavBar from '../Part1/NavBar';
import { useDispatch, useSelector } from 'react-redux';
import { addData } from '../../Redux/Depart';
import Footer from '../Acceuill/Footer';

const Depart = () => {
  const currentStep = 1;
  /*------------------------------Redux------------------------------------------------------- */
  const dispatch = useDispatch();

  /*-----------------------------------------script----------------------------------------------------------------------------------------------------- */
  /**--------------------------condition 1------------------------------------------------------------- */
  //variable d'etat et leur foction de mise a jour
  const [adresseDepart, setAdresseDepart] = useState('');
  const [showConditionals, setShowConditionals] = useState(false);
  //fonctions suivantes gèrent les changements dans les champs de saisie
  const handleInputChange = (e) => {
    const adresse = e.target.value;
    setAdresseDepart(adresse);
  };

  const handleKeyPress = (e) => {
    if (adresseDepart !== '' && e.key === 'Enter') {
      setShowConditionals(true);
    } else if (adresseDepart === '') {
      setShowConditionals(false);
    }
  };

  /*---------------------------------------------------------------------------------------------------- */
  /*---------------------------------------------Condition 2------------------------------------------------------- */
  const [dateValue, setDateValue] = useState('');
  const [hourValue, setHourValue] = useState('');
  const [minuteValue, setMinuteValue] = useState('');
  const [showSwitch, setShowSwitch] = useState(false);
  const [option, setOption] = useState('');

  const handleDateChange = (e) => {
    setDateValue(e.target.value);
  };

  const handleHourChange = (e) => {
    setHourValue(e.target.value);
  };

  const handleMinuteChange = (e) => {
    setMinuteValue(e.target.value);
    console.log(e.target.value);
  };

  const updateSwitchVisibility = () => {
    if ((dateValue && hourValue && minuteValue) || option) {
      setShowSwitch(true);
    } else {
      setShowSwitch(false);
    }
  };

  useEffect(() => {
    updateSwitchVisibility();
  }, [dateValue, hourValue, minuteValue, option]);
  /*------------------------------------------------------------------------------------------------------------------------------ */
  // État qui contrôle si l'utilisateur est au camion ou non, initialisé à true (au camion)
  const [isAtTruck, setIsAtTruck] = useState('chez moi');
  const [showisAtTruck, setShowIsAtTruck] = useState(true);
  const [iselevator, setIselevator] = useState('Sans Ascenseur'); // Correction ici

  const Ascenseur = () => {
    // Correction de l'orthographe de "Ascenseur"
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

  // État pour gérer une liste de quantités initialisé avec un élément contenant la valeur 0
  const [quantities, setQuantities] = useState([0]);

  // Fonction pour diminuer la quantité à l'index donné dans la liste des quantités
  const handleDecreaseQuantity = () => {
    if (quantities[0] > 0) {
      const newQuantities = [...quantities];
      newQuantities[0] = newQuantities[0] - 1;
      setQuantities(newQuantities);
    }
  };

  // Fonction pour augmenter la quantité à l'index donné dans la liste des quantités
  const handleIncreaseQuantity = () => {
    const newQuantities = [...quantities];
    newQuantities[0] = newQuantities[0] + 1;
    setQuantities(newQuantities);
  };

  /*---------------------------------------------------------------------- */
  /*------------------------------------condition 3-------------------------------------------------------------------- */
  const [showAscensseur, setShowAscensseur] = useState(false);

  const handlesetShowAscensseur = () => {
    const newQuantities = [...quantities];
    if (newQuantities[0] === 0) {
      setShowAscensseur(true);
    }
  };

  const handlesethideAscensseur = () => {
    const newQuantities = [...quantities];
    if (newQuantities[0] === 0) {
      setShowAscensseur(false);
    }
  };

  /*--------------------------------------------------------------------------------------------------------------------------------- */
  const [iconPosition, setIconPosition] = useState('right');
  /*----------------------------------condition 4------------------------------------------- */
  const generateHourOptions = () => {
    const options = [];
    for (let hour = 0; hour <= 23; hour++) {
      options.push(
        <option key={hour} value={hour}>
          {hour.toString().padStart(2, '0')}
        </option>
      );
    }
    return options;
  };

  const generateMinuteOptions = () => {
    const options = [];
    for (let minute = 0; minute <= 59; minute++) {
      options.push(
        <option key={minute} value={minute}>
          {minute.toString().padStart(2, '0')}
        </option>
      );
    }
    return options;
  };

  const handleToggle = () => {
    console.log('Toggle button clicked');
    setOption(!option);
    if (!option) {
      const now = new Date();
      const year = now.getFullYear();
      const month = (now.getMonth() + 1).toString().padStart(2, '0');
      const day = now.getDate().toString().padStart(2, '0');
      const hour = (now.getHours() + 1).toString().padStart(2, '0'); // Add one hour
      const minute = now.getMinutes().toString().padStart(2, '0');

      const formattedDate = `${year}-${month}-${day}`;

      console.log('Setting date:', formattedDate);
      setDateValue(formattedDate);

      console.log('Setting hour:', hour);
      setHourValue(hour);

      console.log('Setting minute:', minute);
      setMinuteValue(minute);
    } else {
      setDateValue('');
      setHourValue('');
      setMinuteValue('');
    }
  };

  return (
    <div className={Style.centred_header}>
      <div className={Style.centred_container}>
        <NavBar />

        <div className={Style.container}>
          <Chekoutstep currentStep={currentStep} />
        </div>
        <div className={Style.form_container}>
          <div className={Style.form}>
            <div className={Style.form_header}>
              <h2>DÉPART</h2>
              <i className={`fas fa-times ${Style.icon}`} />
            </div>
            <div className={Style.form_fields}>
              <div className={Style.form_input}>
                <input
                  type="text"
                  placeholder="Adresse de départ"
                  required
                  onChange={handleInputChange}
                  onKeyDown={handleKeyPress}
                />
              </div>
              {showConditionals && (
                <>
                  <div className={Style.form_date}>
                    <input
                      type="date"
                      id="start"
                      name="trip-start"
                      min={new Date().toISOString().split('T')[0]}
                      value={dateValue}
                      onChange={handleDateChange}
                    />
                    <div className={Style.time}>
                      <select
                        id="hourInput"
                        name="Hour"
                        onChange={handleHourChange}
                        value={hourValue}
                      >
                        <option value="">Heure</option>
                        {generateHourOptions()}
                      </select>
                      <select
                        id="minuteInput"
                        name="Minute"
                        onChange={handleMinuteChange}
                        value={minuteValue}
                      >
                        <option value="">Minute</option>
                        {generateMinuteOptions()}
                      </select>
                    </div>
                  </div>
                  <div className={Style.form_switch}>
                    <label className={Style.toggle_switch}>
                      <input type="checkbox" onChange={handleToggle} />
                      <span className={Style.slider}></span>
                    </label>
                    <div>Au plus tôt (dans 1h)</div>
                  </div>
                  {showSwitch && (
                    <>
                      <div className={Style.form_switch_button}>
                        <div>
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
                      {showisAtTruck && (
                        <div className={Style.form_conter}>
                          {quantities.map((quantity) => (
                            <div className={Style.counter} key={0}>
                              <button
                                className={Style.minus}
                                onClick={() => {
                                  handleDecreaseQuantity(0);
                                  handlesethideAscensseur(0); // Utiliser l'0 ici
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
                                  handleIncreaseQuantity(0);
                                  handlesetShowAscensseur(0); // Utiliser l'index ici
                                }}
                              >
                                <i className="fas fa-plus" />
                              </button>
                            </div>
                          ))}

                          {showAscensseur && (
                            <div className={Style.ascen}>
                              <label className={Style.toggle_switch}>
                                <input type="checkbox" onChange={Ascenseur} />
                                <span className={Style.slider}></span>
                              </label>
                              <div>Avec ascenseur</div>
                            </div>
                          )}
                        </div>
                      )}
                    </>
                  )}
                  <div className={Style.form_indication}>
                    <i
                      className={`fas fa-info-circle ${Style.indication_icon}`}
                    />
                    <div className={Style.indication}>
                      Vous pouvez choisir "Au plus tôt" pour une prise en charge
                      dans l'heure, ou planifier une date et une heure
                      spécifique.
                    </div>
                  </div>
                  {showSwitch && (
                    <div className={Style.button_warpper}>
                      <Link to="/arrivé">
                        <button
                          className={Style.form_button}
                          onClick={() => {
                            dispatch(
                              addData({
                                adresseDepart: adresseDepart,
                                dateValue: dateValue,
                                hourValue: hourValue,
                                minuteValue: minuteValue,
                                isAtTruck: isAtTruck,
                                quantities: quantities,
                                iselevator: iselevator,
                              })
                            );
                          }}
                        >
                          <strong>saisir l'arrivé</strong>
                        </button>
                      </Link>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Depart;

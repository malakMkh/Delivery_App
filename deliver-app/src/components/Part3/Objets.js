import React, { useState } from 'react';
import Style from './Login.module.css';
import Chekoutstep from '../Part1/Chekoutstep';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';
import NavBar from '../Part1/NavBar';
import { useDispatch } from 'react-redux';
import { addData_o } from '../../Redux/objet';
import { Objet } from './dataobjet';
import Footer from '../Acceuill/Footer';
const Objets = () => {
  /*----------------------------script------------------------------ */
  const dispatch = useDispatch();
  /*------------------------------condition1------------------------------------------------------------------------------------------- */
  const [objectName, setObjectName] = useState('');
  const [showConditionals, setShowConditionals] = useState(false);
  const [objetList, setObjetList] = useState([]);

  const handleAddToList = () => {
    if (objectName !== '') {
      setQuantities([...quantities, 1]);
      setObjectName(''); // Clear the input after adding to the list
    }
  };

  const [quantities, setQuantities] = useState([1]);

  // Fonction pour diminuer la quantité
  const handleDecreaseQuantity = (index) => {
    if (quantities[index] > 0) {
      const newQuantities = [...quantities];
      newQuantities[index] = newQuantities[index] - 1;
      if (newQuantities[index] <= 0) {
        // Si la quantité atteint 0 ou devient négative
        const updatedObjetList = [...objetList];
        updatedObjetList.splice(index, 1);
        newQuantities.splice(index, 1); // Supprime l'objet de la liste
        setObjetList(updatedObjetList);
      }

      setQuantities(newQuantities);
    }
  };

  // Fonction pour augmenter la quantité
  const handleIncreaseQuantity = (index) => {
    const newQuantities = [...quantities];
    newQuantities[index] = newQuantities[index] + 1;
    setQuantities(newQuantities);
  };

  const [searchResults, setSearchResults] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');
  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setObjectName(inputValue);
    const filteredResults = Objet.objet.filter((item) =>
      item.name.toLowerCase().includes(inputValue.toLowerCase())
    );

    if (filteredResults.length === 0) {
      setSearchResults([]);
      setErrorMsg('Aucun résultat trouvé');
    } else {
      setSearchResults(filteredResults);
      setErrorMsg('');
    }
  };
  const handleItemSelect = (itemName) => {
    setObjectName(itemName);
    setSearchResults([]);
    setObjetList([...objetList, itemName]);
    setShowConditionals(true);
    handleAddToList();
  };
  /*--------------------------------------------------------------------------------------------------------------------------------- */
  const currentStep = 3;
  return (
    <div className={Style.centred_header}>
      <div className={Style.centred_container}>
        <NavBar />
        <div className={Style.container}>
          <Chekoutstep currentStep={currentStep} />
        </div>
        <div className={Style.form}>
          <div className={Style.form_header}>
            <i className={`fas fa-arrow-left ${Style.icon}`} />
            <h2>VOS OBJETS</h2>
          </div>{' '}
          <div className={Style.form_fields}>
            {/* ------------------------------------------------------------------------------------ */}
            <div className={Style.form_input}>
              <input
                type="text"
                placeholder="Ex:1 Table"
                required
                value={objectName}
                onChange={handleInputChange}
              />{' '}
              {searchResults.length > 0 && objectName.length > 0 && (
                <ul>
                  {searchResults.map((item, index) => (
                    <li key={index} onClick={() => handleItemSelect(item.name)}>
                      {item.name}
                    </li>
                  ))}
                </ul>
              )}
              {errorMsg && <p className={Style.errormsg}>{errorMsg}</p>}
            </div>
            {/*---------------------------------condition 5-------------------------------------------------------------------- */}
            {showConditionals && (
              <div>
                {objetList.map((objet, index) => (
                  <div className={Style.Objet_quantity} key={index}>
                    <div className={Style.Objet_name}>{objet}</div>
                    <div className={Style.form_counter}>
                      <div className={Style.counter}>
                        <button
                          className={Style.minus}
                          onClick={() => handleDecreaseQuantity(index)}
                        >
                          <i className="fas fa-minus" />
                        </button>
                        <div className={Style.count}>
                          <span className={Style.count}>
                            {quantities[index]}
                          </span>
                        </div>
                        <button
                          className={Style.plus}
                          onClick={() => handleIncreaseQuantity(index)}
                        >
                          <i className="fas fa-plus" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* ---------------------------------------------------------------------------------------------------------------------------------------------- */}
            <div className={Style.form_indication}>
              <i className={`fas fa-info-circle ${Style.indication_icon}`} />
              <div className={Style.indication}>
                Pour une facturation précise, choisissez un objet similaire dans
                la recherche. Si l'objet n'est pas trouvé, sélectionnez une
                taille similaire dans la liste.{' '}
              </div>
            </div>
            <div className={Style.button_warpper}>
              <Link to="/option">
                <button
                  className={Style.form_button}
                  onClick={() => {
                    dispatch(
                      addData_o({
                        objetList: objetList,
                        quantities: quantities,
                      })
                    );
                  }}
                >
                  <strong>continuer</strong>
                </button>
              </Link>
            </div>
          </div>{' '}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Objets;

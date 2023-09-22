import React, { useEffect, useState } from 'react';

import Style from './Login.module.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import Chekoutstep from '../Part1/Chekoutstep';
import NavBar from '../Part1/NavBar';
import axios from 'axios';
import { useSelector } from 'react-redux';
import Footer from '../Acceuill/Footer';

const Payement = () => {
  const Data = useSelector((state) => state.depart.Data_d);
  const Data_a = useSelector((state) => state.arrivee.Data_a);
  const Data_o = useSelector((state) => state.objet.Data_o);
  const totale = useSelector((state) => state.estimation.totale);
  // const payement = useSelector((state) => state.estimation.payement);
  const totaleNumber = parseFloat(totale);
  // const dispatch = useDispatch();
  const loggedInEmail = useSelector((state) => state.user.loggedInEmail);

  const userId = loggedInEmail;
  const handleSubmit = async (e) => {
    try {
      await axios.post('http://localhost:3001/payement', {
        Data,
        Data_a,
        Data_o,
        totale: totaleNumber,
        payement,
        userId,
      });
      console.log('Commande créée avec succès');
      alert('Commande enregistrer ');
    } catch (error) {
      console.error('Erreur lors de la création de la commande', error);
    }
  };
  function verifierChampsVides() {
    const inputs = document.querySelectorAll('input'); // Sélectionnez tous les éléments <input> dans le formulaire

    for (const input of inputs) {
      if (input.value.trim() === '') {
        alert('Veuillez remplir tous les champs obligatoires.');
        return false; // Empêche la soumission du formulaire
      }
    }

    // Si tous les champs sont remplis, vous pouvez poursuivre la soumission du formulaire
    return true;
  }
  const currentStep = 5;
  const [selectedPaymentOption, setSelectedPaymentOption] = useState(false);
  const [payement, setPayement] = useState('');
  useEffect(() => {
    if (selectedPaymentOption) {
      setPayement('payé');
    } else {
      setPayement('non payé');
    }
  }, [selectedPaymentOption]);
  console.log(payement);
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
            <h2>PAYEMENT</h2>
          </div>
          <div className={Style.form_fields}>
            <div className={Style.form_Mode}>Choisir le mode de Payement:</div>
            <div className={Style.form_Mode1}>
              {' '}
              <input
                type="radio"
                id="html"
                name="payment_option"
                value="HTML"
                onChange={() => setSelectedPaymentOption(false)}
              />
              <label for="html">Payement a la livraison</label>
            </div>
            <div className={Style.form_Mode1}>
              {' '}
              <input
                type="radio"
                id="html"
                name="payment_option"
                value="HTML"
                onChange={() => setSelectedPaymentOption(true)}
              />
              <label for="html">Paypal</label>
              <br />
            </div>
            <div className={Style.form_Mode1}>
              {' '}
              <input
                type="radio"
                id="html"
                name="payment_option"
                value="HTML"
                onChange={() => setSelectedPaymentOption(true)}
              />
              <label for="html">Carte de crédit</label>
              <br />
            </div>
            {/* -------------------------------condition------------------------------------ */}
            {selectedPaymentOption && (
              <form>
                <div className={Style.form_Mode_input}>
                  <p> Numéro de carte </p>
                  <input type="text" required />
                </div>
                <div className={Style.form_Mode1_input}>
                  <div className={Style.form_Mode_input}>
                    <p> Date dd'expiration</p>
                    <input
                      type="date"
                      id="start"
                      name="trip-start"
                      min={new Date().toISOString().split('T')[0]}
                      required
                    />
                  </div>
                  <div className={Style.form_Mode_input}>
                    <p> Code</p>
                    <input type="password" required />
                  </div>
                </div>
                <div className={Style.form_Mode_input}>
                  <p> Nom de carte</p>
                  <input type="text" required />
                </div>
              </form>
            )}
            {/* ------------------------------------------------------------------------------------------------------- */}

            <div className={Style.form_Mode_button}>
              <button
                onClick={(e) => {
                  // dispatch(
                  //   addpayé({
                  //     payement: payement,
                  //   })
                  // );
                  e.preventDefault(); // Empêche la soumission par défaut du formulaire
                  if (verifierChampsVides()) {
                    // Vérifie les champs vides avant de soumettre
                    handleSubmit();
                  }
                }}
              >
                Confirmer
              </button>
            </div>
          </div>{' '}
        </div>{' '}
      </div>
      <Footer />
    </div>
  );
};

export default Payement;

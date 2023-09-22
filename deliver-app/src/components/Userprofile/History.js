import React from 'react';
import Style from './History.module.css';
import NavBar from '../Part1/NavBar';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import { Deleteobjet } from '../../Redux/order';

const History = () => {
  const Objetdata = useSelector((state) => state.orders);
  const loggedInEmail = useSelector((state) => state.user.loggedInEmail);
  const dispatch = useDispatch();
  console.log(Objetdata);
  const orderdata = Objetdata.filter((objet) => objet.userId === loggedInEmail);
  const handelDelete = (id) => {
    axios
      .delete('http://localhost:3001/delete/' + id)
      .then((res) => {
        dispatch(Deleteobjet({ id }));
        console.log(res);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className={Style.history_header}>
      <NavBar />
      <div className={Style.history}>
        <div className={Style.history_1}>
          <div className={Style.history_title}> Historique de commande </div>
          <div className={Style.history_table}>
            <table>
              <tr>
                <th>ID</th>
                <th>Départ</th>
                <th>Arrivée</th>
                <th>Colis</th>
                <th>Totale</th>
                <th>payé</th>
                <th>Action</th>
              </tr>
              {orderdata.map((obj, index) => (
                <tr key={index}>
                  <td>{obj.id}</td>
                  <td>{obj.Data[0].adresseDepart}</td>
                  <td>{obj.Data_a[0].adresseArrivee}</td>
                  <td>{[obj.Data_o[0].objetList]}</td>
                  <td>€{obj.totale}</td>
                  <td>{obj.payement}</td>
                  <td>
                    <button onClick={() => handelDelete(obj.id)}>
                      Annulée
                    </button>
                  </td>
                </tr>
              ))}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;

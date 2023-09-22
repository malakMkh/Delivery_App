import React, { useState } from 'react';
import Style from './History.module.css';
import NavBar from '../Part1/NavBar';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { UpdateUser, addUser } from '../../Redux/userdata';
const Updateprofile = () => {
  let { id } = useParams();

  const users = useSelector((state) => state.user.Users);
  const user = users.find((u) => u.id === id);
  console.log(user);
  const [prenom, setPrenom] = useState(user.prenom);
  const [nom, setNom] = useState(user.prenom);
  const [phone, setPhone] = useState(user.phone);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState(user.password);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handelUpdate = (e) => {
    e.preventDefault();
    axios
      .put('http://localhost:3001/update/' + id, {
        prenom,
        nom,
        phone,
        email,
        password,
      })
      .then((res) => {
        dispatch(UpdateUser(id, prenom, nom, phone, email, password));
        console.log(res);
        navigate('/');
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className={Style.history_header}>
      <NavBar />
      <div className={Style.update}>
        <div className={Style.update_1}>
          <div className={Style.update_title}>Mettre à jour votre profil </div>
          <div className={Style.form_content}>
            <div className={Style.form_fieldset}>
              {' '}
              <div className={Style.form_fieldset_top}>
                <fieldset>
                  <legend>Prénom</legend>
                  <input
                    type="text"
                    placeholder="Prénom "
                    onChange={(e) => setPrenom(e.target.value)}
                    value={prenom}
                    required
                  ></input>
                </fieldset>
                <fieldset>
                  <legend>Nom de famille</legend>
                  <input
                    type="text"
                    placeholder="Nom de famille"
                    onChange={(e) => setNom(e.target.value)}
                    value={nom}
                    required
                  ></input>
                </fieldset>
              </div>
              {/*  */}
              <fieldset>
                <legend>Numéro de téléphone</legend>
                <input
                  type="number"
                  placeholder="+216 "
                  onChange={(e) => setPhone(e.target.value)}
                  value={phone}
                  required
                ></input>
              </fieldset>
              <fieldset>
                <legend>Adresse e-mail</legend>
                <input
                  type="email"
                  placeholder="example@email.com"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
                ></input>
              </fieldset>
              {/* -------------- */}
              <div className={Style.form_fieldset_top}>
                <fieldset>
                  <legend>Mot de passe</legend>
                  <input
                    type="password"
                    placeholder="Mot de passe "
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    required
                  ></input>
                </fieldset>
                <fieldset>
                  <legend>Confirmez mot de passe</legend>
                  <input
                    type="password"
                    placeholder="Confirmez le mot de passe"
                  ></input>
                </fieldset>
              </div>
            </div>

            <div className={Style.forgetpassword}>
              <input type="checkbox" id="rememberMe" />
              <label htmlFor="rememberMe">
                J'accepte tous les termes et conditions
              </label>
            </div>
            <Link to="">
              <div className={Style.connexion}>
                {' '}
                <button onClick={handelUpdate}> Mettre à jour</button>
              </div>
            </Link>
            <div className={Style.contact}> </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Updateprofile;

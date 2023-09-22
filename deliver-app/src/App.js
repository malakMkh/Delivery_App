import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Départ from './components/Part2/Départ';

import Arrivée from './components/Part2/Arrivée';

import Login from './components/Part3/Login';
import Signup from './components/Part3/Signup';
import Payement from './components/Part3/Payement';
import Objets from './components/Part3/Objets';
import Estimation from './components/Part4/Estimation';
import Acceuil from './components/Acceuill/Acceuil';
import Admin from './components/Admin/Admin';
import AproposNous from './components/Acceuill/AproposNous';
import Service from './components/Acceuill/Service';
import Inscrption from './components/Acceuill/Inscrption';
import Connexion from './components/Acceuill/Connexion';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { getuser } from './Redux/userdata';
import History from './components/Userprofile/History';
import { getObjet } from './Redux/order';
import Updateprofile from './components/Userprofile/Updateprofile';
import Chatwindow from './components/Acceuill/Chatwindow';

function App() {
  const [imageSrc, setImageSrc] = useState(
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACAklEQVR4nO3Zy2oUQRTG8SFKRNCFF0RiwI0+gAvFrfgKKr6DWXuJK0VRXMbbG+gi6EJdufINJOraa0BCxmy8ZOLmJ4UlhGC0qrtnuhrmD7OZ7qnznbqcc+pMrzdmzJjaYALHMYtHeIMV/IyflfhdeHYpvjtRgvBp3MCifD7F3063IXwP7mNNfQa4F8Yclfiz6GueZZwZpvCtcdaHzd1gq2nx2/HU6HgSbDYlfgseGz3PGlmJEW2bzbjTxIFtm9NVxe+OkaFt+tjbta2zkdtVMmwTSaopBjiQ40BI8aVxPacw+6g8FkNIT3EgVIqlcizFgVASpxDK4smkZf23vckMmxdSBgw1ewo76or/A3Ym2pzv/Y948UhhtsEVuJxo81XKgF+Uy3KKAyXF/40MUhwISaPTDizp+BZ6Pcwwmhk2Kx3ih4YcRjPCZqUwetEQw2hm2KyUyI4ol6Ops/ROeXxI7ubhqq6W0wHsw6quXmgCeKsc5no54JBy6Gf3TXFOOZzKEh8dCK297m2ddYnma9vK/e7F5rcWcaJt5eo0d3GzZfFztZq6eNmS8KVKB/YvDvxINPi+ocvPapz1XbXFRwdebGLoW+zZz+BwfHc/rkRnqtQ21zDViPB1DhzEc3zHAm7hJLYlVLHn8SBcPPA5zu5abBSEseZDSRyqyiL+Zh0zptd9fgGpa7xfj1ENRgAAAABJRU5ErkJggg=='
  ); // Assurez-vous d'ajuster le chemin vers votre première image

  // Fonction pour changer l'image lorsque le bouton est cliqué
  const changerImage = () => {
    // Vérifiez l'état actuel de l'image et changez-le en conséquence
    if (
      imageSrc ===
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACAklEQVR4nO3Zy2oUQRTG8SFKRNCFF0RiwI0+gAvFrfgKKr6DWXuJK0VRXMbbG+gi6EJdufINJOraa0BCxmy8ZOLmJ4UlhGC0qrtnuhrmD7OZ7qnznbqcc+pMrzdmzJjaYALHMYtHeIMV/IyflfhdeHYpvjtRgvBp3MCifD7F3063IXwP7mNNfQa4F8Yclfiz6GueZZwZpvCtcdaHzd1gq2nx2/HU6HgSbDYlfgseGz3PGlmJEW2bzbjTxIFtm9NVxe+OkaFt+tjbta2zkdtVMmwTSaopBjiQ40BI8aVxPacw+6g8FkNIT3EgVIqlcizFgVASpxDK4smkZf23vckMmxdSBgw1ewo76or/A3Ym2pzv/Y948UhhtsEVuJxo81XKgF+Uy3KKAyXF/40MUhwISaPTDizp+BZ6Pcwwmhk2Kx3ih4YcRjPCZqUwetEQw2hm2KyUyI4ol6Ops/ROeXxI7ubhqq6W0wHsw6quXmgCeKsc5no54JBy6Gf3TXFOOZzKEh8dCK297m2ddYnma9vK/e7F5rcWcaJt5eo0d3GzZfFztZq6eNmS8KVKB/YvDvxINPi+ocvPapz1XbXFRwdebGLoW+zZz+BwfHc/rkRnqtQ21zDViPB1DhzEc3zHAm7hJLYlVLHn8SBcPPA5zu5abBSEseZDSRyqyiL+Zh0zptd9fgGpa7xfj1ENRgAAAABJRU5ErkJggg=='
    ) {
      setImageSrc(
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACnElEQVR4nO2Wx2sVURSHJ9Fs3LixK4oNJSqWiD02VFARibhwIRpwa8ONC1GCIARRRCEQLOhCAtadC7f+CYodsWMvsfdPLsyD63jOZMp9896D+8Gs3p17vt+bmXtOEHg8Ho/HEwOwAWgJCgZoAdbl2aAOaAP+AD+A1U4N42svB76Ftbdm3eQ4//IdWOncNoKpEdYqYULsDNICrAF+CiFWpd4sec1lwFf+py3rhmuVEM6fBLBUkd/v4iP+HdnUvJ8rHMovAb4I8gdcFWgVQpiCix3s3Qx8FOQPOpG3Cm0KPyibz8CiHHvOVeQPOZW3Cm5RQizMsNcc4ENh8lbh7ULRT8CCFHvMVuQPm/5T1gChwA4lRHOCe2cB3cL9RwuRt0R2CxLvgZkx90wD3gr3HYvKAw3myitZF3bk9crve5UQM4S1U4E3wvoTQL0gfxG4BPTJE8DMQoZfwEZlzT5B6h0w3VozBXidUr7EFaBv1gZmnzgmRKuyth05RBMwWZE/qchfENZezjpURVu7CbRZedWOCIVfhVeUUwn++RIvgUmpA1hjrRRimxKig545A/ROKP8is3xkQpTmlF1KiM4Y+bMp5J8DE3PJW0XmKy1/jxLCnOlRzqWUn+BE3io2T+me7cLaXsBpa835FPLPgEan8pH5pTvJzB6G6ApPlYaE8o+BMWWRt4o3KQ2pI0k3jZF/VHb5SFeVjsfO6PGYUP4hMLoQeUumMXxfpbmmPqX8qELlLanxwFNBqsv+aGPkHwAjKyJvyY0DnmgNK0b+fsXlSwBjwxNEOvul2eYOMCyoJoARwD165jYwNKhGgOHA3Rj5W8CQoJoBBgHXa1K+BDAQuGbJ3wQGB7UEMAC4CtwwTyWoRYD+QL9Ke3g8Ho8n0PgL9yZ0kjzDyjUAAAAASUVORK5CYII='
      );
    } else {
      setImageSrc(
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACAklEQVR4nO3Zy2oUQRTG8SFKRNCFF0RiwI0+gAvFrfgKKr6DWXuJK0VRXMbbG+gi6EJdufINJOraa0BCxmy8ZOLmJ4UlhGC0qrtnuhrmD7OZ7qnznbqcc+pMrzdmzJjaYALHMYtHeIMV/IyflfhdeHYpvjtRgvBp3MCifD7F3063IXwP7mNNfQa4F8Yclfiz6GueZZwZpvCtcdaHzd1gq2nx2/HU6HgSbDYlfgseGz3PGlmJEW2bzbjTxIFtm9NVxe+OkaFt+tjbta2zkdtVMmwTSaopBjiQ40BI8aVxPacw+6g8FkNIT3EgVIqlcizFgVASpxDK4smkZf23vckMmxdSBgw1ewo76or/A3Ym2pzv/Y948UhhtsEVuJxo81XKgF+Uy3KKAyXF/40MUhwISaPTDizp+BZ6Pcwwmhk2Kx3ih4YcRjPCZqUwetEQw2hm2KyUyI4ol6Ops/ROeXxI7ubhqq6W0wHsw6quXmgCeKsc5no54JBy6Gf3TXFOOZzKEh8dCK297m2ddYnma9vK/e7F5rcWcaJt5eo0d3GzZfFztZq6eNmS8KVKB/YvDvxINPi+ocvPapz1XbXFRwdebGLoW+zZz+BwfHc/rkRnqtQ21zDViPB1DhzEc3zHAm7hJLYlVLHn8SBcPPA5zu5abBSEseZDSRyqyiL+Zh0zptd9fgGpa7xfj1ENRgAAAABJRU5ErkJggg=='
      ); // Revenez à la première image si la deuxième est affichée
    }
  };
  const dispatch = useDispatch();

  const fetchData = async () => {
    try {
      const response1 = await axios.get('http://localhost:3001');
      const response2 = await axios.get('http://localhost:3001/estimation');

      const user = response1.data;
      const object = response2.data;

      dispatch(getuser(user));
      dispatch(getObjet(object));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  const [isChatOpen, setChatOpen] = useState(false);

  const toggleChat = () => {
    setChatOpen(!isChatOpen);
  };
  return (
    <Router>
      <div className="App">
        <div className="app_container">
          <Routes>
            <Route path="/" element={<Acceuil />} />
            <Route path="/apropos" element={<AproposNous />} />
            <Route path="/service" element={<Service />} />
            <Route path="/estimation" element={<Départ />} />
            <Route path="/arrivé" element={<Arrivée />} />
            <Route path="/objets" element={<Objets />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/payement" element={<Payement />} />
            <Route path="/option" element={<Estimation />} />
            <Route path="/inscription" element={<Inscrption />} />
            <Route path="/connexion" element={<Connexion />} />
            <Route path="/history" element={<History />} />
            <Route path="/updateprofile/:id" element={<Updateprofile />} />
          </Routes>
          <div className="chat-container">
            <button
              type="button"
              className="custom-chat-button"
              tabIndex="0"
              onClick={() => {
                toggleChat();
                changerImage();
              }}
            >
              <img alt="" src={imageSrc} className="centered-image" />
            </button>
            {isChatOpen && <Chatwindow />}
          </div>
        </div>
        <Routes>
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

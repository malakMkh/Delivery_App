import React, { useState } from 'react';

import Style from './Login.module.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link, useNavigate } from 'react-router-dom';
import Chekoutstep from '../Part1/Chekoutstep';
import NavBar from '../Part1/NavBar';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../Redux/userdata';
import Footer from '../Acceuill/Footer';
const Login = () => {
  const currentStep = 4;

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
      // Utilisateur trouvé, afficher une alerte verte
      alert('Utilisateur connecté ');

      dispatch(login(user.id));
      navigate('/login');
    } else {
      // Aucun utilisateur correspondant trouvé, afficher une alerte rouge
      alert('Identifiants invalides');
    }
  };

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
            <h2>VOS INFORMATIONS</h2>
          </div>
          <div className={Style.form_fields}>
            <div className={Style.form_switch_button}>
              <Link to="/login">
                <button className={`${Style.left} ${Style.active}`}>
                  {' '}
                  <strong>
                    {' '}
                    <i className={`fas fa-check ${Style.check_icon}`} />{' '}
                    S'identifier
                  </strong>
                </button>
              </Link>
              <Link to="/signup">
                <button className={Style.right}>
                  {' '}
                  <strong>S'inscrire</strong>
                </button>
              </Link>
            </div>
            <div className={Style.form_content}>
              <div className={Style.form_fieldset}>
                {' '}
                <fieldset>
                  <legend>Addresse Email</legend>
                  <input
                    type="email"
                    placeholder="example@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  ></input>
                </fieldset>
                <fieldset>
                  <legend>Mot de passe</legend>
                  <input
                    type="password"
                    value={password}
                    placeholder="password"
                    onChange={(e) => setPassword(e.target.value)}
                  ></input>
                </fieldset>
              </div>

              <Link>
                {' '}
                <div className={Style.forgetpassword}>
                  {' '}
                  <p>Mot de passe oublié?</p>
                </div>
              </Link>
              <Link to="/payement">
                <div className={Style.connexion}>
                  <button onClick={handleLogin}> CONNEXION</button>
                </div>
              </Link>
              <div className={Style.contact}>
                {' '}
                <div className={Style.left_line}></div>
                <p> Ou connectez-vous en utilisant</p>
                <div className={Style.right_line}></div>{' '}
              </div>
              <div className={Style.medialink}>
                <div className={Style.media_box}>
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEkUlEQVR4nO2Zb0wbZRzHn3taesUtRpOJYbo/DoQM5c/GMgryzxkYxbGBiQsbNBCEFGaIY8zCCuaUMSiQAQMGQWAgcSY2GeuNuzpc8NqNvRoCItE3841Dthj3ToNzbX+mVRBI197Zo2VJv8n3XZ+nn89dn6dPrwj5448/HgcoJIWqgGIoxywU4HuQTfwJSsIKBxBAKgJIQzbIJhZBhX+BE/g6VAUU2ccgXwc0UgWU4tvwNmGBJASCqiQsoMa3QRsQ433wOlk4qPEsvCkQ2llTEUAxnoEaFOIdeA3RCumEzWPwtT2IrHCK0K0f+HkUCMX4B9HBk9b0PTwNFJKJC9+NngcVfrDu8En/toJoFw9+EMnhOPGr1+DLCE40eIeAGn/vPXgsMvyHRIfgrbEMT0IlroUmaQpQaAtQKAjOSN6C05hy7Db21zgbW4pN4sI3kyGQQVh5g5+W9PJZfEChZ+ADydAqkVKR4R1vVIHv8IIvwPNwDr0oeP4aFAJ5+P76wJvl22CcfAQaCUCyC/gSPAV6JEEbLWAmdWAmwdHeAIB0wvmV35DweiQBs2x+WcDeURmACv8Hn0lYoAK9hDZiwCSPXwW/VI4E0En/ObuclPSjjRowybROBZY6FPAAyhGJNmrATF5xKWCSdQiZL1gzC2I0XDthO9rUd9e9gImccynAkRm+EAjWzMIbddcW+Qg8dCMQ6iuB3TW3rHwEHrkWQJt9JbCjehKeaoHtVd+C5x+hm7IwXwns1t60Pd2L+JNRHovYTI642UY7fSVwRDc8z0NAduZJ8A+5Z6Geif/jvF4RiEROy3D+puiPvrG4Eii/0DjqXoALVDiDnx0PBhWthENXs6HDGHtJbIGTnfX97u6Arq/iuHsBQBjMsntL4DYzCfRYOGQbDjvg7c2jlZaL11/bJhZ8W496Z2SNyeoK/vVas4XiKH5P88BENtrhfzdthrNMwjL4ylaPJi9wXIrHjwcpjpIeafxswd3VL2lrm+A9KXCBL98df+GvEjrdKfxSP2YTZjyRoDhKmt/SM+d2/6+egsbuylhBkzcwihlX8CvvRP/X4VuFwvfeiNhe1lX3E5/d51hz75zQ+RE9FvZKPq208pHIp5WWzq/2DlCDKXJ38w6PRW1qZ/b15RmU1pyRHDja2uH2FEp9ekrQl+dyutmY1iweAitFGljFdJdxL6VnIw5cGdsVdJkL2zJgjEq8aNxTV8ckTNpfs3JM1kgOFPZQsLXqO6cC77c3dSNPomPjpvkKeNKiwXLYWX1nFfy7TQM/Ik+j10fINHTqfW9IFH5RCJG1Jgd8ev2Xv53o6hJ0cHxiOG7HczVM4oI3JI7pc0HVemGeGq4MEgV+hYT8LBM/K2RN/J+eYxXTRmPo+v3m7jNGNecaMq2iX3lDprWXjWlG3sgwvSe0gY2beseQ5TF4ztXDjqt++caru5C3MzQWGdvM7L9VZDj4WCh4AZ3xuJGJm/icifb+n3xrowck6WeiC1uN+0a1TOLPajptUWVQWu13yH4IzDVk2tSGtMWqa8nzLex+ts8YU2Afg/zxxx/kaf4GzSVnCicBYF0AAAAASUVORK5CYII="
                    alt=""
                  />
                </div>
                <div className={Style.media_box}>
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADK0lEQVR4nO2Zz08TQRTHNzM0MQHixaMnI2jE4Mmr/4A/okej3r0oAn+AiYke9IYkpDNFDAkRqokHL4bEEzFelIqAJP5IDPvetrXQAhXSsrRjplYMboGdnd0th/0m79TN7Pcz8+bN7KthRIoUKZJUbNg8Qxj0UYZJwnCGcsxTjpv1yBOGH2u/cbNXPmscCCVy7YRDP2XwmXIUSsFgXgIbg9m28I3fFS1yJinDZWXjDhBcIgzvyDHDMR/Hk4RjStv4f0EYThsJOBGodxqHS5RD0W/z9F9arVEOFwMxTxLWDcrBDsw8/xtgE25dD2LmQzCP2xCUwQV/3A+ZHX+WVs9U24glOiey4uzLn6LreVZ0jGfE4afWXhBFud98qDbeN2wLR3H1TV5Mpctis1IVjXR5cnn3jc3hg1Z1qpVKj+YPDVti4vuG2E9X9gCoQcSxx5v70XQr5ZDzCvBwpriveTcA8pyQB6aH2Yd+r+aPjmVEeZeUUQbg8oyAPmUAT9eDevS+W2lotlCuiPupNXFzqrAdx55l9h+TwbySeXnZ0qk4498a5/65VznPY8YS6dOhpI+Mt5myw/zs8qbn8ajqZpbXXp2XzeVtB8DY1w0tAMpwXGEF8JPOyxYKToDHc7/0VoBjSmUFlvwGGNAEoBxyKgDlgweApUAA7k2viXypsiO2GhwBpa2q47l8qSK6X2QDAXCdQo9cnriNVBVCtI9Y/qeQyibWAfhR3ApsEyfDAJiEUkBlVLZHQgAYUNjYhONt1wAxbnarfKgcGU3viC8rzirEFtYdz7U+cZv/KGIs3eUaoL4KswolLtgyyhQvc6ppFDQA4WZvqB80vgIwXPLcvZMds2YDEIa3DK2PeobTzQIgHN4bSUENLfHF45TBavgA4ENbpS7Z7lNpbOkDgE0T5nnDT8l2n1sIPQCwCcNrRhCS7T43XTrPAAxWfZ95hxh0yo6Z3wBEbtghs8MIRbI6xbFnt2u3GgDkaqVSu9p40WC2TZ7YhMOcKoC8qhB5wjblL6YGkpet2qpwnHhtlgqLRbuybleFDLNoVx6kVi15Ja61R4atU832GylSJONg6DekIcfGE7hs2QAAAABJRU5ErkJggg=="
                    alt=""
                  />
                </div>
                <div className={Style.media_box}>
                  {' '}
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACXklEQVR4nO3ZT4hNURzA8c8YjI1QkgzZkIX8S0ZS/pQ/+VNSipLIwkJZWhEWwkIhCzYWlGQhLCTKylr5v7CQxEwTwjCaGeXq1pl6vd575r1333vnar71W713zznfe86555zfYZS6WYLLeIZDcshs3EdSEIfljG3oK5JIY68csR1DJSTSmCcnzMGPMhKv0CYnPCojkcYBOaGrgsRTjJMTLpWR+I5FcsSLEhLpfFkpZwwVSTwOkz8a2sLithQLManM/9K3341b2IwxRb9PxeJQzly0axIrcBWfSwyZdBidDI0apngypyJrcAHvSpTRhyuhnobQibsVvkDF8RbnsBvrsAvn8aGKMu6FejMjfYNfqmhAlvEVW7OQ2IDBFkkkIdL6t9QjMR8/WyyRFCyeE2qRGIvnEQgk4dzSUWtv7I9AIMFZddAevjqtlnhYYt2piuURSAxlsQM4FoHITRlQfKZuRezIQuRlBCKdWYh8a7HE73on+TCDEYj4H3okwZQsRHoiEFmVhciTCEROZyFyPQKR3lo3iYUciUAkySInvD4CiQT99aaMOiqkOJsd7+vNDd+OQCIJ8SkkwWtiTwQCSYltfZp6qnp49UbQ+KQg/mBBLb1yKoLGJwVxR43MwkBEvdGlDs5EIJHgmjqZGHK3rZTowwwZsK/FIgdlSDV53yzjQdZ3jNNasL3vwXQNYFkTty79IS3VMDY24Sg8GC6FGs7qfwyz9BLoIjaFJFt6bJ0Z7g2P4k2FZ7uzOh2OlPSq7XhIHQ2Exqf5sJ0YP4Ln1+IGPuIXXuMEJjeh7aOMYoT8BfcegYzf+KxLAAAAAElFTkSuQmCC"
                    alt=""
                  />
                </div>
              </div>
            </div>{' '}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;

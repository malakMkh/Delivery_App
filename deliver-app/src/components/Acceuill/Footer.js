import React from 'react';

import Style from './Acceuil.module.css';
const Footer = () => {
  return (
    <div className={Style.Footer}>
      <div className={Style.line_f}></div>
      <div className={Style.contact}>
        <div className={Style.contact_box}>
          <h3> Menu</h3>
          <div className={Style.contact_box_c}>
            <div> A propos de nous</div>
            <div> Nos Services</div>
            <div> Devenir partenaire</div>
          </div>
        </div>
        <div className={Style.contact_box}>
          <h3> Joignez-vous à l'aventure dès aujourd'hui !</h3>
          <div className={Style.contact_box_c}>
            <div>
              {' '}
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA10lEQVR4nO2SPUpDURBGbxMQySLEJvYS0G0I9i4nRBTsXEcwjZbuwFVooU2Kd8844yfXEIzBIIn3IcI7MO355i+ljo4/Q1Iv59cTiBuI22rinHUAMQZ/NAuVgpj+ttsd8FOIO/C3hXhRZZKtxGY6hLgCf16VfnbvT2Vdm4qPzfxhnfRrQJxv3HnOGpjFBDx+Cig3SdvSNNqHGK1bEfh9qoGkPsTFNwFnVQIKknbBX5bksxKcagJxuXTc61SbptEeuM9DNExtYBaT8sKpLfLHC+uotYCO/8c7ZhdECGf904UAAAAASUVORK5CYII="
                alt=""
              />{' '}
              66, avenue de Champs-Élysées, Paris
            </div>
            <div>
              {' '}
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAkElEQVR4nOVSQQqDQBBbBP8nQvsc7Vm/IT7DPqOUPqOXTZxhigcvuuqu9GZgbpMwk8S5f4BUC82VBAD5rgWkTrhA3qfJE0jtZzKgg0sFIPfFBVWSgJnlpHz23gD0sWuy92MZMLLaIgdTArRdLgHyjI7ZzDJAmy1CdE+8H4u1J4lFm4wF5EZqR8orVLaIfI7xA6RBpTqLfxlmAAAAAElFTkSuQmCC"
                alt=""
              />
              +33 270 28 11 349
            </div>
            <div>
              {' '}
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAtElEQVR4nMVSwQkCMRAM+hO0AEFswZddCH5swRZswRZswY8Pq/BlCyJYgMKFzNyGkZwoPs6IHHILAwvJ7OxM4lzrRUY1gWs8IIRyRtrpd7JdAFtUNiT1gLgGzL4RAYtk3EjqV2Qg7r3X+NFrAtgho3okNU13i0JDMm6rDAArSFtJ6krqkLYE7PqmWnd+qwnRXgrea0TGXULqP23oMh4Hz6fOZeQyfs8hlPOE1P/vH7D1Aa3XHZPovL8VrTUqAAAAAElFTkSuQmCC"
                alt=""
              />{' '}
              contact@hezli.tn
            </div>
          </div>
        </div>
        <div className={Style.contact_box}>
          <h3> Légale</h3>
          <div className={Style.contact_box_c}>
            <div> Condition d'utilisation</div>
            <div> politique de confidentialité</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

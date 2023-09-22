import React from 'react';
import Style from './Apropos.module.css';
import Footer from './Footer';
import NavBar from '../Part1/NavBar';
// import Footer from './Footer';
const AproposNous = () => {
  return (
    <div className={Style.apropos_container}>
      <NavBar/>
      <div className={Style.apropos_header}>
        <div className={Style.apropos_header_text}>
          <h5>À propos Hezli</h5>
          <h1>Livrer l'Excellence à Chaque Pas</h1>
          <p>
            Explorer nos offres de transport exceptionnel en France, des
            solutions logistiques précises et performantes pour répondre à vos
            attentes.
          </p>
        </div>
      </div>
      <div className={Style.apropos}>
        <div className={Style.apropos_1}>
          <div className={Style.apropos_partie1}>
            <div className={Style.apropos_parti1_img}>
              <img
                src="https://hezli.tn/static/media/Image.372bbfe6cc2b39e9e229.png"
                alt=""
              />
            </div>
            <div className={Style.apropos_parti1_text1}>
              <h4> NOTRE ENTREPRISE</h4>
              <div>Notre Service à Votre Portée</div>
              <p>
                {' '}
                Hezli est une entreprise de livraison spécialisée dans le
                transport d'une large gamme d'articles, notamment de documents,
                de fournitures de bureau, de produits emballés, d'objets
                fragiles, de mobilier et d'équipement. Nous proposons ce service
                aussi bien aux entreprises de différents secteurs qu'aux
                particuliers en Île-de-France. Avec notre équipe compétente et
                dévouée, nous assurons la sécurité et la rapidité de vos colis.
                Qu'il s'agisse d'un petit colis ou d'un envoi massif, Hezli
                s'engage à livrer vos articles en toute sécurité et dans les
                délais prévus.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={Style.apropos_2}>
        <div className={Style.apropos_2_quote}>
          <div className={Style.apropos_2_quote_text}>
            <img
              src="https://hezli.tn/static/media/quote-left-solid.97481fd573c0a6de34f81cdff438b948.svg"
              alt=""
            />
            <p>
              Livraison rapide sécurisée. Très bon chauffeur courtois{' '}
              <span className={Style.apropos_2_quote_text1}>
                {' '}
                et polie satisfaite je n’hésiterai pas à refaire appel à vos
                services.
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className={Style.apropos}>
        <Footer />
      </div>
    </div>
  );
};

export default AproposNous;

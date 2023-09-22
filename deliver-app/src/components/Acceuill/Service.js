import React from 'react';
import Style from './Service.module.css';
import Footer from './Footer';
import NavBar from '../Part1/NavBar';
const Service = () => {
  return (
    <div className={Style.service}>
      <NavBar />
      <div className={Style.service_header}>
        <div className={Style.service_header_text}>
          <h5>SERVICES HEZLI</h5>
          <h1>Notre Expertise vous suit à chaque pas!</h1>
          <p>
            Qu'il s'agisse du coin de la rue ou du bout du pays, notre équipe
            compétente vous propose une expérience aisée et sans stress.
          </p>
        </div>
      </div>
      <div className={Style.service_c}>
        <div className={Style.service_1}>
          <div className={Style.service_partie1}>
            <div className={Style.service_parti1_img}>
              <img
                src="https://hezli.tn/static/media/Group%207885.94db58d605481403ccf4.png"
                alt=""
              />
            </div>
            <div className={Style.service_parti1_text1}>
              <div>À propos des services de Hezli</div>
              <p>
                {' '}
                Nous sommes fiers de vous présenter notre gamme complète de
                services de transport, conçus pour répondre à vos besoins
                variés. Guidés par notre engagement envers l'excellence, nous
                fournissons des solutions fiables et efficaces afin de garantir
                un transport sans accroc pour vos envois. De la collecte à la
                livraison; que vous ayez des colis légers, lourds ou
                spécialisés, notre équipe est prête pour tout gérer en adoptant
                les stratégies logistiques les plus appropriées. Nous prenons
                soigneusement en main chaque étape, offrant bien plus qu'un
                simple service.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={Style.service_parti3}>
        <div className={Style.service_parti3_1}>
          <h4>ÉTAPES SIMPLES</h4>
          <h1>Un Processus Agile et Efficace</h1>
          <p>
            Découvrez notre service conçu pour vous offrir une expérience de
            livraison exceptionnelle à chaque fois.
          </p>
        </div>
        <div className={Style.service_parti3_2}>
          <div className={Style.service_parti3_3}>
            <img
              src="https://hezli.tn/static/media/one.67ab65930de5ae5534e3b116703cff75.svg"
              alt=""
            />
            <h3>COMMANDER</h3>
            <p>
              Facilitez votre Commande de Transport en quelques clics seulement
              .
            </p>
          </div>
          <div className={Style.service_parti3_3}>
            <img
              src="https://hezli.tn/static/media/two.b5fe9240352841300e8b396ad3cce7b9.svg"
              alt=""
            />
            <h3>CHARGER</h3>
            <p>Nous vous assurons une collecte rapide et précise d'articles.</p>
          </div>
          <div className={Style.service_parti3_3}>
            <img
              src="https://hezli.tn/static/media/three.0aa78ed908e9dc2ef7b40856fffcc44c.svg"
              alt=""
            />
            <h3>LIVRER</h3>
            <p>
              {' '}
              Comptez sur notre équipe performante et fiable pour une livraison
              rapide et sécurisée.
            </p>
          </div>
        </div>
      </div>
      <div className={Style.service_2}>
        <div className={Style.service_2_text}>
          <h4> SERVICE</h4>
          <h1>Services ultra accessibles, sans tracas !</h1>
          <p>
            Nous nous efforçons de créer une expérience inclusive, où chaque
            étape de notre processus est minutieusement agencée pour garantir un
            niveau inégalé de précision . De la collecte d'articles à la
            livraison, nous mettons en place des protocoles rigoureux pour
            assurer une exécution sans faille. Que vous ayez des questions, des
            requêtes ou simplement besoin d'informations, notre système de
            contact vous permet de nous joindre sans heurts . Inscrivez-vous,
            laissez-nous un petit mot, ou simplement appelez-nous!.
          </p>
        </div>
        <div className={Style.service_2_img}>
          <img
            src="https://hezli.tn/static/media/pic.0d91823362e6cde094ab3fe316c02034.svg"
            alt=""
          />
        </div>
      </div>
      <div className={Style.service_c}>
        <div className={Style.service_3}>
          <div className={Style.service_3_text}>
            <h5>SERVICE ASSURÉ</h5>
            <h1>Un bouquet d'offres variées</h1>
            <p>
              Optez pour Hezli et expérimentez une livraison exceptionnelle ;
              livraisons rapides, assistance attentive et tranquillité d'esprit.
            </p>
          </div>
          <div className={Style.service_3_boxs}>
            <div className={Style.service_3_row}>
              <div className={Style.service_3_box}>
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACHUlEQVR4nO2ZMWsUURDH/zNzKGJUCDaKEJHDmJ1ZLYIgNtYpQ7gvIQpWdgpW+gUEtbAQP4ONnaIQC1MJQUlzsRA1FoIKQlx5bxfF3O7e3ubW7B3vB1Pdvvff3868u4UDAoFAIBAIBAKB4UQzJPaARL+QWNJ8uRy9D5w9iHFCXuJ/CAzU3XGLbO2NiH4ct0iyVxVE8ggdkTBayc4zMuRL4QOJPgaibutHq+L1XyHx0jSIJCT2Ax29OA0iCYluAqePToGIJcT6xC1rtwjrU2BhLv8gxCdI7JNfy3q91SIolMiQeInEtkn05z/npX0iwyHR2wPnZRJFgEsdYnuerXk0wSKOhTkS/U5iv9DR8xMsAjdid7IRe9hCkfhUdZUoykQ2WidCrM+qy/QkW7fdPhGpuVcQkdCRJIyWhDNiU/mt1YfoCjB/yJfYMomuNyDSr5NTVaQPRLM5v6yz7g10jCL9ujmociPpEypA4l5Nkc87RVA7R98DbDeHPznX5iK6h+uJ6L0BEdTLcQ7+fQVsN8o6Ux6weGREia1UIpoZTWQxJ0c33b17hzKI9WXaclsuvEh0xW/K9qJ0s7Ic0Y1mc9iuZObrxYfQ3qbt1cuoCYneajgn2kdsa3/aKHHPzaqv9An5zYnttbt2l/+avWs4Z/74X5mcYlsDzhzDrjl3ksTeNJzT3Q+2q8S2SqLffLGtutHzn42NCwfAeo3YXo2a8xu4QPMmWSymOgAAAABJRU5ErkJggg=="
                  alt=""
                />
                <h5> Livraison en magasin</h5>
                <p> LVous pouvez retirer vos livraison d’une de nos magasin.</p>
              </div>
              <div className={Style.service_3_box}>
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB00lEQVR4nO2Xz0rDQBDGZ3aoHqSP0JtQzEz6EN7svQ8hCuKTqOCfd7CCT6APofWsB68K/XOwoEY2LdI0pjFJyyY6P/hO3Xa/LzM73QAoiqIoiqIorqn5PhKfoJEeEo+QJHArHk28yDHUWrLEpJvrSHKOJB/uQybKejsD8NaKhzVyW4JAv5ORm0KhkfjCeYjsOi1wZqXMbZwgfs91ptEOKOfmc+soR2B5KIHxfDLSyxN46Nx4fg3zBA6qLBsBNPACXFdIK0wrbmmA1gbUthgMH6Dhe9cVS5XhO+s19Gy9F6NDYLw9JBk7DxbXGxjeBQADS4e87ZKFHltPsFKM7JcgaKhpZYvADTRyhSSDUIavAfxmdE2Hpu+h7s+sPWqZ/X/DDSR5if84v9rPolX2Dl0HDgdUXv+W6ZNJ2IAvYZZaS5wHBs+btYRGusndIN2I//ALkzZI2qAfXd2suw/crM/57y9YP/gpcMoG2davPnDMz2emiwhqYNEK/+uWLhsamLTCON8S2tLoeDAtechhpgpXXaCByX0VtMKkLR3oGSYdWoFOadK/JYhdPKDizL89QdrFA/5+YH6cWfAEFSc9D0kbiZ+tgPwdqDqRPNJ2bUdRFEVRFIAvgEADRtE1yQQAAAAASUVORK5CYII="
                  alt=""
                />
                <h5>Petits mouvements</h5>
                <p> On gère vos déménagements de petite envergure!.</p>
              </div>
              <div className={Style.service_3_box}>
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADKElEQVR4nOVazU4UQRCuqt6LkcjPBQ8mJiwr7lQNHLgYNUEfQBO5+IcnjegDiN70LCejz4AhBtDoE2j0xEEvXHWRiwdvSpBkwdQMu3GBnZ6eadxZ/ZK6sE31VzPdX1VXD4AvEN9AIxtoZNtiG0AyBUUDEr9JQT42ktdQNKCRWuoAjHyBYmG8F41sOQSwBTDWB4VBic84kI8MSnwaCgOSaecAKLwNRQEaeeYaABp+eoCUZBCIbwEEwzbuYIKLjhu4YTUwfCHykYhgeIfL0bTsEYnfNjYbkrwHkjsAYX/LKMPnkPhTBuK7JfUjlGSilULYr3Pq3E1xIHlnD1ZBfLldAkKSBTByCQ0/QSP13ORN0+rqM/JNstAuIQLxFQv7U4dUoz0S82z8FWD0cHv+hh91nqQkmnJswz48hoZ/dJog2t/COkD1+B76aOR558lJWpvbL5O6lALt7BcangcKrgKEI/F6VQtH9G/6Wzwm9zxbyrmpO0i8nNupKhSEQxaVAAAuI/Fi/vl4Wbnr2h/K6awOxPfAFcQzeaW4+cDQyOPMTrKQbw1iO6PN7nZ203l9RssmH5B4yXWfxaXFfog2M39L7Qi4nDcAiJdw2gf3HQyftzjkMhpZsTvjefAEJHmRgvxKiuKygbE+NLyWvPZVKj2B5LrlYa05n+C07khWgGrFWwAQjlie/qqzS03ZyQEEPf4CCHosb2C94AEMH7EE8DNDALKaHMDoCX8ByEnLEqplaJPYNnF4zRt/kin7Jh7vTemtyDLKlrzjlMh400GX/0IioyylBC/mZI9I8ip3KZGzmJvJTJ/kgYdizks57RoEAoX3fZXTng40vJRuT1QrSPzS44EGPB4peVMVRWsb1fY42alxNZLKSG1408+RMjjb+k6NzHlw3KFD/b/QVolA8rDzBCXRlCMktxb5c/e2Fq3NXV4Ew5MH19zlyZ2WS9bm7p72usrVByC+CxAMtIwqyYS2xg+mvR4M6Jw69x/jUrbXWy44rKeuxgVHYundxmr6v3ZS1UrMRQbhP7picoTepriryTQUBl1/zQrdftENXf+pAXT/xx7Qoc9tfgOs9Xc0Oll06gAAAABJRU5ErkJggg=="
                  alt=""
                />
                <h5> Transport de colis</h5>
                <p>
                  {' '}
                  Livraison rapide en respectant des délais exceptionnellement
                  courts.
                </p>
              </div>
            </div>
            <div className={Style.service_3_row}>
              <div className={Style.service_3_box}>
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAoElEQVR4nO2WQQ6DMAwEs+xzyCP4OU9LT7300iamshEzEkcUe2dBaQ0AoDRyH5lPYwFjYKRWCODReD/S/0Lej+X5tfUzewFt/bxt+opYKJG+Vy0USl8rFkql71kLBdPXjIWS6XvCQvqQ/mKBBYyB8dcKvVl+8SIUPZ8FgggD5hsIISpkKhRCVMhUqFaFVP0W+kn2wGIB56euxOs8AED7iRc/u8dmif81+gAAAABJRU5ErkJggg=="
                  alt=""
                />
                <h5> Déménageurs uniquement</h5>
                <p>
                  {' '}
                  N'avez-vous besoin que de déménageurs ? Comptez sur nous.
                </p>
              </div>
              <div className={Style.service_3_box}>
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABpUlEQVR4nO2Uv0oDQRCHZ3Y8G/+WCtoJ6s1cguQBRCw0taQU7Cx9BV/BQgQRxGcQERErLVJoIb6AJlorWoiKOYlJDj1NcudtsifsBz+4au/7sbMDYLFYOgPxEhKXq6l+w79C8RqSvCOJX08FiNch/RQISTa/iIezA5BzIJ1k+lDJfgv5WpQcAUwMQrpwR1DxeVv5oARfAnhjkA5cF0muI8sH4VtwOGvWnXgOie/jywd5BOIFQ/JeAUmeE8g38gKKl02syYoGeb/La3a2B4m3NIr7oXex28E16/aj4oPOyUtjQx0D5IY0y0+NouKLjstTUOIKgMf1uDsZQZKbrslTkDtwpmeSyZM3j8QPBuT9ep6AvPzf5JW3gsSvBuX9WvgNlKzGUcfqStO8JnUU2fh0a78mZdu8rDTLHoDb20R+cgCVHKZA0m8ZJScA2eGfc6OkaFyOIpco/lbg7B8VOI3+og3LQlJsAbI3kAzdM5v6NwC2gNgb+IYdoRD2EcfFjlAIO0JxsSNkfoS4HOOHpW6f1x7y8hF/WgJyF6OdJyVt51ksFguY5APb2GYhs28KpAAAAABJRU5ErkJggg=="
                  alt=""
                />
                <h5> Déménagement d'appartement</h5>
                <p>
                  Chaque famille a des besoins de déménagement uniques. Nos
                  déménageurs professionnels sont là pour vous.
                </p>
              </div>
              <div className={Style.service_3_box}>
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA40lEQVR4nO2VQQoCMQxF8+lxph5E77+eAfEeIyIKuhtJ29i8B10FOrwmk28GAAAzU05nlWVTqXvbs2xW6mW0rqnUa3vZt/RttK+lE7bnSK8dZNfHt0brAsC/UHrl7S/LrEE+q2v8BIgrZRO2bnkbLJ81XPDzNBN9oezCFqzujhCO9SDuKHuHlW1pCeFKhzXTSFuwujtCONaDuKPsHRaxVIklzRRLyjbSFqzujhCO9SDuKHuHlW1pCeFKhzXTSNvB+uj7D4PwF3R4tpGW81IJv7SEcKXDR2CkC//w3nVpAQCA9eMORtqhY9b2qocAAAAASUVORK5CYII="
                  alt=""
                />
                <h5> Déménagement de bureau</h5>
                <p>
                  {' '}
                  On sait à quel point déménager votre bureau est crucial, mais
                  pas d'inquiétude, on gère tout avec maestria.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={Style.service_c}>
        <Footer />
      </div>
    </div>
  );
};

export default Service;

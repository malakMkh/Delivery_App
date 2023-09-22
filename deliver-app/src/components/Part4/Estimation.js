import React, { useState } from 'react';
import Style from './Estimation.module.css';
import Chekoutstep from '../Part1/Chekoutstep';
import { Link } from 'react-router-dom';
import NavBar from '../Part1/NavBar';
import { useDispatch, useSelector } from 'react-redux';
import { Objet } from '../Part3/dataobjet';
import Footer from '../Acceuill/Footer';
import { addest } from '../../Redux/estimation';

const Estimation = () => {
  const Data = useSelector((state) => state.depart.Data_d);
  const Data_a = useSelector((state) => state.arrivee.Data_a);
  const Data_o = useSelector((state) => state.objet.Data_o);
  const dispatch = useDispatch();
  /*------------------------------------------------------------------------------------------------ */
  const [selectedOption, setSelectedOption] = useState('optionAvecAide'); // Change this default value
  const [totale, setTotale] = useState();
  const handleOptionChange = (option) => {
    setSelectedOption(option);
    if (option === 'optionAvecAide') {
      setTotale(total); // Retournez la valeur de "total" si l'option avec aide est sélectionnée
    }
    if (option === 'optionSansAide') {
      setTotale(total_s); // Sinon, retournez la valeur de "total_s"
    }
  };
  console.log(totale);
  /*-------------------------------------------------------------------------------------------------- */

  const calculateTotalPrice = (name, quantity) => {
    const item = Objet.objet.find((item) => item.name === name);

    if (item && quantity >= 1) {
      return item.deliveryPrice * quantity;
    }

    return 0;
  };
  let total = 30;
  let total_s = 0;
  // --------------------------------------------------------------------------------------------------------------
  const currentStep = 4;
  return (
    <div className={Style.centred_header}>
      <div className={Style.centred_container}>
        <NavBar />
        <div className={Style.container}>
          <Chekoutstep currentStep={currentStep} />
        </div>{' '}
        <div className={Style.first_container}>
          <div className={Style.second_container}>
            <div
              className={`${Style.form} ${
                selectedOption === 'optionAvecAide'
                  ? Style.selected
                  : Style.unselected
              }`}
              onClick={() => handleOptionChange('optionAvecAide')}
            >
              <div className={Style.form_header}>
                <i className={`fas fa-arrow-left ${Style.icon}`} />
                <div className={Style.header_text}>
                  <h5> PRIX</h5>

                  <div className={Style.header_tm}>
                    <h3>
                      {' '}
                      {Data_o.map((data, index) => {
                        // Initialisez le total pour chaque objet

                        const objectTotals = data.quantities
                          .slice(0, -1)
                          .map((quantity, qIndex) => {
                            const totalPrice = calculateTotalPrice(
                              data.objetList[qIndex],
                              quantity
                            );
                            total += totalPrice; // Ajoutez le prix calculé au total de l'objet actuel

                            return <div key={qIndex}></div>;
                          });

                        return (
                          <div key={index}>
                            {objectTotals}
                            <div> {total}</div>
                          </div>
                        );
                      })}
                    </h3>
                    <img
                      width="26"
                      height="26"
                      src="https://img.icons8.com/metro/26/000000/euro-pound-exchange.png"
                      alt="euro-pound-exchange"
                    />
                  </div>
                </div>
                <div className={Style.header_img}>
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACn0lEQVR4nO2ZTWsUQRCGHzT4gR9oAiIa8bLiUXNwzVX8C0b8D3o2mptiyOpBMYmKVw96CPGwkQieFDx4k8TgRfEDjRqjuRjNxktLQw0MSybbU1M7O8K8UBC6M2+91VPTVd0LJUqUsMAGoB8YAiaBOWAJ+Cu2JGN+7qL8r3+m4+gFRoDPgEtpn+RZz5E7eoA7wKpCeLM1gNvCmQvOAD8MhDfbInC6ncK7ZNVdm+2W+DLFVmAqB/FOrC4+TbAReJijeCf2yOpN5JE2LsHGLT5Y12Eb0IrvUe42flu8CRwHton5v8eU2+53oDuv1PEF7cg6nEeVRW8srfhexWo1WoiP0Kfk3pcmgBHFKvm0ibAJuAp8AeaBmoxFGFfwD6fZNjWvuRrjqK0x78ci9Cv4P4Y2gBpyb9tjHPNrzPuxCDuUPqohAQwpySvy/KGEed9SR+hW+hgMCWBSSf4GuA68TZi/G/NRVfqYCAlgTkm+nj0DtsR83FDyzIYE8NNY/HNgZ4z/MLCcoeVuCYtDSjytdsW49wCvM/A1WsuHFcMATja1Jq8y8jVCAvhmJN6LjeCL2AsDzsWQALKuUmT3YpwDRpyzIQE8MHJ2LcZ52YhzIiSAC4YfcEUKW1JtcO0oZH1GztphxwjE+wKIddpmzipn/aF8v5wtpg34hkmBvbLnZnEYvzI8kJFrJe2BxuNdgQIYTSu+YvDKpyUIL/5xBp4FYHfaAM4aBGBlp1CgXgDhTpM6Ud/yqwDip7RXiycKIL6e5XK3VoC06SIDXnZI+IL2g23Gn0CHHwyKnZMiNarZKpPwNMHRsrQH56TDjCr2JQlG09tc0VTYVjgIPAF+AzPS1/uj4eaALvY8cF8OHl9ldVflomBG+vlB6SoL8TNriRL85/gHzHa77qqhRwYAAAAASUVORK5CYII="
                    alt=""
                  />
                </div>
              </div>

              <div className={Style.option}>
                <div className={Style.option_avec}>
                  <div className={Style.option_text1}>Option Avec Aide </div>
                  <div className={Style.options}>
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAdElEQVR4nN2T7QqAMAhF9/4v1sdLnf4UBKmz1EVduDDh4hmbtiaL3V7dzX8MsJ4CR0g6o9jKz1ID7XYYACvfbUDQ9YClsPn0dGp6uvQbDiC5bsMBUREB0Fk0F8CqEQCpf0AGoPyJouL1MeXXe+CRCsh2PWAD9k4WHu2fPY4AAAAASUVORK5CYII="
                      alt=""
                    />
                    <div className={Style.options_text}>
                      <p className={Style.options_p1}>Date de Dèpart</p>
                      {Data.length > 0 &&
                        Data.map((data) => (
                          <p className={Style.options_p2}>
                            {data.dateValue}, à {data.hourValue}h,{' '}
                            {data.minuteValue} min{' '}
                          </p>
                        ))}
                    </div>
                    <Link to={'/estimation'}>
                      <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAmklEQVR4nO2UQQrCQAxF3xWkeBhX9RYu7FEKzrIHsB5HT9FzVMGdQkoxhaEwuphkIcyDLGbzfhLCQOFDC9yBAw4EQLTeQOMZIMDLapL6S8iYKw8qComQ1kIuiZBgKRetLkf6S77UHkf5qcjlr9YyUwGXhDzrzmO2HvIjsIvem2gSk87PwGMVUlmu5abdPle/pRkDcAV6XVcBdyYDBWPS6+oMXwAAAABJRU5ErkJggg=="
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className={Style.options}>
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE0UlEQVR4nO2YfUwbZRzHnyjGGLniJPtDY4zLEnW2galx6ECJc+weOmEL8+7m3P6wd6Jmk2V/LDHGjGVrBTKjDq5mClMzElxQN8buOjM2eW1BNsgM0cGWTZS9cX1l9Ar0Ws4cUCijtFfTKyXhm3yTJk2efD53v+eeXgFYylKWErOoDw6uVeu5Eo2Ba1TrrXc0euuo2mDlNQauX2PgzmsM3L6cL52rQaJFrR/cotZb/9AYrGK4ri1zdGM078VpvgkzujcuNDd4psz6uFrPnY0ELvWFUvt1zOhx4kaPGChm9NRhla5HFwR+VQn3vMZgvSUHPr3E6sBo/u9g+Jny/Xi5Oz2u8GkGu0Zt4Jxy4DV6zltA812h4T2BckTF6NNxgbe9A1XndHvq0vS3BTkCeYfdLRHgxak7cTUu42TH4fd2AopXthFdGQf+uRsOPueLoSZ58J7AnjiiKLwDg1kSfKA3iPzLr+/vvRkKPvOQ4wJO877oBHj/VprPUEzARqD1wQJSOTz3DvFJe28w/EultmsYzbujgccnx0jI+7H6W0XgnVjOChuO+u8VkGoloGvnXrZTgl9tsA1upt3lGO3Jyq8Ske2HxIfxck8mTvM/SFc4nMCm6vpmlCX9OaeoFTEXsGPoB6HgA7UR6FjZR0cbM0rtufOtgRv5PNzIj4aC31J5qRmylCgVZcii2AsQ8OfwAnDcSa6jIq2D0XzRvfBvHbndibKFvoAAZKlfFBBA/wwnMLT35TqxFtwfaZ3sYjEJN3oGpjfu164r8PSu4SB4ETJUb8wFbDhqnQ/e8X52h2BWVcpdC6P576Y2LQfrPu6fBT8hQLoUEIDekPA71vd4Wx8ZEcyIIQqBzzCaH9H+9HnPHPhJASHmAnYcHZojsHXDjbGGVM5nUYmCWVUldy3cyB/Nr6lpCwk/WZsSAn2z4dFh78nH+iT4SQHkX7ERJMnZA5uOmU6FgRchS15WQuBE0CPT56la2RmAD+quSOu8Wbf/Xci8Nx5BoCbmAjYC3R0QGNanN4WAFwWLalRoR/LnW+PAWaiFJp0nPDylzDngJNCnpJPYVZTZEgp+ZpRUfsGiOuZtS35VbFyeLF5cluI1J79mbVt++G3TtlsR4VnSD03UE0CJuHZnfSO0pnjDCYSq14y4i34t6IsEDyevvgkoFa9FtUYwq8ajgZfuyFcN6zrkwENJoF73ClAyghk5Ho0Acz69STY8Qx0HSkdsTVkmmJEBOfB9LU+2yoWHLHXzjRM7UkE8IrQjuZFGydGW2r3RpBuTBc9Q49BEauMCPy1hRirmgx9pSxkgTNsdsq8+Q1WAeEc0gQd9FuTSnCeOBbm780zB1ShGpwer3fNQ3AUmJDqSnxPMCB90kAkHG2CX7E3LkryWIVeBhYyvXfVhQKD2tzXTb1UyR4cEiRCfRXWyq3ml7MflVGtBouSv359N1bK66/JHh7q2vqEwBSRStExhBspSkR+bDCkoftr+30CG3CfjtP0UJGqyG4uTUIa6EAa++8WLhQ+ARA40kWkoS/lCzL0v57ROAxZDIEvWhBCoBosl6BlKPfH7ZubA8i/4gRVtUIaa/tcBZalmsNiCMmRRQGADS0Z82U/IzRwQWDSbNzjFxcX3oQx1Tqr0edaXS1kKSJj8B1PN2xbr8aR9AAAAAElFTkSuQmCC"
                      alt=""
                    />
                    <div className={Style.options_text}>
                      <p className={Style.options_p1}>Adresse de Dèpart</p>
                      {Data.length > 0 &&
                        Data.map((data, index) => (
                          <p key={index} className={Style.options_p2}>
                            {data.adresseDepart}
                          </p>
                        ))}
                    </div>
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAmklEQVR4nO2UQQrCQAxF3xWkeBhX9RYu7FEKzrIHsB5HT9FzVMGdQkoxhaEwuphkIcyDLGbzfhLCQOFDC9yBAw4EQLTeQOMZIMDLapL6S8iYKw8qComQ1kIuiZBgKRetLkf6S77UHkf5qcjlr9YyUwGXhDzrzmO2HvIjsIvem2gSk87PwGMVUlmu5abdPle/pRkDcAV6XVcBdyYDBWPS6+oMXwAAAABJRU5ErkJggg=="
                      alt=""
                    />
                  </div>
                  <div className={Style.options}>
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE0UlEQVR4nO2YfUwbZRzHnyjGGLniJPtDY4zLEnW2galx6ECJc+weOmEL8+7m3P6wd6Jmk2V/LDHGjGVrBTKjDq5mClMzElxQN8buOjM2eW1BNsgM0cGWTZS9cX1l9Ar0Ws4cUCijtFfTKyXhm3yTJk2efD53v+eeXgFYylKWErOoDw6uVeu5Eo2Ba1TrrXc0euuo2mDlNQauX2PgzmsM3L6cL52rQaJFrR/cotZb/9AYrGK4ri1zdGM078VpvgkzujcuNDd4psz6uFrPnY0ELvWFUvt1zOhx4kaPGChm9NRhla5HFwR+VQn3vMZgvSUHPr3E6sBo/u9g+Jny/Xi5Oz2u8GkGu0Zt4Jxy4DV6zltA812h4T2BckTF6NNxgbe9A1XndHvq0vS3BTkCeYfdLRHgxak7cTUu42TH4fd2AopXthFdGQf+uRsOPueLoSZ58J7AnjiiKLwDg1kSfKA3iPzLr+/vvRkKPvOQ4wJO877oBHj/VprPUEzARqD1wQJSOTz3DvFJe28w/EultmsYzbujgccnx0jI+7H6W0XgnVjOChuO+u8VkGoloGvnXrZTgl9tsA1upt3lGO3Jyq8Ske2HxIfxck8mTvM/SFc4nMCm6vpmlCX9OaeoFTEXsGPoB6HgA7UR6FjZR0cbM0rtufOtgRv5PNzIj4aC31J5qRmylCgVZcii2AsQ8OfwAnDcSa6jIq2D0XzRvfBvHbndibKFvoAAZKlfFBBA/wwnMLT35TqxFtwfaZ3sYjEJN3oGpjfu164r8PSu4SB4ETJUb8wFbDhqnQ/e8X52h2BWVcpdC6P576Y2LQfrPu6fBT8hQLoUEIDekPA71vd4Wx8ZEcyIIQqBzzCaH9H+9HnPHPhJASHmAnYcHZojsHXDjbGGVM5nUYmCWVUldy3cyB/Nr6lpCwk/WZsSAn2z4dFh78nH+iT4SQHkX7ERJMnZA5uOmU6FgRchS15WQuBE0CPT56la2RmAD+quSOu8Wbf/Xci8Nx5BoCbmAjYC3R0QGNanN4WAFwWLalRoR/LnW+PAWaiFJp0nPDylzDngJNCnpJPYVZTZEgp+ZpRUfsGiOuZtS35VbFyeLF5cluI1J79mbVt++G3TtlsR4VnSD03UE0CJuHZnfSO0pnjDCYSq14y4i34t6IsEDyevvgkoFa9FtUYwq8ajgZfuyFcN6zrkwENJoF73ClAyghk5Ho0Acz69STY8Qx0HSkdsTVkmmJEBOfB9LU+2yoWHLHXzjRM7UkE8IrQjuZFGydGW2r3RpBuTBc9Q49BEauMCPy1hRirmgx9pSxkgTNsdsq8+Q1WAeEc0gQd9FuTSnCeOBbm780zB1ShGpwer3fNQ3AUmJDqSnxPMCB90kAkHG2CX7E3LkryWIVeBhYyvXfVhQKD2tzXTb1UyR4cEiRCfRXWyq3ml7MflVGtBouSv359N1bK66/JHh7q2vqEwBSRStExhBspSkR+bDCkoftr+30CG3CfjtP0UJGqyG4uTUIa6EAa++8WLhQ+ARA40kWkoS/lCzL0v57ROAxZDIEvWhBCoBosl6BlKPfH7ZubA8i/4gRVtUIaa/tcBZalmsNiCMmRRQGADS0Z82U/IzRwQWDSbNzjFxcX3oQx1Tqr0edaXS1kKSJj8B1PN2xbr8aR9AAAAAElFTkSuQmCC"
                      alt=""
                    />
                    <div className={Style.options_text}>
                      <p className={Style.options_p1}>Adresse d’arrivée</p>
                      {Data_a.length > 0 &&
                        Data_a.map((data, index) => (
                          <p key={index} className={Style.options_p2}>
                            {data.adresseArrivee}
                          </p>
                        ))}
                    </div>
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAmklEQVR4nO2UQQrCQAxF3xWkeBhX9RYu7FEKzrIHsB5HT9FzVMGdQkoxhaEwuphkIcyDLGbzfhLCQOFDC9yBAw4EQLTeQOMZIMDLapL6S8iYKw8qComQ1kIuiZBgKRetLkf6S77UHkf5qcjlr9YyUwGXhDzrzmO2HvIjsIvem2gSk87PwGMVUlmu5abdPle/pRkDcAV6XVcBdyYDBWPS6+oMXwAAAABJRU5ErkJggg=="
                      alt=""
                    />
                  </div>
                  <div className={Style.options}>
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC4klEQVR4nO2auYsUQRTGa73FE89VEUE8QAw0MZ1EZEAM3/b3VffYsMEkBoIGYjSbuakYmRrqf6GBgiImiuutqHgfrDfKyHN72LFpdufoa5b64EEHRXX/ul7Ve1WvjHFycnJycnJymosCsBnAOZLv1fRZRLaYuSaS6wCMk/xGshmznwDO+76/yQy6RGQNyTEAnxNA/zMAX0ieDYJggxk0ichya+0pAB9nA02wSfWGMAxXm7IrCIJlJI+TfNUDaNx0no/5vr/SlE0isshaWwfwMgXQuKu/VW8RkaVFc5p6vb5QQUk+Txs0Afy1godhuCR30EajMc9aKwDuZw2aYE/1J1cqlQW5wPq+v5vkRAGgcZsYGRnZmwfwHgBPSgD8huSBTGGttftqtdpaXaQAHCP5ogBQzdBOa+hTI7kzM2BOvUyTiDERWaUrJ4CT0d/OGvRT+3tJntCFTFfxLIEnk+Kkxt8o0fiQNmh7BtYKfzHPmswLuBmPk6Ojoyv0ORqNfmF/aI4tIsMa/kgeBfAwoV2+wIzFyWq1uljnebRZ+NoD6L/NhO6s2sLfvRnaFwPMhDgpIusVHMD3Dlz3F8kL1trtbaB3O3hf4cDNCOCRgovIfM/ztuo8VDdNaPcHwMUgCHYYY4ZIHiF5swuPKAcwp4Fu62gpjLV2m7oryd8tUE1ktG9r7UEAN3qYAuUC5rRdB1DVfjzP29UC9TzvEMlr/aziZQVuRh94RUOMGsnLKfRXbmBOfeRhtZT6yg4YU0mAA6YbYTqXppvDcIsW3SpNF5bo4jBc4pGaALwrW6alR00mK5G8VDZg3WJmBiwiwwCulgVYvwXARpOxhqJTiVsFAt/RQz09CjJ5qRGdO/VSdukD+HHr2Cg30BnAH2QI/CzXAlrapdNOgQstkaZZHJ8NuFRF8G6vP+godQFc3msO/VxwSQAenIss3VxhAnBGszUA+yPT53EtzXTckZOTk5OTk5OTGRD9BVmF6ng3jKSCAAAAAElFTkSuQmCC"
                      alt=""
                    />
                    <div className={Style.options_text}>
                      <p className={Style.options_p1}>Mes objets</p>
                      {Data_o.length > 0 &&
                        Data_o.map((data, index) => (
                          <p key={index} className={Style.options_p2}>
                            {data.quantities
                              .slice(0, -1)
                              .map((quantity, qIndex) => (
                                <div key={qIndex} style={{ display: 'inline' }}>
                                  {quantity}x, {data.objetList[qIndex]}
                                  {qIndex < data.quantities.length - 1
                                    ? ', '
                                    : ''}
                                </div>
                              ))}
                          </p>
                        ))}
                    </div>
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAmklEQVR4nO2UQQrCQAxF3xWkeBhX9RYu7FEKzrIHsB5HT9FzVMGdQkoxhaEwuphkIcyDLGbzfhLCQOFDC9yBAw4EQLTeQOMZIMDLapL6S8iYKw8qComQ1kIuiZBgKRetLkf6S77UHkf5qcjlr9YyUwGXhDzrzmO2HvIjsIvem2gSk87PwGMVUlmu5abdPle/pRkDcAV6XVcBdyYDBWPS6+oMXwAAAABJRU5ErkJggg=="
                      alt=""
                    />
                  </div>
                  <div className={Style.options}>
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABa0lEQVR4nO2WS0oDQRCGvwvoQgy+EvEmrn0NirjyBGoSN17EZVA3Pjbuo17AK+i4Ez2BE3FhXlJQgSFod/WkFRf5oWBo6u+PqqnpHhjrH2oRqAF3QAq8a6S6VgUqMYELQAPoAH1PdIFrYGlU6CbQMgCHIwOSotBDrSAUmq++XqTS7gjQPNxcednT3hdgG5jQ2NIBc7V93gI+80CnvvHI2qvDd2L5ZFzTK5WKVhUksaJrOw5fRzv5o2qedyatZag66YJo0uM9cIFvCwzQs3qnPXlNF/gpEPoBLKt315ObusBZAPQTWFPfrGe4+rp3FPCRemaAB0N+FqvVJfXcG/PT2MNljaYLXP1F8J4LXAm4/i40eob8tu8AEZ0aNhLgQJeG/AbGiz+LCH4D5jAq8VyLPQVeeVote2xYoQPVI/wIyNlfSEngoZJv7zojqgQc62RaqjwPeacWlfVquwEe9S+lpc9yOOxbPpmx+Gt9AX8ump0jUUyAAAAAAElFTkSuQmCC"
                      alt=""
                    />
                    <div className={Style.options_text}>
                      <p className={Style.options_p1}>Accès de Dèpart</p>
                      {Data.length > 0 &&
                        Data.map((data, index) => (
                          <p key={index} className={Style.options_p2}>
                            {data.isAtTruck} , {data.quantities},
                            {data.iselevator}
                          </p>
                        ))}
                    </div>
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAmklEQVR4nO2UQQrCQAxF3xWkeBhX9RYu7FEKzrIHsB5HT9FzVMGdQkoxhaEwuphkIcyDLGbzfhLCQOFDC9yBAw4EQLTeQOMZIMDLapL6S8iYKw8qComQ1kIuiZBgKRetLkf6S77UHkf5qcjlr9YyUwGXhDzrzmO2HvIjsIvem2gSk87PwGMVUlmu5abdPle/pRkDcAV6XVcBdyYDBWPS6+oMXwAAAABJRU5ErkJggg=="
                      alt=""
                    />
                  </div>
                  <div className={Style.options}>
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABa0lEQVR4nO2WS0oDQRCGvwvoQgy+EvEmrn0NirjyBGoSN17EZVA3Pjbuo17AK+i4Ez2BE3FhXlJQgSFod/WkFRf5oWBo6u+PqqnpHhjrH2oRqAF3QAq8a6S6VgUqMYELQAPoAH1PdIFrYGlU6CbQMgCHIwOSotBDrSAUmq++XqTS7gjQPNxcednT3hdgG5jQ2NIBc7V93gI+80CnvvHI2qvDd2L5ZFzTK5WKVhUksaJrOw5fRzv5o2qedyatZag66YJo0uM9cIFvCwzQs3qnPXlNF/gpEPoBLKt315ObusBZAPQTWFPfrGe4+rp3FPCRemaAB0N+FqvVJfXcG/PT2MNljaYLXP1F8J4LXAm4/i40eob8tu8AEZ0aNhLgQJeG/AbGiz+LCH4D5jAq8VyLPQVeeVote2xYoQPVI/wIyNlfSEngoZJv7zojqgQc62RaqjwPeacWlfVquwEe9S+lpc9yOOxbPpmx+Gt9AX8ump0jUUyAAAAAAElFTkSuQmCC"
                      alt=""
                    />
                    <div className={Style.options_text}>
                      <p className={Style.options_p1}>Accès d’arrivée</p>
                      {Data_a.length > 0 &&
                        Data_a.map((data, index) => (
                          <p key={index} className={Style.options_p2}>
                            {data.isAtTruck} , {data.quantities},
                            {data.iselevator}
                          </p>
                        ))}
                    </div>
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAmklEQVR4nO2UQQrCQAxF3xWkeBhX9RYu7FEKzrIHsB5HT9FzVMGdQkoxhaEwuphkIcyDLGbzfhLCQOFDC9yBAw4EQLTeQOMZIMDLapL6S8iYKw8qComQ1kIuiZBgKRetLkf6S77UHkf5qcjlr9YyUwGXhDzrzmO2HvIjsIvem2gSk87PwGMVUlmu5abdPle/pRkDcAV6XVcBdyYDBWPS6+oMXwAAAABJRU5ErkJggg=="
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`${Style.form} ${
                selectedOption === 'optionSansAide'
                  ? Style.selected
                  : Style.unselected
              }`}
              onClick={() => handleOptionChange('optionSansAide')}
            >
              {/* Contenu de la div */}
              <div className={Style.form_header}>
                <i className={`fas fa-arrow-left ${Style.icon}`} />
                <div className={Style.header_text}>
                  <h5> PRIX</h5>

                  <div className={Style.header_tm}>
                    <h3>
                      {Data_o.map((data, index) => {
                        // Initialisez le total pour chaque objet

                        const objectTotals = data.quantities
                          .slice(0, -1)
                          .map((quantity, qIndex) => {
                            const totalPrice = calculateTotalPrice(
                              data.objetList[qIndex],
                              quantity
                            );
                            total_s += totalPrice; // Ajoutez le prix calculé au total de l'objet actuel

                            return <div key={qIndex}></div>;
                          });

                        return (
                          <div key={index}>
                            {objectTotals}
                            <div> {total_s}</div>
                          </div>
                        );
                      })}
                    </h3>
                    <img
                      width="26"
                      height="26"
                      src="https://img.icons8.com/metro/26/000000/euro-pound-exchange.png"
                      alt="euro-pound-exchange"
                    />
                  </div>
                </div>
                <div className={Style.header_img}>
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACn0lEQVR4nO2ZTWsUQRCGHzT4gR9oAiIa8bLiUXNwzVX8C0b8D3o2mptiyOpBMYmKVw96CPGwkQieFDx4k8TgRfEDjRqjuRjNxktLQw0MSybbU1M7O8K8UBC6M2+91VPTVd0LJUqUsMAGoB8YAiaBOWAJ+Cu2JGN+7qL8r3+m4+gFRoDPgEtpn+RZz5E7eoA7wKpCeLM1gNvCmQvOAD8MhDfbInC6ncK7ZNVdm+2W+DLFVmAqB/FOrC4+TbAReJijeCf2yOpN5JE2LsHGLT5Y12Eb0IrvUe42flu8CRwHton5v8eU2+53oDuv1PEF7cg6nEeVRW8srfhexWo1WoiP0Kfk3pcmgBHFKvm0ibAJuAp8AeaBmoxFGFfwD6fZNjWvuRrjqK0x78ci9Cv4P4Y2gBpyb9tjHPNrzPuxCDuUPqohAQwpySvy/KGEed9SR+hW+hgMCWBSSf4GuA68TZi/G/NRVfqYCAlgTkm+nj0DtsR83FDyzIYE8NNY/HNgZ4z/MLCcoeVuCYtDSjytdsW49wCvM/A1WsuHFcMATja1Jq8y8jVCAvhmJN6LjeCL2AsDzsWQALKuUmT3YpwDRpyzIQE8MHJ2LcZ52YhzIiSAC4YfcEUKW1JtcO0oZH1GztphxwjE+wKIddpmzipn/aF8v5wtpg34hkmBvbLnZnEYvzI8kJFrJe2BxuNdgQIYTSu+YvDKpyUIL/5xBp4FYHfaAM4aBGBlp1CgXgDhTpM6Ud/yqwDip7RXiycKIL6e5XK3VoC06SIDXnZI+IL2g23Gn0CHHwyKnZMiNarZKpPwNMHRsrQH56TDjCr2JQlG09tc0VTYVjgIPAF+AzPS1/uj4eaALvY8cF8OHl9ldVflomBG+vlB6SoL8TNriRL85/gHzHa77qqhRwYAAAAASUVORK5CYII="
                    alt=""
                  />
                </div>
              </div>
              <div className={Style.option}>
                <div className={Style.option_avec}>
                  <div className={Style.option_text2}>Option Sans Aide</div>
                  <div className={Style.options}>
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAdElEQVR4nN2T7QqAMAhF9/4v1sdLnf4UBKmz1EVduDDh4hmbtiaL3V7dzX8MsJ4CR0g6o9jKz1ID7XYYACvfbUDQ9YClsPn0dGp6uvQbDiC5bsMBUREB0Fk0F8CqEQCpf0AGoPyJouL1MeXXe+CRCsh2PWAD9k4WHu2fPY4AAAAASUVORK5CYII="
                      alt=""
                    />
                    <div className={Style.options_text}>
                      <p className={Style.options_p1}>Date de Dèpart</p>
                      {Data.length > 0 &&
                        Data.map((data) => (
                          <p className={Style.options_p2}>
                            {data.dateValue}, à {data.hourValue}h,{' '}
                            {data.minuteValue} min{' '}
                          </p>
                        ))}
                    </div>
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAmklEQVR4nO2UQQrCQAxF3xWkeBhX9RYu7FEKzrIHsB5HT9FzVMGdQkoxhaEwuphkIcyDLGbzfhLCQOFDC9yBAw4EQLTeQOMZIMDLapL6S8iYKw8qComQ1kIuiZBgKRetLkf6S77UHkf5qcjlr9YyUwGXhDzrzmO2HvIjsIvem2gSk87PwGMVUlmu5abdPle/pRkDcAV6XVcBdyYDBWPS6+oMXwAAAABJRU5ErkJggg=="
                      alt=""
                    />
                  </div>

                  <div className={Style.options}>
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE0UlEQVR4nO2YfUwbZRzHnyjGGLniJPtDY4zLEnW2galx6ECJc+weOmEL8+7m3P6wd6Jmk2V/LDHGjGVrBTKjDq5mClMzElxQN8buOjM2eW1BNsgM0cGWTZS9cX1l9Ar0Ws4cUCijtFfTKyXhm3yTJk2efD53v+eeXgFYylKWErOoDw6uVeu5Eo2Ba1TrrXc0euuo2mDlNQauX2PgzmsM3L6cL52rQaJFrR/cotZb/9AYrGK4ri1zdGM078VpvgkzujcuNDd4psz6uFrPnY0ELvWFUvt1zOhx4kaPGChm9NRhla5HFwR+VQn3vMZgvSUHPr3E6sBo/u9g+Jny/Xi5Oz2u8GkGu0Zt4Jxy4DV6zltA812h4T2BckTF6NNxgbe9A1XndHvq0vS3BTkCeYfdLRHgxak7cTUu42TH4fd2AopXthFdGQf+uRsOPueLoSZ58J7AnjiiKLwDg1kSfKA3iPzLr+/vvRkKPvOQ4wJO877oBHj/VprPUEzARqD1wQJSOTz3DvFJe28w/EultmsYzbujgccnx0jI+7H6W0XgnVjOChuO+u8VkGoloGvnXrZTgl9tsA1upt3lGO3Jyq8Ske2HxIfxck8mTvM/SFc4nMCm6vpmlCX9OaeoFTEXsGPoB6HgA7UR6FjZR0cbM0rtufOtgRv5PNzIj4aC31J5qRmylCgVZcii2AsQ8OfwAnDcSa6jIq2D0XzRvfBvHbndibKFvoAAZKlfFBBA/wwnMLT35TqxFtwfaZ3sYjEJN3oGpjfu164r8PSu4SB4ETJUb8wFbDhqnQ/e8X52h2BWVcpdC6P576Y2LQfrPu6fBT8hQLoUEIDekPA71vd4Wx8ZEcyIIQqBzzCaH9H+9HnPHPhJASHmAnYcHZojsHXDjbGGVM5nUYmCWVUldy3cyB/Nr6lpCwk/WZsSAn2z4dFh78nH+iT4SQHkX7ERJMnZA5uOmU6FgRchS15WQuBE0CPT56la2RmAD+quSOu8Wbf/Xci8Nx5BoCbmAjYC3R0QGNanN4WAFwWLalRoR/LnW+PAWaiFJp0nPDylzDngJNCnpJPYVZTZEgp+ZpRUfsGiOuZtS35VbFyeLF5cluI1J79mbVt++G3TtlsR4VnSD03UE0CJuHZnfSO0pnjDCYSq14y4i34t6IsEDyevvgkoFa9FtUYwq8ajgZfuyFcN6zrkwENJoF73ClAyghk5Ho0Acz69STY8Qx0HSkdsTVkmmJEBOfB9LU+2yoWHLHXzjRM7UkE8IrQjuZFGydGW2r3RpBuTBc9Q49BEauMCPy1hRirmgx9pSxkgTNsdsq8+Q1WAeEc0gQd9FuTSnCeOBbm780zB1ShGpwer3fNQ3AUmJDqSnxPMCB90kAkHG2CX7E3LkryWIVeBhYyvXfVhQKD2tzXTb1UyR4cEiRCfRXWyq3ml7MflVGtBouSv359N1bK66/JHh7q2vqEwBSRStExhBspSkR+bDCkoftr+30CG3CfjtP0UJGqyG4uTUIa6EAa++8WLhQ+ARA40kWkoS/lCzL0v57ROAxZDIEvWhBCoBosl6BlKPfH7ZubA8i/4gRVtUIaa/tcBZalmsNiCMmRRQGADS0Z82U/IzRwQWDSbNzjFxcX3oQx1Tqr0edaXS1kKSJj8B1PN2xbr8aR9AAAAAElFTkSuQmCC"
                      alt=""
                    />
                    <div className={Style.options_text}>
                      <p className={Style.options_p1}>Adresse de Dèpart</p>
                      {Data.length > 0 &&
                        Data.map((data, index) => (
                          <p key={index} className={Style.options_p2}>
                            {data.adresseDepart}
                          </p>
                        ))}
                    </div>
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAmklEQVR4nO2UQQrCQAxF3xWkeBhX9RYu7FEKzrIHsB5HT9FzVMGdQkoxhaEwuphkIcyDLGbzfhLCQOFDC9yBAw4EQLTeQOMZIMDLapL6S8iYKw8qComQ1kIuiZBgKRetLkf6S77UHkf5qcjlr9YyUwGXhDzrzmO2HvIjsIvem2gSk87PwGMVUlmu5abdPle/pRkDcAV6XVcBdyYDBWPS6+oMXwAAAABJRU5ErkJggg=="
                      alt=""
                    />
                  </div>
                  <div className={Style.options}>
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE0UlEQVR4nO2YfUwbZRzHnyjGGLniJPtDY4zLEnW2galx6ECJc+weOmEL8+7m3P6wd6Jmk2V/LDHGjGVrBTKjDq5mClMzElxQN8buOjM2eW1BNsgM0cGWTZS9cX1l9Ar0Ws4cUCijtFfTKyXhm3yTJk2efD53v+eeXgFYylKWErOoDw6uVeu5Eo2Ba1TrrXc0euuo2mDlNQauX2PgzmsM3L6cL52rQaJFrR/cotZb/9AYrGK4ri1zdGM078VpvgkzujcuNDd4psz6uFrPnY0ELvWFUvt1zOhx4kaPGChm9NRhla5HFwR+VQn3vMZgvSUHPr3E6sBo/u9g+Jny/Xi5Oz2u8GkGu0Zt4Jxy4DV6zltA812h4T2BckTF6NNxgbe9A1XndHvq0vS3BTkCeYfdLRHgxak7cTUu42TH4fd2AopXthFdGQf+uRsOPueLoSZ58J7AnjiiKLwDg1kSfKA3iPzLr+/vvRkKPvOQ4wJO877oBHj/VprPUEzARqD1wQJSOTz3DvFJe28w/EultmsYzbujgccnx0jI+7H6W0XgnVjOChuO+u8VkGoloGvnXrZTgl9tsA1upt3lGO3Jyq8Ske2HxIfxck8mTvM/SFc4nMCm6vpmlCX9OaeoFTEXsGPoB6HgA7UR6FjZR0cbM0rtufOtgRv5PNzIj4aC31J5qRmylCgVZcii2AsQ8OfwAnDcSa6jIq2D0XzRvfBvHbndibKFvoAAZKlfFBBA/wwnMLT35TqxFtwfaZ3sYjEJN3oGpjfu164r8PSu4SB4ETJUb8wFbDhqnQ/e8X52h2BWVcpdC6P576Y2LQfrPu6fBT8hQLoUEIDekPA71vd4Wx8ZEcyIIQqBzzCaH9H+9HnPHPhJASHmAnYcHZojsHXDjbGGVM5nUYmCWVUldy3cyB/Nr6lpCwk/WZsSAn2z4dFh78nH+iT4SQHkX7ERJMnZA5uOmU6FgRchS15WQuBE0CPT56la2RmAD+quSOu8Wbf/Xci8Nx5BoCbmAjYC3R0QGNanN4WAFwWLalRoR/LnW+PAWaiFJp0nPDylzDngJNCnpJPYVZTZEgp+ZpRUfsGiOuZtS35VbFyeLF5cluI1J79mbVt++G3TtlsR4VnSD03UE0CJuHZnfSO0pnjDCYSq14y4i34t6IsEDyevvgkoFa9FtUYwq8ajgZfuyFcN6zrkwENJoF73ClAyghk5Ho0Acz69STY8Qx0HSkdsTVkmmJEBOfB9LU+2yoWHLHXzjRM7UkE8IrQjuZFGydGW2r3RpBuTBc9Q49BEauMCPy1hRirmgx9pSxkgTNsdsq8+Q1WAeEc0gQd9FuTSnCeOBbm780zB1ShGpwer3fNQ3AUmJDqSnxPMCB90kAkHG2CX7E3LkryWIVeBhYyvXfVhQKD2tzXTb1UyR4cEiRCfRXWyq3ml7MflVGtBouSv359N1bK66/JHh7q2vqEwBSRStExhBspSkR+bDCkoftr+30CG3CfjtP0UJGqyG4uTUIa6EAa++8WLhQ+ARA40kWkoS/lCzL0v57ROAxZDIEvWhBCoBosl6BlKPfH7ZubA8i/4gRVtUIaa/tcBZalmsNiCMmRRQGADS0Z82U/IzRwQWDSbNzjFxcX3oQx1Tqr0edaXS1kKSJj8B1PN2xbr8aR9AAAAAElFTkSuQmCC"
                      alt=""
                    />
                    <div className={Style.options_text}>
                      <p className={Style.options_p1}>Adresse d’arrivée</p>
                      {Data_a.length > 0 &&
                        Data_a.map((data, index) => (
                          <p key={index} className={Style.options_p2}>
                            {data.adresseArrivee}
                          </p>
                        ))}
                    </div>
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAmklEQVR4nO2UQQrCQAxF3xWkeBhX9RYu7FEKzrIHsB5HT9FzVMGdQkoxhaEwuphkIcyDLGbzfhLCQOFDC9yBAw4EQLTeQOMZIMDLapL6S8iYKw8qComQ1kIuiZBgKRetLkf6S77UHkf5qcjlr9YyUwGXhDzrzmO2HvIjsIvem2gSk87PwGMVUlmu5abdPle/pRkDcAV6XVcBdyYDBWPS6+oMXwAAAABJRU5ErkJggg=="
                      alt=""
                    />
                  </div>
                  <div className={Style.options}>
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC4klEQVR4nO2auYsUQRTGa73FE89VEUE8QAw0MZ1EZEAM3/b3VffYsMEkBoIGYjSbuakYmRrqf6GBgiImiuutqHgfrDfKyHN72LFpdufoa5b64EEHRXX/ul7Ve1WvjHFycnJycnJymosCsBnAOZLv1fRZRLaYuSaS6wCMk/xGshmznwDO+76/yQy6RGQNyTEAnxNA/zMAX0ieDYJggxk0ichya+0pAB9nA02wSfWGMAxXm7IrCIJlJI+TfNUDaNx0no/5vr/SlE0isshaWwfwMgXQuKu/VW8RkaVFc5p6vb5QQUk+Txs0Afy1godhuCR30EajMc9aKwDuZw2aYE/1J1cqlQW5wPq+v5vkRAGgcZsYGRnZmwfwHgBPSgD8huSBTGGttftqtdpaXaQAHCP5ogBQzdBOa+hTI7kzM2BOvUyTiDERWaUrJ4CT0d/OGvRT+3tJntCFTFfxLIEnk+Kkxt8o0fiQNmh7BtYKfzHPmswLuBmPk6Ojoyv0ORqNfmF/aI4tIsMa/kgeBfAwoV2+wIzFyWq1uljnebRZ+NoD6L/NhO6s2sLfvRnaFwPMhDgpIusVHMD3Dlz3F8kL1trtbaB3O3hf4cDNCOCRgovIfM/ztuo8VDdNaPcHwMUgCHYYY4ZIHiF5swuPKAcwp4Fu62gpjLV2m7oryd8tUE1ktG9r7UEAN3qYAuUC5rRdB1DVfjzP29UC9TzvEMlr/aziZQVuRh94RUOMGsnLKfRXbmBOfeRhtZT6yg4YU0mAA6YbYTqXppvDcIsW3SpNF5bo4jBc4pGaALwrW6alR00mK5G8VDZg3WJmBiwiwwCulgVYvwXARpOxhqJTiVsFAt/RQz09CjJ5qRGdO/VSdukD+HHr2Cg30BnAH2QI/CzXAlrapdNOgQstkaZZHJ8NuFRF8G6vP+godQFc3msO/VxwSQAenIss3VxhAnBGszUA+yPT53EtzXTckZOTk5OTk5OTGRD9BVmF6ng3jKSCAAAAAElFTkSuQmCC"
                      alt=""
                    />
                    <div className={Style.options_text}>
                      <p className={Style.options_p1}>Mes objets</p>
                      {Data_o.length > 0 &&
                        Data_o.map((data, index) => (
                          <p key={index} className={Style.options_p2}>
                            {data.quantities
                              .slice(0, -1)
                              .map((quantity, qIndex) => (
                                <div key={qIndex} style={{ display: 'inline' }}>
                                  {quantity}x, {data.objetList[qIndex]}
                                  {qIndex < data.quantities.length - 1
                                    ? ', '
                                    : ''}
                                </div>
                              ))}
                          </p>
                        ))}
                    </div>
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAmklEQVR4nO2UQQrCQAxF3xWkeBhX9RYu7FEKzrIHsB5HT9FzVMGdQkoxhaEwuphkIcyDLGbzfhLCQOFDC9yBAw4EQLTeQOMZIMDLapL6S8iYKw8qComQ1kIuiZBgKRetLkf6S77UHkf5qcjlr9YyUwGXhDzrzmO2HvIjsIvem2gSk87PwGMVUlmu5abdPle/pRkDcAV6XVcBdyYDBWPS6+oMXwAAAABJRU5ErkJggg=="
                      alt=""
                    />
                  </div>
                  <div className={Style.options}>
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABa0lEQVR4nO2WS0oDQRCGvwvoQgy+EvEmrn0NirjyBGoSN17EZVA3Pjbuo17AK+i4Ez2BE3FhXlJQgSFod/WkFRf5oWBo6u+PqqnpHhjrH2oRqAF3QAq8a6S6VgUqMYELQAPoAH1PdIFrYGlU6CbQMgCHIwOSotBDrSAUmq++XqTS7gjQPNxcednT3hdgG5jQ2NIBc7V93gI+80CnvvHI2qvDd2L5ZFzTK5WKVhUksaJrOw5fRzv5o2qedyatZag66YJo0uM9cIFvCwzQs3qnPXlNF/gpEPoBLKt315ObusBZAPQTWFPfrGe4+rp3FPCRemaAB0N+FqvVJfXcG/PT2MNljaYLXP1F8J4LXAm4/i40eob8tu8AEZ0aNhLgQJeG/AbGiz+LCH4D5jAq8VyLPQVeeVote2xYoQPVI/wIyNlfSEngoZJv7zojqgQc62RaqjwPeacWlfVquwEe9S+lpc9yOOxbPpmx+Gt9AX8ump0jUUyAAAAAAElFTkSuQmCC"
                      alt=""
                    />
                    <div className={Style.options_text}>
                      <p className={Style.options_p1}>Accès de Dèpart</p>
                      {Data.length > 0 &&
                        Data.map((data, index) => (
                          <p key={index} className={Style.options_p2}>
                            {data.isAtTruck} , {data.quantities},
                            {data.iselevator}
                          </p>
                        ))}
                    </div>
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAmklEQVR4nO2UQQrCQAxF3xWkeBhX9RYu7FEKzrIHsB5HT9FzVMGdQkoxhaEwuphkIcyDLGbzfhLCQOFDC9yBAw4EQLTeQOMZIMDLapL6S8iYKw8qComQ1kIuiZBgKRetLkf6S77UHkf5qcjlr9YyUwGXhDzrzmO2HvIjsIvem2gSk87PwGMVUlmu5abdPle/pRkDcAV6XVcBdyYDBWPS6+oMXwAAAABJRU5ErkJggg=="
                      alt=""
                    />
                  </div>
                  <div className={Style.options}>
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABa0lEQVR4nO2WS0oDQRCGvwvoQgy+EvEmrn0NirjyBGoSN17EZVA3Pjbuo17AK+i4Ez2BE3FhXlJQgSFod/WkFRf5oWBo6u+PqqnpHhjrH2oRqAF3QAq8a6S6VgUqMYELQAPoAH1PdIFrYGlU6CbQMgCHIwOSotBDrSAUmq++XqTS7gjQPNxcednT3hdgG5jQ2NIBc7V93gI+80CnvvHI2qvDd2L5ZFzTK5WKVhUksaJrOw5fRzv5o2qedyatZag66YJo0uM9cIFvCwzQs3qnPXlNF/gpEPoBLKt315ObusBZAPQTWFPfrGe4+rp3FPCRemaAB0N+FqvVJfXcG/PT2MNljaYLXP1F8J4LXAm4/i40eob8tu8AEZ0aNhLgQJeG/AbGiz+LCH4D5jAq8VyLPQVeeVote2xYoQPVI/wIyNlfSEngoZJv7zojqgQc62RaqjwPeacWlfVquwEe9S+lpc9yOOxbPpmx+Gt9AX8ump0jUUyAAAAAAElFTkSuQmCC"
                      alt=""
                    />
                    <div className={Style.options_text}>
                      <p className={Style.options_p1}>Accès d’arrivée</p>
                      {Data_a.length > 0 &&
                        Data_a.map((data, index) => (
                          <p key={index} className={Style.options_p2}>
                            {data.isAtTruck} , {data.quantities},
                            {data.iselevator}
                          </p>
                        ))}
                    </div>
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAmklEQVR4nO2UQQrCQAxF3xWkeBhX9RYu7FEKzrIHsB5HT9FzVMGdQkoxhaEwuphkIcyDLGbzfhLCQOFDC9yBAw4EQLTeQOMZIMDLapL6S8iYKw8qComQ1kIuiZBgKRetLkf6S77UHkf5qcjlr9YyUwGXhDzrzmO2HvIjsIvem2gSk87PwGMVUlmu5abdPle/pRkDcAV6XVcBdyYDBWPS6+oMXwAAAABJRU5ErkJggg=="
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={Style.button_warpper}>
            <Link to="/login">
              <button
                className={Style.form_button}
                onClick={() => {
                  dispatch(
                    addest({
                      totale: totale,
                    })
                  );
                }}
              >
                <strong>passer au paiment</strong>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Estimation;

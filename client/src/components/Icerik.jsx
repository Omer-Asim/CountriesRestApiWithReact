import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Icerik = () => {
  let parametreler = useParams();
  const [ulkeBilgileri, setUlkeBilgileri] = useState([
    {
      languages: [{}],
    },
  ]);
  const [yuklenme, setYuklenme] = useState(false);

  function ulkeBilgileriniAl() {
    axios
      .get("https://restcountries.eu/rest/v2/name/" + parametreler.id)
      .then(function (ulke) {
        console.log(ulke.data);
        setUlkeBilgileri(ulke.data[0]);
        setYuklenme(true);
      });
  }

  useEffect(ulkeBilgileriniAl, []);

  return (
    <div>
      {yuklenme && (
        <div className="container pt-2">
          <tbody>
            <tr>
              <td width="100px">
                <b>İsim</b>
              </td>
              <td>
                {ulkeBilgileri.name}
                <img width="24px" src={ulkeBilgileri.flag} alt="" />
              </td>
            </tr>
            <tr>
              <td width="100px">
                <b>Kısaltma</b>
              </td>
              <td>{ulkeBilgileri.alpha3Code}</td>
            </tr>
            <tr>
              <td width="100px">
                <b>Nüfus</b>
              </td>
              <td>{ulkeBilgileri.population}</td>
            </tr>
            <tr>
              <td width="100px">
                <b>Dil</b>
              </td>
              <td>{ulkeBilgileri.languages[0].name}</td>
            </tr>
            <tr>
              <td width="100px">
                <b>Başkent</b>
              </td>
              <td>{ulkeBilgileri.capital}</td>
            </tr>
            <tr>
              <td width="100px">
                <b>Tel. Kod</b>
              </td>
              <td>+{ulkeBilgileri.callingCodes[0]}</td>
            </tr>
          </tbody>
        </div>
      )}
    </div>
  );
};

export default Icerik;

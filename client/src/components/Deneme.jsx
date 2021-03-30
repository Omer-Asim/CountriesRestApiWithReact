import axios from "axios";
import React, { useEffect, useState } from "react";
import UlkeListe from "./UlkeListe";

const Deneme = () => {
  const [yazilar, SetYazilar] = useState([]);
  function UlkeleriAl() {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then(function (gelenVeri) {
        console.log(gelenVeri.data);
        SetYazilar(gelenVeri.data);
      });
  }
  useEffect(UlkeleriAl, []);

  return (
    <React.StrictMode>
      <header className="bg-dark container-fluid ">
        <div className="text-white d-flex justify-content-center ">
          SELAMLAR
        </div>
      </header>

      <section className="bg-light shadow mt-2">
        <div>
          {yazilar.map(function (data) {
            return <UlkeListe ulkeisim={data.name} bayrak={data.flag} />;
          })}
        </div>
      </section>
    </React.StrictMode>
  );
};

export default Deneme;

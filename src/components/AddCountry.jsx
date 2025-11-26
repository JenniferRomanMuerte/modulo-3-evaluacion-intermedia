import "../styles/AddCountry.scss";
import { useState } from "react";

const AddCountry = ({ UpdateCountries }) => {
  const [formData, setFormData] = useState({
    name: "",
    capital: "",
    flag: "",
    region: "",
  });

  const addCountry = (ev) => {
    ev.preventDefault();
    // Transformamos el formulario en la estructura correcta
    const newCountry = {
      name: {
        common: formData.name,
        official: formData.name,
        nativeName: {},
      },
      capital: [formData.capital],
      flag: formData.flag,
      region: formData.region,
    };

    UpdateCountries(newCountry);

    // Reiniciar formulario (SIEMPRE strings)
    setFormData({
      name: "",
      capital: "",
      flag: "",
      region: "",
    });
  };

  const handleInput = (ev) => {
    setFormData({
      ...formData,
      [ev.target.id]: ev.target.value,
    });
  };

  return (
    <form className="formCountry" onSubmit={addCountry}>
      <h2 className="formCountry__title">Añade un país</h2>
      <section className="formCountry__inputs">
        <input
          className="formCountry__inputs--input"
          type="text"
          name="name"
          id="name"
          placeholder="Nombre del país"
          value={formData.name}
          onInput={handleInput}
        />
        <input
          className="formCountry__inputs--input"
          type="text"
          name="capital"
          id="capital"
          placeholder="Capital"
          value={formData.capital}
          onInput={handleInput}
        />
        <input
          className="formCountry__inputs--input"
          type="text"
          name="flag"
          id="flag"
          placeholder="Icono de bandera"
          value={formData.flag}
          onInput={handleInput}
        />
        <input
          className="formCountry__inputs--input"
          type="text"
          name="region"
          id="region"
          placeholder="Continente"
          value={formData.region}
          onInput={handleInput}
        />
        <button className="formCountry__inputs--button">Añadir País</button>
      </section>
    </form>
  );
};

export default AddCountry;

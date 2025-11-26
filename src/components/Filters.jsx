import "../styles/Filters.scss";

const Filters = ({ searchInput, UpdateSearchInput, countries }) => {
  const handleName = (ev) => {
    UpdateSearchInput({...searchInput,
    nameInput: ev.target.value
  });
  };
  const handleRegion = (ev) => {
     UpdateSearchInput({...searchInput,
    regionInput: ev.target.value
  });
  };

  return (
    <form className="form">
      <h2 className="form__title">Filtros</h2>
      <div className="form__filter">
        <label className="form__filter--label" htmlFor="name">Por país:</label>
        <input className="form__filter--input" type="text" name="name" id="name" placeholder="Ejemplo: Australia..." onInput={handleName} />
      </div>
      <div className="form__filter">
      <label className="form__filter--label" htmlFor="region">Por Contiente:</label>
        <select
         className="form__filter--input"
        id="region"
        name="region"
        defaultValue=""
        onChange={handleRegion}
        >
          <option value="" disabled>
            Selecciona el contienente:
          </option>
          {[...new Set(countries.map((c) => c.region))].map(
            (country, index) => {
              return (
                <option key={index} value={country}>
                  {country}
                </option>
              );
            }
          )}
        </select>
      </div>
    </form>
  );
};

export default Filters;

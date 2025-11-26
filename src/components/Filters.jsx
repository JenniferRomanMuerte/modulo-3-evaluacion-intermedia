import "../styles/Filters.scss";

const Filters = ({ UpdateSearchText, UpdateSearchRegion, countries }) => {
  const handleName = (ev) => {
    UpdateSearchText(ev.target.value);
  };
  const handleRegion = (ev) => {
    UpdateSearchRegion(ev.target.value);
  };

  return (
    <form className="form">
      <h2 className="form__title">Filtros</h2>
      <div className="form__filter">
        <label htmlFor="name">Por país:</label>
        <input type="text" name="name" id="name" onInput={handleName} />
      </div>
      <div className="form__filter">
      <label htmlFor="region">Por Contiente:</label>
        <select
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
              console.log(country);
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

import "../styles/CountryList.scss";

const CountryItem = ({id,flag,name,capital,region}) => {



  return (
    <li className="list__item" id={id}>
      <div className="list__item--flag">{flag}</div>
      <h3 className="list__item--name">{name}</h3>
      <span className="list__item--span">{capital}</span>
      <span className="list__item--span">{region}</span>
      <button className="list__item--button">Eliminar</button>
    </li>
  );
};

export default CountryItem;
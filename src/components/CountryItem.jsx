import "../styles/CountryList.scss";

const CountryItem = ({flag,name,capital,region}) => {



  return (
    <li className="list__item">
      <div className="list__item--flag">{flag}</div>
      <h3 className="list__item--name">{name}</h3>
      <span className="list__item--span">{capital}</span>
      <span className="list__item--span">{region}</span>
    </li>
  );
};

export default CountryItem;
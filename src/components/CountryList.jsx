import CountryItem from "./CountryItem";
import "../styles/CountryList.scss";
const CountryList = ({ countries, searchName, searchRegion}) => {
  const renderCountries = () => {
    return(
    countries
      .filter((country) =>
        country.name.common.toLowerCase().includes(searchName.toLowerCase())
      )
      .filter((country) =>
        country.region.toLowerCase().includes(searchRegion.toLowerCase())
      )
      .map((countryItem, index) => {
        return (
          <CountryItem
            key={index}
            id={index}
            flag={countryItem.flag}
            name={countryItem.name.common}
            capital={countryItem.capital}
            region={countryItem.region}
          />
        );
      }));
  };

  return <ul className="list">{renderCountries()}</ul>;
};

export default CountryList;

import CountryItem from "./CountryItem";
import "../styles/CountryList.scss";
const CountryList = ({ countries, searchText}) => {
  const renderCountries = () => {
    return(
    countries
      .filter((country) =>
        country.name.common.toLowerCase().includes(searchText.toLowerCase())
      )
      .map((countryItem, index) => {
        return (
          <CountryItem
            key={index}
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

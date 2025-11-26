// Fichero src/components/App.jsx
import { useState } from "react";
import "../styles/App.scss";
import Header from "./Header";
import CountryList from "./CountryList";
import Filters from "./Filters";

const initialCountries = [
  {
    name: {
      common: "Spain",
      official: "Kingdom of Spain",
      nativeName: {
        spa: {
          official: "Reino de España",
          common: "España",
        },
      },
    },
    capital: ["Madrid"],
    flag: "🇪🇸",
    region: "Europe",
  },
  {
    name: {
      common: "France",
      official: "French Republic",
      nativeName: {
        fra: {
          official: "République française",
          common: "France",
        },
      },
    },
    capital: ["Paris"],
    flag: "🇫🇷",
    region: "Europe",
  },
  {
    name: {
      common: "Germany",
      official: "Federal Republic of Germany",
      nativeName: {
        deu: {
          official: "Bundesrepublik Deutschland",
          common: "Deutschland",
        },
      },
    },
    capital: ["Berlin"],
    flag: "🇩🇪",
    region: "Europe",
  },
  {
    name: {
      common: "United Kingdom",
      official: "United Kingdom of Great Britain and Northern Ireland",
      nativeName: {
        eng: {
          official: "United Kingdom of Great Britain and Northern Ireland",
          common: "United Kingdom",
        },
      },
    },
    capital: ["London"],
    flag: "🇬🇧",
    region: "Europe",
  },
  {
    name: {
      common: "United States",
      official: "United States of America",
      nativeName: {
        eng: {
          official: "United States of America",
          common: "United States",
        },
      },
    },
    capital: ["Washington, D.C."],
    flag: "🇺🇸",
    region: "North America",
  },
  {
    name: {
      common: "Canada",
      official: "Canada",
      nativeName: {
        eng: {
          official: "Canada",
          common: "Canada",
        },
        fra: {
          official: "Canada",
          common: "Canada",
        },
      },
    },
    capital: ["Ottawa"],
    flag: "🇨🇦",
    region: "North America",
  },
  {
    name: {
      common: "Mexico",
      official: "United Mexican States",
      nativeName: {
        spa: {
          official: "Estados Unidos Mexicanos",
          common: "México",
        },
      },
    },
    capital: ["Mexico City"],
    flag: "🇲🇽",
    region: "North America",
  },
  {
    name: {
      common: "Japan",
      official: "Japan",
      nativeName: {
        jpn: {
          official: "日本国",
          common: "日本",
        },
      },
    },
    capital: ["Tokyo"],
    flag: "🇯🇵",
    region: "Asia",
  },
  {
    name: {
      common: "China",
      official: "People's Republic of China",
      nativeName: {
        zho: {
          official: "中华人民共和国",
          common: "中国",
        },
      },
    },
    capital: ["Beijing"],
    flag: "🇨🇳",
    region: "Asia",
  },
  {
    name: {
      common: "Brazil",
      official: "Federative Republic of Brazil",
      nativeName: {
        por: {
          official: "República Federativa do Brasil",
          common: "Brasil",
        },
      },
    },
    capital: ["Brasília"],
    flag: "🇧🇷",
    region: "South America",
  },
  {
    name: {
      common: "Argentina",
      official: "Argentine Republic",
      nativeName: {
        spa: {
          official: "República Argentina",
          common: "Argentina",
        },
      },
    },
    capital: ["Buenos Aires"],
    flag: "🇦🇷",
    region: "South America",
  },
  {
    name: {
      common: "Australia",
      official: "Commonwealth of Australia",
      nativeName: {
        eng: {
          official: "Commonwealth of Australia",
          common: "Australia",
        },
      },
    },
    capital: ["Canberra"],
    flag: "🇦🇺",
    region: "Oceania",
  },
  {
    name: {
      common: "India",
      official: "Republic of India",
      nativeName: {
        hin: {
          official: "भारत गणराज्य",
          common: "भारत",
        },
        eng: {
          official: "Republic of India",
          common: "India",
        },
      },
    },
    capital: ["New Delhi"],
    flag: "🇮🇳",
    region: "Asia",
  },
  {
    name: {
      common: "South Korea",
      official: "Republic of Korea",
      nativeName: {
        kor: {
          official: "대한민국",
          common: "한국",
        },
      },
    },
    capital: ["Seoul"],
    flag: "🇰🇷",
    region: "Asia",
  },
  {
    name: {
      common: "Russia",
      official: "Russian Federation",
      nativeName: {
        rus: {
          official: "Российская Федерация",
          common: "Россия",
        },
      },
    },
    capital: ["Moscow"],
    flag: "🇷🇺",
    region: "Europe",
  },
  {
    name: {
      common: "Portugal",
      official: "Portuguese Republic",
      nativeName: {
        por: {
          official: "República Portuguesa",
          common: "Portugal",
        },
      },
    },
    capital: ["Lisbon"],
    flag: "🇵🇹",
    region: "Europe",
  },
  {
    name: {
      common: "Netherlands",
      official: "Kingdom of the Netherlands",
      nativeName: {
        nld: {
          official: "Koninkrijk der Nederlanden",
          common: "Nederland",
        },
      },
    },
    capital: ["Amsterdam"],
    flag: "🇳🇱",
    region: "Europe",
  },
  {
    name: {
      common: "Sweden",
      official: "Kingdom of Sweden",
      nativeName: {
        swe: {
          official: "Konungariket Sverige",
          common: "Sverige",
        },
      },
    },
    capital: ["Stockholm"],
    flag: "🇸🇪",
    region: "Europe",
  },
  {
    name: {
      common: "Norway",
      official: "Kingdom of Norway",
      nativeName: {
        nor: {
          official: "Kongeriket Norge",
          common: "Norge",
        },
      },
    },
    capital: ["Oslo"],
    flag: "🇳🇴",
    region: "Europe",
  },
  {
    name: {
      common: "Turkey",
      official: "Republic of Turkey",
      nativeName: {
        tur: {
          official: "Türkiye Cumhuriyeti",
          common: "Türkiye",
        },
      },
    },
    capital: ["Ankara"],
    flag: "🇹🇷",
    region: "Asia",
  },
];

function App() {
  const [countries, setCountries] = useState(initialCountries);
  const [searchName, setSearchName] = useState("");
  const [searchRegion, setSearchRegion] = useState("");

  const UpdateSearchName = (value) => {
    setSearchName(value);
  };
  const UpdateSearchRegion = (value) => {
    setSearchRegion(value);
  };


  return (
    <>
      <Header />
      <main>
        <Filters
          UpdateSearchText = {UpdateSearchName}
          UpdateSearchRegion = {UpdateSearchRegion}
          countries = {countries}
        />
        <CountryList countries={countries} searchName={searchName} searchRegion = {searchRegion}/>
      </main>
    </>
  );
}

export default App;

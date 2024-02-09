import { useEffect, useState } from "react";
import countries_json from "./countries.json";
import { load_countries } from "./country_utils";

export default function useCountries() {
  const [countries, setCountries] = useState([]);
  const [countriesDict, setCountriesDict] = useState([]);

  useEffect(() => {
    console.info(countries_json)
    let allCountries = load_countries(countries_json);
    setCountries(allCountries);
    setCountriesDict(Object.fromEntries(allCountries.map(country => [country.name, country])));
  }, []);

  return [countries, countriesDict];
}

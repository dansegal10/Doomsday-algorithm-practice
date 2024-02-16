import countries_json from "./countries.json";
import { load_countries } from "./country_utils";

export default function getCountries() {
  console.info("Getting countries...")
  let allCountries = load_countries(countries_json);
  let countriesDIct = Object.fromEntries(
    allCountries.map((country) => [country.name, country])
  );
  return [allCountries, countriesDIct];
}

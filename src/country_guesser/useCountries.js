import countries_json from "./countries.json";
import territories_json from "./territories.json";
import { load_countries } from "./country_utils";

export default function getCountries(use_territories = false) {
  console.info("Getting countries...");
  let allCountries = load_countries(countries_json);
  if (use_territories) {
    console.info("Loading territories as well");
    allCountries = allCountries.concat(load_countries(territories_json));
  }
  let countriesDIct = Object.fromEntries(
    allCountries.map((country) => [country.name, country])
  );
  return [allCountries, countriesDIct];
}

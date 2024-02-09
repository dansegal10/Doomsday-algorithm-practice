class Country {
  constructor(name, code_2, code_3, latitude, longitude, flag) {
    this.name = name;
    this.code_2 = code_2;
    this.code_3 = code_3;
    this.latitude = latitude;
    this.longitude = longitude;
    this.flag = flag;
  }
}

function load_country(country_object) {
  return new Country(
    country_object["country"],
    country_object["code_2"],
    country_object["code_3"],
    country_object["latitude"],
    country_object["longitude"],
    country_object["emoji_flag"]
  );
}

export function load_countries(countries_object) {
  let countries = Object.values(countries_object).map((country) =>
    load_country(country)
  );
  return countries;
}

export function calcCrow(country1, country2) {

  let lat1 = country1.latitude;
  let lon1 = country1.longitude;
  let lat2 = country2.latitude;
  let lon2 = country2.longitude;
  let R = 6371; // km
  let dLat = toRad(lat2 - lat1);
  let dLon = toRad(lon2 - lon1);
  lat1 = toRad(lat1);
  lat2 = toRad(lat2);

  let a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
  let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  let d = R * c;
  return d;
}

// Converts numeric degrees to radians
function toRad(Value) {
  return (Value * Math.PI) / 180;
}

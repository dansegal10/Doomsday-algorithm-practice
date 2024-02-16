export class Country {
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
    country_object["code_2"].toLowerCase(),
    country_object["code_3"].toLowerCase(),
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

function calculateDirection(sourceLat, sourceLng, targetLat, targetLng) {
  const dLat = toRad(targetLat - sourceLat);
  const dLng = toRad(targetLng - sourceLng);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(sourceLat)) *
      Math.cos(toRad(targetLat)) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  // Calculate the bearing in degrees
  let bearing = toDegrees(
    Math.atan2(
      Math.sin(dLng) * Math.cos(toRad(targetLat)),
      Math.cos(toRad(sourceLat)) * Math.sin(toRad(targetLat)) -
        Math.sin(toRad(sourceLat)) * Math.cos(toRad(targetLat)) * Math.cos(dLng)
    )
  );

  // Ensure the bearing is positive
  bearing = (bearing + 360) % 360;

  return bearing;
}

function toDegrees(radians) {
  return radians * (180 / Math.PI);
}

export function calcDirection(country1, country2) {
  return calculateDirection(country1.latitude, country1.longitude, country2.latitude, country2.longitude);
}

// Converts numeric degrees to radians
function toRad(Value) {
  return (Value * Math.PI) / 180;
}

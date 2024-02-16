import json
from pathlib import Path

# https://restcountries.com/v3.1/all
countries_path = Path(
    r"C:\Users\user\Desktop\programming\html\Doomsday-algorithm-practice\src\country_guesser\more_json.json")
countries2_path = Path(
    r"C:\Users\user\Desktop\programming\html\Doomsday-algorithm-practice\src\country_guesser\countries2.json")
territories_path = Path(
    r"C:\Users\user\Desktop\programming\html\Doomsday-algorithm-practice\src\country_guesser\territories.json")
countries = json.loads(countries_path.read_bytes())


def format_country(old):
    return {
        "name": old["name"]["common"],
        "official_name": old["name"]["official"],
        "population": old["population"],
        "continents": old["continents"],
        # "startOfWeek": old["startOfWeek"],
        "lat": old["latlng"][0],
        "long": old["latlng"][1],
        "independent": old["independent"] if "independent" in old else False,
        "code_2": old["cca2"],
        "code_3": old["cca3"],
        "flag": old["flag"]
    }


res_countries = []
res_other = []
for country in countries:
    country = format_country(country)
    independent = country["independent"]
    del country["independent"]
    if independent:
        res_countries.append(country)
    else:
        res_other.append(country)

countries2_path.write_text(json.dumps(res_countries, ensure_ascii=False), "utf8")
territories_path.write_text(json.dumps(res_other, ensure_ascii=False), "utf8")

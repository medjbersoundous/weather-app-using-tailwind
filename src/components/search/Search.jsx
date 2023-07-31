import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { getCitiesByPrefix } from "../../Api";
{
  /*import { url, geoApiOptions } from "../../api";*/
}
const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };
  const loadOptions = async (inputValue) => {
    const cities = await getCitiesByPrefix(inputValue);
    return {
      options: cities,
    };
  };
  {
    /**   const loadOptions = async (inputValue) => {
    return fetch(
      `${url}?minPopulation=1000000&namePrefix=${inputValue}`,
      geoApiOptions
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.countryCode}`,
            };
          }),
        };
      })
      .catch((err) => console.error(err));
  };*/
  }

  return (
    <>
      <AsyncPaginate
        placeholder="Search for a city"
        debounceTimeout={600}
        value={search}
        onChange={handleOnChange}
        loadOptions={loadOptions}
        className="w-3/4 mx-auto my-7"
      />
    </>
  );
};

export default Search;
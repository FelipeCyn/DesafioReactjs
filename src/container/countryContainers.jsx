import axios from "axios";
import { useState } from "react";
import { createContainer } from "unstated-next";
import { useNavigate } from "react-router-dom";
import { formatCountriesResponse } from "./utils";

const useCountry = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();
  const storedValues = localStorage.getItem("Buscas");

  const searchCountry = async (country) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://restcountries.com/v3.1/name/${country}`
      );
      const formattedData = formatCountriesResponse(response.data);
      setData(formattedData);
    } catch (error) {
      setError(true);
    } finally {
      setTimeout(() => {
        navigate(checked ? "/result" : "/alternative-result");
        const storedValues = localStorage.getItem("Buscas");
        setLoading(false);
        if (storedValues !== null) {
          const existingValues = JSON.parse(storedValues);
          existingValues.push(country);
          localStorage.setItem("Buscas", JSON.stringify(existingValues));
        } else {
          localStorage.setItem("Buscas", JSON.stringify([country]));
        }
      }, 3000);
    }
  };

  return {
    data,
    searchCountry,
    storedValues,
    setChecked,
    checked,
    error,
    setError,
    loading,
  };
};

export const CountryContainer = createContainer(useCountry);

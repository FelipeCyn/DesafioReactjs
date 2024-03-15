import { Box } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CustomHeader from "../components/CustomHeader";
import CustomTable from "../components/CustomTable";
import { CountryContainer } from "../container/countryContainers";

const countryColumns = [
  {
    title: "Bandeira",
    customComponent: (item) => (
      <img
        alt='Bandeira do pais'
        style={{ height: 50, width: 50, objectFit: "contain" }}
        src={item.image.png}
      />
    ),
  },
  {
    title: "Nome",
    key: "name",
  },
  {
    title: "Capital",
    key: "capital",
  },
  {
    title: "População",
    key: "population",
  },
  {
    title: "Moeda",
    key: "currencies",
  },
  {
    title: "Linguas",
    key: "languages",
  },
];

export const Result = () => {
  const { data } = CountryContainer.useContainer();
  const navigate = useNavigate();

  useEffect(() => {
    if (!data) {
      navigate("/");
    }
  }, []);

  if (!data) return null;

  return (
    <Box height='100vh' bgcolor='white'>
      <CustomHeader title='Resultados encontrados' path='/' />
      <Box height='85%' px={4} py={4}>
        <CustomTable bodies={data} headers={countryColumns} />
      </Box>
    </Box>
  );
};

export default Result;

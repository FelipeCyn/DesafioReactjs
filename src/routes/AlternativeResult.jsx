import { Box, Grid } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CustomCard from "../components/CustomCard";
import CustomHeader from "../components/CustomHeader";
import { CountryContainer } from "../container/countryContainers";

export const AlternativeResult = () => {
  const { data } = CountryContainer.useContainer();
  const navigate = useNavigate();

  useEffect(() => {
    if (!data) {
      navigate("/");
    }
  }, []);

  if (!data) return null;

  return (
    <Box height='100vh'>
      <CustomHeader title='Resultados encontrados' path='/' />

      <Grid py={4} px={4} justifyContent='center' gap={4} container>
        {data.map((item) => {
          return (
            <Grid item lg={2} md={2} sm={4} xs={12}>
              <CustomCard
                image={item.image}
                countryName={item.name}
                capital={item.capital}
                population={item.population}
                currencies={item.currencies}
                language={item.languages}
              />
            </Grid>
          );
        })}
      </Grid>
      <Grid container mt={2}>
        <Grid
          width='100%'
          sm={12}
          xs={6}
          md={6}
          display='flex'
          alignItems='center'
          justifyContent='center'
          flexDirection='column'
          item
        ></Grid>
      </Grid>
    </Box>
  );
};

export default AlternativeResult;

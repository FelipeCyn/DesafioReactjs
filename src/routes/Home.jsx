import { Box, Typography } from "@mui/material";
import { useState } from "react";
import CustomButton from "../components/CustomButton";
import CustomCheckBox from "../components/CustomCheckBox";
import CustomInput from "../components/CustomInput";
import { CountryContainer } from "../container/countryContainers";
import background from "../assets/terragif.gif";
import CustomTable from "../components/CustomTable";
import SearchIcon from "@mui/icons-material/Search";
import CircularProgress from "@mui/material/CircularProgress";

export const Home = () => {
  const [country, setCountry] = useState("");
  const {
    searchCountry,
    storedValues,
    setChecked,
    checked,
    error,
    setError,
    loading,
  } = CountryContainer.useContainer();

  const handleCheckBox = (event) => {
    setChecked(event.target.checked);
  };

  const handleInput = (event) => {
    setCountry(event.target.value);
    setError(false);
  };

  const historicColumns = [
    {
      title: "Pesquisa",
      key: "search",
    },
    {
      key: "research",
      customComponent: (item) => (
        <CustomButton onClick={() => searchCountry(item.search)}>
          Pesquisar novamente
        </CustomButton>
      ),
    },
  ];

  const historic = storedValues
    ? JSON.parse(storedValues).map((item) => ({
        search: item,
      }))
    : [];

  return (
    <Box
      bgcolor='blue'
      height='100vh'
      width='100%'
      display='flex'
      justifyContent='center'
      alignItems='center'
      sx={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
    >
      <Box
        display='flex'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
        width={350}
        gap={1}
      >
        <Typography
          sx={{ fontSize: { xs: "14px", lg: "50px", md: "40px", sm: "30px" } }}
          color='white'
          textAlign='center'
          width={800}
          variant='h3'
        >
          Descubra mais sobre os paises do nosso mundo
        </Typography>
        <Typography mt={3} color='white' variant='subtitle1'>
          Digite o nome do pais desejado
        </Typography>
        <Box display='flex' width='100%' gap={1}>
          <CustomInput
            placeholder='Exemplo: Brasil'
            theme='white'
            onChange={handleInput}
            value={country}
            error={error}
          />
          <CustomButton
            disabled={!country.length || loading ? true : false}
            onClick={() => searchCountry(country)}
          >
            {loading ? (
              <CircularProgress sx={{ color: "white" }} size={18} />
            ) : (
              <SearchIcon sx={{ color: country.length ? "white" : "gray" }} />
            )}
          </CustomButton>
        </Box>
        {error && (
          <Typography mt={1} mr={8} color='red'>
            O pais não existe
          </Typography>
        )}
        <Box display='flex' alignItems='center' gap={1} py={2}>
          <CustomCheckBox onChange={handleCheckBox} checked={checked} />
          <Typography color='white'>Modo tabela</Typography>
        </Box>

        <Box gap={1} alignItems='center' mt={2} display='flex'>
          <SearchIcon sx={{ color: "white" }} />
          <Typography variant='h5' color='white'>
            Historico de pesquisas
          </Typography>
        </Box>
        <Box height={350}>
          <CustomTable
            theme='white'
            headers={historicColumns}
            bodies={historic}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;

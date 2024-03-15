import { Card, CardContent, CardMedia, Typography } from "@mui/material";

export const CustomCard = ({
  image,
  countryName,
  capital,
  population,
  currencies,
  language,
}) => {
  return (
    <Card
      bgcolor='blue'
      p={2}
      borderRadius={1}
      maxWidth={250}
      sx={{ border: "4px solid #0047ab" }}
    >
      <CardMedia sx={{ height: 150 }} image={image.png} />
      <CardContent>
        <Typography fontWeight='bold' color='black' fontSize={16}>
          {countryName}
        </Typography>
        <Typography color='black' fontSize={14}>
          <tspan style={{ fontWeight: "bold" }}>Capital:</tspan> {capital}
        </Typography>
        <Typography color='black' fontSize={14}>
          <tspan style={{ fontWeight: "bold" }}>População:</tspan> {population}
        </Typography>
        <Typography color='black' fontSize={14}>
          <tspan style={{ fontWeight: "bold" }}>Moeda:</tspan> {currencies}
        </Typography>
        <Typography color='black' fontSize={14}>
          <tspan style={{ fontWeight: "bold" }}>Linguas:</tspan> {language}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CustomCard;

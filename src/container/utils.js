export const formatCountriesResponse = (data) => {
  const formattedData = data.map((item) => {
    const {
      name,
      population,
      capital,
      currencies,
      languages,
      flags: png,
    } = item;
    let groupedCurrencies = "";
    // We are doing this, because currencies are an Object and we can`t map on an easy way
    Object.values(currencies).forEach(
      (currency) =>
        (groupedCurrencies +=
          (groupedCurrencies.length ? ", " : "") + currency.name)
    );

    const groupedLanguage = Object.values(languages).join(", ");
    return {
      name: name.common,
      capital,
      population,
      currencies: groupedCurrencies,
      languages: groupedLanguage,
      image: png,
    };
  });

  return formattedData;
};

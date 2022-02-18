export const convertKelvinToCelcius = (kelvinTemp: number): number => {
  return parseFloat((kelvinTemp - 273.15).toFixed(2));
};

export const randomNumber = (maxValue: number): number => {
  const max = Math.floor(maxValue);
  return Math.floor(Math.random() * (max - 1)) + 1;
};

export const formatPriceToBrValue = (number: number, currency: string) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency,
  }).format(number);
};

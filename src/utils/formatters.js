export const formatCurrency = (value) => {
  return new Intl.NumberFormat('pt-PT', {
    style: 'currency',
    currency: 'EUR',
  }).format(value);
};

export const formatNumber = (value) => {
  return new Intl.NumberFormat('pt-PT').format(value);
};

export const formatPercentage = (value) => {
  return `${value > 0 ? '+' : ''}${value.toFixed(1)}%`;
};

export const calculateDaysUntil = (date) => {
  const target = new Date(date);
  const now = new Date();
  const diff = target - now;
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
};

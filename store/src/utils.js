  export function formatPrice(price, currency){
    return new Intl.NumberFormat('de-DE', { style: 'currency', currency: currency, maximumFractionDigits: 2 }).format(price);
  };
  
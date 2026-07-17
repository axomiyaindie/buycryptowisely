export const formatUSD = (value) => {
  if (!value && value !== 0) return "$0.00";
  if (value >= 1000) {
    return "$" + new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(value);
  }
  if (value >= 1) {
    return "$" + value.toFixed(2);
  }
  return "$" + value.toFixed(4);
};

export const formatINR = (value) => {
  if (!value && value !== 0) return "₹0";
  if (value >= 10000000) return "₹" + (value / 10000000).toFixed(2) + "Cr";
  if (value >= 100000) return "₹" + (value / 100000).toFixed(2) + "L";
  if (value >= 1000) return "₹" + new Intl.NumberFormat("en-IN").format(value);
  return "₹" + value.toFixed(2);
};

export const formatNumber = (num) => {
  if (!num && num !== 0) return "0";
  return new Intl.NumberFormat("en-US").format(num);
};

export const formatChange = (value) => {
  const num = parseFloat(value);
  if (isNaN(num)) return "0.00%";
  const sign = num >= 0 ? "+" : "";
  return `${sign}${num.toFixed(2)}%`;
};
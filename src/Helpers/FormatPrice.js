const FormatPrice = ({ price }) => {
   Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
    roundingIncrement: 5,
    roundingMode: "halfCeil",
  });
}
export default FormatPrice;
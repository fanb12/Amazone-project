import React from "react";
import numeral from "numeral";
const CurrencyFormat = ({ Amount }) => {
  const formattedAmount = numeral(Amount).format("$0.00");
  return (
    <div>
      <formattedAmount />
    </div>
  );
};
export default CurrencyFormat;

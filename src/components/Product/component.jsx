import { useState } from "react";
import { Button } from "../Button/component";

export const Product = ({ name }) => {
  const [amount, setAmount] = useState(0);

  if (!name) {
    return null;
  }

  return (
    <div>
      {name} -
      <Button
        title="-"
        onClick={() => setAmount(amount - 1)}
        disabled={amount === 0}
      />
      {amount}
      <Button
        title="+"
        onClick={() => setAmount(amount + 1)}
        disabled={amount === 5}
      />
    </div>
  );
};
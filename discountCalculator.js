import React, { useState } from "react";

export default function DiscountCalculator({ currency = "₹" }) {
  const [amount, setAmount] = useState("");
  const [discount, setDiscount] = useState("");
  const [finalAmount, setFinalAmount] = useState(null);

  const calculate = (e) => {
    if (e) e.preventDefault();
    const a = parseFloat(amount);
    const d = parseFloat(discount);
    if (isNaN(a) || isNaN(d)) {
      setFinalAmount(null);
      return;
    }
    const saved = (a * d) / 100;
    setFinalAmount((a - saved).toFixed(2));
  };

  const reset = () => {
    setAmount("");
    setDiscount("");
    setFinalAmount(null);
  };

  return (
    <div className="discount-calculator" style={{ maxWidth: 420, margin: "1rem auto", padding: 12, border: "1px solid #eee", borderRadius: 8 }}>
      <h3 style={{ marginTop: 0 }}>Bill & Discount Calculator</h3>
      <form onSubmit={calculate}>
        <div style={{ marginBottom: 8 }}>
          <label>Bill amount</label><br />
          <input type="number" step="0.01" value={amount} onChange={e => setAmount(e.target.value)} placeholder="0.00" style={{ width: "100%", padding: 8 }} />
        </div>

        <div style={{ marginBottom: 8 }}>
          <label>Discount %</label><br />
          <input type="number" step="0.01" value={discount} onChange={e => setDiscount(e.target.value)} placeholder="0" style={{ width: "100%", padding: 8 }} />
        </div>

        <div style={{ display: "flex", gap: 8 }}>
          <button type="submit" style={{ padding: "8px 12px" }}>Calculate</button>
          <button type="button" onClick={reset} style={{ padding: "8px 12px" }}>Reset</button>
        </div>
      </form>

      {finalAmount !== null && (
        <div style={{ marginTop: 12, padding: 8, background: "#f9f9f9", borderRadius: 6 }}>
          <strong>Final Amount:</strong> {currency}{finalAmount}
        </div>
      )}
    </div>
  );
}
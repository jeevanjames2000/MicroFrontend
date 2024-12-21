import React from "react";
export default function dataPage({ data }) {
  const handleProceedToPay = () => {
    alert(`Proceeding to payment for: ${data.name}`);
  };
  return (
    <div style={styles.container}>
      {}
      <h1 style={styles.title}>Buy Now</h1>
      <div style={styles.card}>
        {}
        <img
          src={data.image || "https://via.placeholder.com/200"}
          alt={data.name}
          style={styles.image}
        />
        {}
        <div style={styles.details}>
          <h2 style={styles.productName}>{data.name}</h2>
          <p>
            <strong>Type:</strong> {data.type}
          </p>
          <p>
            <strong>Price:</strong> ₹{data.price}
          </p>
          <p>
            <strong>Rating:</strong> {data.rating} ⭐
          </p>
          <button style={styles.button} onClick={handleProceedToPay}>
            Proceed to Pay
          </button>
        </div>
      </div>
    </div>
  );
}
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    backgroundColor: "#f9f9f9",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    marginBottom: "20px",
    color: "#333",
  },
  card: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#fff",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    borderRadius: "8px",
    padding: "20px",
    maxWidth: "600px",
    width: "100%",
    alignItems: "center",
  },
  image: {
    width: "200px",
    height: "200px",
    objectFit: "cover",
    borderRadius: "8px",
    marginRight: "20px",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  productName: {
    margin: "0 0 10px 0",
    color: "#333",
  },
  button: {
    marginTop: "20px",
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  },
};

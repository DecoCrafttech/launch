import React from "react";
import { Link } from "react-router-dom";

const Formsubmitpage = () => {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/190/190411.png"
          alt="Thank You"
          style={styles.icon}
        />
        <h1 style={styles.title}>Thank You!</h1>
        <p style={styles.message}>
          Your form has been successfully submitted. We appreciate your effort!
        </p>
          {/* <Link to="/" style={styles.link}>
            Go Back to Form
          </Link> */}
      </div>
    </div>
  );
};


const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f3f4f6",
  },
  card: {
    textAlign: "center",
    backgroundColor: "#fff",
    padding: "30px 20px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    width: "90%",
    maxWidth: "400px",
  },
  icon: {
    width: "80px",
    height: "80px",
    marginBottom: "20px",
  },
  title: {
    fontSize: "2rem",
    color: "#333",
    marginBottom: "10px",
  },
  message: {
    fontSize: "1rem",
    color: "#555",
    marginBottom: "20px",
  },
  link: {
    display: "inline-block",
    padding: "10px 20px",
    fontSize: "1rem",
    color: "#fff",
    backgroundColor: "#007bff",
    borderRadius: "5px",
    textDecoration: "none",
    boxShadow: "0 4px 6px rgba(0, 123, 255, 0.2)",
  },
};

export default Formsubmitpage;

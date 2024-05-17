import React from "react";
import styles from "../styles/Home.module.css";
import ExampleComponent from "@/components/ExampleComponent";

const Home = () => {
  return (
    <div className={styles.home}>
      <h1>Welcome to GameHub!</h1>
      <ExampleComponent />
    </div>
  );
};

export default Home;

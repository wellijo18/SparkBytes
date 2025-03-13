"use client";
import styles from "./page.module.css";
import Navigation from "./components/Navigation";
export default function Home() {
  return (
    <div className={styles.page}>
      <Navigation />
      <h1>Welcome to the Home Page</h1>
    </div>
  );
}

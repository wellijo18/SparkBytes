"use client";
import styles from "./page.module.css";
import Navigation from "./components/Navigation";
import FoodCard from "./components/FoodCard";
import { Flex } from "antd";
export default function Home() {
  const data = [
    {
      location: "Warren Towers",
      description: "Freshmen CGS Orientation",
      time: "Thursday, May 4th, 12PM", 
      img: "/WarrenTowers.jpg", 
    },
    {
      location: "Warren Towers",
      description: "Freshmen CGS Orientation",
      time: "Thursday, May 4th, 12PM",
      img: "/CDS.jpg", 
    },
    {
      location: "Warren Towers",
      description: "Freshmen CGS Orientation",
      time: "Thursday, May 4th, 12PM",
      img: "/GSU.jpeg", 
    },
  ];
  
  console.log(data)
  return (
    <div className={styles.page}>
      <Navigation />
      <h1>Welcome to the Home Page</h1>
      <div style={{ padding: "20px" }}>
      <Flex justify="space-around" align="center">
        {data.map((event, index) => (
            <FoodCard {...event} key={index} />
        ))}
      </Flex>
    </div>
    </div>
  );
}

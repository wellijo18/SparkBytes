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
      food: [
        { 
        key: 1,
        food: "BLT",
        quantity: 2,
        calories: 540,
        protein: 15,
        fat: 20,
        carbs: 5,
        allergies: ["Gluten", "Tree Nut"]
      }, 
      {
        key: 2, 
        food: "Fortnite Sandwich",
        quantity: 5,
        calories: 540,
        protein: 15,
        fat: 20,
        carbs: 5,
        allergies: ["Gluten", "Tree Nut"]
      }
      ]
    },
    {
      location: "CDS",
      description: "Freshmen CGS Orientation",
      time: "Thursday, May 4th, 12PM",
      img: "/CDS.jpg", 
      food: [
        { 
        key: 1,
        food: "BLT",
        quantity: 2,
        calories: 540,
        protein: 15,
        fat: 20,
        carbs: 5,
        allergies: ["Gluten", "Tree Nut"]
      }, 
      {
        key: 2, 
        food: "Fortnite Sandwich",
        quantity: 5,
        calories: 540,
        protein: 15,
        fat: 20,
        carbs: 5,
        allergies: ["Gluten", "Tree Nut"]
      }
      ]
    },
    {
      location: "GSU",
      description: "Freshmen CGS Orientation",
      time: "Thursday, May 4th, 12PM",
      img: "/GSU.jpeg", 
      food: [
        { 
        key: 1,
        food: "BLT",
        quantity: 2,
        calories: 540,
        protein: 15,
        fat: 20,
        carbs: 5,
        allergies: ["Gluten", "Tree Nut"]
      }, 
      {
        key: 2, 
        food: "Fortnite Sandwich",
        quantity: 5,
        calories: 540,
        protein: 15,
        fat: 20,
        carbs: 5,
        allergies: ["Gluten", "Tree Nut"]
      }
      ]
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

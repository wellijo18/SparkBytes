"use client";
import styles from "./page.module.css";
import Navigation from "./components/Navigation";
import FoodCard from "./components/FoodCard";
import { Flex } from "antd";
import { useState } from "react";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");

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

  const filteredData = data.filter((event) =>
    event.location.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <div className={styles.page}>
      <h1>Welcome to the Home Page</h1>
      
      <div style={{ marginBottom: "20px", textAlign: "center" }}>
        <input
          type="text"
          placeholder="Search by location..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: "10px",
            width: "300px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "16px"
          }}
        />
      </div>

      <div style={{ padding: "20px" }}>
        <Flex justify="space-around" align="center" wrap="wrap">
          {filteredData.map((event, index) => (
            <FoodCard {...event} key={index} />
          ))}
        </Flex>
      </div>
    </div>
  );
}

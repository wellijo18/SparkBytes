"use client";

import { Card } from "antd";
import Image from "next/image";

interface EventProps {
  location: string;
  description: string;
  time: string;
  img: string;
}

export default function FoodCard({ location, description, time, img }: EventProps) {
  return (
    <Card
      hoverable
      style={cardStyles}
      cover={
        <div style={{ width: "100%", height: "200px", position: "relative" }}>
          <Image
            src={img}
            alt={location}
            layout="fill"
            objectFit="cover" 
             
          />
        </div>
      }
    >
      <h3 style={{ marginBottom: "5px", fontWeight: "bold" }}>{location}</h3>
      <p style={{ color: "#666", marginBottom: "8px" }}>{description}</p>
      <p style={timeStyle}>{time}</p>
    </Card>
  );
}


const cardStyles = { //had to put it in these cus for some reason the styling wouldn't work
  borderRadius: "10px",
  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
};

const timeStyle = {
  fontWeight: "bold",
  color: "#555",
};

"use client";
import { useState } from "react";
import { Card, Modal } from "antd";
import Image from "next/image";

interface EventProps {
  location: string;
  description: string;
  time: string;
  img: string;
}

export default function FoodCard({ location, description, time, img }: EventProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <>
    <Card
      hoverable
      style={cardStyles}
      onClick={() => setIsModalVisible(true)} 
      cover={
        <div style={{ width: "100%", height: "200px", position: "relative" }}>
          <Image
            src={img}
            alt={location}
            layout="fill"
            objectFit="cover" 
            style={{ borderRadius: "10px" }}
          />
        </div>
      }
    >
      <h3 style={{ marginBottom: "5px", fontWeight: "bold" }}>{location}</h3>
      <p style={{ color: "#666", marginBottom: "8px" }}>{description}</p>
      <p style={timeStyle}>{time}</p>
    </Card>
    <Modal
        open={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
        width="100vw"
        style={{ top: 0, padding: 0 }}
        styles={{
          body: { height: "100vh", margin: 0, padding: 0 },
        }}
      >
        <Card title="Expanded View" style={{ height: "100%", width: "100%" }}>

        </Card>
      </Modal>
    </>
  );
}


const cardStyles = { //had to put it in these cus for some reason the styling wouldn't work
  borderRadius: "10px",
  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  width: "25%",
  padding: "0.5em"
};

const timeStyle = {
  fontWeight: "bold",
  color: "#555",
};

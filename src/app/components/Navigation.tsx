"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { HomeOutlined, InfoCircleOutlined, MailOutlined, ShoppingCartOutlined } from "@ant-design/icons";

export default function Navigation() {
  const pathname = usePathname(); // Get the current route, had to research this

  return (
    <div style={divStyles}>
      <Link href="/" style={getLinkStyle(pathname, "/")}>
        <HomeOutlined /> Home
      </Link>
      <Link href="/about" style={getLinkStyle(pathname, "/about")}>
        <InfoCircleOutlined /> About
      </Link>
      <Link href="/contact" style={getLinkStyle(pathname, "/contact")}>
        <MailOutlined /> Contact
      </Link>
      <Link href="/orders" style={getLinkStyle(pathname, "/orders")}>
        <ShoppingCartOutlined /> Orders
      </Link>
    </div>
  );
}

const divStyles = {
  display: "flex",
  gap: "40px",
  padding: "20px 40px",
  color: "white",
  width: "100%"
};

const getLinkStyle = (pathname: string, href: string) => ({
  color: pathname === href ? "#52c41a" : "#091E31FF",
  textDecoration: "none",
  fontSize: "24px",
  display: "flex",
  alignItems: "center",
  gap: "12px",
});

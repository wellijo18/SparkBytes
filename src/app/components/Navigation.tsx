"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { HomeOutlined, InfoCircleOutlined, MailOutlined, ShoppingCartOutlined, LoginOutlined, UserAddOutlined } from "@ant-design/icons";

export default function Navigation() {
    const pathname = usePathname();

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
            <Link href="/login" style={getLinkStyle(pathname, "/login")}>
                <LoginOutlined /> Login
            </Link>
            <Link href="/signup" style={getLinkStyle(pathname, "/signup")}>
                <UserAddOutlined /> Sign Up
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
"use client";
import { useState } from "react";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Home() {
  const [user, setUser] = useState(null);
  return (
    <>
      <Header user={user} />
      <Body />
      <Footer />
    </>
  );
}

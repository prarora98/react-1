import React from "react";
import Header from "./components/Header";
import MemberCard from "./components/MemberCard";
import "./App.css";

export default function() {
  return (
    <React.Fragment>
      <Header />
      <MemberCard />
    </React.Fragment>
  );
}

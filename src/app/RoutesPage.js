import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../features/Home";

export default function RoutesPage() {
  return (
    <Routes>
      <Route index element={<Home />} />
    </Routes>
  );
}

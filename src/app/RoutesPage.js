import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../features/Home";
import Projects from "../features/Projects";
import Layout from "../layout/Layout";

export default function RoutesPage() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route
        path="/a"
        element={
          <Layout>
            <Projects />
          </Layout>
        }
      />
    </Routes>
  );
}

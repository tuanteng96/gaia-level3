import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../features/Home";
import Projects from "../features/Projects";
import ProjectVideos from "../features/ProjectVideos";
import Layout from "../layout/Layout";

export default function RoutesPage() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route
        path="/1/:slug/:Id"
        element={
          <Layout>
            <ProjectVideos />
          </Layout>
        }
      />
      <Route
        path="/2/:slug/:Id"
        element={
          <Layout>
            <Projects />
          </Layout>
        }
      />
    </Routes>
  );
}

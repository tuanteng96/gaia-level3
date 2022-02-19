import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from "../features/Home"
import ProjectLesson from '../features/ProjectLesson';
// import Projects from '../features/Projects';
import ProjectSchool from '../features/ProjectSchool';
import ProjectSchoolList from '../features/ProjectSchool/pages/List';
import ProjectVideos from '../features/ProjectVideos';
import Layout from '../layout/Layout';

export default function Page() {
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
            {/* <Route
                path="/2/:slug/:Id"
                element={
                    <Layout>
                        <Projects />
                    </Layout>
                }
            /> */}
            <Route
                path="/2/:slug/:Id"
                element={
                    <Layout>
                        <ProjectSchool />
                    </Layout>
                }
            >
            </Route>
            <Route
                path="/2/:slug/:Id/:CateId"
                element={
                    <Layout>
                        <ProjectSchoolList />
                    </Layout>
                }
            />
            <Route
                path="/3/:slug/:Id"
                element={
                    <Layout>
                        <ProjectLesson />
                    </Layout>
                }
            />
        </Routes>
    );
}

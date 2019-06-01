import React from "react";

import Layout from "../layout/Layout";

import Header from "../components/Header";
import Title from "../components/Title";
import Nav from "../components/Nav";

const Index = () => (
  <>
    <Layout />
    <>
      <Header />
      <Title title="Hello Next.js" />
      <Nav />
    </>
  </>
);

export default Index;

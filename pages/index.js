import React, { useState, useEffect } from "react";
import io from "socket.io-client";

import Layout from "../layout/Layout";

import Header from "../components/Header";
import Title from "../components/Title";
import Nav from "../components/Nav";
import Button from "../components/Button";
import Counter from "../components/Counter";

var socket;

const Index = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    socket = io("https://hello-next-page.netlify.com/");
    console.log("connected");
    socket.on("userCount", function(data) {
      setCount(data.userCount);
    });

    return function cleanup() {
      socket.close();
    };
  }, []);

  const handleNewMessage = () => {
    console.log("emitting new message");
    socket.emit("message", { text: "test message" });
  };

  return (
    <>
      <Layout />
      <>
        <Header />
        <Title title="Hello Next.js" />
        <Nav />
        <Button text="Emit message" click={() => handleNewMessage()} />
        <Counter count={count} />
      </>
    </>
  );
};

export default Index;

import { useState, useEffect } from "react";
import io from "socket.io-client";

import Layout from "../layout/Layout";

import Header from "../components/Header";
import Title from "../components/Title";
import Nav from "../components/Nav";
import Button from "../components/Button";
import Counter from "../components/Counter";
import Form from "../components/Form";

var socket;

const Index = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    socket = io({ transports: ["websocket"] });
    console.log("connected");
    socket.on("userCount", function(data) {
      setCount(data.userCount);
    });

    return function cleanup() {
      socket.close();
    };
  }, []);

  const handleNewMessage = value => {
    console.log("emitting new message");
    socket.emit("message", { text: value });
  };

  return (
    <>
      <Layout />
      <>
        <Header />
        <Title title="Hello Next.js" />
        <Nav />
        <Form onSubmit={handleNewMessage} />
        <Counter count={count} />
      </>
    </>
  );
};

export default Index;

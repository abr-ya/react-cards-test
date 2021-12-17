import React, { useState, FC } from "react";

const Home: FC = () => {
  const [test] = useState("тест");

  return (
    <div className="container">
      <h1 className="title">Home</h1>
      <p>Это относительно простая и быстрая сборка WP5 + TS + React.</p>
      <p>Это - тестовая домашняя страница.</p>
      <p>{`Из стейта: ${test}`}</p>
    </div>
  );
};

export default Home;

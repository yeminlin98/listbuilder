import React from "react";
import Heading from "./components/Heading";
import Status from "./components/Status";
import CreateForm from "./components/CreateForm";
import ListGroup from "./components/ListGroup";

const App = () => {
  return (
    <div className="w-[400px] mx-auto mt-20">
      <Heading />
      <CreateForm />
      <Status />
      <ListGroup />
    </div>
  );
};

export default App;

import React from "react";
import Form from "./components/Form";
import Template from "./components/Template";
import { BandungBaratProvider } from "./context/Context";

const BandungBarat = () => {
  return (
    <BandungBaratProvider>
      <Template />
      <Form />
    </BandungBaratProvider>
  );
};

export default BandungBarat;

import React from "react";
import "./ImageList.css";

import ImageCard from "./ImageCard";

const Imagelist = props => {
  const listOfImages = props.images.map(image => {
    return <ImageCard key={image.id} image={image} />;
  });
  return <div className="image-list">{listOfImages}</div>;
};

export default Imagelist;

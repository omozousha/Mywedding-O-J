import React from 'react';
import svg from "../assets/images/icons/separator-pink.svg";

const separator = require('../assets/images/icons/separator-pink.svg');

const Title = (props) => {
  const { title } = props;

  return (
    <div
      className="title container-fluid text-center"
      data-aos="zoom-in"
      data-aos-duration="1500">
      <div className="h1">{title}</div>
      <img className="separator" src={separator} alt="separator" />
    </div>
  );
};

export default Title;

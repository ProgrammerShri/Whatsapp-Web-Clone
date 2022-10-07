import React from "react";

const BaseText = ({ title = "Heading", ...otherProps }) => {
  return (
    <>
      <h1
        className="text-2xl text-left font-normal text-primary-gray"
        {...otherProps}
      >
        {title}
      </h1>
    </>
  );
};

export default BaseText;

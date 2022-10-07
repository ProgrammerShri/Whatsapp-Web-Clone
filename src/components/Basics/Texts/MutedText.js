import React from "react";

const MutedText = ({ title = "Heading", ...otherProps }) => {
  return (
    <>
      <h3
        className="text-2xl text-left font-normal text-secondary-gray"
        {...otherProps}
        dangerouslySetInnerHTML={{
          __html: title,
        }}
        {...otherProps}
      />
    </>
  );
};

export default MutedText;

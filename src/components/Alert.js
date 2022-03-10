import React from "react";

function Alert(props) {
  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    props.alert && (
      <div class="alert alert-warning alert-dismissible fade show" role="alert">
        {/* <h5>{props.alrtTitle.msg}</h5>:<h1>{props.alrtTitle.type}</h1> */}
        <strong>{props.alert.msg}</strong>:{capitalize(props.alert.type)}
      </div>
    )
  );
}

export default Alert;

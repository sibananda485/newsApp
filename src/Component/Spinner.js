import React from "react";

export default function Spinner() {
  return (
    <div className="container text-center my-5">
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

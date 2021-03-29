import { Link, useParams } from "react-router-dom";
import React from "react";
export const Board = () => {
  let { id } = useParams<{ id: string }>();
  return (
    <div>
      Board
      <h1>Project ID: {id}</h1>
      <Link
        to="/"
        className="h-10 px-5 m-2 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800"
      >
        Back to Home
      </Link>
    </div>
  );
};

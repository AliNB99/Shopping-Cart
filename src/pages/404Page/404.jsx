import React from "react";
import { useTitle } from "../../hooks/useTitle";

function PageNotFound() {
  useTitle("404");
  return <h1>Page Not Found</h1>;
}

export default PageNotFound;

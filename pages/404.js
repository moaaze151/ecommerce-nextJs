import { useRouter } from "next/dist/client/router";
import React, { useEffect } from "react";

const ErrorPage = () => {
  const route = useRouter();
  useEffect(() => { 
    setTimeout(() => {
      route.push("/");
    }, 2000);
  }, []);
  return <h3>The page isn't exist </h3>;
};

export default ErrorPage;

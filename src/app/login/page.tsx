import LoginForm from "@/components/login/LoginForm";
import Link from "next/link";
import React from "react";

const Login = (props: any) => {
  console.log(props);
  return (
    <div className="container m-auto min-h-screen justify-center items-center flex">
      <div className="flex justify-center items-center">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;

import SignupForm from "@/components/signup/SignupForm";
import Link from "next/link";
import React from "react";

const SignUp = () => {
  return (
    <div className="container m-auto min-h-screen justify-center items-center flex">
      <div className="flex justify-center items-center">
        <SignupForm />
      </div>
    </div>
  );
};

export default SignUp;

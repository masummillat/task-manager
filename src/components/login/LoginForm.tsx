"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input from "../base/input";
import Link from "next/link";
import { motion } from "framer-motion";
import { saveToken } from "@/app/login/action";
import { useRouter } from "next/navigation";

const schema = yup
  .object({
    email: yup.string().email().required("Email is required."),
    password: yup
      .string()
      .required("No password provided.")
      .min(8, "Password is too short - should be 8 chars minimum."),
  })
  .required();

type InputType = yup.InferType<typeof schema>;
const LoginForm: React.FC = () => {
  const { push } = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<InputType>({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit: SubmitHandler<InputType> = async (data: InputType) => {
    console.log(data);
    await saveToken("My secret token");
    push("/login");
  };

  return (
    <motion.form
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="sm:w-11/12 md:w-1/2  m-4 p-4 shadow-md prose lg:prose-h1"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h4>Log into your account</h4>
      <Input
        label="Email"
        placeholder="johndoe@example.com"
        {...register("email")}
        error={errors?.email?.message}
        autoComplete="email"
      />
      <Input
        label="Password"
        type="password"
        {...register("password")}
        error={errors?.password?.message}
        autoComplete="new-password"
      />
      <button
        className="rounded-full bg-purple-500 hover:bg-purple-600 text-white px-3 py-2"
        type="submit"
      >
        Login
      </button>
      <div className="flex gap-4 items-center">
        <p>Don&apos;t have an account ?</p>
        <Link className="text-purple-500 hover:text-purple-600" href="/signup">
          SignUp
        </Link>
      </div>
    </motion.form>
  );
};

export default LoginForm;

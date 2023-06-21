import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="container m-auto min-h-screen justify-center items-center flex">
      <div className="flex justify-center items-center">
        <div className="w-full">
          <Image
            className="m-auto rounded mb-2"
            width={150}
            height={150}
            alt="logo"
            src="https://plus.unsplash.com/premium_photo-1684331678124-ff62c82cef7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
          />
          <h1>Welcome to Gen Task Manager</h1>
          <div>
            <Link className="text-purple-600 font-bold" href={"/login"}>
              Login{" "}
            </Link>{" "}
            into Gen Task Manager
          </div>
        </div>
      </div>
    </main>
  );
}

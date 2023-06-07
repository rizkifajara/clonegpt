"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";

function Login() {
  return (
    <div className="bg-[#74AA9C] h-screen flex flex-col items-center justify-center text-center">
      <Image src="/chatgpt.svg" width={300} height={300} alt="logo" />
      <button
        onClick={() => signIn("google")}
        className="text-white font-bold text-3xl animate-pulse"
      >
        Sign in to use CloneGPT
      </button>
    </div>
  );
}

export default Login;

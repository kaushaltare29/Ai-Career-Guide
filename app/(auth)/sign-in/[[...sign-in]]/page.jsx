import React from "react";
import { SignIn } from "@clerk/nextjs";

const Page = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <SignIn />
    </div>
  );
};

export default Page;

"use client";

import Link from "next/link";

const errorPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center ">
      <h2 className="text-red-500 text-[42px]">There is an error</h2>
      <Link href="/" className="btn mt-4">
        Go to Home
      </Link>
    </div>
  );
};

export default errorPage;

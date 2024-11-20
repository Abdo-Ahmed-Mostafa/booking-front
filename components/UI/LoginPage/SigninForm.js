"use client";
import { Button, Input } from "@material-tailwind/react";
import Link from "next/link";
import { useState } from "react";

const SigninForm = ({ toggleAnimation }) => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const handelFormSend = async (e) => {
    e.preventDefault();
    const sendData = await fetch(`/api/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const response = await sendData.json();
    if (response.statues != 201) {
      toast.error(response.message);
    }
  };
  return (
    <div className="selection:bg-indigo-500 selection:text-white">
      <div className="flex justify-center items-center">
        <div className="p-8 flex-1">
          <div className="mx-auto overflow-hidden">
            <div className="p-8">
              <h1 className="text-5xl font-bold text-mainBlue">
                Welcome back!
              </h1>

              <form
                className="mt-12 flex flex-col gap-8"
                onSubmit={(e) => handelFormSend(e)}
              >
                <Input
                  variant="standard"
                  label="Email"
                  placeholder="Email"
                  value={data.email}
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                />
                <Input
                  variant="standard"
                  label="Password"
                  placeholder="Password"
                  type="password"
                  value={data.password}
                  onChange={(e) =>
                    setData({ ...data, password: e.target.value })
                  }
                />
                <Button className="bg-mainBlue" type="submit">
                  Create account
                </Button>
              </form>

              <Link
                href={""}
                className="mt-4 block text-lg text-center font-medium text-mainBlue hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Forgot your password?
              </Link>
              <p
                onClick={() => toggleAnimation()}
                className="mt-4 block md:hidden text-lg text-center font-medium text-mainBlue cursor-pointer "
              >
                Don&apos;t have an account ?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SigninForm;

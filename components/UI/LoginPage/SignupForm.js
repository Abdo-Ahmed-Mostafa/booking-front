"use client";
import { Button, Input } from "@material-tailwind/react";
import Link from "next/link";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const SignupForm = ({ toggleAnimation }) => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    currentCity: "",
  });

  const handelFormSend = async (e) => {
    e.preventDefault();
    if (data.password !== data.confirmPassword) {
      return toast.error("confirmPassword is incorrect");
    }
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
            <div className="p-8 flex flex-col gap-8">
              <h1 className="text-5xl font-bold text-indigo-600 text-center">
                Create account
              </h1>
              <form
                onSubmit={(e) => handelFormSend(e)}
                className="flex  flex-col gap-6"
              >
                <Input
                  variant="standard"
                  label="Name"
                  placeholder="Name"
                  value={data.name}
                  onChange={(e) => setData({ ...data, name: e.target.value })}
                />
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
                  value={data.password}
                  type="password"
                  onChange={(e) =>
                    setData({ ...data, password: e.target.value })
                  }
                />
                <Input
                  variant="standard"
                  label="Confirm Password"
                  placeholder="Confirm Password"
                  value={data.confirmPassword}
                  type="password"
                  onChange={(e) =>
                    setData({ ...data, confirmPassword: e.target.value })
                  }
                />
                <Input
                  variant="standard"
                  label="Current City"
                  placeholder="Current City"
                  value={data.currentCity}
                  onChange={(e) =>
                    setData({ ...data, currentCity: e.target.value })
                  }
                />
                <Button className="bg-mainBlue" type="submit">
                  Create account
                </Button>
                <p
                  className="text-mainBlue text-center cursor-pointer block md:hidden"
                  onClick={() => toggleAnimation()}
                >
                  Already have an account ?
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;

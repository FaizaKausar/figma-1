import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="bg-gray-100 p-5 ">
      <div className="bg-white">
        <div className=" bg-center text-center ">
          <div className=" mt-10  justify-center flex  ">
            <div
              style={{
                background: `linear-gradient(to right, rgba(200, 28, 159, 1), rgba(190, 67, 160, 1))`,
                width: "4%",
                height: "4px",
                flex: "inline",
                display: "inline-block",
                borderRadius: "20%",
              }}
            ></div>
          </div>
          {/*Heading*/}
          <h1 className=" mt-4 justify-center flex scroll-m-20 text-3xl font-medium tracking-tight">
            Way of building
          </h1>
          <p className=" mt-4 justify-center flex scroll-m-20 text-3xl font-extrabold tracking-tight">
            Great Software
          </p>
        </div>
        {/*Hero Section*/}
        {/*1st Part*/}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24  pl-28 ">
          {/*Left Text Section*/}
          <div className="pl-9 mt-9 ">
            <h3 className="text-2xl font-bold">
              {" "}
              Build the right team to scale{" "}
            </h3>
            <p className="text-lg font-light mt-4">
              Finding the right talent is not easy. We help you find the talent
              that suits your needs, follow your processes, and sticks with you
              long term not the case with freelancers
              <p className="mt-6">
                {" "}
                Our
                <span
                  style={{
                    background: `linear-gradient(to right,rgba(210, 28, 159, 1), rgba(202,67, 150, 1))`,
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                    display: "inline-block",
                  }}
                >
                  delivery model
                </span>{" "}
                helps you cut costs and deliever within budget.{" "}
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "20px",
                }}
              >
                {" "}
                <div
                  style={{
                    background: `linear-gradient(to bottom, rgba(200, 28, 159, 1), rgba(190, 67, 160, 1))`,
                    width: "5px", // Adjust the width to change the thickness of the line
                    height: "13vh", // Adjust the height as needed
                    borderRadius: "20px", // Apply a border-radius for a rounded line (optional)
                    marginRight: "10px", // Adjust the spacing from other content
                  }}
                ></div>{" "}
                <p
                  style={{
                    background: `linear-gradient(to bottom,rgba(210, 28, 159, 1), rgba(202,67, 150, 1))`,
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                    display: "inline-block",
                    marginLeft: "5px",
                  }}
                >
                  "simform is quick to identify larger problem with the Software
                  so we decided to expand our scope to build new modules."
                </p>
              </div>
            </p>
            <p className="mt-6 font-medium"> Jeewa markram</p>
            <p className="text-gray-600"> CEO</p>
          </div>
          {/*Right Image Section*/}
          <div className="mt-9">
            <Image
              className="w-90 h-90 bg-opacity-40 rounded-xl "
              height={400}
              width={400}
              src={require("../../public/images/hero-3.webp")}
              alt="Item"
            />
          </div>
        </div>

        {/*2nd Part*/}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 pl-28">
          {/*Left Image Section*/}
          <div className="mt-9">
            <Image
              className="w-90 h-90 bg-opacity-40 rounded-xl "
              height={400}
              width={400}
              src={require("../../public/images/hero-4.jpg")}
              alt="Item"
            />
          </div>
          {/*Right Text Section*/}
          <div className="pl-9 mt-9 ">
            <h3 className="text-2xl font-bold">
              {" "}
              Build the right team to scale{" "}
            </h3>
            <p className="text-lg font-light mt-4">
              Finding the right talent is not easy. We help you find the talent
              that suits your needs, follow your processes, and sticks with you
              long term not the case with freelancers
              <p className="mt-6">
                {" "}
                Our
                <span
                  style={{
                    background: `linear-gradient(to right,rgba(210, 28, 159, 1), rgba(202,67, 150, 1))`,
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                    display: "inline-block",
                  }}
                >
                  delivery model
                </span>{" "}
                helps you cut costs and deliever within budget.{" "}
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "20px",
                }}
              >
                {" "}
                <div
                  style={{
                    background: `linear-gradient(to bottom, rgba(200, 28, 159, 1), rgba(190, 67, 160, 1))`,
                    width: "5px",
                    height: "13vh",
                    borderRadius: "20px",
                    marginRight: "10px",
                  }}
                ></div>{" "}
                <p
                  style={{
                    background: `linear-gradient(to bottom,rgba(210, 28, 159, 1), rgba(202,67, 150, 1))`,
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                    display: "inline-block",
                    marginLeft: "5px",
                  }}
                >
                  "simform is quick to identify larger problem with the Software
                  so we decided to expand our scope to build new modules."
                </p>
              </div>
            </p>
            <p className="mt-6 font-medium"> Jeewa markram</p>
            <p className="text-gray-600"> CEO</p>
          </div>
        </div>
        {/*3rd Part*/}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24  pl-28">
          {/*Left Text Section*/}
          <div className="pl-9 mt-9 ">
            <h3 className="text-2xl font-bold">
              {" "}
              Build the right team to scale{" "}
            </h3>
            <p className="text-lg font-light mt-4">
              Finding the right talent is not easy. We help you find the talent
              that suits your needs, follow your processes, and sticks with you
              long term not the case with freelancers
              <p className="mt-6">
                {" "}
                Our
                <span
                  style={{
                    background: `linear-gradient(to right,rgba(210, 28, 159, 1), rgba(202,67, 150, 1))`,
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                    display: "inline-block",
                  }}
                >
                  delivery model
                </span>{" "}
                helps you cut costs and deliever within budget.{" "}
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "20px",
                }}
              >
                {" "}
                <div
                  style={{
                    background: `linear-gradient(to bottom, rgba(200, 28, 159, 1), rgba(190, 67, 160, 1))`,
                    width: "5px", // Adjust the width to change the thickness of the line
                    height: "13vh", // Adjust the height as needed
                    borderRadius: "20px", // Apply a border-radius for a rounded line (optional)
                    marginRight: "10px", // Adjust the spacing from other content
                  }}
                ></div>{" "}
                <p
                  style={{
                    background: `linear-gradient(to bottom,rgba(210, 28, 159, 1), rgba(202,67, 150, 1))`,
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                    display: "inline-block",
                    marginLeft: "5px",
                  }}
                >
                  "simform is quick to identify larger problem with the Software
                  so we decided to expand our scope to build new modules."
                </p>
              </div>
            </p>
            <p className="mt-6 font-medium"> Jeewa markram</p>
            <p className="text-gray-600"> CEO</p>
          </div>
          {/*Right Image Section*/}
          <div className="mt-9">
            <Image
              className="w-90 h-90 bg-opacity-40 rounded-xl "
              height={400}
              width={400}
              src={require("../../public/images/hero-2.jpg")}
              alt="Item"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

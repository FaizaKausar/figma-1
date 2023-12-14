import React from "react";

const Promotions = () => {
  return (
    <div>
      <div className=" bg-center text-center">
        <div className=" mt-20  justify-center flex  ">
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
          Our design and
        </h1>
        <p className=" mt-4 justify-center flex scroll-m-20 text-3xl font-extrabold tracking-tight">
          development approach
        </p>
      </div>
      {/*Hero Section of the page*/}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pl-28 pr-28 mt-10">
        <div className="bg-zinc-100 border border-zinc-300">
          <h3 className="text-2xl font-bold">UX Driven Engineering</h3>
          <p className="text-gray-700 mt-6">
            Unlike other companies,we are a{" "}
            <span className="text-gray-950">UX first</span> development company.
            Projects are driven by designersand they make sure design and{" "}
            eperiences translate to their code.{" "}
          </p>
        </div>
        <div className="bg-zinc-100 border border-zinc-300">
          <h3 className="text-2xl font-bold">
            Developing Shared Understanding
          </h3>
          <p className="text-gray-700 mt-6">
            Unlike other companies,we are a{" "}
            <span className="text-blue-400">UX first</span> development company.
            Projects are driven by designersand they make sure design and{" "}
            eperiences translate to their code.{" "}
          </p>
        </div>
        <div className="mt-4 bg-zinc-100 border border-zinc-300">
          <h3 className="text-2xl font-bold">
            Proven Experience and Expertise
          </h3>
          <p className="text-gray-700 mt-6">
            Unlike other companies,we are a{" "}
            <span className="text-pink-400">UX first</span> development company.
            Projects are driven by designersand they make sure design and{" "}
            eperiences translate to their code.{" "}
          </p>
        </div>
        <div className="mt-4 bg-zinc-100 border border-zinc-300">
          <h3 className="text-2xl font-bold">
            Security & Intellectual Property (IP)
          </h3>
          <p className="text-gray-700 mt-6">
            Unlike other companies,we are a{" "}
            <span className="text-blue-300">UX first</span> development company.
            Projects are driven by designersand they make sure design and{" "}
            eperiences translate to their code.{" "}
          </p>
        </div>
        <div className="mt-4 bg-zinc-100 border border-zinc-300">
          <h3 className="text-2xl font-bold">Code Reviews </h3>
          <p className="text-gray-700 mt-6">
            Unlike other companies,we are a{" "}
            <span className="text-yellow-400">UX first</span> development
   
            company. Projects are driven by designersand they make sure design
            and eperiences translate to their code.{" "}
          </p>
        </div>
        <div className="mt-4 bg-zinc-100 border border-zinc-300">
          <h3 className="text-2xl font-bold">Quality Assurance & Testing</h3>
          <p className="text-gray-700 mt-6">
            Unlike other companies,we are a{" "}
            <span className="text-pink-700">UX first</span> development company.
            Projects are driven by designersand they make sure design and{" "}
            eperiences translate to their code.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Promotions;

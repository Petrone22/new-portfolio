import React from "react";
import LinkComponent from "./LinkComponent";
import discord from "../assets/discord.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import gmail from "../assets/gmail.png";
const ContactPage = () => {
  return (
    <div className=" mt-16 h-screen w-full   lg:max-w-7xl relative flex flex-col items-center gap-12 text-black md:mb-20 ">
      <div className="w-full h-fit text-textClr">
        <p className="font-bold text-center text-3xl md:text-6xl">
          Let's Build Something <br />
          <span className="text-purple-900"> Great Together!</span>
        </p>
      </div>
      <div className="w-full md:w-3/5  h-fit flex flex-col gap-12 items-center">
        <form
          className="flex flex-col gap-4 w-10/12 md:w-11/12 font-semibold"
          id="contactform"
          action="https://formsubmit.io/send/mustafarashid.cs@gmail.com"
          method="POST"
        >
          <input
            name="name"
            type="text"
            id="name"
            placeholder="Name"
            className="rounded-xl p-2 outline-none"
          />
          <input
            name="email"
            type="email"
            id="email"
            placeholder="Email"
            className="rounded-xl p-2 outline-none"
          />
          <textarea
            name="comment"
            placeholder="Comment"
            id="comment"
            rows="3"
            className="rounded-xl p-1 outline-none"
          ></textarea>

          <input
            value="Submit"
            type="submit"
            className="bg-purple-950 hover:bg-purple-700 transition-all rounded-xl py-4 text-xl mdtext-2xl text-textClr"
          />
        </form>
        <div className="w-11/12 h-fit flex flex-wrap gap-2 justify-between">
          <LinkComponent img={discord} text={"Petrone#5119"} />
          <LinkComponent img={instagram} text={"Petrone0001"} />
          <LinkComponent
            img={linkedin}
            text={"www.linkedin.com/in/mustafa-rashid-7370a7265/"}
          />
          <LinkComponent img={gmail} text={"mustafarashid.cs@gmail.com"} />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

import React from "react";

const ContactTop = () => {
  return (
    <div className="w-full h-8 bg-lime-600 hidden lg:block">
      <div className="flex justify-between px-12">
        <div className="flex gap-5 text-white">
            <p className="">Mobile: 8801xxxxxxxxx</p>
            <p className="">Email: info@mail.com</p>
            <p className="">Every Day 8:00am - 10:00 pm</p>
        </div>
        <div className="flex gap-5">
            <p className="facebook">Facebook</p>
            <p className="Linkedin">Linkedin</p>
            <p className="youtube">youtube</p>
            <p className="github">github</p>
        </div>
      </div>
    </div>
  );
};

export default ContactTop;

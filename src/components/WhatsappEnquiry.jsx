import React from "react";
import whatsapp from "../assets/Whatsapp.png";

const WhatsappEnquiry = () => {
  return (
    <section>
      <div className="flex flex-col items-center gap-7 mb-14 mx-4">
        <h1 className="text-xl ">Testing & Consulting</h1>
        <h1 className="text-3xl tracking-wider">
          High Quality Solutions diversified experience in the field consulting
          & testing
        </h1>
        <div className="flex gap-4">
          <button className="bg-[#25D366] text-white font-bold px-5 py-2 rounded-md">
            Enquiry Form
          </button>
          <img
            src={whatsapp}
            alt=""
            width={30}
            height={30}
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default WhatsappEnquiry;

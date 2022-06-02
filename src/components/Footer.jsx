import React from "react";
import { AiTwotoneHeart } from "react-icons/ai";

export function Footer() {
  return (
    <div className="w-full h-16 bg-gray-50 flex justify-center items-center p-10">
      <h1 className="text-base text-blue-900 mr-2">Feito com</h1>
      <AiTwotoneHeart className="text-red-600 mr-2" />
      <h1 className="text-base mr-2">
        Criado por
        <a
          href="#"
          className="cursor-pointer font-semibold text-indigo-600 hover:text-black ml-2"
        >
          MarceloCLopes
        </a>
      </h1>
    </div>
  );
}

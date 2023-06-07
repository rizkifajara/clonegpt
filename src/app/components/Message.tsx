import { DocumentData } from "firebase/firestore";
import Image from "next/image";
import { useEffect } from "react";
import AIWriter from "react-aiwriter";
import { useTypewriter } from "react-simple-typewriter";

type Props = {
  message: DocumentData;
};

function Message({ message }: Props) {
  console.log(message);
  const isCloneGPT = message.user.name === "CloneGPT";

  return (
    <div className={`py-5 text-white ${isCloneGPT && "bg-[#434654]"}`}>
      <div className="flex space-x-5 px-10 max-w-2xl mx-auto">
        <img src={message.user.avatar} alt="" className="h-8 w-8" />

        <p className="pt-1 text-sm">{message.text}</p>
      </div>
    </div>
  );
}

export default Message;

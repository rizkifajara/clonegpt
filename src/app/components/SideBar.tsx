"use client";

import { signOut, useSession } from "next-auth/react";
import NewChat from "./NewChat";
import Image from "next/image";

import { useCollection } from "react-firebase-hooks/firestore";
import { collection, orderBy, query } from "firebase/firestore";
import { db } from "../../../firebase";
import ChatRow from "./ChatRow";
import ModelSelection from "./ModelSelection";
import { createRef, useState } from "react";
import { createPopper } from "@popperjs/core";
import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/outline";

function SideBar() {
  const [dropdownPopoverShow, setDropdownPopoverShow] = useState(false);
  const btnDropdownRef: any = createRef();
  const popoverDropdownRef: any = createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "right-start",
      strategy: "fixed",
      modifiers: [
        {
          name: "offset",
          options: {
            offset: [0, 20],
          },
        },
      ],
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  const { data: session } = useSession();

  const [chats, loading, error] = useCollection(
    session &&
      query(
        collection(db, "users", session.user?.email!, "chats"),
        orderBy("createdAt", "asc")
      )
  );

  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1">
        <div>
          {/* New Chat */}
          <NewChat />
          <div className="hidden sm:inline">
            <ModelSelection />
          </div>

          {/* Maps through rows */}
          <div className="flex flex-col space-y-2 my-2">
            {loading && (
              <div className="animate-pulse text-center text-white">
                Loading Chats...
              </div>
            )}

            {chats?.docs.map((chat) => (
              <ChatRow key={chat.id} id={chat.id} />
            ))}
          </div>
        </div>
      </div>

      {session && (
        <>
          <Image
            ref={btnDropdownRef}
            onClick={() => {
              dropdownPopoverShow
                ? closeDropdownPopover()
                : openDropdownPopover();
            }}
            src={session.user?.image!}
            alt=""
            width={200}
            height={200}
            className="h-12 w-12 rounded-full cursor-pointer mx-auto mb-2 hover:opacity-50"
          />
          <div
            ref={popoverDropdownRef}
            className={
              (dropdownPopoverShow ? "block " : "hidden ") +
              "bg-white " +
              "text-base z-50 list-none text-center rounded shadow-lg mb-1 hover:opacity-50 ml-5"
            }
            style={{ minWidth: "5rem" }}
          >
            <button className={"text-red-500"} onClick={() => signOut()}>
              <ArrowLeftOnRectangleIcon className="h-11 w-11" />
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default SideBar;

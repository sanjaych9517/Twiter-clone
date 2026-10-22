import React, { useState } from "react";
import {
  IoHomeOutline,
  IoSearchOutline,
  IoNotificationsOutline,
  IoPersonOutline,
  IoBookmarkOutline,
  IoLogOutOutline,
  IoMenuOutline,
  IoCloseOutline,
} from "react-icons/io5";

const LeftSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Burger Button - Fixed Top Left Corner */}
      <div className="md:hidden fixed top-3 left-4 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-full bg-white shadow-md hover:bg-gray-200 cursor-pointer"
        >
          {isOpen ? (
            <IoCloseOutline size="28px" />
          ) : (
            <IoMenuOutline size="28px" />
          )}
        </button>
      </div>

      {/* Sidebar - Mobile par toggle hoga, Desktop (md) par hamesha dikhega */}
      <div
        className={`${
          isOpen
            ? "block fixed top-0 left-0 bg-white h-full z-40 shadow-lg w-64 pt-16"
            : "hidden"
        } md:block md:static md:w-[20%] md:shadow-none md:pt-2 p-2`}
      >
        <div>
          <div>
            <img
              width={"36px"}
              className="ml-3"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4OsbXb5HVLjeUojaS5UY7mmQCoJX_ydH9npz8w5hpiezxRxBpAA82w5TN&s=10"
              alt="logo"
            />
          </div>

          <div className="my-4">
            {/* Home */}
            <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 rounded-full cursor-pointer">
              <div>
                <IoHomeOutline size="24px" />
              </div>
              <h1 className="font-bold text-lg ml-2">Home</h1>
            </div>

            {/* Explore */}
            <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 rounded-full cursor-pointer">
              <div>
                <IoSearchOutline size="24px" />
              </div>
              <h1 className="font-bold text-lg ml-2">Explore</h1>
            </div>

            {/* Notification */}
            <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 rounded-full cursor-pointer">
              <div>
                <IoNotificationsOutline size="24px" />
              </div>
              <h1 className="font-bold text-lg ml-2">Notification</h1>
            </div>

            {/* Profile */}
            <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 rounded-full cursor-pointer">
              <div>
                <IoPersonOutline size="24px" />
              </div>
              <h1 className="font-bold text-lg ml-2">Profile</h1>
            </div>

            {/* Bookmarks */}
            <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 rounded-full cursor-pointer">
              <div>
                <IoBookmarkOutline size="24px" />
              </div>
              <h1 className="font-bold text-lg ml-2">Bookmarks</h1>
            </div>

            {/* Logout */}
            <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 rounded-full cursor-pointer">
              <div>
                <IoLogOutOutline size="24px" />
              </div>
              <h1 className="font-bold text-lg ml-2">Logout</h1>
            </div>

            {/* Tweet / Post Button */}
            <button className="px-4 py-2 border-none text-md bg-[#1D9BF0] hover:bg-[#1a8cd8] w-full rounded-full text-white font-bold mt-2 cursor-pointer">
              Post
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftSidebar;

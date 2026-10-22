import React from "react";
import { IoHomeOutline } from "react-icons/io5";
const LeftSidebar = () => {
  return (
    <div>
      <div>
        <div>
          <img
            width={"36px"}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4OsbXb5HVLjeUojaS5UY7mmQCoJX_ydH9npz8w5hpiezxRxBpAA82w5TN&s=10"
            alt=""
          />
        </div>
        <div>
          <div className="flex items-center">
            <div>
              <IoHomeOutline />
            </div>
            <h1>Home</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;

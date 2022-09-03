import React from "react";

const MainContainer = ({
  children,
  icon,
  title,
  onButtonClick,
  buttonIcon,
  buttonText,
}) => {
  return (
    <div className="p-6 w-full bg-gray-50">
      <div className="bg-gray-100 border border-gray-200 rounded-md shadow-lg">
        <div className=" flex justify-between bg-gray-700  py-2 px-4 text-white rounded-t-md">
          <div className="flex  text-2xl">
            <div className="mr-2 mt-1 ">{icon}</div>
            <div>{title}</div>
          </div>
          <div className="flex justify-around">
            <button
              onClick={onButtonClick}
              className="bg-red-500 py-2 px-4 rounded text-white hover:bg-red-600 hover:shadow-lg text-center"
            >
              <div className="flex justify-around">
                {buttonIcon && <div className="mr-2 mt-1 ">{buttonIcon}</div>}

                <div>{buttonText}</div>
              </div>
            </button>
          </div>
        </div>
        <div className="p-4">
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;

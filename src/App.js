import React, { useState } from "react";
import {
  FaAffiliatetheme,
  FaAcquisitionsIncorporated,
  FaArtstation,
} from "react-icons/fa";
import MainContainer from "./components/MainContainer";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleClick = () => {
    console.log("Clicked");
    setSidebarOpen(!sidebarOpen);
  };

  const onButtonClick = () => {
    alert("Button Clicked");
  };

  return (
    <>
      <div className="">
        <div className="">
          <header className="flex items-center p-6 text-semibold text-gray-100 bg-slate-800 ">
            <div className="pr-2 text-2xl">SPIDER</div>
            <button className="p-1 mr-4" onClick={handleClick}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </header>
        </div>

        <div className="flex overflow-x-hidden ">
          <aside
            className={`flex-shrink-0 flex flex-col border-r transition-all duration-300  ${
              sidebarOpen ? "w-60" : "w-20"
            }`}
          >
            <div className="">
              {sidebarOpen ? (
                <nav className="flex-1 flex flex-col bg-slate-800 text-white pt-6 pl-4 h-screen">
                  <div className="flex ">
                    <div className="p-2">
                      <FaAffiliatetheme />
                    </div>
                    <div className="p-2">Nav Link 1</div>
                  </div>
                  <div className="flex">
                    <div className="p-2">
                      <FaAcquisitionsIncorporated />
                    </div>
                    <div className="p-2">Nav Link 1</div>
                  </div>
                  <div className="flex">
                    <div className="p-2">
                      <FaArtstation />
                    </div>
                    <div className="p-2">Nav Link 1</div>
                  </div>
                </nav>
              ) : (
                <nav className="flex-2 flex flex-col bg-slate-800 text-white pt-6 pl-4 h-screen">
                  <div className="flex">
                    <div className="p-2">
                      <FaAffiliatetheme />
                    </div>
                    <div className="p-2"></div>
                  </div>
                  <div className="flex">
                    <div className="p-2">
                      <FaAcquisitionsIncorporated />
                    </div>
                    <div className="p-2"></div>
                  </div>
                  <div className="flex">
                    <div className="p-2">
                      <FaArtstation />
                    </div>
                    <div className="p-2"></div>
                  </div>
                </nav>
              )}
            </div>
          </aside>
          <div className="flex flex-col w-full">
            <div>
              <MainContainer
                icon={<FaAffiliatetheme />}
                title={"My Headline"}
                onButtonClick={onButtonClick}
                buttonText="Click me"
                buttonIcon={<FaArtstation />}
              >
                <div className="text-lg">
                  <h1>Heading 1</h1>
                </div>
                <h2>I can place whatever I like here...</h2>
              </MainContainer>
            </div>
            <div
              className="bg-slate-800 h-14 w-full text-white text-center pt-3 -mx-1 fixed bottom-0
            flex justify-center items-center"
            >
              XXXXXXXXXXXX
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

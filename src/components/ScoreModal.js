import React from "react";

function ScoreModal({ Score, setGmat, setGre, gre, gmat }) {
  return (
    <div className="h-screen w-full flex justify-between top-0 left-0  absolute  ">
      {gmat && (
        <div className="relative h-full w-full lg:w-[80%] border-2 top-4 bg-white m-auto">
          <img className="w-full" src={Score} alt="Score sheet" />
          <button
            onClick={() => setGmat(false)}
            className="py-2 px-3 absolute bg-black text-white top-0 right-0"
          >
            X
          </button>
        </div>
      )}
      {gre && (
        <div className="elative h-full w-full lg:w-[80%] border-2 top-4 bg-white m-auto">
          <img className="mt-10 " src={Score} alt="Score sheet" />
          <button
            onClick={() => setGre(false)}
            className="py-2 px-4 absolute bg-black text-white top-0 right-0"
          >
            X
          </button>
        </div>
      )}
    </div>
  );
}

export default ScoreModal;

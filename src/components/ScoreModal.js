import React from "react";

function ScoreModal({ Score, setGmat, setGre, gre, gmat }) {
  return (
    <div className="h-screen w-full flex justify-between  absolute  ">
      {gmat && (
        <div className="relative w-[80%] border-2 top-4 bg-white m-auto">
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
        <div className="relative w-[80%] border-2 bg-white top-4 m-auto">
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

import React from "react";

const Loading = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/70">
      <span className="loading loading-bars loading-xl"></span>
    </div>
  );
};

export default Loading;

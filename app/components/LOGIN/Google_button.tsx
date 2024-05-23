import Image from "next/image";
import React from "react";

function Google_button() {
  return (
    <button onClick={() => {}} className="auth-button">
      <div className="relative w-6 h-6">
        <Image src="/Icon_gmail.svg" alt="" fill />
      </div>
      <span>REGISTER WITH GOOGLE</span>
    </button>
  );
}

export default Google_button;

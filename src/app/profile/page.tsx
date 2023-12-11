import React from "react";

function Profile() {
  return (
    <main className="h-full">
      <div className="lg:flex h-full">
        <div
          className="
        flex-1 
        lg:bg-none 
        bg-[url('https://images.unsplash.com/photo-1585059643411-da09ea0c68db?q=80&w=2980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] 
        bg-no-repeat bg-cover bg-center
        h-full
        "
        >
          <div className="p-8">
            <h1 className="font-bold text-black">Maquis Scott</h1>
            <p className="md:text-gray-500 text-black">CAMERA : DESIGN</p>
            <p className="md:text-gray-500 text-black">LA/NYC</p>
            <br />
            <br />
            <br />
            <a>
              <p className="lg:text-gray-500 text-black">RECENT</p>
            </a>
            <br />
            <p className="lg:text-gray-500 text-black">OTHER</p>
            <br />
            <p className="lg:text-gray-500 text-black">ABOUT</p>
            <br />
            <br />
            <br />
            <p className="lg:text-gray-500 text-black">CONTACT</p>
            <p className="lg:text-gray-500 text-black">(323) 732-1108</p>
            <p className="lg:text-gray-500 text-black">info@maquisscott.com</p>
            <p className="lg:text-gray-500 text-black">@_kwees</p>
          </div>
        </div>
        <div className="flex-auto w-2/6">
          <div className="relative h-full">
            <img
              src="https://images.unsplash.com/photo-1585059643411-da09ea0c68db?q=80&w=2980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Maquis scott hand"
              className="absolute top-0 right-0 left-0 bottom-0 h-full w-full bg-contain"
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Profile;

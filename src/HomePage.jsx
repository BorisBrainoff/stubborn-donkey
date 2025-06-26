import React from 'react';

export default function HomePage() {
  return (
    <div className="relative w-full h-screen overflow-hidden font-serif">
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
        src="/stationary-light-landing-page.m4v"
        type="video/mp4"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pt-40 md:pt-52">
        <h1 className="text-5xl md:text-7xl font-semibold text-white drop-shadow-md">
          Stationary Light Cosmology
        </h1>
        <div className="mt-8 flex space-x-6">
          <a
            href="https://www.wolframcloud.com/obj/substitutematerials/Published/SL%20cosmocalc%20web%202.nb"
            className="px-4 py-2 bg-white text-black rounded hover:bg-gray-300"
            target="_blank"
          >
            Calculator
          </a>
          <a
            href="https://www.overleaf.com/read/nnzgyzvtbsbq#3c5778"
            className="px-4 py-2 bg-white text-black rounded hover:bg-gray-300"
            target="_blank"
          >
            Read the Paper
          </a>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-90 p-6 flex flex-col items-center md:flex-row md:justify-center md:space-x-12">
        <iframe
          className="w-full md:w-1/2 h-48"
          src="https://www.youtube.com/embed/1-HeLKZ-154"
          title="1 minute explainer"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <iframe
          className="w-full md:w-1/2 h-48 mt-6 md:mt-0"
          src="https://www.youtube.com/embed/NND0gmNSrxE"
          title="record analogy"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

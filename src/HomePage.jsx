import React from 'react';

export default function HomePage() {
  return (
  <div className="flex justify-center items-center gap-6 flex-wrap mt-20 md:mt-40">

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
      

    <div className="mt-10 flex flex-col md:flex-row gap-8 justify-center text-white text-xl font-serif">
  <a
    href="https://www.wolframcloud.com/obj/substitutematerials/Published/SL%20cosmocalc%20web%202.nb"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:underline"
  >
    SL Calculator
  </a>
  <a
    href="https://www.overleaf.com/read/nnzgyzvtbsbq#3c5778"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:underline"
  >
    Read the Paper
  </a>
</div>


      </div>
    <footer className="mt-20 pb-16 md:pb-28">
  <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 px-6">
    <iframe
      width="360"
      height="215"
      src="https://www.youtube.com/embed/1-HeLKZ-154"
      title="1-minute explainer"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
    <iframe
      width="360"
      height="215"
      src="https://www.youtube.com/embed/NND0gmNSrxE"
      title="record analogy"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
</footer>
    </div>
  );
}

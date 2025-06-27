import React from "react";

export default function HomePage() {
  return (
    <div className="relative w-full h-screen overflow-hidden text-white">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* Navigation/Header */}
      <nav className="absolute top-6 left-1/2 transform -translate-x-1/2 z-10 text-sm md:text-base space-x-4">
        <a href="https://www.wolframcloud.com/obj/substitutematerials/Published/SL%20cosmocalc%20web%202.nb" target="_blank" rel="noopener noreferrer" className="hover:underline">
          Calculator
        </a>
        <a href="https://www.overleaf.com/read/nnzgyzvtbsbq#3c5778" target="_blank" rel="noopener noreferrer" className="hover:underline">
          Paper
        </a>
      </nav>

      {/* Title */}
      <div className="absolute inset-0 flex flex-col items-center justify-end pb-32 z-10 px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-serif text-white drop-shadow-xl">
          Stationary Light Cosmology
        </h1>
      </div>

      {/* Explainer Videos Section */}
      <section className="w-full px-6 pt-24 md:pt-48 bg-black text-white text-center">
        <h2 className="text-xl md:text-2xl font-semibold mb-8">Watch the Videos</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <iframe
            className="w-full md:w-[480px] h-[270px]"
            src="https://www.youtube.com/embed/1-HeLKZ-154"
            title="1-minute explainer"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <iframe
            className="w-full md:w-[480px] h-[270px]"
            src="https://www.youtube.com/embed/NND0gmNSrxE"
            title="Record Analogy"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white text-center py-8 text-sm mt-12">
        <p className="mb-2">Contact: <a href="mailto:stationarylightcosmology@gmail.com" className="underline">stationarylightcosmology@gmail.com</a></p>
        <p className="max-w-3xl mx-auto px-4">
          Stationary Light is a purely geometric alternative to cosmic expansion. It reinterprets redshift as a consequence of universal clock drift and explains supernova and nucleosynthesis data without invoking dark energy.
        </p>
      </footer>
    </div>
  );
}

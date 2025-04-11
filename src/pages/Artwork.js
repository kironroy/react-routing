import React from 'react';
import './Artwork.css'; // Separate CSS for Home
import './BackToTop.js';

const Artwork = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div>
      <h1>Artwork</h1>
      <div className="gallery">
    
        {/* arch starts */}
        <img
          src="https://cdn.glitch.global/eca19aa0-f945-40db-8788-48ebea4c6689/venice.webp?v=1736029328248"
          alt="Black and white sketch of Venice, Italy."
          loading="lazy"
        />
        <img
          src="https://cdn.glitch.global/eca19aa0-f945-40db-8788-48ebea4c6689/vatican.webp?v=1736029335992"
          alt="Black and white sketch of the Vatican."
          loading="lazy"
        />
        <img
          src="https://cdn.glitch.global/eca19aa0-f945-40db-8788-48ebea4c6689/notredame.webp?v=1736029332612"
          alt="Black and white sketch of the Notre De Dame Cathedral."
          loading="lazy"
        />
        <img
          src="https://cdn.glitch.global/eca19aa0-f945-40db-8788-48ebea4c6689/russian.webp?v=1736029337344"
          alt="Black and white sketch of an Orthodox church in Russia."
          loading="lazy"
        />
        <img
          src="https://cdn.glitch.global/eca19aa0-f945-40db-8788-48ebea4c6689/huntington.webp?v=1736029337334"
          alt="Black and white sketch of Japanese garden at Huntington library."
          loading="lazy"
        />
        <img
          src="https://cdn.glitch.global/eca19aa0-f945-40db-8788-48ebea4c6689/la.webp?v=1736029338119"
          alt="Black and white sketch of Los Angeles downtown."
          loading="lazy"
        />
        <img
          src="https://cdn.glitch.global/eca19aa0-f945-40db-8788-48ebea4c6689/archF1.webp?v=1736028106046"
          alt="Graphite sketch of house in West Bengal, India."
          loading="lazy"
        />
        <img
          src="https://cdn.glitch.global/eca19aa0-f945-40db-8788-48ebea4c6689/archF2.webp?v=1736028110470"
          alt="Blue ink sketch of house in West Bengal, India."
          loading="lazy"
        />
        <img
          src="https://cdn.glitch.global/eca19aa0-f945-40db-8788-48ebea4c6689/vinyl.webp?v=1740891788493"
          alt="Local vinyl store."
          loading="lazy"
        />
        <img
          src="https://cdn.glitch.global/eca19aa0-f945-40db-8788-48ebea4c6689/STD.webp?v=1740870128546"
          alt="STD phone booth in background."
          loading="lazy"
        />
        {/* arch ends */}
        <img
          src="https://cdn.glitch.global/eca19aa0-f945-40db-8788-48ebea4c6689/archF4.webp?v=1736028112977"
          alt="Palm Springs, age 10."
          loading="lazy"
        />
        <img
          src="https://cdn.glitch.global/eca19aa0-f945-40db-8788-48ebea4c6689/archF5.webp?v=1736028114571"
          alt="Dining table, age 10."
          loading="lazy"
        />
        {/* cars --> */}
        <img
          src="https://cdn.glitch.global/eca19aa0-f945-40db-8788-48ebea4c6689/archF6.webp?v=1736028116513"
          alt="Ferrari 310, age 10."
          loading="lazy"
        />
        <img
          src="https://cdn.glitch.global/eca19aa0-f945-40db-8788-48ebea4c6689/taxi-6779b23bddabd.webp?v=1736028858630"
          alt="Blue Mercedes in Morocco."
          loading="lazy"
        />
        <img
          src="https://cdn.glitch.global/eca19aa0-f945-40db-8788-48ebea4c6689/van2-6779b23ce8f58.webp?v=1736028860219"
          alt="Salvation Mountain, bus."
          loading="lazy"
        />

        <img
          src="https://cdn.glitch.global/eca19aa0-f945-40db-8788-48ebea4c6689/truck.webp?v=1737087867420"
          alt="Sauvie Island, plant takes red pickup truck."
          loading="lazy"
        />
        {/* cars end  */}
        <img
          src="https://cdn.glitch.global/eca19aa0-f945-40db-8788-48ebea4c6689/archF7.webp?v=1736028118255"
          alt="Night Thrasher, age 9."
          loading="lazy"
        />
        <img
          src="https://cdn.glitch.global/eca19aa0-f945-40db-8788-48ebea4c6689/archF8.webp?v=1736028120739"
          alt="Coca Cola ca, age 10."
          loading="lazy"
        />
        {/* people  */}
        <img
          src="https://cdn.glitch.global/eca19aa0-f945-40db-8788-48ebea4c6689/archF9.webp?v=1736028122422"
          alt="Dolores Del Rio, 1998."
          loading="lazy"
        />
        <img
          src="https://cdn.glitch.global/eca19aa0-f945-40db-8788-48ebea4c6689/archF10.webp?v=1736028123857"
          alt="Graphite sketch of woman and baby."
          loading="lazy"
        />

        <img
          src="https://cdn.glitch.global/eca19aa0-f945-40db-8788-48ebea4c6689/archF13.webp?v=1736028128901"
          alt="Graphite sketch of Indian woman."
          loading="lazy"
        />

        <img
          src="https://cdn.glitch.global/eca19aa0-f945-40db-8788-48ebea4c6689/ker.webp?v=1736028133065"
          alt="Four Indian women in temple."
          loading="lazy"
        />
        <img
          src="  https://cdn.glitch.global/eca19aa0-f945-40db-8788-48ebea4c6689/vincent.webp?v=1736030168822"
          alt="Young Vincent."
          loading="lazy"
        />
        {/* people end 
        < vegas starts --> */}
        <img
          src="https://cdn.glitch.global/eca19aa0-f945-40db-8788-48ebea4c6689/sally.webp?v=1736036689992"
          alt="Glitter Glitch, Las Vegas."
          loading="lazy"
        />
        <img
          src="https://cdn.glitch.global/eca19aa0-f945-40db-8788-48ebea4c6689/IMG_1452.webp?v=1737088379645"
          alt="Stardust casino, Las Vegas."
          loading="lazy"
        />
        <img
          src="https://cdn.glitch.global/eca19aa0-f945-40db-8788-48ebea4c6689/IMG_1449.webp?v=1737088372553"
          alt="Golden Nugget, Las Vegas."
          loading="lazy"
        />
        {/* vegas ends  */}
        <img
          src="https://cdn.glitch.global/eca19aa0-f945-40db-8788-48ebea4c6689/1970sindia.webp?v=1739297720682"
          alt="1970s India. Markers on black canvas. 20 by 16 inches"
          loading="lazy"
        />
        <img
          src="https://cdn.glitch.global/eca19aa0-f945-40db-8788-48ebea4c6689/maine_pyre.webp?v=1739036076808"
          alt="Old bollywood signs, black paper."
          loading="lazy"
        />
        {/* 2 oil paintings */}
        <img
          src="https://cdn.glitch.global/eca19aa0-f945-40db-8788-48ebea4c6689/archF11.webp?v=1736028126273"
          alt="Oil on canvas. Moon painting, 2002"
          loading="lazy"
        />
        <img
          src="https://cdn.glitch.global/eca19aa0-f945-40db-8788-48ebea4c6689/archF12.webp?v=1736028127539"
          alt="Oil on canvas. Ocean painting, sunset."
          loading="lazy"
        />
      </div>
      <button onClick={scrollToTop} className="back-to-top">
        Top
      </button>
    </div>
  );
};

export default Artwork;

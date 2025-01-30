import React from 'react';
import './index.css'; // Import Tailwind CSS
import LiveSessions from './components/body/livesession.js';
import Hero from './components/body/hero.js';
import Paint from './components/body/paint.js';
import TripleNFTSection from './components/body/tripple.js';
import Habitat from './components/body/habitat.js';
import PopularAuction from './components/body/popularauction.js';
import Session from './components/body/session.js';
import Circus from './components/body/circus.js';
import Scrolling from './components/body/scroll.js';


function Nft() {
  return (
    <div className="Nft ">
        <Hero />
        <LiveSessions />
        <Paint />
        <TripleNFTSection/>
        <Habitat/>
        < PopularAuction />
        <Session />
        <Circus/>
        <Scrolling/>
     
    
    </div>
  );
}

export default Nft;

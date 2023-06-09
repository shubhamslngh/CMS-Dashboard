import React, { useState, useEffect } from 'react';
import CasesGraph from './CasesGraph';

interface Chartsmaps {
  setActiveTab: (title: string) => void;
}

function Chartsmaps() {
  return (
    <div>
      <CasesGraph />
    </div>
  );
}


export default Chartsmaps;
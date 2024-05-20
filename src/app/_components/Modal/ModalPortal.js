'use client';

import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

const PortalComponent = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return ReactDOM.createPortal(children, document.getElementById('modal'));
};

export default PortalComponent;

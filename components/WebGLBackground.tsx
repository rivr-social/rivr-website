import React from 'react';

const WebGLBackground: React.FC = () => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        background: 'linear-gradient(135deg, #003333 0%, #339999 50%, #BCDED2 100%)',
        opacity: 0.9
      }}
    />
  );
};

export default WebGLBackground;
import { useState, useEffect } from 'react';
import { BiSolidSun, BiSolidMoon } from 'react-icons/bi';

function ChangeTheme({ defaultMode, setMode }) {
  const changeMode = () => {
    setMode(!defaultMode);
  };

  return (
    <button
      className="absolute top-5 right-6 cursor-pointer text-3xl text-blue-500"
      onClick={changeMode}
    >
      <p>
        {defaultMode ? (
          <BiSolidMoon className="hover:scale-105" />
        ) : (
          <BiSolidSun className="hover:scale-105" />
        )}{' '}
      </p>
    </button>
  );
}

export default ChangeTheme;

import { useEffect, useState } from 'react';
import { BiSolidSun, BiSolidMoon } from 'react-icons/bi';

function ChangeTheme() {
  const [darkTheme, setDarkTheme] = useState(
    window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  useEffect(() => {
    document.documentElement.classList.toggle('dark');
  }, [darkTheme]);

  const handThemeSwitch = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <button
      className="absolute top-5 right-6 cursor-pointer text-3xl text-blue-500"
      onClick={handThemeSwitch}
    >
      <p>
        {darkTheme ? (
          <BiSolidMoon className="hover:scale-105" />
        ) : (
          <BiSolidSun className="hover:scale-105" />
        )}
      </p>
    </button>
  );
}

export default ChangeTheme;

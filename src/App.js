import SignInBox from './components/SignInBox';
import { BiSolidSun, BiSolidMoon } from 'react-icons/bi';
import RegisterBox from './components/RegisterBox';
import Footer from './components/Footer';
import { useState, useEffect } from 'react';

function App() {
  // Form Change
  const [isRegisterForm, setIsRegisterForm] = useState(false);
  const changeRegisterForm = () => {
    setIsRegisterForm(!isRegisterForm);
  };

  // DarkTheme Change
  const [darkTheme, setDarkTheme] = useState(
    window.matchMedia('(prefers-color-scheme: dark)').matches
  );
  useEffect(() => {
    document.documentElement.classList.toggle('dark');
  }, [darkTheme]);

  const onThemeChange = () => {
    setDarkTheme(!darkTheme);
  };
  const icon = () => {
    return darkTheme ? (
      <BiSolidMoon className="hover:scale-105" />
    ) : (
      <BiSolidSun className="hover:scale-105" />
    );
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen relative bg-light dark:bg-dark text-dark dark:text-white">
      {!isRegisterForm ? (
        <SignInBox
          onClick={changeRegisterForm}
          onThemeChange={onThemeChange}
          icon={icon}
        />
      ) : (
        <RegisterBox
          onClick={changeRegisterForm}
          onThemeChange={onThemeChange}
          icon={icon}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;

import { BiSolidLeftArrow, BiSolidRightArrow } from 'react-icons/bi';
import { useState } from 'react';
import CreateAccountBtn from './CreateAccountBtn';

function ArrowBtn({ defaultMode, dark, light }) {
  const [buttonIcon, setButtonIcon] = useState(<BiSolidRightArrow />);
  let [clicked, setClicked] = useState(false);
  let [display, setDisplay] = useState(true);

  const handleButtonClick = () => {
    if (clicked) {
      setTimeout(() => {
        setDisplay(true);
      }, 650);
    } else {
      setTimeout(() => {
        setDisplay(false);
      }, 500);
    }
  };

  return (
    <div
      className="h-10 p-2 rounded-l-full text-white flex items-center justify-center absolute bottom-20 lg:bottom-10 right-0 transition-all delay-500 bg-arrowBox"
      style={
        clicked
          ? defaultMode
            ? {
                width: '40px',
              }
            : {
                width: '40px',
              }
          : defaultMode
          ? {
              width: '200px',
            }
          : {
              width: '200px',
            }
      }
    >
      <button
        className="text-2xl text-blue-400 "
        onClick={() => {
          setClicked((clicked) => !clicked);
          handleButtonClick();
          clicked
            ? setButtonIcon(
                <BiSolidRightArrow className="hover:translate-x-[2px] delay-75 transition-all" />
              )
            : setButtonIcon(
                <BiSolidLeftArrow className="hover:-translate-x-[2px] delay-75 transition-all" />
              );
        }}
      >
        {buttonIcon}
      </button>
      {display ? <CreateAccountBtn /> : <p></p>}
    </div>
  );
}

export default ArrowBtn;

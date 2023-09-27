import { BiSolidLeftArrow, BiSolidRightArrow } from 'react-icons/bi';
import { useEffect, useState } from 'react';

function ArrowBtn() {
  const [buttonIcon, setButtonIcon] = useState(<BiSolidRightArrow />);
  let [clicked, setClicked] = useState(false);
  let [display, setDisplay] = useState(true);

  useEffect(() => {
    if (clicked) {
      setTimeout(() => {
        setDisplay(false);
      }, 500);
    } else {
      setTimeout(() => {
        setDisplay(true);
      }, 400);
    }
  }, [clicked]);

  const handleButtonClick = () => {};

  return (
    <div
      className="h-10 p-2 rounded-l-full bg-arrowBoxLight dark:bg-arrowBoxDark shadow-md shadow-dark flex items-center justify-center absolute bottom-20 lg:bottom-10 right-0 transition-all delay-400 "
      style={
        clicked
          ? {
              width: '40px',
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
          clicked
            ? setButtonIcon(
                <BiSolidRightArrow className="hover:translate-x-[2px] delay-75 transition-all" />
              )
            : setButtonIcon(
                <BiSolidLeftArrow className="hover:-translate-x-[2px] delay-75 transition-all" />
              );
          handleButtonClick();
        }}
      >
        {buttonIcon}
      </button>
      {display ? <p className="ml-3">Create Account!</p> : <p></p>}
    </div>
  );
}

export default ArrowBtn;

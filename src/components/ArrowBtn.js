import { BiSolidLeftArrow, BiSolidRightArrow } from 'react-icons/bi';
import { useEffect, useState } from 'react';

function ArrowBtn({ onClick, text }) {
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
      }, 500);
    }
  }, [clicked]);

  return (
    <div
      className="h-10 p-2 rounded-l-full bg-arrowBoxLight dark:bg-arrowBoxDark shadow-md shadow-dark flex items-center justify-center absolute bottom-20 lg:bottom-10 right-0 transition-all delay-500 "
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
        className="text-2xl absolute left-2 text-blue-400 "
        onClick={() => {
          setClicked((clicked) => !clicked);
          clicked
            ? setButtonIcon(
                <BiSolidRightArrow className=" hover:translate-x-[2px] delay-75 transition-all" />
              )
            : setButtonIcon(
                <BiSolidLeftArrow className="hover:-translate-x-[2px] delay-75 transition-all" />
              );
        }}
      >
        {buttonIcon}
      </button>
      {display ? (
        <div
          className="ml-4 text-white group cursor-pointer"
          onClick={() => onClick()}
        >
          <div className=" text-center">{text}</div>
          <div className="w-0 group-hover:w-full h-[2px] bg-blue-500 rounded-md  transition-all delay-250"></div>
        </div>
      ) : (
        <p></p>
      )}
    </div>
  );
}

export default ArrowBtn;

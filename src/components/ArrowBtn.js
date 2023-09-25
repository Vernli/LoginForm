import { BiSolidLeftArrow } from 'react-icons/bi';
function ArrowBtn() {
  return (
    <div className="w-10 h-10 bg-neutral-500 rounded-l-full flex items-center justify-center absolute bottom-10 right-0 cursor-pointer">
      <p className="text-2xl text-blue-400">
        <BiSolidLeftArrow />
      </p>
    </div>
  );
}

export default ArrowBtn;

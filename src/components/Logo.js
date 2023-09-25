import { GiAlarmClock } from 'react-icons/gi';

function Logo() {
  return (
    <div className="flex sm:text-3xl md:text-4xl xl:text-5xl text-blue-400 absolute top-10 cursor-pointer p-2">
      <GiAlarmClock className=" sm:text-3xl md:text-4xl xl:text-5xl" />{' '}
      BreakTime
    </div>
  );
}

export default Logo;

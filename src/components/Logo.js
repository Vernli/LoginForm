import { GiAlarmClock } from 'react-icons/gi';

function Logo() {
  return (
    <div className="flex text-logo sm:text-3xl md:text-4xl xl:text-5xl  absolute top-5 cursor-pointer p-2 text-blue-500">
      <GiAlarmClock className=" sm:text-3xl md:text-4xl xl:text-5xl" />{' '}
      <p>BreakTime</p>
    </div>
  );
}

export default Logo;

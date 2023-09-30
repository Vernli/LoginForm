function Box(props) {
  return (
    <div className="sm:w-full sm:h-full lg:w-1/3 lg:h-2/3 xl:w-1/4 xl:h-2/3 2xl:w-1/5 2xl:h-[50%] bg-white dark:bg-boxDark shadow-LightMode dark:shadow-DarkMode md:rounded-xl flex flex-col items-center justify-center relative">
      {props.children}
    </div>
  );
}

export default Box;

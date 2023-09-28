function Box(props) {
  return (
    <div className="sm:w-full sm:h-full lg:w-1/4 lg:h-1/2 xl:w-1/4 xl:h-1/2 2xl:w-1/5 2xl:h-[35%] bg-white dark:bg-boxDark shadow-LightMode dark:shadow-DarkMode rounded-xl flex flex-col items-center justify-center relative">
      {props.children}
    </div>
  );
}

export default Box;

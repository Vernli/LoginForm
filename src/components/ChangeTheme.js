function ChangeTheme({ onClick, icon }) {
  return (
    <button
      className="absolute top-5 right-6 cursor-pointer text-3xl text-blue-500"
      onClick={onClick}
    >
      {icon()}
    </button>
  );
}

export default ChangeTheme;

function ChangeTheme({ onClick, icon }) {
  return (
    <button
      className="absolute top-2 right-2 cursor-pointer text-3xl text-blue-500"
      onClick={onClick}
    >
      {icon()}
    </button>
  );
}

export default ChangeTheme;

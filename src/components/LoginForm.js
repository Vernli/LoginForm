function LoginForm() {
  return (
    <form className="flex flex-col items-center w-full space-y-2">
      <input
        type="email"
        className="border-solid border border-gray-500 p-2 w-3/4 outline-none focus:border-b-2  focus:border-b-blue-500"
        placeholder="E-mail"
        required="true"
      />
      <input
        type="password"
        className="border-solid border border-gray-500 p-2 w-3/4 outline-none focus:border-b-2  focus:border-b-blue-500"
        placeholder="Password"
        required="true"
      />
      <button
        type="submit"
        className="border-solid border w-3/4 p-2 bg-blue-400 text-white hover:opacity-90 "
      >
        Submit
      </button>
    </form>
  );
}

export default LoginForm;

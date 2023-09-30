function LoginForm() {
  return (
    <form className="flex flex-col flex-wrap justify-center  w-2/3 h-2/3 space-y-3">
      <input
        type="email"
        className="p-2 w-full outline-none rounded-md border border-black text-black bg-inputLight dark:text-white dark:bg-inputDark focus:border-b-2 shadow-sm shadow-dark focus:border-b-blue-500"
        placeholder="E-mail"
        required={+true}
      />
      <input
        type="password"
        className="p-2 w-full outline-none rounded-md border border-black text-black bg-inputLight dark:text-white dark:bg-inputDark shadow-sm shadow-dark focus:border-b-2 focus:border-b-blue-500"
        placeholder="Password"
        required={+true}
      />
      <button
        type="submit"
        className="w-full px-3 py-1 bg-blue-500  rounded-lg  text-white hover:opacity-90 hover:-translate-y-[1px] transition-all shadow-md shadow-dark delay-75"
      >
        Sign In
      </button>
    </form>
  );
}

export default LoginForm;

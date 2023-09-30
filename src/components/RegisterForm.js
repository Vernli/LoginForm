function RegisterForm() {
  return (
    <form className="flex flex-col flex-wrap justify-center  w-2/3 h-2/3 space-y-6">
      <input
        type="text"
        className="w-full px-2 py-1 outline-none text-black border-b-2 dark:border-inputDark border-gray-400 dark:text-white dark:bg-boxDark focus:border-b-blue-500"
        placeholder="First Name"
      />
      <input
        type="text"
        className="w-full px-2 py-1 outline-none text-black border-b-2 dark:border-inputDark border-gray-400 dark:text-white dark:bg-boxDark focus:border-b-blue-500 "
        placeholder="Last Name"
      />
      <input
        type="email"
        className="w-full px-2 py-1 outline-none text-black border-b-2 dark:border-inputDark border-gray-400 dark:text-white dark:bg-boxDark focus:border-b-blue-500"
        placeholder="Email"
      />
      <input
        type="text"
        className="w-full px-2 py-1 outline-none text-black border-b-2 dark:border-inputDark border-gray-400 dark:text-white dark:bg-boxDark focus:border-b-blue-500"
        placeholder="Password"
      />
      <input
        type="text"
        className="w-full px-2 py-1 outline-none text-black border-b-2 dark:border-inputDark border-gray-400 dark:text-white dark:bg-boxDark focus:border-b-blue-500"
        placeholder="Confirm Password"
      />
      <button
        type="submit"
        className="w-full bg-blue-500 text-white rounded-lg px-3 py-1 "
      >
        Sign Up!
      </button>
    </form>
  );
}

export default RegisterForm;

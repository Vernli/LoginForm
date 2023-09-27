function LoginForm({ defaultMode, colors }) {
  return (
    <form className="flex flex-col items-center w-full space-y-2">
      <input
        type="email"
        className="p-2 w-3/4 outline-none rounded-md border border-black focus:border-b-2  focus:border-b-blue-500"
        placeholder="E-mail"
        required="true"
        style={
          defaultMode
            ? {
                backgroundColor: colors.inputDark,
                color: colors.fontDark,
              }
            : { backgroundColor: colors.inputLight, color: colors.fontLight }
        }
      />
      <input
        type="password"
        className="p-2 w-3/4 outline-none rounded-md border border-black focus:border-b-2 focus:border-b-blue-500"
        placeholder="Password"
        required="true"
        style={
          defaultMode
            ? { backgroundColor: colors.inputDark }
            : { backgroundColor: colors.inputLight }
        }
      />
      <button
        type="submit"
        className="w-3/4 p-2 bg-blue-500  rounded-sm  text-white hover:opacity-90 hover:-translate-y-[1px] transition-all delay-75"
        style={{
          boxShadow:
            '0px 4px 5px 0px hsla(0,0%,0%,0.14), 0px 1px 10px 0px hsla(0,0%,0%,0.12), 0px 2px 4px -1px hsla(0,0%,0%,0.2)',
        }}
      >
        Sign In
      </button>
    </form>
  );
}

export default LoginForm;

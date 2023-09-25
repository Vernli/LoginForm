import ChangeTheme from './ChangeTheme';
import Logo from './Logo';
import LoginForm from './LoginForm';
import ArrowBtn from './ArrowBtn';

function SignInBox() {
  return (
    <div className="sm:w-full sm:h-full lg:w-1/4 lg:h-1/2 xl:w-1/4 xl:h-1/2 2xl:w-1/5 2xl:h-[35%] border-solid border-1 rounded-xl border-black shadow-md bg-white flex flex-col items-center justify-center relative">
      <Logo />
      <LoginForm />
      <ArrowBtn />
      <ChangeTheme />
    </div>
  );
}

export default SignInBox;
//

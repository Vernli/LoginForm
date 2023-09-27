import ChangeTheme from './ChangeTheme';
import Logo from './Logo';
import LoginForm from './LoginForm';
import ArrowBtn from './ArrowBtn';

function SignInBox() {
  return (
    <div className="sm:w-full sm:h-full lg:w-1/4 lg:h-1/2 xl:w-1/4 xl:h-1/2 2xl:w-1/5 2xl:h-[35%] bg-white dark:bg-boxDark shadow-LightMode dark:shadow-DarkMode rounded-xl flex flex-col items-center justify-center relative">
      <Logo />
      <LoginForm />
      <ArrowBtn />
      <ChangeTheme />
    </div>
  );
}

export default SignInBox;
//

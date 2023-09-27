import ChangeTheme from './ChangeTheme';
import Logo from './Logo';
import LoginForm from './LoginForm';
import ArrowBtn from './ArrowBtn';

function SignInBox({ defaultMode, setMode, colors }) {
  return (
    <div
      className="sm:w-full sm:h-full lg:w-1/4 lg:h-1/2 xl:w-1/4 xl:h-1/2 2xl:w-1/5 2xl:h-[35%]  rounded-xl flex flex-col items-center justify-center relative"
      style={
        defaultMode
          ? {
              backgroundColor: colors.boxDark,
              borderColor: colors.borderDark,
              boxShadow:
                '0px 4px 5px 0px hsla(0,0%,0%,0.14),  0px 1px 10px 0px hsla(0,0%,0%,0.12),  0px 2px 4px -1px hsla(0,0%,0%,0.2)',
            }
          : {
              backgroundColor: colors.boxLight,
              borderColor: colors.borderLight,
              boxShadow:
                '0px 4px 5px 0px hsla(0,0%,0%,0.14), 0px 1px 10px 0px hsla(0,0%,0%,0.12), 0px 2px 4px -1px hsla(0,0%,0%,0.2)',
            }
      }
    >
      <Logo />
      <LoginForm defaultMode={defaultMode} colors={colors} />
      <ArrowBtn
        defaultMode={defaultMode}
        dark={{ background: colors.arrowBoxDark, font: colors.fontDark }}
        light={{ background: colors.arrowBoxLight, font: colors.fontLight }}
      />
      <ChangeTheme defaultMode={defaultMode} setMode={setMode} />
    </div>
  );
}

export default SignInBox;
//

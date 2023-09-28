import ChangeTheme from './ChangeTheme';
import Box from './Box';
import Logo from './Logo';
import LoginForm from './LoginForm';
import ArrowBtn from './ArrowBtn';

function SignInBox({ onClick, onThemeChange, icon }) {
  return (
    <Box>
      <Logo />
      <ChangeTheme onClick={onThemeChange} icon={icon} />
      <LoginForm />
      <ArrowBtn onClick={onClick} text={'Create Account!'} />
    </Box>
  );
}

export default SignInBox;
//

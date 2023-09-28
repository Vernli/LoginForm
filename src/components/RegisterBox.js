import Box from './Box';
import ChangeTheme from './ChangeTheme';
import Logo from './Logo';
import RegisterForm from './RegisterForm';
import ArrowBtn from './ArrowBtn';

function RegisterBox({ onClick, onThemeChange, icon }) {
  return (
    <Box>
      <Logo />
      <ChangeTheme onClick={onThemeChange} icon={icon} />
      <RegisterForm />
      <ArrowBtn onClick={onClick} text={'Sign In!'} />
    </Box>
  );
}

export default RegisterBox;

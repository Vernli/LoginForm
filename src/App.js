import SignInBox from './components/SignInBox';
import Footer from './components/Footer';
import { useState, useEffect } from 'react';

const colors = {
  backgroundLight: '#f1f1f1',
  backgroundDark: '#121212',
  fontLight: '#000000',
  fontDark: '#ffffff',
  boxLight: '#ffffff',
  boxDark: '#1d1d1d',
  borderLight: '#f5f5f4',
  borderDark: 'none',
  inputDark: '#373737',
  inputLight: '#f5f5f5',
  arrowBoxDark: '#373737',
  arrowBoxLight: '#6b7280',
};

function App() {
  const [defaultMode, setMode] = useState(
    window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  return (
    <div
      className="flex items-center justify-center w-screen h-screen relative"
      style={
        defaultMode
          ? { backgroundColor: colors.backgroundDark }
          : { backgroundColor: colors.backgroundLight }
      }
    >
      <SignInBox defaultMode={defaultMode} setMode={setMode} colors={colors} />
      <Footer />
    </div>
  );
}

export default App;

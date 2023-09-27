import SignInBox from './components/SignInBox';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex items-center justify-center w-screen h-screen relative bg-light dark:bg-dark text-dark dark:text-white">
      <SignInBox />
      <Footer />
    </div>
  );
}

export default App;

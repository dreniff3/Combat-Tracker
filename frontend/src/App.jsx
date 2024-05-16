import Header from './components/Header';
import FighterList from './components/FighterList';
import fighters from './fighters';

const App = () => {
    return (
      <>
        <Header round={0} />
        <FighterList fighters={fighters} turn={2} />
        {/* Add Fighter Btn */}
        {/* Next Turn Btn */}
        {/* End Combat Btn */}
      </>
    );
};

export default App;
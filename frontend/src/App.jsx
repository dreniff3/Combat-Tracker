import Combat from './screens/Combat';
import fighters from './fighters';

const App = () => {
  return (
    <>
      <Combat fighters={fighters} />
      {/* Add Fighter Btn */}
      {/* End Combat Btn */}
    </>
  );
};

export default App;
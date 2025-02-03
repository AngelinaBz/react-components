import './App.css';
import Button from './components/button/Button';

function App() {
  return (
    <>
      <Button
        label={'Что сделать'}
        style="primary"
        size={36}
        state={'enabled'}
      />
    </>
  );
}

export default App;

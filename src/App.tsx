import './App.css';
import Button from './components/button/Button';

function App() {
  return (
    <>
      <Button
        label={'Что сделать'}
        style="secondary"
        size={36}
        state={'enabled'}
        counter={true}
        focused={false}
      />
    </>
  );
}

export default App;

import './App.css';
import Cards from './Cards';
import Decomp from './Decomp';
import Color from './Color.jpg'

function App() {
  
  return (
    <>
      <div className='task'>Карточки</div>
      <Cards>{Color}</Cards>
      <div className='task'>Декомпозиция</div>
      <Decomp />
    </>
  );
}

export default App;

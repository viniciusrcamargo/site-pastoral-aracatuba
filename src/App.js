import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import Header from './screens/layout/header';
import Carrosel from './screens/components/carrosel';
import Cards from './screens/components/cards';

function App() {
  return (
    <div className='container'>
      <Header />
      <Carrosel />
      <Cards />
    </div>
  );
}

export default App;

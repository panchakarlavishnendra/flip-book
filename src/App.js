import './App.css';
import ProductList from './screens/ProductList';
import {Container} from 'react-bootstrap';

function App() {
  return (
    <Container className='p-1'>
    <ProductList />
    </Container>
  );
}

export default App;

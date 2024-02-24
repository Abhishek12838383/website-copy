import './App.css';
import Nav from './components/nav/Nav'
import Head from './components/nav-head/Head'
import Bread from './components/nav-bread/bread';
import Footer from './components/footer/Footer';
import Product from './components/product/Product';
import Sign from './components/sign/Sign';
import Brand from './components/brand/Brand';

function App() {
  return (
    <div className="App">
 <Nav/>
 <Head/>
<Bread/>
<Product/>
<Brand/>
<Sign/>
<Footer/>
    </div>
  );
}

export default App;

import './Mycomponents/Header/Header.css';
import './Mycomponents/Product/product.css';
import Header from './Mycomponents/Header';
import Product from './Mycomponents/Product/index';
import AboutUs from './Mycomponents/AboutUs/index'
import Footer from './Mycomponents/Footer/Footer';
import Pricing from './Mycomponents/Pricing';
import Subscribe from './Mycomponents/Subscribe';

function App() {
  return (
  <>
  <Header/>
  <Product/>
  <AboutUs />
  <Pricing/>
  <Subscribe/>
  <Footer/>
  </>
  );
}

export default App;

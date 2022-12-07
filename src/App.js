import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

//importando el Header
import Header from './Header';
import CardImagen from './CardImagen';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header titulo="Galería de Imágenes con React"></Header>
      <div>
        <CardImagen imagen="https://cdn.pixabay.com/photo/2022/11/28/20/52/bird-7623166_960_720.jpg" titulo="Pajaro" descripcion="Foto de pajaro"></CardImagen>
        <CardImagen imagen="https://cdn.pixabay.com/photo/2022/11/27/18/01/flower-7620426_960_720.jpg" titulo="Planta" descripcion="Foto de planta"></CardImagen>
        <CardImagen imagen="https://cdn.pixabay.com/photo/2022/12/02/14/13/desert-7630943_960_720.jpg" titulo="Paisaje" descripcion="Foto de paisaje"></CardImagen>
      </div>
      <Footer texto="Todos los derechos reservados @2022"></Footer>
    </div>
  );
}

export default App;

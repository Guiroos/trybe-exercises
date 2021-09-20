import CatImage from './img/catImage.jpg';
import Image from './Image';
import './App.css';

function App() {
  return (
    <main>
      <Image source={CatImage} alternativeText="Cute cat staring" />
    </main>
  );
}

export default App;

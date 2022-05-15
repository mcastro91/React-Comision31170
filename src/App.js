import Footer from "./Componets/Footer/Footer";
import ItemListConteiner from "./Componets/ItemListConteiner/ItemListConteiner";
import Header from "./Componets/Header/Header";
import ItemDetailConteiner from "./Componets/ItemDetailConteiner/ItemDetailConteiner";


function App() {
  return (
    <div className="App">
      <Header />
      <ItemListConteiner title="Productos"/>
      <ItemDetailConteiner />
      <Footer />
    </div>
  );
}

export default App;

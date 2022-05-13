import Footer from "./Componets/Footer/Footer";
import ItemListConteiner from "./Componets/ItemListConteiner/ItemListConteiner";
import Header from "./Componets/Header/Header";


function App() {
  return (
    <div className="App">
      <Header />
      <ItemListConteiner title="Productos"/>
      <Footer />
    </div>
  );
}

export default App;

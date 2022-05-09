import Footer from "./Componets/Footer/Footer";
import ItemListConteiner from "./Componets/ItemListConteiner/ItemListConteiner";
import Header from "./Componets/Header/Header";
import ItemCount from "./Componets/ItemCount/ItemCount"


function App() {
  return (
    <div className="App">
      <Header />
      <ItemListConteiner title="Productos"/>
      <ItemCount stock= {8} initial={1}/>
      <Footer />
    </div>
  );
}

export default App;

// Components Import
import  Header  from "./components/Header";
import  Footer  from "./components/Footer";
import  TitleImage  from "./components/titleImage/TitleImage";
import { Cards } from "./components/cards/Cards";
import { CountryPicker } from "./components/countryPicker/CountryPicker";
import { Charts } from "./components/charts/Charts";

// Styles Import
import './App.css';


function App() {
  return (
    <div>
      <Header></Header>
      <TitleImage></TitleImage>
        <Cards></Cards>
        <CountryPicker></CountryPicker>
        <Charts></Charts>
      <Footer></Footer>
    </div>
  );
}

export default App;

// Components Import
import  Header  from "./components/Header";
import  Footer  from "./components/Footer";
import  TitleImage  from "./components/titleImage/TitleImage";
import { Cards } from "./components/cards/Cards";
import { CountryPicker } from "./components/countryPicker/CountryPicker";
import { Charts } from "./components/charts/Charts";

// Styles Import
import './App.css';
import { useState } from "react";
import { Summary } from "./apiCalls/Summary";


function App() {

  const [selectedCountry, setSelectedCountry] = useState("global")

  async function receiveValue(value) {
    setSelectedCountry(value)
  }

  return (
    <div>
      <Header></Header>
      <TitleImage></TitleImage>
      <div className="container">
        <Summary props={selectedCountry}>
        <CountryPicker receiveValue={receiveValue}></CountryPicker>
          <Cards></Cards>
          <Charts></Charts>
        </Summary>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;

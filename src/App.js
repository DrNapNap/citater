import React, { Component } from 'react';
import CitatListe from './components/CitatListe'
import OpretCitat from './components/OpretCitat'


export class App extends Component {
  state = {
    citater: [
      { titel: "Intet ved", citattxt: "Alt, hvad jeg ved, er, at jeg intet ved.", forfatter: "Sokrates", id: 1 },
      { titel: "Det klarer jeg", citattxt: "Det har jeg aldrig gjort før, så det klarer jeg helt sikkert.", forfatter: "Pippi Langstrømpe", id: 2 },
      { titel: "Løsninger", citattxt: "Find ikke fejl, find en løsning.", forfatter: "Henry Ford", id: 3 },
      { titel: "Sig selv", citattxt: "Vær dig selv, alle andre er alligevel optaget.", forfatter: "Oscar Wilde", id: 4 },
      { titel: "Syng!", citattxt: "Når du står i lort til halsen, er alt, hvad du kan gøre, at synge.", forfatter: "Samuel Beckett", id: 5 }
    ]

  }
  //slet citat - modtager id så vi kan slette det rigtige
  SletCitat = (id) => {
    //alert("slet", id);
    // slet citat - modtager id så vi kan slette det rigtige citat
    let citaterfiltreret = this.state.citater.filter(
      c => {

        return c.id !== id; // filtrer fra hvor citat.id = id 
      }
    );

    //ocerskriv stare med den nye filterrede liste med citater
    this.setState({
      citater: citaterfiltreret
    });

  }

  opretCitat = (nytcitat) => {
    nytcitat.id = Math.random();

    let allecitater = [...this.state.citater, nytcitat];

    this.setState({
      citater: allecitater
    });
  }

  render() {
    return (
      <div className="container">
        <h1>Citater</h1>
        <hr />
        <CitatListe heyyyyProp={this.state.citater} SletCitat={this.SletCitat} />
        <OpretCitat OpretCitatProp={this.opretCitat} />
      </div>
    )
  }
}

export default App

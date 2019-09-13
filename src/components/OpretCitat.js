import React, { Component } from 'react'

export class OpretCitat extends Component {

    state = {
        titel: null,
        citattxt: null,
        forfatter: null
    }
    // håndter titel-iniput så det bliver puttet i state
    handleTtel = (e) => {
        //console.log(e.target.value)
        this.setState({
            titel: e.target.value
        });
    }

    handleCitatet = (e) => {
        //console.log(e.target.value)
        this.setState({
            citattxt: e.target.value
        });
    }

    handleForfatter = (e) => {
        //console.log(e.target.value)
        this.setState({
            forfatter: e.target.value
        });
    }

    gem = (e) => {
        e.preventDefault();
        this.props.OpretCitatProp(this.state);
        
    }
    render() {
        return (

            <form className="container" onSubmit={this.gem}>
                <div className="row">
                    <div className="col-12 wid">
                        <input type="text" placeholder="titel her" id="citattitel" onChange={this.handleTtel} />

                    </div><br />
                    <div className="col-12 wid">

                        <input type="text" placeholder="citattekst her" id="citattekst" onChange={this.handleCitatet
                        } />
                    </div><br />
                    <div className="col-12 wid">

                        <input type="text" placeholder="fatternaven her" id="forfatternaven" onChange={this.handleForfatter} />
                    </div> <div className="col-12">
                        <button className="btn btn-outline-success ">Gem citatet</button>
                    </div> </div>  </form>

        )
    }
}

export default OpretCitat

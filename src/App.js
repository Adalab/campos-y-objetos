import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Nombre',
      description: 'Descripción',
      card: {
        job: 'Frontend',
        email: 'carlos@carlos.es'
      }
    }
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDescChange = this.handleDescChange.bind(this);
    this.handleEverything = this.handleEverything.bind(this);
    this.handlejobChange = this.handlejobChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
  }

  handlejobChange(event) {
    const newCard = {...this.state.card, job: event.currentTarget.value};
    this.setState({
      card: newCard
    });
  }

  handleEmailChange(event) {
    // const newCard = {...this.state.card, email: event.currentTarget.value};
    // this.setState({
    //   card: newCard
    // });
    const value = event.currentTarget.value;

    this.setState((prevState)=> {
      //loquesea
      const newCard = {...prevState.card, email: value};
      console.log(newCard);
      return {card: newCard}
    });
  }

  handleNameChange(event) {
    this.setState({
      name: event.currentTarget.value
    });
  }

  handleDescChange(event) {
    this.setState({
      description: event.currentTarget.value
    });
  }

  handleEverything(event) {
    const id = event.currentTarget.id;

    const obj = {}
    obj[id] = event.currentTarget.value

    console.log(obj);
    this.setState(obj);

  }
  render() {
    return (
      <div className="App">
        
        <input type="text" id="name" name="name" onChange={this.handleEverything} />

        <br/><br/>

        <input type="text" id="description" name="description" onChange={this.handleEverything} />

        <br/><hr /><br/>

        <input type="text" id="job" name="job" onChange={this.handlejobChange} />

        <br/><br/>

        <input type="text" id="email" name="email" onChange={this.handleEmailChange} />

        <div>
          <h1>{this.state.name}</h1>
          <h2>{this.state.description}</h2>

          <p>Trabajo: {this.state.card.job}</p>
          <p>Email: {this.state.card.email}</p>
        </div>
      </div>
    );
  }
}

export default App;

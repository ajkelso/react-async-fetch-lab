// create your App component here
import React, { Component } from 'react';

export default class App extends Component {

    state = {
        people: []
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(res => res.json())
        .then(data => this.setState({people: data.people}))
    }

    renderPeople = () => {
        return this.state.people.map(person => <p>Name: {person.name} Craft: {person.craft}</p>)
    }

    render(){
        return(
            <div>
                {this.renderPeople()}
            </div>
        )
    }

}
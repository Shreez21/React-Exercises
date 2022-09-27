import { Component } from "react";
//import { getData } from "../../helpers/data";
//import { useState, useEffect } from "react";

class FilmsList extends Component {
    constructor(props) {
        super (props)

        this.state = {
            list: [],
            hasLoaded: false,
        };
    }

    async getFilms() {
        console.log("get films");
        try {
    let res = await fetch("https://ghibliapi.herokuapp.com/films");
        let list = await res.json();
        console.log("setting state");
        this.setState({ list, hasLoaded: true });
        console.log("state has been set");
    } catch (err) {
        console.error(err);
    }
}

componentDidMount() {
    this.getFilms();
}

render() {
    if (!this.state.hasLoaded) {
    return <p>Loading...</p>;
    } else{
    return (
    <ul>
       {this.state.list.map((film) => (<li key={film.id}>{film.title}</li>))}
    </ul>
    );
    }
}
}
export default FilmsList;

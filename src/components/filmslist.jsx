
import { useState, useEffect } from "react";

function FilmsList(props) {
let [list, setList] = useState([])
let [isLoading, setIsLoading] = useState(true);

    //function FilmsList(props) {
        //let [list, setList] = useState([])
//let [isLoading, sethasLoaded] = useState(true);
 //   }

    async function getFilms() {
     let res = await fetch("https://ghibliapi.herokuapp.com/films");
     let data = await res.json()
     setList(data);
     setIsLoading(false);
}

useEffect(()=> {
    getFilms();
}, []);

    if (isLoading) {
    return <p>Loading...</p>;
    } else{
    return (
    <ul>
       {list.map((film) => 
       (<li key={film.id }>{film.title}</li>
       ))}
    </ul>
    );
    }
}
export default FilmsList;

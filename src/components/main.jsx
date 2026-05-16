import Card from "./cards.jsx"
import "../styles/main.css"
import data from "../database.js";
export default function Main(){
    return(
        <main>
            {data.map((place)=>(<Card data ={place}/>))}
        </main>
    )
}
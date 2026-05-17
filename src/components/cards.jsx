import "../styles/cards.css"
export default function Card(data){
    console.log(data)
    return (
        <section>
            <img src={data.img}/>
            <div>
                <span>
                    <img src="vecteezy_location-red-icon-simple-design_4897637.svg"/>
                    <span>{data.country}</span>
                    <a href={data.googleL} target="_blank">view on Google maps</a>
                </span>
                <h1>{data.locationName}</h1>
                <span className="date">{data.date}</span>
                <p>{data.info}</p>
            </div>
        </section>
    )
}
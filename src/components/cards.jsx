import "../styles/cards.css"
export default function Card(){
    return (
        <section>
            <img src="pyramids.jpg"/>
            <div>
                <span>
                    <img src="vecteezy_location-red-icon-simple-design_4897637.svg"/>
                    <span>Egypt</span>
                    <a href="#">view on Google maps</a>
                </span>
                <h1>Pyramids</h1>
                <span className="date">24 jan,2024 - 25 feb,2024</span>
                <p>Egypt is a land of ancient history, beautiful landscapes, and rich culture. From the great pyramids of Giza to the peaceful Nile River, Egypt offers unforgettable experiences and a unique blend of tradition and modern life.</p>
            </div>
        </section>
    )
}
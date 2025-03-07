import './Card.css';
import img1 from "./images/arabian-ranches-ii.jpg";
import img2 from "./images/arabian-ranches.jpg";
import img3 from "./images/downtown-dubai.jpg";
import img4 from "./images/dubai-hills-estate.jpg";
import img5 from "./images/dubai-marina.png";
import img6 from "./images/emirates-living.jpg";
const cards = [
  {
    id: 1,
    title: "Arabian Ranches",
    description: "Arabian Ranches offers a modern interpretation of the soothing charm of the surrounding desertscape. The development features a number of residential communities that draw inspiration from Spanish and",
    image: img1,
  },
  {
    id: 2,
    title: "Arabian Ranches II",
    description: "Arabian Ranches offers a modern interpretation of the soothing charm of the surrounding desertscape. The development features a number of residential communities that draw inspiration from Spanish and",
    image: img2,
  },
  {
    id: 3,
    title: "Downtown Dubai",
    description: "The Centre of Now. The most prestigious square kilometre in the world. Downtown Dubai is no stranger to such accolades, and yet it's hard to overstate the prominence of this community.",
    image: img3,
  },
  {
    id: 4,
    title: "Dubai Hills Estate",
    description: "Sustainably designed, Dubai Hills Estate is a first of its kind destination. This masterfully- planned 2,700-acre multi-purpose development will form an integral part of the Mohammed Bin Rashid City.",
    image: img4,
  },
  {
    id: 5,
    title: "Dubai Marina",
    description: "Dubai Marina is one of the world's largest, most meticulously planned waterfront developments and offers the exhilaration and vibrancy of a chic, urban lifestyle together with all the advantages of living on the water.",
    image: img5,
  },
  {
    id: 6,
    title: "Emirates Living",
    description: "Launched in 2003, Emirates Living is a modern lifestyle community focused on outdoor leisure. Emirates Living offers a serene nature-filled sanctuary, with 8,659 premium villas nestled within 52.2 million",
    image: img6,
  },
];

 function Card() {
  
  return (
    <div className="container">
      <h1 className="title">COMMUNITIES WE MANAGE</h1>
      <div className="gallery">
        {cards.map((card) => (
          <div key={card.id} className="card">
            <img src={card.image} alt={card.title} className="card-image" />
            <p className="card-description">{card.description}</p>
            <h2 className="card-title">{card.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;

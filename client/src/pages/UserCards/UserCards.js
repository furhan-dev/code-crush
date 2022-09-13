
import React, {useState} from 'react'
import './UserCards.css';
import TinderCard from "react-tinder-card"


function UserCards() {
    const [people, setPeople] = useState([
      
        {
            name: "Elon Musk",
            imgUrl: "https://wallpapers.com/images/file/elon-musk-automotive-congress-2015-ab6l86dsnurfpqzu-ab6l86dsnurfpqzu.jpg",
        },
        {
            name: "Ryan Gossling",
            imgUrl:"https://wallpapers.com/images/file/hollywood-celebrity-ryan-gosling-2aa2nugnj6xs9mfh.jpeg",
        },
    
    ]);
        const swiped = (direction, nameToDelete)=> {
            console.log("removing: " + nameToDelete);
            // setLastDirection(direction)
        };
    
        const outOfFrame = (name) => {
            console.log(name + " Left the screen!");
        };
       
    
    

  return <div className='tinderCards'>
    <div className="tinderCards__cardContainer">
    {people.map((person)=> (
        <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir)=> swiped(dir, person.name)}
            onCardLeftScreen={()=> outOfFrame(person.name)}
        >

            <div
            style={{ backgroundImage: `url(${person.imgUrl})` }}

            className="card"
            >
            <h3>{person.name}</h3>
            </div>
        </TinderCard>

    ))}

    </div>
   
    </div>;
}

export default UserCards

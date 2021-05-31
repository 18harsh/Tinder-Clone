import React, { useState } from 'react'
import './TinderCards.css'
import TinderCard from 'react-tinder-card'

function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: 'Elon Musk',
            url: "https://static.theceomagazine.net/wp-content/uploads/2018/10/15093202/elon-musk.jpg",
        },
        {
            name: 'Warren Buffett',
            url: "https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2015/3/1/1425213584414/261186a3-e3cf-4da5-8ba3-5763e7462884-2060x1236.jpeg?width=445&quality=45&auto=format&fit=max&dpr=2&s=4afd7c84214fb85597f8005dddba61f3",
        },
        {
            name: 'Deepika Padukone',
            url: "https://www.filmibeat.com/img/2020/12/xbesto-1609320366.jpg.pagespeed.ic.kohWb4ujeL.jpg",
        },
        {
            name: 'Shraddha Kapoor',
            url: "https://pickytop.com/wp-content/uploads/2020/02/shraddha-kapoor.jpg",
        },
        {
            name: 'Kriti Sanon',
            url: "https://moneyinc.com/wp-content/uploads/2017/11/Kriti-Sanon-750x422.jpg",
        },
        {
            name: 'Alia Bhatt',
            url: "https://booglebollywood.com/paytm/wp-content/uploads/2019/12/IMG_20191207_190010.jpg",
        },
        {
            name: 'Jeff Bezos',
            url: "https://i.guim.co.uk/img/media/6fe9280dc6cf8c95543a22f8eea16baa15f754f2/0_44_2200_1320/master/2200.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=4eee5edefef91840a6eaf441c64b613e",
        },
    ]);

    const [lastDirection,setLastDirection] = useState("")

    const swiped = (direction, nameToDelete) => {
        console.log("removing:" + nameToDelete);
        setLastDirection(direction)
    }

    const outOfFrame = (name) => {
        console.log(name + " left the screen")
    }


    return (
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">
                {
                    people.map(person => (
                        <TinderCard
                            className="swipe"
                            key={person.name}
                            preventSwipe={["up", "down"]}
                            onSwipe={(dir) => swiped(dir, person.name)}
                            onCardLeftScreen={()=>outOfFrame(person.name)}
                        >
                            <div
                                style={{ backgroundImage: `url(${person.url})` }}
                                className="card"
                            >
                                <h3>{person.name}</h3>

                            </div>
                        </TinderCard>
                   
                ))
            }
            </div>
            
        </div>
    )
}

export default TinderCards

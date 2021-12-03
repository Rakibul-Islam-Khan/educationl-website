import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Cards from '../Service/Cards';

const Service = () => {
    const [cards, setCards] = useState([]);
    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setCards(data))
    }, [])
    return (
        <div>
            <Header></Header>
            <div className="container">
                <div className="row my-5">
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {
                            cards.map(card => <Cards key={card.id} name={card}/>)
                        }
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Service;
import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

const Courese = () => {
    const [cards,setCards] = useState([]);
    useEffect(()=>{
        fetch('./course.json')
        .then(res => res.json())
        .then(data => setCards(data))
    },[])
    return (
        <div>
            <div className="container">
                <div className="row my-5 text-center">
                    <h1>Choice Your Online Course</h1>
                    <p>You don't have to struggle alone, you've got our assistance and help.</p>
                    <hr className="w-25 bg-danger mx-auto" />
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {
                            cards.map(card => <Card key={card.id} name={card}/>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Courese;
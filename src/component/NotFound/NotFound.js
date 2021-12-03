import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const NotFound = () => {
    return (
        <div>
            <Header/>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center py-5">
                        <h1>NotFound Page</h1>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default NotFound;
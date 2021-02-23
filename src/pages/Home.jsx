import React from 'react';
import Header from '../components/header/Header';
import Banner from '../components/banner/Banner';
import ProductDescription from '../components/product/Product-description';
import Sponsors from '../components/sponsor/Sponsors';
import Footer from '../components/footer/Footer';

function Home(){
    return(
        <div className="w-full">
            <Header/>
            <Banner/>
            <ProductDescription/>
            <Sponsors/>
            <Footer/>
        </div>
    )
}

export default Home
import React,{ useEffect } from 'react';
import Header from '../components/header/Header';
import Banner from '../components/banner/Banner';
import ProductDescription from '../components/product/Product-description';
import Sponsors from '../components/sponsor/Sponsors';
import Footer from '../components/footer/Footer';
import { connect } from 'react-redux';
import { fetchMusicStart } from '../redux/music/music.actions';

function Home({ fetchMusic }){

    useEffect(()=>{
        window.sessionStorage.setItem("link",
        JSON.stringify({ 
            audio: true , 
            video: false , 
            gospel: false , 
            highlife: false 
        }))
        if(window.sessionStorage.reload === undefined){
            fetchMusic()
        }
        window.sessionStorage.reload = "false"
    },[fetchMusic])

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

const mapDispatchToProps = dispatch => ({
    fetchMusic: () => dispatch(fetchMusicStart())
})

export default connect(null, mapDispatchToProps)(Home);
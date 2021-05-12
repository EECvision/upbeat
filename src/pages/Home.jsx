import React,{ useEffect } from 'react';
import Header from '../components/header/Header';
import Banner from '../components/banner/Banner';
import ProductDescription from '../components/product/Product-description';
import Footer from '../components/footer/Footer';
import { connect } from 'react-redux';
import { fetchMusicStart, togglePlaylist } from '../redux/music/music.actions';

function Home({ fetchMusic, togglePlaylist }){

    useEffect(()=>{
        window.sessionStorage.setItem("link",
        JSON.stringify({ 
            audio: true , 
            video: false , 
            gospel: false , 
            highlife: false 
        }))
        // if(!(window.sessionStorage.reload === "false")){
            fetchMusic()
        // }
        // window.sessionStorage.reload = "false";

        togglePlaylist(false);
    },[fetchMusic, togglePlaylist])

    return(
        <div className="w-full">
            <Header/>
            <Banner/>
            <ProductDescription/>
            <Footer/>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    fetchMusic: () => dispatch(fetchMusicStart()),
    togglePlaylist: state => dispatch(togglePlaylist(state))
})

export default connect(null, mapDispatchToProps)(Home);
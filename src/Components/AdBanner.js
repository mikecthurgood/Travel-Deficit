import React from 'react'
import './Profile.css';


const AdBanner = ({ bannerNumber }) => {
    // const banner = () => (
    //     bannerNumber === 1 ? 'unesgo ad banner.png' : 'hyperdrive banner.png'
    // )

    return (
        <div className='adBanner'>
            <h4>Sponsored Links</h4>
            <div className='banner-container'>
                <div className='banner-ad1-container'>
                    <img className='banner-ad1' src={require(`../Assets/hyperdrive banner.png`)} alt="" />
                </div>


                <div className='banner-ad2-container'>
                    <img className='banner-ad2' src={require(`../Assets/unesgo ad banner.png`)} alt="" />
                </div>
                <br />
            </div>
        </div>
    )
}

export default AdBanner
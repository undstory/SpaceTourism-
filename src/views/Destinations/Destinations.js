import React, { useState } from 'react'
import "./destinations.scss"
import * as data from "../../assets/data.json"
import moon from "../../assets/destination/image-moon.png"
import mars from "../../assets/destination/image-mars.png"
import europa from "../../assets/destination/image-europa.png"
import titan from "../../assets/destination/image-titan.png"

const Destinations = ({ active }) => {
    const [currentPlanet, setCurrentPlanet] = useState(0);
    
const destinations = data.destinations;

const handlePlanetChange = (id) => {
    setCurrentPlanet(id);
}

    return (
        <div className='destinations'>
            <div className={active ? "contentContainer active" : "contentContainer"}>
                <div className="title">
                    <h2>
                        <span>01</span>pick your destination
                    </h2>
                </div>

                <div className="planetSelector">
                    <div className="menuItem" onClick={() => handlePlanetChange(0)}>
                        <div className="textContainer">
                            Moon
                            <div className={currentPlanet === 0 ? "indicator active" : "indicator"}></div>
                        </div>
                    </div>
                    <div className="menuItem" onClick={() => handlePlanetChange(1)}>
                        <div className="textContainer">
                            Mars
                            <div className={currentPlanet === 1 ? "indicator active" : "indicator"}></div>
                        </div>
                    </div>
                    <div className="menuItem" onClick={() => handlePlanetChange(2)}>
                        <div className="textContainer">
                            Europa
                            <div className={currentPlanet === 2 ? "indicator active" : "indicator"}></div>
                        </div>
                    </div>
                    <div className="menuItem" onClick={() => handlePlanetChange(3)}>
                        <div className="textContainer">
                            Titan
                            <div className={currentPlanet === 3 ? "indicator active" : "indicator"}></div>
                        </div>
                    </div>
                </div>
                <div className="planetSlider" style={{ transform: `translateX( -${100 * currentPlanet}vw)`}}>
                    <div className={currentPlanet === 0 ? "planetSlide active" : "planetSlide"}>
                        <div className="imgContainer">
                            <img src={moon} />
                        </div>
                        <div className="infoContainer">
                            <h2 className="name">{destinations[0].name}</h2>
                            <p className="description">{destinations[0].description}</p>
                            <hr />
                            <div className="statsContainer">
                                <div className='left'>
                                    <h3 classname="header">avg. distance</h3>
                                    <h2>{destinations[0].distance}</h2> 
                                </div>
                                <div className='right'>
                                    <h3 classname="header">est. travel time</h3>
                                    <h2>{destinations[0].travel}</h2> 
                                </div>
                            </div>
                        </div>  
                    </div>

                    <div className={currentPlanet === 1 ? "planetSlide active" : "planetSlide"}>
                        <div className="imgContainer">
                            <img src={mars} />
                        </div>
                        <div className="infoContainer">
                            <h2 className="name">{destinations[1].name}</h2>
                            <p className="description">{destinations[1].description}</p>
                            <hr />
                            <div className="statsContainer">
                                <div className='left'>
                                    <h3 classname="header">avg. distance</h3>
                                    <h2>{destinations[1].distance}</h2> 
                                </div>
                                <div className='right'>
                                    <h3 classname="header">est. travel time</h3>
                                    <h2>{destinations[1].travel}</h2> 
                                </div>
                            </div>
                        </div>  
                    </div>

                    <div className={currentPlanet === 2 ? "planetSlide active" : "planetSlide"}>
                        <div className="imgContainer">
                            <img src={europa} />
                        </div>
                        <div className="infoContainer">
                            <h2 className="name">{destinations[2].name}</h2>
                            <p className="description">{destinations[2].description}</p>
                            <hr />
                            <div className="statsContainer">
                                <div className='left'>
                                    <h3 classname="header">avg. distance</h3>
                                    <h2>{destinations[2].distance}</h2> 
                                </div>
                                <div className='right'>
                                    <h3 classname="header">est. travel time</h3>
                                    <h2>{destinations[2].travel}</h2> 
                                </div>
                            </div>
                        </div>  
                    </div>

                    <div className={currentPlanet === 3 ? "planetSlide active" : "planetSlide"}>
                        <div className="imgContainer">
                            <img src={titan} />
                        </div>
                        <div className="infoContainer">
                            <h2 className="name">{destinations[3].name}</h2>
                            <p className="description">{destinations[3].description}</p>
                            <hr />
                            <div className="statsContainer">
                                <div className='left'>
                                    <h3 classname="header">avg. distance</h3>
                                    <h2>{destinations[3].distance}</h2> 
                                </div>
                                <div className='right'>
                                    <h3 classname="header">est. travel time</h3>
                                    <h2>{destinations[3].travel}</h2> 
                                </div>
                            </div>
                        </div>  
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Destinations

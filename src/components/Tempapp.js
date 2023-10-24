import React, {useState} from "react";

const Tempapp = () => {
    const [city, setCity]= useState(null)
    const [serach, setSearch]= useState("Delhi")
    return (
        <>
            <div className="box">
                <div className="inputData">
                    <input
                        className="input"
                        type="search"
                        onChange={(event) => { }}>
                    </input>
                </div>

                
            </div>
        </>
    )
}

export default Tempapp;
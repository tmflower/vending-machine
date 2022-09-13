import React from "react";

const Macadamias = ({ name, homeLink }) => {
    return (
        <div className="overlay">
            <h1 className="text-center text-secondary display-2">Enjoy your {name}!</h1>
            <p className="text-center fs-3">{homeLink}</p>
                <div className="row m-5">
                    <div className="col-12">
                        <img className="w-50 rounded mx-auto d-block mb-5" src="../macadamia-fried.jpg" alt="macadamia nuts"/>
                        </div>
                </div>
        </div>
    )
}

export default Macadamias;
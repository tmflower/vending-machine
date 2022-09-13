import React from "react";
import macadamiaImg from "./macadamia-fried.jpg"

const Macadamias = ({ name, homeLink }) => {
    return (
        <div className="overlay">
            <h1 className="text-center text-secondary display-2">Enjoy your {name}!</h1>
            <p className="text-center fs-3">{homeLink}</p>
                <div className="row m-5">
                    <div className="col-12">
                        <img className="img-fluid max-width: 100% rounded mx-auto d-block mb-5" src={macadamiaImg} alt="macadamia nuts"/>
                    </div>
                </div>
                <p className="text-center fs-sm"><a href="https://www.freepik.com/free-photo/macadamia-fried_1204894.htm#query=macadamias&position=3&from_view=search">Image by luis_molinero</a> on Freepik</p>
        </div>
    )
}

export default Macadamias;
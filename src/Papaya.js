import React from "react";
import papayaImg from "./ashleigh-shea-hGC5TQtjzFw-unsplash.jpg"

const Papaya = ({ name, homeLink }) => {
    return (
        <div className="overlay">
            <h1 className="text-center text-secondary display-2">Enjoy your {name}!</h1>
            <p className="text-center fs-3">{homeLink}</p>
                <div className="row m-5">
                    <div className="col-12">
                        <img className="img-fluid max-width: 100% rounded mx-auto d-block mb-5" src={papayaImg} alt="papaya"/>
                    </div>
                </div>
                <p className="text-center fs-sm">Photo by <a href="https://unsplash.com/@ashleigh86?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ashleigh Shea</a> on <a href="https://unsplash.com/s/photos/papaya?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>
        </div>
    )
}

export default Papaya;
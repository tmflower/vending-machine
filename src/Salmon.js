import React from "react";
import salmonImg from "./judith-girard-marczak-bjrc_4HhuE0-unsplash.jpg"

const Salmon = ({ name, homeLink }) => {
    return (
        <div className="overlay">
            <h1 className="text-center text-secondary display-2">Enjoy your {name}!</h1>
            <p className="text-center fs-3">{homeLink}</p>
                <div className="row m-5">
                    <div className="col-12">
                        <img className="img-fluid max-width: 100% rounded mx-auto d-block mb-5" src={salmonImg} alt="smoked salmon"/>
                    </div>
                </div>
                <p className="text-center fs-sm">Photo by <a href="https://unsplash.com/@judithgirardmarczak?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">judith girard-marczak</a> on <a href="https://unsplash.com/s/photos/smoked-salmon?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>
        </div>
    )
}

export default Salmon;
import React from "react";
import { NavLink } from "react-router-dom";
import vendingMachineIcon from "./vending-machine.png"

const VendingMachine = () => {
    return (
        <div>                
            <div className="overlay">
                <h1 className="text-center text-primary display-2">Vend-a-Veg</h1>
                <h4 className="text-center text-secondary display-6">The vending machine for healthy eaters!</h4>
                <div className="row m-5">
                    <div className="col-sm">
                        <img src={vendingMachineIcon} alt="vending machine clipart" className="img-fluid max-width: 100% mb-3"/>
                    </div>                    
                    <div className="container col-sm">
                        <h5 className="fs-1 text-info text-center">Choose a snack:</h5>
                            <ul className="list-group fs-5 text-info">
                                <li class="list-group-item"><NavLink to='/cucumbers'>Cucumbers</NavLink></li>
                                <li class="list-group-item"><NavLink to='/macadamias'>Macadamia Nuts</NavLink></li>
                                <li class="list-group-item"><NavLink to='/salmon'>Salmon</NavLink></li>
                                <li class="list-group-item"><NavLink to='/papaya'>Papaya</NavLink></li>
                                <li class="list-group-item"><NavLink to='/snappeas'>Snap Peas</NavLink></li>                    
                            </ul>            
                    </div>
                </div>
                <footer className="text-center"><a href="https://www.flaticon.com/free-icons/dispenser" title="dispenser icons">Dispenser icons created by Freepik - Flaticon</a></footer>
            </div>
        </div>
    )
}
export default VendingMachine;
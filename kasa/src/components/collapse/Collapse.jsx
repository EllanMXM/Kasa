import React, { useState }  from "react";
import './collapse.css'
import Bas from "../../assets/Bas.png";
import Haut from "../../assets/Haut.png"

function Collapse ({title, description}){
    const [isOpen, setOpen] = useState(false); // UTILISATION DE USESTATE POUR CREER UNE VARIABLE ISOPEN
    return(
            <div className="collapse">
                <div className="collapse__title">
                    <p className="collapse__title--txt">{title}</p>
            
                    {isOpen ? ( //LA FLECHE CHANGE DE DIRECTION EN FONCTION DE L'ETAT DE ISOPEN
                        <img src={Haut} alt="chevron vers le haut" className="fleche" onClick={() => setOpen(false)}/>
                    ) : (
                        <img src={Bas} alt="chevron vers le bas" className="fleche" onClick={() => setOpen(true)}/>
                    )}
                </div> {/* LA DESCRIPTION EST AFFICHEE OU CACHEE EN FONCTION DE*/}
                { isOpen &&  <div className="collapse__content--content">{description}</div> } 
            </div>
        
    
    );
}

export default Collapse;
import React from "react";
import Collapse from "../../components/collapse/Collapse";
import './apropos.css'
import img from '../../assets/A_Propos.png'
import Script from "../../data/script";
import Footer from "../../components/footer/Footer";


function APropos() {

    return (
      <div>
        <div id="aboutPage">
          <img src={img} title=" " alt="paysage" className="banner_apropos"/>

          <section className="aboutCollapse">    
             
              {Script.map(data => { 
                  return(
                    <div className="aboutCollapse__div"> 
                        <Collapse className='maxime'
                        key={data.id} 
                        title={data.label} 
                        description={data.content}
                        
                        /> 
                    </div> 
                  )
              })}
            
          </section>

       </div>
       <Footer/>
       </div>
      ); 
    }
    
    export default APropos;
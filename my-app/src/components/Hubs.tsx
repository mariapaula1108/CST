import React from 'react';
import './Hubs.css';



export default function Hubs() {

  return (
    <div className="hubs">
      <div>
        <b>Hub Electives: must include all Hub areas below to fulfill degree requirements </b>

      </div>
      
    
      <div className='hubColumn'>
        <div className='checkbox'>
          <input type="checkbox" id="PLM" name="PLM"/>
          <label htmlFor="PLM">Philosophical Inquiry & Life’s Meanings (PLM) </label>

        </div>
        <div className='checkbox'>
          <input type="checkbox" id="AEX" name="AEX"/>
          <label htmlFor="AEX">Aesthetic Exploration (AEX) </label>

        </div>
        <div className='checkbox'>
          <input type="checkbox" id="HCO" name="HCO"/>
          <label htmlFor="HCO">Historical Consciousness (HCO)</label>

        </div>
        <div className='checkbox'>
          <input type="checkbox" id="SO" name="SO"/>
          <label htmlFor="SO">Social Inquiry (SO1 or SO2)</label>

        </div>

      </div>

      <div className='hubColumn'>
      <div className='checkbox'>
          <input type="checkbox" id="IIC" name="IIC"/>
          <label htmlFor="IIC">Individual in Community (IIC) </label>

        </div>
        <div className='checkbox'>
          <input type="checkbox" id="GCI1" name="GCI"/>
          <label htmlFor="GCI">1st Global Citizenship & Intercultural Literacy (GCI)</label>

        </div>
        <div className='checkbox'>
          <input type="checkbox" id="GCI2" name="GCI"/>
          <label htmlFor="GCI2">2nd Global Citizenship & Intercultural Literacy (GCI)</label>

        </div>
        <div className='checkbox'>
          <input type="checkbox" id="ETR" name="ETR"/>
          <label htmlFor="ETR">Ethical Reasoning (ETR)</label>

        </div>
      </div>
      
     
    
    

 
    </div>  
  );
}

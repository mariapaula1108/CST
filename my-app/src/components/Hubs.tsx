import React from 'react';
import './Hubs.css';
//import OverlayTrigger from 'react-bootstrap/OverlayTrigger';


export default function Hubs() {

  return (
    <div className="hubs" id="bootstrap-override">
      <div>
        <b>Hub Electives: must include all Hub areas below to fulfill degree requirements </b>

      </div>
      
    
      <div className='hubColumn' id="bootstrap-override">
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

      <div className='hubColumn' id="bootstrap-override">
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
      
      <div className="tooltip">Hub Units Legend
        <span className="tooltiptext">QR1 = Quantitative Reasoning 1 <br></br>
        QR2 = Quantitative Reasoning 2<br></br>
        SI1 = Scientific Reasoning 1<br></br>
        SI2 = Scientific Reasoning 2<br></br>
        FYW = First-Year Writing Seminar<br></br>
        WRI = Writing, Research & Inquiry<br></br>
        WIN = Writing-Intensive Course<br></br>
        OSC = Oral and/or Signed Communication<br></br>
        DME = Digital/Multimedia Expression<br></br>
        CRT = Critical Thinking<br></br>
        RIL = Research and Information Literacy<br></br>
        TWC = Teamwork/Collaboration<br></br>
        CRI = Creativity/Innovation<br></br>
        PLM = Philosophical Inquiry and Life’s Meanings<br></br>
        AEX = Aesthetic Exploration<br></br>
        HCO = Historical Consciousness<br></br>
        SO = Social Inquiry<br></br>
        IIC = The Individual in Community<br></br>
        GCI = Global Citizenship & Intercultural Literacy<br></br>
        ETR = Ethical Reasoning</span>
      </div>
    
    

 
    </div>  
  );
}

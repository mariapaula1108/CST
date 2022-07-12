import React from 'react';
import './SaveButton.css'




class SaveButton extends React.Component<{}, {list: string[], value: string}> {
  constructor(props: any) {
    super(props);
    this.state = {
      list: [
        ""
      ],
      value: '',
    }
 
    this.addItem = this.addItem.bind(this);
  }
  addItem(e: any) {
    let list = this.state.list;
    const newItem = document.getElementById("addInput");
    console.log(list)
    
  }
  render() {
    return (
      <>
        
           
              {this.state.list.map(item => (
                <li key={item}>{item}</li>
              ))}
       
       
          
            <form className="form" id="addItemForm">
              <input
                type="text"
                className="input"
                id="addInput"
                placeholder="Draft Name"
              />
              <button className="save-button" onClick={this.addItem}>
                Save As
              </button>
            </form>
           
         
          </>
    )
  }
}

export default SaveButton;
import React, {Component} from 'react'
import './toggleSwitch.css'
import {measureValue} from '../../core/utils'

class ToggleSwitch extends Component{
    render(){
        return(
            <div className="wrapper">
                <div className="switch">
                    <input type="checkbox" id="left" name="switch_left" onChange = {this.handleChange} value = {measureValue.in}/>
                        <label htmlFor="left" >in</label>
                    <input type="checkbox" id="right" name="switch_right" onChange = {this.handleChange} value={measureValue.cm}/>
                        <label htmlFor="right">cm</label>   
                 </div>
             </div>
        )
    }

    handleChange = (ev) {
        
    }


}

export default ToggleSwitch
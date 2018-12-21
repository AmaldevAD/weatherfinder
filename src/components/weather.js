import React from "react"
import { Flex, Box } from 'reflexbox'


class Weather extends React.Component{
    render(){
        return(
            <div style={{color:"black",fontSize:30,
            
            
                
                
              
            
            
            }}>
            {this.props.city&&this.props.country&& <p >Location: {this.props.city},{this.props.country}</p>}
            
             
             {this.props.temperature&&<p>Temp        : {this.props.temperature } C</p>}
             
            
             {this.props.humidity&&<p>Humidity    : {this.props.humidity}</p>}
             
             
             {this.props.description&&<p>Description : {this.props.description}</p>} 
             
             <p>{this.props.error}</p> 



            </div>



        );
    }
};
export default Weather;
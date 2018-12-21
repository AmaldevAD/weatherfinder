import React from "react"


class Form extends React.Component{
    render(){
        return(
           <form onSubmit={this.props.getWeather} style={{fontSize:30}}>
            <input  type="text" name="city" placeholder="City..."/>
            <br/>
            <br/>
            <input type="text" name="country" placeholder="Country..." />
            <br/>
             <button>Get Weather</button>

           </form>



        );
    }
};
export default Form;
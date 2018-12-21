import React from "react";
import Titles from "./components/Titles.js";
import Form from "./components/Form";
import Weather from "./components/weather";
import AppBar from 'material-ui/AppBar';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as Colors from 'material-ui/styles/colors';
import { colors } from "material-ui/styles";
import { red100 } from "material-ui/styles/colors";


const muiTheme = getMuiTheme({
  palette: {
    
    textColor: Colors.darkBlack,
    primary1Color: Colors.green900 ,
    primary2Color: Colors.darkBlack,
    accent1Color: Colors.redA200,
    pickerHeaderColor: Colors.blue100,
  },
  appBar: {
    height: 80,
  },
});



const API_KEY="8126af4e2e2e5e62597a9dc62f7fefc5";


class App extends React.Component
{
  

  state ={
    temperature: undefined,
    city: undefined,
    country: undefined,
    description: undefined,
    error: undefined

  }


  getWeather = async (e) => {
    e.preventDefault();
    const city=e.target.elements.city.value;
    const country=e.target.elements.country.value;
    const api_call= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}`);
    const data = await api_call.json();
    console.log(data);
    if(city&&country)
    {
   
    this.setState({
      
      temperature:parseFloat(data.main.temp-273).toFixed(2),
      city: data.name,
      country:data.sys.country,
      humidity:data.main.humidity,
      description:data.weather[0].description,
      error:""

    });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        description: undefined,
        error: "Please enter valid city country"


      });



    }
  
  }

render()
{
  return(
     <div style={{textAlign:"center", backgroundColor:"grey", width:"100%",height:"100vh"}} >
       <MuiThemeProvider muiTheme={muiTheme}>

      <AppBar title="WEATHER"
       showMenuIconButton={false}
        titleStyle={{color: Colors.white, fontSize:50,fontFamily:"impact",overflow-x:"auto"}} 
        style={{textAlign:"center"}}
         >
        
      
      
        
      </AppBar>
      </MuiThemeProvider>


      <Titles/>
      <Form getWeather={this.getWeather}/>
      <Weather 
      temperature={this.state.temperature}
      city={this.state.city}
      country={this.state.country}
      humidity={this.state.humidity}
      description={this.state.description}
      error={this.state.error}
      
      />
     </div>
        );
}
};
export default App;

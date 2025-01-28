/*
URL="https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/NameOFCity?unitGroup=us&key=229NYPZWLU4QQLK62EJDAQPMH&contentType=json"
*/

const city=document.getElementById("City_Name");
const Box=document.getElementsByClassName("box")
const Box1=document.getElementById("tempreture");
const Box2=document.getElementById("Humidity");
const Box3=document.getElementById("Description");
const Box4=document.getElementById("Pressure");
const Box5=document.getElementById("Dew");
async function Wheather() 
{
    const Name=city.value;
    const URL=`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${Name}?unitGroup=us&key=229NYPZWLU4QQLK62EJDAQPMH&contentType=json`;
    const data= await fetch(URL);  
    const result=await data.json();
    console.log(result);
    // console.log(Name);
    Box1.innerHTML=Name+" : "+result.currentConditions.temp+" "+"°F";
    Box2.innerHTML=result.currentConditions.humidity+" %";
    Box3.innerHTML=result.description;
    Box4.innerHTML=result.currentConditions.pressure+" Hg";
    Box5.innerHTML=result.currentConditions.dew+"°F";
    
    
}
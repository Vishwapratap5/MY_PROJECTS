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

    try{
        const Name=city.value;

        if (!Name) {
            alert("Please enter a city name!");
            return;
        }
        const URL=`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${Name}?unitGroup=us&key=229NYPZWLU4QQLK62EJDAQPMH&contentType=json`;
        const data= await fetch(URL);  
        if (!data.ok) {
            throw new Error(`City not found. Please enter a valid city name.`);
        }
        const result=await data.json();

        if (!result.currentConditions) {
            throw new Error(`City not found. Please enter a valid city name.`);
        }
        console.log(result);
        // console.log(Name);
        Box1.innerHTML=Name+" : "+result.currentConditions.temp+" "+"°F";
        Box2.innerHTML=result.currentConditions.humidity+" %";
        Box3.innerHTML=result.description;
        Box4.innerHTML=result.currentConditions.pressure+" Hg";
        Box5.innerHTML=result.currentConditions.dew+"°F";




        const currentHour = new Date().getHours(); // Get local time

        // Change Background Based on Time
        if (currentHour >= 5 && currentHour < 12) {
            console.log("Morning background set"); // Debugging
            document.body.style.backgroundImage = "url('https://wallpapercave.com/wp/wp8798403.jpg')";
        } else if (currentHour >= 12 && currentHour < 17) {
            console.log("Afternoon background set"); // Debugging
            document.body.style.backgroundImage = "url('https://i.pinimg.com/736x/52/ce/c7/52cec7aece3c45c3efa7ea7786daa7bf.jpg')";
        } else if (currentHour >= 17 && currentHour < 23) {
            console.log("Evening background set"); // Debugging
            document.body.style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1_rXBNYtvODOIWN0EkgaH3Qkdoo1yvLp06A&s')";
        } else {
            console.log("Night background set"); // Debugging
            document.body.style.backgroundImage = "url('https://i.pinimg.com/736x/64/fd/57/64fd578e296268b8b24f9f9fd33b7ecb.jpg')";
        }

        document.body.style.backgroundSize = "cover"; 
        document.body.style.transition="2s";

    }catch(error){
        console.log(error);
        alert(`Error :: ${error}`);
    }
    
    // if()
}

function EraseData(){
    city.value="";
    Box1.innerHTML="Tempreture";
    Box2.innerHTML="humidity";
    Box3.innerHTML="Description";
    Box4.innerHTML="Pressure";
    Box5.innerHTML="Dew";

    // document.body.style.backgroundImage = "url('https://i.pinimg.com/736x/64/fd/57/64fd578e296268b8b24f9f9fd33b7ecb.jpg')";
}

// const menu = document.getElementById("menu");
// const menubtn=document.getElementById("menubtn");
// const menuimg=document.getElementById("menuimg");
// function ShowMenu() {
//     const existingMenu = document.querySelector(".menu-content"); // Check if menu already exists

//     if (existingMenu) {
//         existingMenu.remove(); 
//         menuimg.setAttribute("src","Images/icons8-menu.svg" );
//         return;
//     }

//     const menudiv = document.createElement("div");
//     menudiv.className = "menu-content"; // Different class to avoid conflicts

//     const nextPage = document.createElement("a");
//     nextPage.className = "nextpage";
//     nextPage.setAttribute("href", "Forecast.html");
//     nextPage.innerHTML = "Forecast";

//     const about = document.createElement("a");
//     about.className = "about";
//     about.setAttribute("href", "about.html");
//     about.innerHTML = "About";

//     menuimg.setAttribute("src","Images/cancel-close-delete-svgrepo-com.svg");
//     menudiv.append(nextPage, about);
//     menu.appendChild(menudiv); // Append menu to the container
// }

const menu = document.getElementById("menu");
const menubtn = document.getElementById("menubtn");
const menuimg = document.getElementById("menuimg");
console.log(menu); // Should log the menu element
    console.log(menubtn); // Should log the button element
    console.log(menuimg)
function ShowMenu() {
    const existingMenu = document.querySelector(".menu-content"); // Check if menu already exists

    if (existingMenu) {
        existingMenu.remove(); // Remove the existing menu
        menuimg.setAttribute("src", `Images/icons8-menu.svg`); // Change icon back to menu
        menubtn.setAttribute("aria-expanded", "false"); // Update ARIA attribute
        return;
    }
    const menudiv = document.createElement("div");
    menudiv.className = "menu-content"; // Class for styling the menu

    const nextPage = document.createElement("a");
    nextPage.className = "nextpage";
    nextPage.setAttribute("href", "Forecast.html");
    nextPage.innerHTML = "Forecast";

    const about = document.createElement("a");
    about.className = "about";
    about.setAttribute("href", "about.html");
    about.innerHTML = "About";

    menudiv.append(nextPage, about); // Add links to the menu
    menu.appendChild(menudiv); // Append menu to the container
    menuimg.setAttribute("src", `Images/cancel-close-delete-svgrepo-com.svg`);
    menubtn.setAttribute("aria-expanded", "true"); // Update ARIA attribute

}

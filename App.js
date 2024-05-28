import React from "react";
import ReactDOM from "react-dom/client";
const heading =(
<h1 id="heading" key="heading"> Namaste Sonal This is JSX </h1>
);


const Title = () => {
    return(
        <h2 id="title" key="title"> Namaste Title </h2>
    )
}

//note yha function likh diya to no arrow function

const header = function(){
    return(
        <div>
            <Title/>

            <h1>Namaste React Functional component</h1>
    <h2>This is h2 tag</h2>

        </div>
          )
        }
        
        const root= ReactDOM.createRoot(document.getElementById("root"));
        root.render(<header/>);

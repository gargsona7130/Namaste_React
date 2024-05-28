import React from "react";
import ReactDOM from "react-dom/client";

//Nested Heading with div tag having classname title
//using react

/*

const header = React.createElement(
    "div",
    {
        className: "Title",
        key: "title"
    }
    [
        React.createElement(
            "h1",
            {
                key: "h1",
            },
            "This is heading1"
        ),

        React.createElement(
            "h2",
            {
                key: "h2",
            },
            "This is heading2"
        )
    ]
);

//nested header using jsx
const header1 = (
    <div className="Title" key="title">
        <h1 key="h1"> This is heading1 </h1>
        <h2 key="h2"> This is heading2 </h2>
    </div>
);

//nested header using functional component

const header2 = () => {
    return (
<div className="Title" key="title">
    <h1 key="h1">This is h1 tag</h1>
  <h2 key="h2">This is h2 tag</h2>
     </div>
    )
};

//pass attribute into tag of jsx
const header3 = (
    <div className="Title" key="title">
        <h1 style={{color:"red"}} key="h1"> This is heading1 </h1>
        <h2 style={{color:"blue"}} key="h2"> This is heading2 </h2>
    </div>
);
const Sonal = () => {
    return <h1>My name is Sonal</h1>;
  };
  
  const Garg = () => {
    return (
      <div>
        <h1>I am from Karnal</h1>
        <Sonal />
      </div>
    );
  };

  */

//composition of component
//error in this code as I haven't returned it and didn't made sonal as reactcomponent

/*const sonal = () => {
    <h1> My name is Sonal </h1>
};

const garg = () =>{
    <h1> I am from Karnal </h1>
    <sonal/>
}
*/

const header = () => {
    return(
        <>
        <header className="header">
            <div className="left">
                <img src={logo} alt="logo" />
            </div>
        </header>
        <div className="center">
            <input
            className="data"
            type= "text"
            placeholder="What do you want to search"/>
            <button type="submit">
            <i class="fa fa-search"></i>
            </button>
        </div>
        <div className="right">
          <img src={userIcon} alt="User Icon" />
        </div>
        </>
    );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<header />);
  
// const heading = React.createElement("h1", {id: "heading", xyz: "abc"}, "Hello World form React!");    //  {} object = This object is basically is the place where u'll give Attributes to ur tag

// console.log(heading); // return Object

// const root = ReactDOM.createRoot(document.getElementById("root"));                             

// root.render(heading);

// -----------------------------------------------------------------------------------------------
// Nested Structure
/**
 * 
 * <div id="parent">
 *    <div id="child">
 *     <h1>I'm h1 tag</h1>
 *    </div>
 * </div>
 * 
 * ReactElement(Object) => HTML(Browser Understands)
 */

// const parent = React.createElement(
//     "div",
//     {id: "parent"},
//     React.createElement(
//         "div",
//         {id: "child"},
//         React.createElement("h1", {}, "I'm an h1 tag")
//     )
// );


// console.log(parent); // return Object   // this object is a react element

// const root = ReactDOM.createRoot(document.getElementById("root"));                             

// root.render(parent);

// Suppose i've to create siblings
/**
 * 
 * <div id="parent">
 *    <div id="child">
 *      <h1>I'm h1 tag</h1>
 *      <h2>I'm h2 tag</h2>
 *    </div>
 * </div>
 * 
 * ReactElement(Object) => HTML(Browser Understands)
 */

// const parent = React.createElement(
//     "div",
//     {id: "parent"},
//     React.createElement(
//         "div",
//         {id: "child"},
//         [React.createElement("h1", {}, "I'm an h1 tag"),  React.createElement("h2", {}, "I'm an h2 tag")]    // for two children we've to create array
//     )
// );


// console.log(parent); // return Object   // this object is a react element

// const root = ReactDOM.createRoot(document.getElementById("root"));                             

// root.render(parent);

// Suppose i've to create more complicated structure
/**
 * 
 * <div id="parent">
 *    <div id="child">
 *      <h1>I'm h1 tag</h1>
 *      <h2>I'm h2 tag</h2>
 *    </div>
 * </div>
 * 
 * <div id="parent">
 *    <div id="child">
 *      <h1>I'm h1 tag</h1>
 *      <h2>I'm h2 tag</h2>
 *    </div>
 * </div>
 * 
 * ReactElement(Object) => HTML(Browser Understands)
 */

const parent = React.createElement("div",{id: "parent"},
    React.createElement("div",{id: "child"},[
        React.createElement("h1", {}, "I'm an h1 tag"),
        React.createElement("h2", {}, "I'm an h2 tag")]    // for two children we've to create array
    ),
    React.createElement("div",{id: "child"},[
        React.createElement("h1", {}, "I'm an h1 tag"),
        React.createElement("h2", {}, "I'm an h2 tag")]    // for two children we've to create array
    ),
);


console.log(parent); // return Object   // this object is a react element

const root = ReactDOM.createRoot(document.getElementById("root"));                             

root.render(parent);   // it is replaced not abandoned //html -> react -> div

//
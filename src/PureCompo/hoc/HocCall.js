import React from "react";
import HocCompo from "./HocCompo";

function HocGreen(props) {
   return(
      <>
         <div style={{backgroundColor: 'green'}}>{props.value}</div>
         <h2>This component is for green background</h2>
      </>
   );
}

export default HocGreen;

function HocBlue(props){
   return(
      <>
         <div style={{ backgroundColor: 'blue' }}>{props.value}</div>
         <h2>This component is for blue background</h2>
      </>
   );
}

export {HocBlue};

function HocOrange(props) {
   return(
      <>
         <div style={{ backgroundColor: 'orange' }}>{props.value}</div>
         <h2>This component is for orange background</h2>
      </>
   );
}

export {HocOrange};
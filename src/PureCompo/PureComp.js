import React, {PureComponent} from "react";

class PureComp extends PureComponent {
   constructor(){
      super();
      this.state = {
         point: 0,
      }
   }

   render(){
      return(
         <>
            <h1>React Pure Components</h1>
            <div className='define'>
               <p>What is Pure Components in React?</p>
               <p>
                  Pure Components in React are the components which do not re-render the state of the value if the value is same. <span>Example:-</span> if the variable inside the object has the value of 5 and when we perform an operation or function and want to update the value of the variable, if the value is again 5 then value will not be re-render again to the variable because it already contains the value 5.
               </p>
            </div>
            <div className="code">
               <h2>Points : {this.state.point}</h2>
               <button></button>
            </div>
         </>
      );
   }
}

export default PureComp;
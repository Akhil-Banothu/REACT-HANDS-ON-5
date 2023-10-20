import React, { PureComponent } from "react";

class PureComp extends PureComponent {
   constructor() {
      super();
      this.state = {
         count: 0,
      }
   }

   render() {
      console.log("check weather it is rendering or not ");
      return (
         <>
            <h1>Count : {this.state.count}</h1>
            <button onClick={() => this.setState({ count: 5 })}>Click here</button>
         </>

      );
   }
}

export default PureComp;
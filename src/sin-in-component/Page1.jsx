// import React from "react";
// import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
// import "./Page1.css";

// export default function page1() {
//   return (
//     <div className="component">
//       <div className="container1">
//         <a>Add restaurant</a>
//         <br></br>
//         <a>Log in</a>
//         <br></br>
//         <a>Sign up</a>
//       </div>

//       <div>
//         <h1>India’s #1 food delivery app</h1>
//         <h6>Experience fast & easy online ordering on the Zomato app</h6>
//         <div></div>
//         <div>
//         <button className="scroll-btn">
//           scroll down 
//         </button>
//         <MdOutlineKeyboardDoubleArrowDown /></div>
        
//       </div>
//       <div>
//         <h1>Better food for more people</h1>
//       </div>
//             <div>
//             <div>
            
//             </div>
//             </div>

//     </div>
//   );
// }


import React from 'react'

export default function Page1() {
  let counter = 15;
  const addValue = () => {
    console.log("value added", counter);
    counter = counter + 1;
  }
  return (
    <div>
    <div className='counter'>
    <h1>Counter App</h1>

    <div>
    <h2>Conter Value : {counter}</h2>
    <button onClick={addValue}>+</button>
    <button>-</button>
    <button>add value</button>
    <button>Remove value</button>
    

    </div>
    </div>
      
    </div>
  )
}





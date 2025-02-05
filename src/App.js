// import React from 'react'
// import Navbar from './components/Navbar'
// import Main from './components/Main'
// import Sidebar1 from './components/Sidebar1'
// import Sidebar2 from './components/Sidebar2'
// import Footer from './components/Footer'
// const App = () => {
// return (
// <div className='app'>
//   <Navbar/>
//   <Main/>
//   <div className='sidebar'>
//     <Sidebar1/>
//     <Sidebar2/>
//     </div>
//     <Footer/>
//     </div>
//  )
// }
// export default App


// import React, { Component, startTransition } from 'react'
// import CBCPropEx from './propsex/CBCPropEx'
// import FBCPropEX from './propsex/FBCPropEX'
// export default class App extends Component {
//     render() {
//         return (
//         <div>
//             {/* <CBCPropEx
//             username="Vaishali"
//             age={20}
//             hobbies={["Playing", "organising" , "movies"]}
//             address={{city: "Armoor", area: "Nandishwara Colony"}}
//             sendFun={function(){alert("hi i am vaishali")}}
//             /> */}

//              <FBCPropEX
//              username="Vaihsali"
//              isMarried={true}
//              hobbies={["Chatting", "Playing", "Eating", "Sleeping"]}
//              />
//         </div>
//         )
//     }
//   }

//! props children
import React from 'react'
import PropChildEx from './propsex/PropChildEx'

const App = () => {
  return (
    <div>
      <PropChildEx num={1000}>
        <h1>this is data coming from props children</h1>
      </PropChildEx>

    </div>
  )
}

export default App
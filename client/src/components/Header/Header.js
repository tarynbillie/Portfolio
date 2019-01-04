// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import '../Header/header.scss';


// export default class Header extends Component {

//     constructor() {
//         super()
//         this.aboutRef = React.createRef();
//         this.contactRef = React.createRef();
//     }
//     scroll(ref) {
//         ref.current.scrollIntoView({ behavior: 'smooth' })
//     }

//     render() {
//         return (
//             <div>
//                 <div className='header'>
//                     <Link to={'/home'} className='link'>
//                         <div className='logo'>
//                             <h1>Taryn Li</h1>
//                         </div>
//                     </Link>
//                     <div className='rectangle' />
//                     <div className='nav'>
//                         <h3 onClick={() => { this.state.scroll(this.aboutRef) }}>About</h3>
//                         <Link to={'/projects'} className='link'>
//                             <h3>Projects</h3>
//                         </Link>
//                         <button className='contact' onClick={() => { this.state.scroll(this.contactRef) }}>Get in touch</button>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }

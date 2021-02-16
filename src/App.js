// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Feed from './Feed';

class App extends Component {
  render(){
    return (
      <div className="App">안녕
        <header id="helperBar">
          <img src="" className="logo"/>
          <div id="searchBar">
            <input type="text" className="search_box"></input>
          </div>
          <img className="helperIcons" src="https://static.thenounproject.com/png/2552724-200.png"/>
          <img className="helperIcons" src="https://icon-library.com/images/home-icon-transparent/home-icon-transparent-18.jpg"/>
          <img className="helperIcons" src="https://cdn2.iconfinder.com/data/icons/general-ui-outlined/16/heart-512.png"/>
          <img className="helperIcons" src="data:image/png;base64,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"/>
          <img className="helperIcons"/>
        </header>

        <section clasName="feed">
          <Feed></Feed>
        </section>

        <div className="accounts">
          <div className="myAccount"><img/></div>
          <div className="addFriends"></div>
        </div>
      </div>
    )
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;

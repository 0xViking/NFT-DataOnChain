import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import Loader from 'react-loader-spinner'
import App from './App'
const style = { position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" };
 const LoadingIndicator = props => {
   return ( 
    <div className="loadingGif" style={style} id="loadingGif">
    <Loader type="ThreeDots" color="#2BAD60" height="100" width="100" />
    </div>
  );  
 }


ReactDOM.render(
  <React.StrictMode>
    <App />
    <LoadingIndicator/>
  </React.StrictMode>,
  document.getElementById('root')
)

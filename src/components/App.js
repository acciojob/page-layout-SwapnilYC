
import React from "react";
import './../styles/App.css';
import Header from './Header'
import Content from './Content'
import Footer from './Footer'


const App = () => {
  let x = "Welcome to my website"
  let y = "This is the content of my website."
  let z = "©️ 2023 my Website. All rights reserved."
  return (
    <>
      {/* hello */}
        {/* Do not remove the main  */}
        <Header header={x}/>
        <Content content={y}/>
        {/* <Footer footer={z}/> */}
        {/* <p className="footer">©️ 2023 my Website. All rights reserved.</p> */}
        © 2023 My Website. All rights reserved.
    </>
  )
}

export default App

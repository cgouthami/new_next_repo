import "./App.css";
import Hero from "./Hero";
import Top from "./Top";
import Footer from "./Footer";
import Store from "./Store";
import Quote from "./Quote";



function App() {
  return (
    <div className="app">
      <Top />
      <Hero />
   
     
      <Store />
      <Quote />
      <Footer />
      {/* <ModeCommentOutlinedIcon variant="outlined" className="message" /> */}
    </div>
  );
}

export default App;

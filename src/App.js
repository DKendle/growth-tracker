import React from "react"
import './App.css';
import GradCard from './GradCard';
import Header from "./Header";
import Footer from "./Footer";


function App() {
  return (
    <div className="App">
      <Header />
        <main>
          <GradCard />

        </main>
      <Footer />
    </div>
  );
}

export default App;

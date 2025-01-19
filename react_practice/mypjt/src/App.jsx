import React from "react";
import Navbar from "./components/Navbar";
import HomeCarousel from "./components/Carousel"
import HomeMenu from "./components/HomeMenu";
import SearchBar from "./components/SearchBar";
function App() {
  return (
    <div>
      <SearchBar />
      <Navbar /> {/* 네브바 추가 */}
      <HomeCarousel />
      <HomeMenu />
      <header style={{ textAlign: "center", padding: "20px", background: "#282c34", color: "white" }}>
        <h1>Welcome to My Website</h1>
        <p>This is a simple homepage made with React and Vite!</p>
      </header>
      <main style={{ padding: "20px", fontSize: "18px" }}>
        <p>Hello, world! This is the main content of your website.</p>
        <p>Feel free to customize it as you like.</p>
      </main>
      <footer style={{ textAlign: "center", marginTop: "40px", color: "gray" }}>
        <p>© 2025 My Website</p>
      </footer>
    </div>
  );
}

export default App;

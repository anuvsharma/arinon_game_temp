import astronautImage from "./assets/astronaut.png";
import Header from "./components/Header";
import Selector from "./components/Selector";
import Content from "./components/Content";
import Scroller from "./components/Scroller";
import Footer from "./components/Footer";

function App() {
  return (
    // <div className="bg-gray-100 flex flex-row justify-center items-center h-screen w-screen">
    //   <div className="text-[15vw] font-bold text-[#1d3962] -mr-9">ARI</div>
    //   <div className="relative flex flex-col items-center">
    //     <div className="h-[50vw] w-[50vw] sm:h-[30vw] sm:w-[30vw]">
    //  <img className="object-cover h-full w-full" src={astronautImage}> </img>
    //     </div>
    //     <div className="absolute top-[90%] text-[10vw] font-bold text-[#F37C20]">Games</div>
    //   </div>
    //   <div className="text-[15vw] font-bold text-[#1d3962] -ml-9">NON</div>
    // </div>
    <div className="w-full min-h-screen bg-black text-gray-100 font-sans">
      <Header />
      <Selector />
      <Content />
      <Scroller />
      <Footer />
    </div>
  );
}

export default App;

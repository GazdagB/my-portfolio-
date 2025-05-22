import Forcast from "./components/Forecast";

function App() {
  return (
    <div className="items-center justify-items-center min-h-screen font-sans">
      {/* Top Bar */}
        <div className="flex items-center gap-10 justify-self-end me-20 pt-10">
          <div className="bg-[#ECECEC] flex  px-5 py-2 font-bold rounded-full cursor-pointer">
              💌 gazdagbal@gmail.com
          </div>
          <Forcast></Forcast>
        </div>
    </div>
  );
}

export default App

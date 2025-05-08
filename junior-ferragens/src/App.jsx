import "./App.css";
import Card from "./components/card/Card";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Card
          title={"Title"}
          description={"asdasdasdasdasdasdasd"}
          imageUrl={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqwOVvrN-2yqQS9CYRo4HbzOKLtrynPYCG-g&s"
          }
        />
      </div>
    </>
  );
}

export default App;

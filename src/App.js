import { useState } from "react";
import "./App.css";
import FormComponent from "./components/FormComponent";
import NavBar from "./components/NavBar";
import ToDoCard from "./components/ToDoCard";

function App() {
  const card = {
    title: "ToDoTitle",
    detail: "I'm baby sriracha hot chicken mixtape pabst organic air...",
  };

  const [cards, setCards] = useState([card]);

  const addCardHandler = (titleFrominput, contentFromInput) => {
    setCards((prev) => [...prev, {title: titleFrominput, detail: contentFromInput}])
    console.log(cards)
  }

  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main>
        <section>
          <FormComponent addCardHandler = {addCardHandler}/>
        </section>
        <section className="toDoList">
          <h3>My todos</h3>
          {cards.map((card) => {
            return <ToDoCard card={card} key={card.title}/>;
          })}
        </section>
      </main>
    </div>
  );
}

export default App;

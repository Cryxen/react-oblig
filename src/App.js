import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
 <header>
      <nav>
        <p>HIOF</p>
        <p>User user</p>
      </nav>
    </header>
    <main>
      <section>
        <form>
          <label for="titleInput">Title</label>
          <input type="text" id="titleInput" />
          <label for="contentInput">Content </label>
          <textarea id="contentInput"> </textarea>
          <button>add</button>
        </form>
      </section>
      <section class="toDoList">
        <h3>My todos</h3>
        <article>
          <h4>ToDoTitle</h4>
          <p>I'm baby sriracha hot chicken mixtape pabst organic air...</p>
          <button>Complete</button>
        </article>
        <article>
          <h4>ToDoTitle</h4>
          <p>I'm baby sriracha hot chicken mixtape pabst organic air...</p>
          <button>Complete</button>
        </article>
        <article>
          <h4>ToDoTitle</h4>
          <p>I'm baby sriracha hot chicken mixtape pabst organic air...</p>
          <button>Complete</button>
        </article>
        <article>
          <h4>ToDoTitle</h4>
          <p>I'm baby sriracha hot chicken mixtape pabst organic air...</p>
          <button>Complete</button>
        </article>
        <article>
          <h4>ToDoTitle</h4>
          <p>I'm baby sriracha hot chicken mixtape pabst organic air...</p>
          <button>Complete</button>
        </article>
        <article>
          <h4>ToDoTitle</h4>
          <p>I'm baby sriracha hot chicken mixtape pabst organic air...</p>
          <button>Complete</button>
        </article>
      </section>
    </main>
    </div>
  );
}

export default App;

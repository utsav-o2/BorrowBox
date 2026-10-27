import './App.css';

function App(){
  return (
    <div>
      <header>
        <h2>BorrowBox</h2>

        <nav>
          <a href="#home">Home</a>
          <a href="#items">Browse Items</a>
          <a href="#about">About</a>
        </nav>
      </header>

      <section id="home">
        <h1>Borrow what you need!</h1>
        <p>
          A simple place for students to share and borrow useful items.
        </p>
        <button>Explore Items</button>
      </section>
    </div>
  );
}

export default App;
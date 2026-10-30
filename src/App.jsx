
import { useState } from 'react';
import './App.css';

const items = [
  {id:1, name:"Scientific Calculator", category:"Electronics", owner:"Utsav", icon:"🧮"},
  {id:2, name:"Web Tech Reference Book", category:"Books", owner:"Maitry", icon:"📚"},
  {id:3, name:"Laptop Charger", category:"Electronics", owner:"Utsav", icon:"🔌"},
  {id:4, name:"Portable Projector", category:"Electronics", owner:"Maitry", icon:"📽️"}
];

function App() {

  const [requestedItems, setRequestedItems] = useState([]);

  function handleBorrow(id) {
    if (requestedItems.includes(id)) {
      setRequestedItems(requestedItems.filter(itemId => itemId !== id));
    } else {
      setRequestedItems([...requestedItems, id]);
    }
  }

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

        <button onClick={() => document.getElementById('items').scrollIntoView()}>
          Explore Items
        </button>
      </section>

      <section id="items" className="items-section">
        <h2>Available Items</h2>
        <p>Find something useful to borrow</p>

        <div className="items-container">
          {items.map((item) => (
            <div className="item-card" key={item.id}>

              <div className="item-icon">{item.icon}</div>

              <h3>{item.name}</h3>
              <p>Category: {item.category}</p>
              <p>Shared by: {item.owner}</p>

              <button
                className={requestedItems.includes(item.id) ? "requested-btn" : ""}
                onClick={() => handleBorrow(item.id)}
              >
                {requestedItems.includes(item.id) ? "Requested ✓" : "Borrow"}
              </button>

            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;

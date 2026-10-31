
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
  const [allItems, setAllItems] = useState(items);

  const [itemName, setItemName] = useState('');
  const [category, setCategory] = useState('Electronics');
  const [owner, setOwner] = useState('');

  function handleBorrow(id) {
    if (requestedItems.includes(id)) {
      setRequestedItems(requestedItems.filter(itemId => itemId !== id));
    } else {
      setRequestedItems([...requestedItems, id]);
    }
  }


function addItem(e) {
  e.preventDefault();

  if (itemName.trim() === '' || owner.trim() === '') {
    return;
  }

  const newItem = {
    id: Date.now(),
    name: itemName.trim(),
    category: category,
    owner: owner.trim(),
  };

  setAllItems([...allItems, newItem]);

  setItemName('');
  setCategory('Electronics');
  setOwner('');
}


  return (
    <div>
      <header>
        <h2>BorrowBox</h2>

        <nav>
          <a href="#home">Home</a>
          <a href="#items">Browse Items</a>
          <a href="#add-item">Add Item</a>
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
          {allItems.map((item) => (
            <div className="item-card" key={item.id}>

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


      <section id="add-item" className="add-section">
      <h2>Add Your Item</h2>
      <p>Have something useful? Share it with others.</p>

      <form onSubmit={addItem}>

        <input
        type="text"
        placeholder="Item Name"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
        required
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="Electronics">Electronics</option>
        <option value="Books">Books</option>
        <option value="Stationery">Stationery</option>
        <option value="Other">Other</option>
      </select>

      <input
        type="text"
        placeholder="Owner Name"
        value={owner}
        onChange={(e) => setOwner(e.target.value)}
        required
      />

      <button type="submit">Add Item</button>

    </form>
  </section>

    </div>
  );
}

export default App;

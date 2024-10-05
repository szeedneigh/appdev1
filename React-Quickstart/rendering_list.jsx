{/* Rendering Lists */}

// You will rely on JavaScript features like for loop and the array map() function to render lists of components.
// For example, let's say you have an array of products:

const products = [
  { title: "Cabbage", id: 1 },
  { title: "Garlic", id: 2 },
  { title: "Apple", id: 3 },
];

// Indide your component, use the map() function to transform an array of products into an array of <li> items:

const listItems = products.map(product => 
  <li key={product.id}>
    {product.title}
  </li>
);

return (
  <ul>{listItems}</ul>
);

// Notice how <li> has a key atttribute. For each item in a list, you should pass a string or a number that uniquely identifies that item among its siblings.
// Usually, a key should be coming from your data, such as a database ID. React uses your keys to know what happened if you later insert, delete, or reorder the items.

const productss = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];

export default function ShoppingList() {
  const listItems = products.map((product) => (
    <li 
      key={product.id}
      style={{
        color: product.isFruit ? 'magenta' : 'darkgreen'
      }}
    >
      {product.title}
    </li>
  ));

  return (
    <ul>{listItems}</ul>
  );
}

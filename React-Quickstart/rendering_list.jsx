{/* Rendering Lists */}

const products = [
  { title: "Cabbage", id: 1 },
  { title: "Garlic", id: 2 },
  { title: "Apple", id: 3 },
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

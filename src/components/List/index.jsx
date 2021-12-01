function List({ produtos }) {
  return (
    <div className="app">
      <ul>
        {produtos.map((item, indice) => (
          <li key={indice}>
            <p>{item.code}</p>
            <p>{item.name}</p>
            <p>{item.description}</p>
            <p>{item.price}</p>
            <p>{item.discount}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;

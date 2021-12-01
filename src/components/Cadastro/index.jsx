import { useState } from "react";

function Cadastro({ produtos, setProdutos }) {
  const [entrada, setEntrada] = useState({
    code: "",
    name: "",
    description: "",
    price: "",
    discount: "",
  });

  return (
    <div className="app">
      <form onSubmit={(event) => event.preventDefault()}>
        <input
          name="code"
          placeholder="code"
          value={entrada.code}
          onChange={(event) => {
            setEntrada({ ...entrada, code: event.target.value });
          }}
        />
        <input
          name="name"
          placeholder="name"
          value={entrada.name}
          onChange={(event) =>
            setEntrada({ ...entrada, name: event.target.value })
          }
        />
        <input
          name="description"
          placeholder="description"
          value={entrada.description}
          onChange={(event) =>
            setEntrada({ ...entrada, description: event.target.value })
          }
        />
        <input
          name="price"
          placeholder="price"
          value={entrada.price}
          onChange={(event) =>
            setEntrada({ ...entrada, price: event.target.value })
          }
        />
        <input
          name="discount"
          placeholder="discount"
          value={entrada.discount}
          onChange={(event) =>
            setEntrada({ ...entrada, discount: event.target.value })
          }
        />
        <button
          type="submit"
          onClick={() => setProdutos([...produtos, entrada])}
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
}

export default Cadastro;

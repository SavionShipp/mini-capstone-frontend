export function ProductsNew ({onCreate}) {
  const handleSubmit = (event) => {
    EventTarget.preventDefault();
    const params = new FormData(event.target);
    onCreate(params, () => event.target.reset());
  };

  return (
    <div id="ProductsNew">
      <h1>New Products</h1>
      <form onSubmit={handleSubmit}>
        <div>
          name:<input name="name" type="text" />
        </div>
        <div>
          price:<input name="price" type="text" />
        </div>
        <div>
          description:<input name="description" type="text" />
        </div>
        <div>
          <button>Create</button>
        </div>
      </form>
    </div>
  )
}
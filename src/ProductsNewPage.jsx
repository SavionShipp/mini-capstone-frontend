import axios from 'axios'
import { useNavigate } from 'react-router-dom'
export function ProductsNewPage() {
const navigate = useNavigate();
const handleSubmit = (event) => {
  event.preventDefault()
  const params = new FormData(event.target)
  axios.post("http://localhost:3000/product.json").then(response => {
    console.log('response.data')
    navigate('/')
  })
}

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
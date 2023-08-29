import { Link } from 'react-router-dom';
import products from '../data'

const Products = () => {

  const productList = products.map((product) => {
    return (
      <article key={product.id}>
        <h5>{product.name}</h5>
        <Link to={`/products/${product.id}`}>
          more info </Link>
      </article>
    )
  })

  return (
    <section className='section'>
      <div className='products'>
      {productList}
      </div>
    </section>

  );
};

export default Products;

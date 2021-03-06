/* eslint-disable react/prop-types */
import Link from 'next/link';
import ItemStyles from '../../components/styles/ItemStyles';
import Title from '../../components/styles/Title';
import PriceTag from '../../components/styles/PriceTag';
import formatMoney from '../../utils/formatMoney.js';
import DeleteProduct from './DeleteProduct';
import AddToCart from '../../components/AddToCart';
// import DeleteProduct from './DeleteProduct';
// import AddToCart from './AddToCart';

export default function Product({ product }) {
  return (
    <ItemStyles>
      <img
        src={product?.photo?.image?.publicUrlTransformed}
        alt={product.name}
      />
      <Title>
        <Link href={`/product/${product.id}`}>{product.name}</Link>
      </Title>
      <PriceTag>{formatMoney(product.price)}</PriceTag>
      <p>{product.description}</p>
      <div className="buttonList">
        <Link
          href={{
            pathname: '/update',
            query: {
              id: product.id,
            },
          }}
        >
          Edit ✏️
        </Link>
        <AddToCart id={product.id} />
        <DeleteProduct id={product.id}>Delete</DeleteProduct>
      </div>
    </ItemStyles>
  );
}

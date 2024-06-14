import { getProducts } from '../../../utils/api-requests';
import ListProducts from './products';

export default async function InitialData() {
    const products = await getProducts();

    return <ListProducts products={products} />;
}

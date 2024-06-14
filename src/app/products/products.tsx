'use client';

import { Product, getProducts } from '../../../utils/api-requests';
import { useQuery } from '@tanstack/react-query';

export default function ListProducts({ products }: { products: Product }) {
    const { data } = useQuery({
        queryKey: ['products'],
        queryFn: () => getProducts(),
        initialData: products,
        staleTime: 5 * 1000,
    });

    return (
        <main>
            <div>{data.templateName}</div>
            <div>{data.title}</div>
            {/* <img
                src={data.previewUrl}
                alt="https://gelato-api-live.s3.eu-west-1.amazonaws.com/ecommerce/store_product_image/f4b65f67-9291-44ca-a132-26e03411590c/preview?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3QM3COBPZOL2E4GY%2F20240612%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20240612T190233Z&X-Amz-SignedHeaders=host&X-Amz-Expires=86400&X-Amz-Signature=cbf21cacbcf62234297a7bba16442d96ab56f3486ffb9ac727b9ea78095685d9"
            /> */}
        </main>
    );
}

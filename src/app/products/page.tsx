import Image from 'next/image';

interface Product {
    templateName: string;
    title: string;
    previewUrl: string;
    previewWidth: number;
    previewHeight: number;
}

async function getData(): Promise<Product> {
    const apiKey = process.env.GELATO_API_KEY as string;

    const res = await fetch(
        'https://ecommerce.gelatoapis.com/v1/templates/74de1ec8-cd27-4dff-8618-8ef830e1dcdc',
        {
            headers: {
                'X-API-KEY': apiKey,
            },
        }
    );

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    const response: Product = await res.json();

    return response as Product;
}

export default async function Page() {
    const data = await getData();

    return (
        <main>
            <div>{data.templateName}</div>
            <div>{data.title}</div>
            <Image
                src={data.previewUrl}
                alt="Gelato image preview"
                width={500}
                height={500}
                priority={true}
            />
        </main>
    );
}

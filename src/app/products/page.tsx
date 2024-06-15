import Image from 'next/image';

async function getData() {
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
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data');
    }

    return res.json();
}

export default async function Page() {
    const data = await getData();

    return (
        <main>
            <div>{data.templateName}</div>
            <div>{data.title}</div>
            <Image
                src={data.previewUrl}
                width={500}
                height={500}
                priority={true}
                alt="Gelato image preview"
            />
        </main>
    );
}

export type Product = {
    id: string;
    templateName: string;
    title: string;
    previewUrl: string;
};

export async function getProducts() {
    const apiKey = process.env.GELATO_API_KEY as string;

    const res = await fetch(
        'https://ecommerce.gelatoapis.com/v1/templates/74de1ec8-cd27-4dff-8618-8ef830e1dcdc',
        {
            headers: {
                'X-API-KEY': apiKey,
            },
        }
    );
    const products = (await res.json()) as Product;
    return products;
}

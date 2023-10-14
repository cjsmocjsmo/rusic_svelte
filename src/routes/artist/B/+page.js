export async function load({ fetch, params }) {
    const res = await fetch(`http://192.168.0.91:8080/artistforalpha/B`);
    const artB = await res.json();

    return { artB };
}
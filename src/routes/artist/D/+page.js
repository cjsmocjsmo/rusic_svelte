export async function load({ fetch, params }) {
    const res = await fetch(`http://192.168.0.91:8080/artistforalpha/D`);
    const artD = await res.json();

    return { artD };
}
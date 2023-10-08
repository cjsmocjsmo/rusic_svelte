export async function load({ fetch, params }) {
    const res = await fetch(`http://192.168.0.26:8080/artistforalpha/G`);
    const artG = await res.json();

    return { artG };
}
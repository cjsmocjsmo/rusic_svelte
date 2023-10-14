export async function load({ fetch, params }) {
    const res = await fetch(`http://192.168.0.91:8080/artistforalpha/E`);
    const artE = await res.json();

    return { artE };
}
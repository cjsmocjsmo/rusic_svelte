export async function load({ fetch, params }) {
    const res = await fetch(`http://192.168.0.26:8080/artistforalpha/C`);
    const artC = await res.json();

    return { artC };
}
export async function load({ fetch, params }) {
    const res = await fetch(`http://192.168.0.26:8080/artistforalpha/M`);
    const artistList = await res.json();

    return { artistList };
}

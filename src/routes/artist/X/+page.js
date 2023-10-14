export async function load({ fetch, params }) {
    const res = await fetch(`http://192.168.0.91:8080/artistforalpha/X`);
    const artistList = await res.json();

    return { artistList };
}

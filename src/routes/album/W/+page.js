export async function load({ fetch, params }) {
    const res = await fetch(`http://192.168.0.26:8080/albumforalpha/W`);
    const albumList = await res.json();

    return { albumList };
}
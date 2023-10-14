export async function load({ fetch, params }) {
    const res = await fetch(`http://192.168.0.91:8080/albumforalpha/G`);
    const albumList = await res.json();

    return { albumList };
}
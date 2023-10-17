export async function load({ fetch, params }) {
    const res = await fetch(`http://192.168.0.26:8080/albumcount`);
    const albumCount = await res.json();

    return { albumCount };
}
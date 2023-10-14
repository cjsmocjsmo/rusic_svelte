import { selsong } from '$lib/stores.js';

export async function load({ fetch, params }) {
    const res = await fetch(`http://192.168.0.91:8080/allplaylists`);
    const allpls = await res.json();

    return { allpls };
}
// import { selmedia } from '$lib/stores.js';

// export async function load({ fetch, params }) {

//     let art_val;
// 	selmedia.subscribe((value) => {
// 		art_val = value;
// 	});

//     console.log(art_val);

//     let URL = "http://192.168.0.26:8080/albforart/" + art_val
//     console.log(URL);
//     const res = await fetch(URL);
//     const artL = await res.json();

//     return { artL };
// }
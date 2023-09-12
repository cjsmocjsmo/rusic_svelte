import { writable } from "svelte/store";

export const selartist = writable("None");

// function create_selArtist() {
//     const { subscribe, set, update } = writable("None");

//     return {
//         subscribe,
//         set,
//         rupdate: () => update((n) => n),
//         reset: () => set("None"),

//     };
// }

// export const selartist = create_selArtist();
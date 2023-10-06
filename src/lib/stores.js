import { writable } from "svelte/store";
import TestPic from '$lib/images/testpic.jpg';

export const selmedia = writable("None");
export const selalbumforartist = writable("None");
export const selmediatoplay = writable("None");

export const selplaylistid = writable("None");
export const selplaylistname = writable("None");
export const playlistcount = writable(0);


export const nowplayingimgurl = writable(TestPic);
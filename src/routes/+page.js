export async function load({ fetch, params }) {
    const res = await fetch(`http://192.168.0.91:8080/randomcoverart`);
    const cart = await res.json();

    console.log(cart)

    return { cart };
}

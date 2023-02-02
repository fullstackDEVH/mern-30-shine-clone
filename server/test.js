async function test() {
    const data = await (await fetch('https://jsonplaceholder.typicode.com/users')).json();
    console.log(data);
};

test();
async function main()
{
    let a = await fetch("https://api.7digital.com/1.2/");
    let response = await a.text();
    console.log(response);
}

main()

// console.log("hello")
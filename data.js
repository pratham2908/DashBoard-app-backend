fetch("https://localhost:3000/getData", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    // empty body
    body: JSON.stringify({}),
}).then((res) => {
    return res.json();
}).then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
});
setTimeout(() => {
    const p = document.createElement("p");
    p.innerText = "this was added dynamically, whatever that means"
    document.body.appendChild(p);
}, 2000);
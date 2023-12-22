function step(n) {
    for (let i = 0; i <= n; i++) {
        const block = "#".repeat(i);
        console.log(block);
    }
}
step(6);
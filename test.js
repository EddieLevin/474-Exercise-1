function print(n) {
    let outList = []
    for (i = 0; i < n; i++) {
        outList.push(i)
    }
    outList.forEach(element => {
        console.log(element)
    });
}
print(4)
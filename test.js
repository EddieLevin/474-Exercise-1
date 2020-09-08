function print(n) {
    let outList = [];
    for (i = 0; i < n; i++) {
        outList.push(i * 2);
    }
    for (const element of outList) {
        console.log(element)
    }
    for (const index in outList) {
        console.log(index + ": " + outList[index])
    }
}
print(6);
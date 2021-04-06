function Test() {
    for (var i = 0; i < 3; i++) {
        console.log(i);
    }
    // Access out of the declaration scope
    // var scoped with function where they declared
    // let scoped with block where they declared
    console.log(i);

    for (let j = 0; j < 3; j++) {
        console.log(j);
    }
    // the following Code line will return Error !!!!
    //console.log(j);

    const k = 1;
    // the following Code line will return Error !!!!
    // because you can not reassign const variables
    //k = 2;
}

Test();
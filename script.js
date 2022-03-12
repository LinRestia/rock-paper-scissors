const computerPlay =() => {
    let random = Math.floor(Math.random() * 3);
    if (random === 1){
        console.log('rock');
    } else if(random === 2){
        console.log('paper');
    } else {
        console.log('scissors');
    }
}
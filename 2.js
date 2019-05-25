function betweenDays(a, b){
    let bawah = parseInt(a.split("-",3)[2]);
    let atas = parseInt(b.split("-",3)[2]);

    for(let i=bawah; i<=atas; i++){
        console.log("2019-11-0"+i);
    }
}

betweenDays("2019-11-01","2019-11-05");
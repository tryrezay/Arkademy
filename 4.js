function cetak(n){
    if(n % 2 !=0){
        for(let i=0; i<n; i++){
            for(let j=0; j<n; j++){
                process.stdout.write("x");
            }
        }
    }
    else{
        console.log("Harap masukkan bilangan ganjil !")
    }

}

cetak(5);
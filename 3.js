function jumlah(str) {
                        const data = str.split("")
                        const huruf = ["a","e","i","o","u"]
                        let tampil=0

                        for (let i=0; i < data.length; i ++) {
                        if (huruf.includes(data[i]))
                        tampil +=1
                        }
                        console.log(tampil)
                        return tampil
                        }

                        jumlah("coba mana tau bisa alhamdulillah")
                        jumlah("programmer")
                        jumlah("hmmm")
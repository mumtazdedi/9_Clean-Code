class Kendaraan {
    var totalRoda = 0;
var kecepatanPerJam = 0;
}

class Mobil extends Kendaraan {
    void berjalan(10) {
    kecepatanPerJam = kecepatanPerJam + tambahKecepatan;
}
tambahKecepatan(var kecepatanBaru) {
    kecepatanPerJam = kecepatanPerJam + kecepatanBaru;
    }
}

void main(){
    mobilCepat = new Mobil();
    mobilCepat.berjalan();
    mobilCepat.berjalan();
    mobilCepat.berjalan();

    mobilLamban = new Mobil();
    mobilLamban.berjalan();
}
import './index.css'
export default function BelajarES6() {
    
    let nama = "kisanak";
    let pekerjaan = "juragan sawit";
    
    let biodata = `Nama saya ${nama}, pekerjaan saya ${pekerjaan}`;
    
    let nama_kendaraan =  "Hino dutro"
    let tahun_kendaraan = "[error]"
    let kendaraan = {
        nama_kendaraan,
        tahun_kendaraan
    }

    let user = {nama: "JURAGAN SAWIT"}
    let detail = {nomorWA: 89534395461}
    let satuin = {...user, ...detail}

    let nilai = 80;
    let hasil = nilai >=76 ?"lulus" : "tidak lulus"
    
    const Klik = () => {
        alert("info lahan wa = 089534395461")
    }
    
    return (
        <>
            <h1>{biodata}</h1>
            <h2>{`info truk ${kendaraan.nama_kendaraan} tahun ${kendaraan.tahun_kendaraan} wa gw!!!`}</h2>
            <button onClick={Klik}>Klik Saya</button>
            <h2>{`kisanak a.k.a ${satuin.nama}, no WA : ${satuin.nomorWA}`}</h2>
            <h1>{hasil}</h1>
        </>
    )
    
}
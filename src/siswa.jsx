import { useState } from "react";
import './index.css';

const Siswa = () => {
  const [siswa, setSiswa] = useState([
    { id: 1, nama: "TEGUH", nilai: 80 },
    { id: 2, nama: "IPUT", nilai: 60 },
    { id: 3, nama: "BEDU", nilai: 90 },
  ]);

  const tambahSiswa = (e) => {
    e.preventDefault();

    const nama = e.target.nama.value;
    const nilai = Number(e.target.nilai.value);

    setSiswa([
      ...siswa,
      {
        // Pakai Date.now() lebih aman buat ID unik daripada length + 1
        id: Date.now(), 
        nama,
        nilai,
      },
    ]);

    e.target.reset();
  };

  return (
    <div className="container">
      
      {/* Header Section */}
      <div className="header">
        <h1>Rekap Nilai Siswa</h1>
        <p>Dashboard Monitoring Kelulusan</p>
      </div>

      {/* Form Section */}
      <form onSubmit={tambahSiswa} className="input-group">
        <input 
          type="text" 
          name="nama" 
          placeholder="Nama Siswa..." 
          className="input-field" 
          required 
          autoComplete="off"
        />
        <input 
          type="number" 
          name="nilai" 
          placeholder="Nilai (0-100)" 
          className="input-field" 
          required 
          min="0"
          max="100"
        />
        <button type="submit" className="btn-add">
          + Simpan
        </button>
      </form>

      {/* List Section */}
      <div className="student-list">
        {siswa.map(({ id, nama, nilai }) => {
          
          // Logic cek kelulusan dipisah biar rapi
          const isLulus = nilai >= 75;
          const statusText = isLulus ? "LULUS" : "REMEDIAL";
          const statusClass = isLulus ? "lulus" : "gagal";

          return (
            <div key={id} className={`student-card ${statusClass}`}>
              
              {/* Info Nama & Nilai */}
              <div className="student-info">
                <h3>{nama}</h3>
                <span>Nilai Akhir: <b>{nilai}</b></span>
              </div>

              {/* Badge Status */}
              <div className={`badge ${statusClass}`}>
                {statusText}
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
};

export default Siswa;
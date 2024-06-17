import React, { useState } from 'react';
import './Kepsek.css';

function Kepsek() {
  const [biodata, setBiodata] = useState({
    nama: 'Hj. Farida Indriadiani, S.Pd',
    jabatan: 'Kepala Sekolah',
    NIP: '197503211999012345',
    pengalaman: [
      { tahun: '2003 - sekarang', posisi: 'Kepala Sekolah' },
      { tahun: '2010 - 2015', posisi: 'Wakasek Kurikulum' },
      { tahun: '2005 - 2010', posisi: 'Guru Matematika' },
    ],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBiodata({ ...biodata, [name]: value });
  };

  return (
    <div className="container">
      <div className="biodata-section">
        <h1>{biodata.jabatan}</h1>
        <div className="profile-container">
          <img src="https://via.placeholder.com/150" alt="Profile" />
          <div className="informasi">
            <h2>Informasi</h2>
            <label>
              Nama:
              <input
                type="text"
                name="nama"
                value={biodata.nama}
                onChange={handleChange}
              />
            </label>
            <label>
              Jabatan:
              <input
                type="text"
                name="jabatan"
                value={biodata.jabatan}
                onChange={handleChange}
              />
            </label>
            <label>
              NIP:
              <input
                type="text"
                name="NIP"
                value={biodata.NIP}
                onChange={handleChange}
              />
            </label>
          </div>
        </div>
        <div>
          <h2>Pengalaman</h2>
          {biodata.pengalaman.map((item, index) => (
            <div key={index} className="pengalaman-item">
              <label>
                Tahun:
                <input
                  type="text"
                  name="tahun"
                  value={item.tahun}
                  onChange={(e) => {
                    const newPengalaman = [...biodata.pengalaman];
                    newPengalaman[index].tahun = e.target.value;
                    setBiodata({ ...biodata, pengalaman: newPengalaman });
                  }}
                />
              </label>
              <label>
                Posisi:
                <input
                  type="text"
                  name="posisi"
                  value={item.posisi}
                  onChange={(e) => {
                    const newPengalaman = [...biodata.pengalaman];
                    newPengalaman[index].posisi = e.target.value;
                    setBiodata({ ...biodata, pengalaman: newPengalaman });
                  }}
                />
              </label>
            </div>
          ))}
        </div>
        {/* Button section */}
        <div className="button-group">
          <button className="edit">Edit</button>
          <button className="save">Save</button>
        </div>
      </div>
    </div>
  );
}

export default Kepsek;

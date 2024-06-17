import React, { useState } from 'react';
import './Wakasek.css';

function Wakasek() {
  const [biodatas, setBiodatas] = useState([
    {
      nama: 'Hj. Farida Indriadiani, S.Pd',
      jabatan: 'Wakil Kepala Sekolah bidang Kurikulum',
      NIP: '197503211999012345',
      pengalaman: [
        { tahun: '2003 - sekarang', posisi: 'Pengajar Mata Pelajaran Sejarah Indonesia' },
        { tahun: '2015 - 2018', posisi: 'Staf Kurikulum' },
        { tahun: '2020 - sekarang', posisi: 'Wakasek Kurikulum' },
      ],
    },
    {
      nama: 'Hj. Farida Indriadiani, S.Pd',
      jabatan: 'Wakil Kepala Sekolah bidang Sarana Prasarana',
      NIP: '197503211999012345',
      pengalaman: [
        { tahun: '2003 - sekarang', posisi: 'Pengajar Mata Pelajaran Sejarah Indonesia' },
        { tahun: '2015 - 2018', posisi: 'Staf Kurikulum' },
        { tahun: '2020 - sekarang', posisi: 'Wakasek Sarana Prasarana' },
      ],
    },
    {
      nama: 'Hj. Farida Indriadiani, S.Pd',
      jabatan: 'Wakil Kepala Sekolah bidang Kepeserta Didikan',
      NIP: '197503211999012345',
      pengalaman: [
        { tahun: '2003 - sekarang', posisi: 'Pengajar Mata Pelajaran Sejarah Indonesia' },
        { tahun: '2015 - 2018', posisi: 'Staf Kurikulum' },
        { tahun: '2020 - sekarang', posisi: 'Wakasek Kepeserta Didikan' },
      ],
    },
  ]);

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const newBiodatas = [...biodatas];
    newBiodatas[index] = { ...newBiodatas[index], [name]: value };
    setBiodatas(newBiodatas);
  };

  const handleEditClick = (index) => {
    console.log('Edit clicked for index:', index);
    // Tambahkan logika lain sesuai kebutuhan
  };

  const handleSaveClick = (index) => {
    console.log('Save clicked for index:', index);
    // Tambahkan logika lain sesuai kebutuhan
  };

  return (
    <div className="container">
      {biodatas.map((biodata, index) => (
        <div key={index} className="biodata-section">
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
                  onChange={(e) => handleChange(index, e)}
                />
              </label>
              <label>
                Jabatan:
                <input
                  type="text"
                  name="jabatan"
                  value={biodata.jabatan}
                  onChange={(e) => handleChange(index, e)}
                />
              </label>
              <label>
                NIP:
                <input
                  type="text"
                  name="NIP"
                  value={biodata.NIP}
                  onChange={(e) => handleChange(index, e)}
                />
              </label>
            </div>
          </div>
          <div>
            <h2>Pengalaman Pengajar</h2>
            {biodata.pengalaman.map((item, pIdx) => (
              <div key={pIdx} className="pengalaman-item">
                <label>
                  Tahun:
                  <input
                    type="text"
                    name="tahun"
                    value={item.tahun}
                    onChange={(e) => handleChange(index, e)}
                  />
                </label>
                <label>
                  Posisi:
                  <input
                    type="text"
                    name="posisi"
                    value={item.posisi}
                    onChange={(e) => handleChange(index, e)}
                  />
                </label>
              </div>
            ))}
          </div>
          <div className="button-group">
            <button className="edit" onClick={() => handleEditClick(index)}>Edit</button>
            <button className="save" onClick={() => handleSaveClick(index)}>Save</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Wakasek;

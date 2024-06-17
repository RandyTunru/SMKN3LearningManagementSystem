import React from 'react';
import '../styles/ProfileSetting.css';
import Header from '../components/Header/Header';

export const ProfileSetting = () => {
  return (
    <div>
    <Header/>
    <div className='top-side'>
    <div className="profile-setting">
      <h1>Profile Settings</h1>
      <form className='top-side'>
        <div className="form-group">
          <label>
            Nama Lengkap
            <input type="text" placeholder="Jula Askina,S.Pd" />
          </label>
          <label>
            Username
            <input type="text" placeholder="Julaaskina" />
          </label>
          <label>
            Email 
            <input type="text" placeholder="Julaaskina@gmail.com" />
          </label>
          <label>
            NIP
            <input type="text" placeholder="199992899800001" />
          </label>
          <label>
            Jenis Kelamin <br />
            <select name="Role">
                <option value="Perempuan">Perempuan</option>
                <option value="Laki-Laki">Laki-Laki</option>
            
            </select>
          </label>
          <label>
            Mata Pelajaran yang diampu
            <input type="text" placeholder="Fisika" />
          </label>
          <label>
            Password
            <input type="password" placeholder="Masukkan Password Anda" />
          </label>
        </div>
        <div className="button-group">
          <button type="submit">Save</button>
          <button type="button">Cancel</button>
        </div>
      </form>
    </div>
    </div>
    </div>
  );
};

export default ProfileSetting;
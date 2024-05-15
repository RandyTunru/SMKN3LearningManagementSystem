import React from "react";

import { Header } from "../components/Header/Header.jsx";
import { InputField } from "../components/RekapPresensiComponent/InputField/InputField.jsx";
import "../styles/RekapPresensi.css";

export function RekapPresensi() {
  return(
    <>
        <Header Auth="Admin"/>
        <div>
            <div className="Rekap-Presensi">
                <h3>Rekap Presensi</h3>
                <InputField label={"Kelas"} placeholder={"Kelas"}/>
                <InputField label={"Mata Pelajaran"} placeholder={"Kode Mata Pelajaran"}/>
            </div>
        </div>
    </>
  )
}
import { useState } from "react";
import {
  Box,
  Button,
  Heading,
  FormControl,
  Input,
  Select,
} from "@chakra-ui/react";

export default function AddPelanggan() {
  const [member, setMember] = useState("");
  const [nama, setNama] = useState("");
  const [alamat, setAlamat] = useState("");
  const [nomor_meteran, setNomor_meteran] = useState("");
  const [status, setStatus] = useState("");
  const [periode, setPeriode] = useState("");
  const [tgl_jth_tempo, setTgl_jth_tempo] = useState("");
  const [jmlh_tagihan, setJmlh_tagihan] = useState("");
  const [daya, setDaya] = useState("");

  const createPelanggan = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        member,
        nama,
        alamat,
        nomor_meteran,
        status,
        periode,
        tgl_jth_tempo,
        jmlh_tagihan,
        daya,
      }),
    })
      .then(() => {
        fetch("http://localhost:3000/users")
          .then((res) => res.json())
          .then((data) => {
            setMember("");
            setNama("");
            setAlamat("");
            setNomor_meteran("");
            setStatus("");
            setPeriode("");
            setTgl_jth_tempo("");
            setJmlh_tagihan("");
            setDaya("");
            console.log(data);
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  };

  return (
    <Box bg={"linear-gradient(to right, #d6dbdf, #ebedef)"}>
      <Box w="60%" m="auto" p={6} boxShadow="lg" rounded="md">
        <Heading textAlign={"center"} my={3} as={"h3"} size={"md"}>
          Tambah Pelanggan
        </Heading>
        <form onSubmit={createPelanggan}>
          <FormControl>
            <Input
              my={2}
              placeholder="Member"
              required
              type="number"
              value={member}
              onChange={(e) => setMember(e.target.value)}
            />
            <Input
              placeholder="Nama"
              required
              value={nama}
              onChange={(e) => setNama(e.target.value)}
            />
            <Input
              my={2}
              placeholder="Alamat"
              required
              value={alamat}
              onChange={(e) => setAlamat(e.target.value)}
            />
            <Input
              placeholder="Nomor Meteran"
              required
              value={nomor_meteran}
              onChange={(e) => setNomor_meteran(e.target.value)}
            />
            <Select
              my={2}
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              required
            >
              <option value="">Pilih Status</option>
              <option value="Sudah_Dibayar">Sudah Dibayar</option>
              <option value="Belum Dibayar">Belum Dibayar</option>
            </Select>
            <Input
              placeholder="Periode"
              required
              value={periode}
              onChange={(e) => setPeriode(e.target.value)}
            />
            <Input
              my={2}
              placeholder="Tanggal Jth Tempo"
              required
              type="date"
              value={tgl_jth_tempo}
              onChange={(e) => setTgl_jth_tempo(e.target.value)}
            />
            <Input
              placeholder="Jumlah Tagihan"
              required
              type="text"
              value={jmlh_tagihan}
              onChange={(e) => setJmlh_tagihan(e.target.value)}
            />
            <Input
              my={2}
              placeholder="Daya"
              required
              value={daya}
              onChange={(e) => setDaya(e.target.value)}
            />
            <Button type="submit" bg={"lightblue"} _hover={{ bg: "blue.300" }}>
              Submit
            </Button>
          </FormControl>
        </form>
      </Box>
    </Box>
  );
}

import { useState, useEffect } from "react";
import {
  Box,
  Heading,
  Table,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
} from "@chakra-ui/react";

export default function Transaksi() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((data) => setData(data[0]));
  }, []);

  return (
    <Box overflow={"auto"} bg={"linear-gradient(to right, #d6dbdf, #ebedef)"}>
      <Box
        p={6}
        mt={6}
        bg="white"
        boxShadow="md"
        borderRadius="md"
        maxW="xl"
        mx="auto"
      >
        <Box textAlign="center">
          <Heading as={"h3"} size={"md"}>
            Transaksi PLP-23
          </Heading>
          ===================================
        </Box>
        <Table>
          <Tbody>
            <Tr>
              <Th>Member</Th>
              <Td>{data && data.member}</Td>
            </Tr>
            <Tr>
              <Th>Nama</Th>
              <Td>{data && data.nama}</Td>
            </Tr>
            <Tr>
              <Th>Alamat</Th>
              <Td>{data && data.alamat}</Td>
            </Tr>
            <Tr>
              <Th>Nomor Meteran</Th>
              <Td>{data && data.nomor_meteran}</Td>
            </Tr>
            <Tr>
              <Th>Daya</Th>
              <Td>{data && data.daya}</Td>
            </Tr>
            <Tr>
              <Th>Periode</Th>
              <Td>{data && data.periode}</Td>
            </Tr>
            <Tr>
              <Th>Status</Th>
              <Td>{data && data.status}</Td>
            </Tr>
            <Tr>
              <Th>Jatuh Tempo</Th>
              <Td>{data && data.tgl_jth_tempo}</Td>
            </Tr>
            <Tr>
              <Th>Jumlah Tagihan</Th>
              <Td>{data && data.jmlh_tagihan}</Td>
            </Tr>
          </Tbody>
        </Table>
        <Box>
          <Button w={"100%"} bg={"lightblue"} _hover={{ bg: "blue.300" }}>
            Bayar
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

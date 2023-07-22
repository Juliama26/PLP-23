import React from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Link as RouterLink,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { BsPersonAdd } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import { BiEditAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Pelanggan() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetch(" http://localhost:3000/users")
      .then((res) => res.json())
      .then((data) => setUserData(data));
  }, []);

  const deleteData = (id) => {
    fetch(`http://localhost:3000/users/${id}`, {
      method: "DELETE",
    }).then(() => {
      fetch("http://localhost:3000/users")
        .then((res) => res.json())
        .then((data) => setUserData(data));
    });
  };

  return (
    <Box bg={"linear-gradient(to right, #d6dbdf, #ebedef)"}>
      <Box w={"94%"} m={"auto"}>
        <Flex alignItems={"center"} gap={3} h={"50px"}>
          <Heading fontSize={"25px"}>Pelanggan</Heading>
          <Link to="/pelanggan/add">
            <BsPersonAdd />
          </Link>
        </Flex>
        <Table>
          <Thead>
            <Tr bg={"gray.100"}>
              <Th>No</Th>
              <Th>Member</Th>
              <Th>Nama</Th>
              <Th>Alamat</Th>
              <Th>Nomor Meteran</Th>
              <Th>Periode</Th>
              <Th>Aksi</Th>
            </Tr>
          </Thead>
          <Tbody>
            {userData.map((user, index) => (
              <Tr key={user.id}>
                <Td>{index + 1}</Td>
                <Td>{user.member}</Td>
                <Td>
                  <Link to={"/pelanggan/detail/" + user.id}>{user.nama}</Link>
                </Td>
                <Td>{user.alamat}</Td>
                <Td>{user.nomor_meteran}</Td>
                <Td>{user.periode}</Td>
                <Flex
                  h={"55px"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  gap={2}
                >
                  <Link to={"/pelanggan/edit/" + user.id}>
                    <BiEditAlt />
                  </Link>
                  <Link onClick={() => deleteData(user.id)}>
                    <MdOutlineDelete />
                  </Link>
                </Flex>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
}

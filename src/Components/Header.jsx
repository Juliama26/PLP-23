import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Box, Heading, Flex, Button, Text, HStack } from "@chakra-ui/react";
import Home from "./Home";
import Pelanggan from "./Pelanggan";
import Transaksi from "./Transaksi";
import Status from "./Status";
import AddPelanggan from "./AddPelanggan";
import EditPelanggan from "./EditPelanggan";
import Detail from "./Detail";
import { CgProfile } from "react-icons/cg";

export default function Header(props) {
  const { username, onLogout } = props;

  return (
    <>
      <Box px={10} py={5} bg={"blue.400"} color="white">
        <Flex alignItems="center" justifyContent="space-between">
          <Flex alignItems="center">
            <Heading as="h1" size="xl" mr={10}>
              PLP-23
            </Heading>
            <HStack spacing={4} fontWeight={"bold"}>
              <Link to="/" color="white">
                Home
              </Link>
              {username === "Administrator" && (
                <Link to="/pelanggan" color="white">
                  Pelanggan
                </Link>
              )}
              {username === "Administrator" && (
                <Link to="/status" color="white">
                  Status
                </Link>
              )}
              {username === "Pelanggan" && (
                <Link to="/transaksi" color="white">
                  Transaksi
                </Link>
              )}
            </HStack>
          </Flex>
          <Flex alignItems="center" fontWeight={"bold"}>
            <Flex alignItems={"center"} fontSize="xl" mr={4}>
              <CgProfile />
              {username}
            </Flex>
            <Button bg={"white"} onClick={onLogout} w="100%">
              Logout
            </Button>
          </Flex>
        </Flex>
      </Box>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/transaksi" element={<Transaksi />} />
        <Route path="/pelanggan">
          <Route index element={<Pelanggan />} />
          <Route path="/pelanggan/add" element={<AddPelanggan />} />
          <Route path="/pelanggan/edit/:id" element={<EditPelanggan />} />
          <Route path="/pelanggan/detail/:id" element={<Detail />} />
        </Route>
        <Route path="/status" element={<Status />} />
      </Routes>
    </>
  );
}

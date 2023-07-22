import React from "react";
import { useState, useEffect } from "react";
import {
  Box,
  Heading,
  Input,
  Button,
  Alert,
  AlertIcon,
  Container,
} from "@chakra-ui/react";
import Header from "./Components/Header";

function App(props) {
  const [loginID, setLoginID] = useState(false);
  const [username, setUsername] = useState(props.username || "");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");

  // mengecek localStorage saat komponen dibuat
  useEffect(() => {
    const storeUsername = localStorage.getItem("username");
    const storeLoginID = localStorage.getItem("loginID");

    // Debug menggunakan console
    // console.log("storeUsername:", storeUsername); // code ini bisa dihapus
    // console.log("storeLoginID:", storeLoginID); // code ini bisa dihapus
    // lalu klik inspec di web browser lalu klik console

    if (storeLoginID === "true" && storeUsername) {
      setUsername(storeUsername);
      setLoginID(true);
    }
  }, []);

  const handleLogin = () => {
    // melakukan validasi saat login
    if (
      (username === "Administrator" && password === "admin") ||
      (username === "Pelanggan" && password === "user")
    ) {
      // menyimpan informasi login ke dalam localStorage
      localStorage.setItem("username", username);
      localStorage.setItem("loginID", true);
      setLoginID(true);
    } else {
      setErr("Username atau Password Salah!");
      setTimeout(() => {
        setErr("");
      }, 3000);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("loginID");
    setLoginID(false);
    setUsername("");
    setPassword("");
  };

  if (loginID && username === "Administrator") {
    return (
      <>
        <Header
          onLogout={handleLogout}
          role="Administrator"
          username={username}
        />
      </>
    );
  }

  // mereturn kehalaman User
  if (loginID && username === "Pelanggan") {
    return (
      <>
        <Header onLogout={handleLogout} role="Pelanggan" username={username} />
      </>
    );
  }

  return (
    <Box
      bg={"#EEF1F5"}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <Container
        bg={"white"}
        h={"55%"}
        w={"35%"}
        rounded={5}
        p={5}
        boxShadow="lg"
      >
        <Heading as="h3" size="xl" mb={6} textAlign="center">
          PLP-23
        </Heading>
        <Input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          mb={5}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          mb={5}
        />
        {err && (
          <Alert status="error" mb={4}>
            <AlertIcon />
            {err}
          </Alert>
        )}
        <Button colorScheme="blue" onClick={handleLogin} w="100%">
          Login
        </Button>
      </Container>
    </Box>
  );
}

export default App;

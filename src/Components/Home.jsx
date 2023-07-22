import React from "react";
import { Box, Heading } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box
      h="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      bg={"linear-gradient(to right, #d6dbdf, #ebedef)"}
    >
      <Box
        textAlign="center"
        p={10}
        borderRadius="md"
        boxShadow="lg"
        w={"80%"}
        h={"80%"}
      >
        <Heading size="xl" color="gray.700" mb={4}>
          PLP-23
        </Heading>
        <Heading size="lg" color="gray.700" mb={2}>
          Tugas Praktik Demonstrasi
        </Heading>
        <Heading size="md" color="gray.500" mb={6}>
          Analis Program 2023
        </Heading>
        <Heading size="sm" color="gray.600">
          Venansia Juliama Laoli
        </Heading>
        <Heading size="sm" color="gray.600" mb={4}>
          10200108
        </Heading>
      </Box>
    </Box>
  );
}

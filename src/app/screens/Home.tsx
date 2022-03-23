import React from "react";
import { Container, Box, Link, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const HomeScreen: React.FC = () => {
  return (
    <Container minW="container.xl">
      <Box me="2">
        <Text>{`<HomeScreen />`}</Text>
        <br />
        <Link as={RouterLink} to="/product">
          Ver página de detalle de producto
        </Link>
      </Box>
    </Container>
  );
};

export default HomeScreen;

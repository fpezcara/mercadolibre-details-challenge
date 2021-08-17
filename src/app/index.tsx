import React from "react";
import {
  Container,
  Stack,
  Box,
  Icon,
  Image,
  Input,
  StackDivider,
  Text,
} from "@chakra-ui/react";

import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { GiReceiveMoney } from "react-icons/gi";
import { GoLocation } from "react-icons/go";
import { FiChevronDown } from "react-icons/fi";

import Routes from "./routes";

import logo from "../assets/logo.png";

const App: React.FC = () => {
  return (
    <Stack>
      <Box bg="primary.500" paddingY={3} boxShadow="sm">
        <Container maxWidth="container.xl">
          <Stack spacing={3}>
            <Stack direction="row" justify="space-between">
              <Stack direction="row" flex={1} spacing={12}>
                <Image objectFit="contain" src={logo} minWidth={150} />
                <Stack
                  direction="row"
                  divider={<StackDivider />}
                  align="center"
                  bg="white"
                  shadow="sm"
                  borderRadius="sm"
                  maxWidth={600}
                  w="100%"
                  padding={2}
                >
                  <Input
                    placeholder="Buscar productos, marcas y más..."
                    paddingX={2}
                    variant="unstyled"
                  />
                  <Icon as={AiOutlineSearch} w={5} h={5} color="gray.500" />
                </Stack>
              </Stack>
              <Stack direction="row" color="blackAlpha.700" fontSize="lg">
                <Icon as={GiReceiveMoney} w={6} h={6} />
                <Text>Comprá ahora y pagá después </Text>
              </Stack>
            </Stack>

            <Stack
              direction="row"
              spacing={14}
              justify="space-between"
              align="baseline"
            >
              <Stack direction="row" minWidth={150} spacing={1} align="center">
                <Icon as={GoLocation} w={6} h={6} color="blackAlpha.600" />
                <Stack spacing={0} flex={1} lineHeight={1}>
                  <Text fontSize="xs" color="blackAlpha.600">
                    Enviar a
                  </Text>
                  <Text fontSize="sm" color="blackAlpha.700">
                    Capital Federal
                  </Text>
                </Stack>
              </Stack>
              <Stack
                direction="row"
                fontSize="sm"
                color="blackAlpha.600"
                flex={1}
                spacing={5}
              >
                <Stack direction="row" spacing={1} align="end">
                  <Text>Categorías</Text>
                  <Icon as={FiChevronDown} color="blackAlpha.300" />
                </Stack>
                <Text>Ofertas</Text>
                <Text>Historial</Text>
                <Text>Supermercado</Text>
                <Text>Moda</Text>
                <Text>Vender</Text>
                <Text>Ayuda</Text>
              </Stack>
              <Stack
                direction="row"
                fontSize="sm"
                color="blackAlpha.700"
                spacing={6}
              >
                <Text>Creá tu cuenta</Text>
                <Text>Ingresá</Text>
                <Text>Mis compras</Text>
                <Icon as={AiOutlineShoppingCart} w={5} h={5} />
              </Stack>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Stack>
  );
};

export default App;

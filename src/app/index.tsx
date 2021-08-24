import React from "react";
import {
  useMediaQuery,
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

import logo from "../assets/logo.png";

import Routes from "./routes";

const App: React.FC = () => {
  const [isSmallerThan1024] = useMediaQuery("(min-width: 1024)");


  return (
    <Stack bg="blackAlpha.200">
      <Box bg="primary.500" boxShadow="sm" direction={{ base: "column", lg: "row" }} paddingY={3}>
        <Container maxWidth={{ base: "container.sm", md: "container.xl" }}>
          <Stack spacing={3}>
            <Stack direction="row" justify="space-between">
              <Stack direction="row" flex={1} spacing={12}>
                <Image minWidth={150} objectFit="contain" src={logo} />

                <Stack
                  align="center"
                  bg="white"
                  borderRadius="sm"
                  direction="row"
                  divider={<StackDivider />}
                  flex={1}
                  maxWidth={600}
                  padding={2}
                  shadow="sm"
                  w="100%"
                >
                  <Input
                    paddingX={2}
                    placeholder="Buscar productos, marcas y más..."
                    variant="unstyled"
                    // w={{ base: "100%" }}
                  />
                  <Icon as={AiOutlineSearch} color="gray.500" h={5} w={5} />
                </Stack>
              </Stack>

              <Stack
                color="blackAlpha.700"
                direction="row"
                // display={{ base: "none", lg: "inline" }}
                fontSize="lg"
              >
                <Icon as={GiReceiveMoney} h={6} w={6} />
                <Text>Comprá ahora y pagá después </Text>
              </Stack>
            </Stack>

            <Stack align="baseline" direction="row" justify="space-between" spacing={14}>
              <Stack align="center" direction="row" minWidth={150} spacing={1}>
                <Icon as={GoLocation} color="blackAlpha.600" h={6} w={6} />
                <Stack flex={1} lineHeight={1} spacing={0}>
                  <Text color="blackAlpha.600" fontSize="xs">
                    Enviar a
                  </Text>
                  <Text color="blackAlpha.700" fontSize="sm">
                    Capital Federal
                  </Text>
                </Stack>
              </Stack>
              <Stack color="blackAlpha.600" direction="row" flex={1} fontSize="sm" spacing={5}>
                <Stack align="end" direction="row" spacing={1}>
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
              <Stack color="blackAlpha.700" direction="row" fontSize="sm" spacing={6}>
                <Text>Creá tu cuenta</Text>
                <Text>Ingresá</Text>
                <Text>Mis compras</Text>
                <Icon as={AiOutlineShoppingCart} h={5} w={5} />
              </Stack>
            </Stack>
          </Stack>
        </Container>
      </Box>
      <Box>
        <Routes />
      </Box>
    </Stack>
  );
};

export default App;

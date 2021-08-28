import React from "react";
import {
  useBreakpointValue,
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
import { CgMenu } from "react-icons/cg";

import logo from "../assets/logo.png";
import responsiveLogo from "../assets/responsive_logo.png";

import Routes from "./routes";

const App: React.FC = () => {
  const displayMenu = useBreakpointValue({ base: "none", lg: "flex" });
  const displayLogo = useBreakpointValue({ base: responsiveLogo, lg: logo });

  return (
    <Stack bg="blackAlpha.200" minW={{ base: "1150" }}>
      <Box bg="primary.500" boxShadow="base" direction={{ base: "column", lg: "row" }} py="2">
        <Container minW="container.xl" px={{ md: "0", lg: 3 }}>
          <Stack
            divider={
              <StackDivider
                borderColor="blackAlpha.200"
                display={{ base: "block", lg: "none" }}
                maxW="1150"
              />
            }
          >
            <Stack align="center" direction="row" justify={{ lg: "space-between" }}>
              <Stack direction="row" mt="0" spacing={{ base: "1", lg: "12" }}>
                <Image maxW={{ base: "55", lg: "150" }} objectFit="contain" src={displayLogo} />

                <Stack
                  align="center"
                  bg="white"
                  borderRadius="sm"
                  direction={{ base: "row-reverse", lg: "row" }}
                  divider={<StackDivider d={{ base: "none", lg: "block" }} />}
                  flex={1}
                  minWidth={{ base: "1000", lg: "600" }}
                  padding={{ base: "1", lg: "1.5" }}
                  shadow="md"
                >
                  <Input
                    paddingX={2}
                    placeholder="Buscar productos, marcas y más..."
                    variant="unstyled"
                  />
                  <Icon
                    as={AiOutlineSearch}
                    boxSize={5}
                    color="blackAlpha.500"
                    margin={1}
                    viewBox={"0 0 200 200"}
                  />
                </Stack>
              </Stack>

              <Stack color="blackAlpha.700" direction="row" display={displayMenu} fontSize="lg">
                <Icon as={GiReceiveMoney} boxSize={6} />
                <Text>Comprá ahora y pagá después </Text>
              </Stack>
              <Stack direction="row" display={{ lg: "none" }} px="2" spacing={3}>
                <Icon as={CgMenu} boxSize={6} color="blackAlpha.600" />
                <Icon as={AiOutlineShoppingCart} boxSize={6} color="blackAlpha.600" />
              </Stack>
            </Stack>

            <Stack
              align="baseline"
              direction="row"
              justify="space-between"
              mt={{ base: "0", lg: "1" }}
              spacing={9}
            >
              <Stack
                align="center"
                direction="row"
                minWidth={150}
                mt={{ base: 0, lg: 2 }}
                spacing={1}
              >
                <Icon as={GoLocation} boxSize={{ base: "4", lg: "6" }} color="blackAlpha.700" />
                <Stack
                  direction={{ base: "row", lg: "column" }}
                  flex={1}
                  lineHeight={1}
                  spacing={0.5}
                >
                  <Text color="blackAlpha.700" fontSize={{ base: "13px", lg: "xs" }}>
                    Enviar a
                  </Text>
                  <Text
                    color={{ base: "blackAlpha.700", lg: "blackAlpha.900" }}
                    fontSize={{ base: "13px", lg: "sm" }}
                  >
                    Capital Federal
                  </Text>
                </Stack>
              </Stack>
              <Stack
                color="blackAlpha.600"
                direction="row"
                display={displayMenu}
                flex={1}
                fontSize="sm"
                spacing={4}
              >
                <Stack align="flex-end" direction="row" justify="center" spacing={0.5}>
                  <Text>Categorías</Text>
                  <Icon as={FiChevronDown} boxSize={4} color="blackAlpha.400" />
                </Stack>
                <Text>Ofertas</Text>
                <Text>Historial</Text>
                <Text>Supermercado</Text>
                <Text>Moda</Text>
                <Text>Vender</Text>
                <Text>Ayuda</Text>
              </Stack>
              <Stack
                color="blackAlpha.800"
                direction="row"
                display={displayMenu}
                fontSize="sm"
                spacing={5}
              >
                <Text>Creá tu cuenta</Text>
                <Text>Ingresá</Text>
                <Text>Mis compras</Text>
                <Icon as={AiOutlineShoppingCart} boxSize={5} />
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

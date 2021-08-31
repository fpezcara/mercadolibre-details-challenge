import React from "react";
import { Box, Container, Stack, StackDivider, Heading, Text } from "@chakra-ui/react";

import ButtonComponent from "../components/ButtonComponent";
import { Product } from "../types";
import mock from "../mock";
import PictureCarousel from "../components/PictureCarousel";

const DetailsScreen: React.FC<Product> = ({ product = mock.product }) => {
  const { pictures, title, price, attributes, id, currency_id, sold_quantity, descriptions } =
    product;

  return (
    <Stack minW={{ base: "1200" }}>
      <Container minW="container.xl" pe={{ base: "4" }} px={{ base: "0", lg: "2" }} py={16}>
        <Stack
          align="flex-start"
          bg="white"
          borderRadius="md"
          boxShadow="md"
          direction="row"
          justify={{ base: "flex-start" }}
          spacing={20}
        >
          <Stack
            divider={<StackDivider alignSelf="flex-end" borderColor="blackAlpha.300" w="2xl" />}
            margin={1}
          >
            <Stack direction="row" mb={4} padding={3}>
              <PictureCarousel pictures={pictures} title={title} />
            </Stack>
            <Stack>
              <Text as="p" color="blackAlpha.700" fontSize="xl">
                {descriptions[0].text}
              </Text>
            </Stack>
          </Stack>

          <Stack direction="column" p={4}>
            <Stack
              bg="white"
              borderRadius="15px"
              borderWidth="1px"
              minW="340"
              p="4"
              py="7"
              spacing="5"
            >
              <Stack spacing="2">
                <Stack
                  align="flex-end"
                  color="blackAlpha.600"
                  direction="row"
                  divider={
                    <StackDivider
                      borderColor="blackAlpha.300"
                      justify="baseline"
                      justifySelf="baseline"
                      maxH="2.5"
                    />
                  }
                  fontSize="sm"
                  fontWeight="md"
                  justify="baseline"
                  maxH="15px"
                  maxWidth="140px"
                >
                  <Text as="p">{attributes[9].value_name}</Text>
                  <Text as="p">{sold_quantity} vendidos</Text>
                </Stack>
                <Stack maxW="300">
                  <Heading as="h5" fontSize="24px">
                    {title}
                  </Heading>
                </Stack>
              </Stack>
              <Stack direction="row" fontSize="38px" fontWeight="light" m={3} spacing={3}>
                <Text as="p">
                  {price.toLocaleString("es-AR", {
                    style: "currency",
                    currency: currency_id,
                    maximumFractionDigits: 0,
                  })}
                </Text>
              </Stack>

              <Stack pt="26px">
                <ButtonComponent
                  backgroundColor="secondary.500"
                  fontColor="white"
                  message="Comprar ahora"
                />
                <ButtonComponent
                  backgroundColor="secondary.100"
                  fontColor="secondary.400"
                  message="Agregar al carrito"
                />
              </Stack>
            </Stack>
          </Stack>
        </Stack>
        <Stack />
      </Container>
    </Stack>
  );
};

export default DetailsScreen;

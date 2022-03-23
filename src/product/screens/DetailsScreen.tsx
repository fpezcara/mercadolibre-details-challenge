import React from "react";
import { Button, Container, Stack, StackDivider, Heading, Text } from "@chakra-ui/react";

import { Product } from "../types";
import mock from "../mock";
import PictureCarousel from "../components/PictureCarousel";
import QuestionsComponent from "../components/QuestionsComponent";

interface Props {
  product: Product;
}

const DetailsScreen: React.FC<Props> = ({ product = mock.product }) => {
  const { pictures, price, title, id, currency_id, sold_quantity, condition, descriptions } =
    product;

  const { text: description } = descriptions[0];

  return (
    <Stack minW={{ base: "1200" }}>
      <Container minW="container.xl" pe={{ base: "4" }} px={{ base: "0", lg: "2" }} py={16}>
        <Stack
          align="flex-start"
          bg="white"
          borderRadius="md"
          boxShadow="md"
          direction="row"
          id={id}
          justify={{ base: "flex-start" }}
        >
          <Stack
            divider={<StackDivider alignSelf="center" borderColor="blackAlpha.300" w="3xl" />}
            margin="1"
          >
            <Stack direction="row" mb="4" p="3">
              <PictureCarousel pictures={pictures} title={title} />
            </Stack>
            <Container maxW="container.xl">
              <Stack direction="column" p="5" spacing="8">
                <Stack>
                  <Text as="p" fontSize="2xl">
                    Descripción
                  </Text>
                  <Text as="p" color="blackAlpha.700" fontSize="xl">
                    {description}
                  </Text>
                </Stack>
                <Stack>
                  <QuestionsComponent />
                </Stack>
              </Stack>
            </Container>
          </Stack>

          {/* ProductDetails */}
          <Stack>
            <Stack
              bg="white"
              borderRadius="lg"
              borderWidth="1px"
              m="4"
              minW="340"
              px="4"
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
                  <Text as="p" textTransform="capitalize">
                    {condition}
                  </Text>
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
                <Button color="white" colorScheme="secondary" hover="none" size="lg">
                  Comprar ahora
                </Button>
                <Button
                  backgroundColor="secondary.100"
                  color="secondary.400"
                  hover="none"
                  size="lg"
                  variant="solid"
                >
                  Agregar al carrito
                </Button>
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

import React from "react";
import {
  useBreakpointValue,
  Box,
  Container,
  Stack,
  StackDivider,
  Heading,
  Text,
} from "@chakra-ui/react";

import { Product } from "../types";
import mock from "../mock";
import PictureCarousel from "../components/PictureCarousel";

const DetailsScreen: React.FC<Product> = ({ product = mock.product }) => {
  const { pictures, title, base_price, condition, id, currency_id } = product;

  const useResponsive = (value: string, value_?: string) => {
    return useBreakpointValue({ md: value, lg: value_ });
  };

  return (
    <Stack minW={{ base: "1100" }}>
      <Container minW="container.xl" px={{ base: "0", lg: "4" }} py={16}>
        <Stack
          align="flex-start"
          bg="white"
          borderRadius="md"
          boxShadow="md"
          direction="row"
          justify={{ base: "flex-end" }}
          mx={{ md: "0" }}
        >
          <Stack
            divider={<StackDivider alignSelf="center" borderColor="blackAlpha.300" w="2xl" />}
            // margin={1}
          >
            <Stack direction="row" mb={4} padding={3}>
              <PictureCarousel pictures={pictures} title={title} />
            </Stack>
          </Stack>
          <Stack p={4}>
            <Stack bg="white" borderRadius="2px" borderWidth="1px">
              <Heading as="h4" fontSize="2xl">
                {title}
              </Heading>
              <Text fontSize="3xl">{base_price}</Text>
            </Stack>
          </Stack>
        </Stack>
        <Stack />
      </Container>
    </Stack>
  );
};

export default DetailsScreen;

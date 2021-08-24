import React from "react";
import { Box, Container, Stack, StackDivider } from "@chakra-ui/react";

import { Product } from "../types";
import mock from "../mock";
import PictureCarousel from "../components/PictureCarousel";

const DetailsScreen: React.FC<Product> = ({ product = mock.product }) => {
  const { pictures, title } = product;

  return (
    <Container maxWidth="container.xl">
      <Stack align="flex-start" justify="space-around" paddingY={16}>
        <Box bg="white" borderRadius="md" shadow="md">
          <Stack
            divider={<StackDivider alignSelf="center" borderColor="blackAlpha.300" w="2xl" />}
            margin={1}
          >
            <Stack direction="row" mb={4} padding={3}>
              <PictureCarousel pictures={pictures} title={title} />
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};

export default DetailsScreen;

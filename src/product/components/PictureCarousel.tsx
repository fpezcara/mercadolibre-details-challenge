import React, { useState } from "react";
import { Image, Container, Stack } from "@chakra-ui/react";

import { ProductPicture } from "../types";



interface Props {
  pictures: ProductPicture[];
  title: string;
}
const PictureCarousel: React.FC<Props> = ({ pictures, title }) => {
  const [selectedPicture, setSelectedPicture] = useState<ProductPicture>({
    id: pictures[0].id,
    url: pictures[0].url,
  });


  return (
    <Container margin={0} maxW="container.xl" padding={0}>
      <Stack direction="row" spacing={14}>
        <Stack align="flex-start">
          {pictures.map(({ id, url }: ProductPicture) => (
            <Stack
              key={id}
              bg={id === selectedPicture.id ? "gray.100" : "whiteAlpha.100"}
              borderColor={id === selectedPicture.id ? "#3483fa" : "blackAlpha.500"}
              borderRadius={3}
              borderWidth={id === selectedPicture.id ? "2px" : "1px"}
              padding="1px"
              width={50}
            >
              <Image
                key={id}
                align="center"
                alt={title}
                boxSize="50px"
                objectFit="contain"
                src={url}
                onClick={() => setSelectedPicture({ id, url })}
              />
            </Stack>
          ))}
        </Stack>
        <Stack>
          <Stack align="center" d="flex" justify="center" minH={450} minW={600} mt={8} p={0}>
            <Image
              key={selectedPicture.id}
              align="center"
              alt={title}
              boxSize="md"
              objectFit="contain"
              src={selectedPicture.url}
              w="100%"
            />
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};

export default PictureCarousel;

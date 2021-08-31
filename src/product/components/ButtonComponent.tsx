import React from "react";
import { Button } from "@chakra-ui/react";

interface Props {
  message: string;
  backgroundColor: string;
  fontColor?: string;
}

const ButtonComponent: React.FC<Props> = ({ message, backgroundColor, fontColor }) => {
  return (
    <Button bg={backgroundColor} boxShadow="md" color={fontColor} paddingY="25">
      {message}
    </Button>
  );
};

export default ButtonComponent;

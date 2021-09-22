import React, { useState } from "react";
import { Stack, Text, Input, Button, FormControl, FormLabel } from "@chakra-ui/react";

import { Question, State } from "../types";

const QuestionsComponent: React.FC = () => {
  const [question, setQuestion] = useState<Question>({ id: "", text: "" });
  const [questions, setQuestions] = useState<State["questions"]>([]);
  const handleChange = () => {
    setQuestions([...questions, question]);
  };

  console.log(questions);

  return (
    <Stack>
      <Text as="p" fontSize="2xl">
        Preguntas y respuestas
      </Text>
      <Text as="p" fontSize="xl">
        ¿Qué querés saber?
      </Text>
      <Text as="p" fontSize="xl" />
      <Stack align="center" justify="center">
        <FormControl id="question">
          <FormLabel>Preguntale al vendedor</FormLabel>
          <Stack direction="row" justify="space-between">
            <Input
              boxShadow="sm"
              flex="1"
              marginRight="3"
              minWidth="500"
              p="4"
              placeholder="Escribí tu pregunta..."
              size="lg"
              type="text"
              variant="outline"
              onChange={(e) =>
                setQuestion({ id: (Math.random() * 3).toString(), text: e.target.value })
              }
            />
            <Button colorScheme="secondary" px="12" size="lg" onClick={handleChange}>
              Preguntar
            </Button>
          </Stack>
        </FormControl>
      </Stack>
    </Stack>
  );
};

export default QuestionsComponent;

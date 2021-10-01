import React, { useState } from "react";
import { Stack, Text, Input, Button, FormControl, FormLabel } from "@chakra-ui/react";

import { Question, State } from "./types";

const QuestionsComponent: React.FC = () => {
  const [newQuestion, setNewQuestion] = useState<Question>({ id: "", text: "" });
  const [questions, setQuestions] = useState<State["questions"]>([]);

  const handleClick = () => {
    setQuestions(newQuestion.text !== "" ? [...questions, newQuestion] : questions);
    setNewQuestion({ id: "", text: "" });
  };

  return (
    <Stack spacing="4">
      <Stack spacing="8">
        <Text as="p" fontSize="2xl">
          Preguntas y respuestas
        </Text>
        <Text as="p" fontSize="xl">
          ¿Qué querés saber?
        </Text>
        <Text as="p" fontSize="xl" />
      </Stack>
      <FormControl id="question" pb="4">
        <FormLabel fontSize="lg">Preguntale al vendedor</FormLabel>
        <Stack direction="row" justify="space-between" pt="2">
          <Input
            boxShadow="sm"
            flex="1"
            marginRight="3"
            minWidth="500"
            p="4"
            placeholder="Escribí tu pregunta..."
            size="lg"
            type="text"
            value={newQuestion.text}
            variant="outline"
            onChange={(e) =>
              setNewQuestion({
                id: Math.round(Math.random() * 55632513.66).toString(),
                text: e.target.value,
              })
            }
          />
          <Button colorScheme="secondary" px="12" size="lg" onClick={handleClick}>
            Preguntar
          </Button>
        </Stack>
      </FormControl>
      <Stack pl="1" pt="1">
        {questions.length ? (
          <Stack spacing="8">
            <Text as="p" fontSize="lg" fontWeight="800">
              Últimas realizadas
            </Text>
            {questions.map((question: Question) => (
              <Text key={question.id} as="p" fontSize="md">
                {question.text}
              </Text>
            ))}
          </Stack>
        ) : (
          <Stack align="center" color="blackAlpha.600" direction="row" spacing="1">
            <Text as="p" fontSize="md" fontWeight="700">
              Nadie hizo preguntas todavía.
            </Text>
            <Text as="p" fontSize="sm">
              ¡Hacé la primera!
            </Text>
          </Stack>
        )}
      </Stack>
    </Stack>
  );
};

export default QuestionsComponent;

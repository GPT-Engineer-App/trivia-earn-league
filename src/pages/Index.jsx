// Complete the Index page component here
// Use chakra-ui
import { Box, Button, Container, Heading, Text, VStack, Image, SimpleGrid, useToast } from "@chakra-ui/react";
import { FaTrophy, FaQuestionCircle, FaCoins } from "react-icons/fa";

const Index = () => {
  const toast = useToast();

  const handleJoinGame = () => {
    // This function would ideally handle the logic to join a game, including payment processing
    toast({
      title: "Joining Game",
      description: "You are being redirected to the payment gateway...",
      status: "info",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="container.xl" p={5}>
      <VStack spacing={5}>
        <Heading as="h1" size="2xl" textAlign="center">
          Sports Trivia Challenge
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Participate in thrilling sports trivia and earn cash prizes!
        </Text>
        <Image src="https://images.unsplash.com/photo-1599474924187-334a4ae5bd3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjB0cml2aWF8ZW58MHx8fHwxNzE0NDA5ODIzfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Sports Trivia" borderRadius="md" />
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} py={5}>
          <Box textAlign="center">
            <FaQuestionCircle size="3em" />
            <Heading size="md" pt={3}>
              Trivia Contests
            </Heading>
            <Text>Join ongoing sports trivia contests and test your knowledge.</Text>
          </Box>
          <Box textAlign="center">
            <FaCoins size="3em" />
            <Heading size="md" pt={3}>
              Play to Earn
            </Heading>
            <Text>Pay an entry fee, answer questions correctly, and win cash prizes.</Text>
          </Box>
          <Box textAlign="center">
            <FaTrophy size="3em" />
            <Heading size="md" pt={3}>
              Win Prizes
            </Heading>
            <Text>Top scorers in each contest win a share of the prize pool.</Text>
          </Box>
        </SimpleGrid>
        <Button colorScheme="teal" size="lg" leftIcon={<FaTrophy />} onClick={handleJoinGame}>
          Join a Game
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;

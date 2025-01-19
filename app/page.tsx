import { Box, Text, Circle, Square, Card, Button } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100vh" background="orange.100">
      <Text as="h1" fontSize="4xl" fontWeight="bold" justifySelf="flex-start" mb={50}>Next & Chakra UI Template</Text>
      <Box display="flex" flexDirection="row" alignItems="center" justifyContent="center" gap="10px">

        <Circle size="100px" bg="blue.500" />
        <Square size="100px" bg="red.500" />

        <Card.Root width="320px">
          <Card.Body gap="2">
            <Card.Title mt="2">Nue Camp</Card.Title>
            <Card.Description>
              This is the card body. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Curabitur nec odio vel dui euismod fermentum.
              Curabitur nec odio vel dui euismod fermentum.
            </Card.Description>
          </Card.Body>
          <Card.Footer justifyContent="flex-end">
            <Button variant="outline">View</Button>
            <Button>Join</Button>
          </Card.Footer>
        </Card.Root>
      </Box>

    </Box>
  )
}
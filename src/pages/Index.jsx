import { Box, Flex, Text, VStack, Button, Input, Textarea } from '@chakra-ui/react';
import { FaCalendarAlt, FaEnvelope, FaMusic } from 'react-icons/fa';

const Index = () => {
  return (
    <VStack spacing={10} p={5}>
      <Box p={5} shadow="md" borderWidth="1px">
        <Flex alignItems="center" gap="2">
          <FaMusic />
          <Text fontSize="2xl" fontWeight="bold">Band Bio</Text>
        </Flex>
        <Text mt={4}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
      </Box>

      <Box p={5} shadow="md" borderWidth="1px">
        <Flex alignItems="center" gap="2">
          <FaCalendarAlt />
          <Text fontSize="2xl" fontWeight="bold">Tour Dates</Text>
        </Flex>
        <Text mt={4}>Check out our tour dates below:</Text>
        <ul>
          <li>City A - Date A</li>
          <li>City B - Date B</li>
          <li>City C - Date C</li>
        </ul>
      </Box>

      <Box p={5} shadow="md" borderWidth="1px">
        <Flex alignItems="center" gap="2">
          <FaEnvelope />
          <Text fontSize="2xl" fontWeight="bold">Contact Us</Text>
        </Flex>
        <VStack spacing={3} mt={4}>
          <Input placeholder="Your Name" />
          <Input placeholder="Your Email" />
          <Textarea placeholder="Your Message" />
          <Button colorScheme="blue">Send Message</Button>
        </VStack>
      </Box>
    </VStack>
  );
};

export default Index;
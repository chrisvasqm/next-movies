import { Flex, Heading } from '@radix-ui/themes';

export default function Home() {
  return (
    <main>
      <Flex style={{ height: "100vh" }} justify={'center'} align={'center'}>
        <Heading as='h1'>Home page</Heading>
      </Flex>
    </main>
  );
}

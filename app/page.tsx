import { Flex, Heading } from '@radix-ui/themes';

export default function Home() {
  return (
    <main>
        <Flex style={{ height: "90vh" }} justify={'center'} align={'center'}>
          <Heading as='h1'>Home page</Heading>
        </Flex>
    </main>
  );
}

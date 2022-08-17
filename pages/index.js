import Head from 'next/head'
import styles from '../styles/Home.module.css'
//単独
import { Image, Box, Button, Link, Checkbox, Select } from '@chakra-ui/react'
//セット
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'

import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react'

export default function Home() {
  return (
    <div className={styles.container}>
      <Box boxSize='sm'>
        <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
      </Box>
      <Tabs variant='soft-rounded' colorScheme='green' align= 'center'>
        <TabList>
          <Tab>buy</Tab>
          <Tab>sell</Tab>
        </TabList>
        <NumberInput>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <Select placeholder='All country currency'>
          <option value='option1'>a</option>
          <option value='option2'>Option 2</option>
          <option value='option3'>Option 3</option>
        </Select>
        <Select placeholder='All country'>
          <option value='option1'>Option 1</option>
          <option value='option2'>Option 2</option>
          <option value='option3'>Option 3</option>
        </Select>
        
        <Checkbox defaultChecked>Checkbox</Checkbox><br></br>
        <Checkbox defaultChecked>Checkbox</Checkbox><br></br>
        <Checkbox defaultChecked>Checkbox</Checkbox>
        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>

      <TableContainer>
        <Table variant='simple'>
          <TableCaption>Imperial to metric conversion factors</TableCaption>
          <Thead>
            <Tr>
              <Th>seller</Th>
              <Th>price</Th>
              <Th>limit</Th>
              <Th>action</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td><Link href='https://chakra-ui.com' isExternal color='teal.500'>alice</Link></Td>
              <Td>100</Td>
              <Td>10000</Td>
              <Td><Button colorScheme='blue'>buy</Button></Td>
            </Tr>
            <Tr>
              <Td>feet</Td>
              <Td>centimetres (cm)</Td>
              <Td isNumeric>30.48</Td>
            </Tr>
            <Tr>
              <Td>yards</Td>
              <Td>metres (m)</Td>
              <Td isNumeric>0.91444</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>

      
    </div>
  )
}

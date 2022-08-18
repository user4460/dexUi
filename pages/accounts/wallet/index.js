import { Input, Button, Link, Textarea } from '@chakra-ui/react'

//tab
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

import {
   NumberInput,
   NumberInputField,
   NumberInputStepper,
   NumberIncrementStepper,
   NumberDecrementStepper,
} from '@chakra-ui/react'

export default function Wallet() {
   return (
      <>
         <Tabs>
            <TabList>
               <Tab>One</Tab>
               <Tab>Two</Tab>
               <Tab>Three</Tab>
            </TabList>

            <TabPanels>
               <TabPanel>
                  <p>one!</p>
               </TabPanel>
               <TabPanel>
                  <p>two!</p>
               </TabPanel>
               <TabPanel>
                  <p>three!</p>
               </TabPanel>
            </TabPanels>
         </Tabs>

         <p>Amount to send</p>
         <NumberInput>
            <NumberInputField />
            <NumberInputStepper>
               <NumberIncrementStepper />
               <NumberDecrementStepper />
            </NumberInputStepper>
         </NumberInput>

         <p>Receiving address</p>
         <Input placeholder='Basic usage' />

         <p>Description</p>
         <Textarea placeholder='Here is a sample placeholder' />

         
      </>
   )
}
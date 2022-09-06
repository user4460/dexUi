//walletのページ、コインの残高等
//ウォレットの残高をデータベースに保存するので、
//結局apiで取得は必要になる、ethereumのノードからデータを
//スマートコントラクトは描かなくていいが
//webウォレットと同じ形、blockchain.comと同様
//ethersJsを使う形になる

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
               <Tab>Sends</Tab>
               <Tab>Receive</Tab>
               <Tab>Transaction history</Tab>
            </TabList>

            <TabPanels>
               <TabPanel>

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

                  <Button variantColor='teal' mt={4}> Send </Button>

               </TabPanel>
               <TabPanel>
                  <p>two!</p>
               </TabPanel>
               <TabPanel>
                  <p>three!</p>
               </TabPanel>
            </TabPanels>
         </Tabs>

      </>
   )
}
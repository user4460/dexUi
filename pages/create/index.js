//取引を作成する、ページ、広告なども、
//掲示板機能のオファーみたいなもの
//loginした人だけのバリデートを入れる
//技術スタックも記載する
//front,nextTs,back,nestPrで作る
//reactnative検討,expoで作る
import { Checkbox, Stack, Input, Select, Textarea, Text } from "@chakra-ui/react"
import { useState } from "react"
import { React } from "react"

import {
   NumberInput,
   NumberInputField,
   NumberInputStepper,
   NumberIncrementStepper,
   NumberDecrementStepper,
} from '@chakra-ui/react'

export default function create() {
   const [checkedItems, setCheckedItems] = useState([false, false])

   const allChecked = checkedItems.every(Boolean)
   const isIndeterminate = checkedItems.some(Boolean) && !allChecked

   return (
      <>
         
         <Text noOfLines={1}>
            Advertisement rules and requirements
         </Text>
         <Text noOfLines={[1, 2, 3]}>
            For your ads to display you need to have Bitcoins in your LocalBitcoins wallet.
            The advertiser pays the service fee. The user who posts an ad is charged 1% of the total trade volume for each completed trade.
            Once a trade is opened the price is final, except when there is a clear mistake in the pricing.
            You are not allowed to buy or sell Bitcoin on behalf of someone else (brokering).
            You may only send and receive payment using accounts that are registered in your own name. Third party payments are not allowed.
            You must provide your payment details in the advertisement or in the trade chat.
            All communication must happen on LocalBitcoins.com.
            Payment methods marked High Risk have a significant risk of fraud. Be careful and always ID verify your trading partners when using high risk payment methods.
         </Text>

         <Checkbox
            isChecked={allChecked}
            isIndeterminate={isIndeterminate}
            onChange={(e) => setCheckedItems([e.target.checked, e.target.checked])}
         >
            Parent Checkbox
         </Checkbox>
         <Stack pl={6} mt={1} spacing={1}>
            <Checkbox
               isChecked={checkedItems[0]}
               onChange={(e) => setCheckedItems([e.target.checked, checkedItems[1]])}
            >
               Child Checkbox 1
            </Checkbox>
            <Checkbox
               isChecked={checkedItems[1]}
               onChange={(e) => setCheckedItems([checkedItems[0], e.target.checked])}
            >
               Child Checkbox 2
            </Checkbox>
         </Stack>

         <Input placeholder='Basic usage' />
         <Select placeholder='Select option'>
            <option value='option1'>Option 1</option>
            <option value='option2'>Option 2</option>
            <option value='option3'>Option 3</option>
         </Select>

         <Textarea placeholder='Here is a sample placeholder' />

         <NumberInput>
            <NumberInputField />
            <NumberInputStepper>
               <NumberIncrementStepper />
               <NumberDecrementStepper />
            </NumberInputStepper>
         </NumberInput>

         <Input placeholder='Basic usage' />
         <Input placeholder='Basic usage' />
         <Input placeholder='Basic usage' />
         <Input placeholder='Basic usage' />
         <Input placeholder='Basic usage' />
         <Input placeholder='Basic usage' />
         <Input placeholder='Basic usage' />
         <Input placeholder='Basic usage' />
         <Input placeholder='Basic usage' />



      </>
   )
}

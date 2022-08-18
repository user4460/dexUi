import { Checkbox, Stack, Input, Select, Textarea } from "@chakra-ui/react"
import { useState } from "react"
import { React  } from "react"

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

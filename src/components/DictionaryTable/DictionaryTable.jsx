import TableRow from "./TableRow/TableRow"
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th
} from '@chakra-ui/react'

export default function dictionaryTable({dictionary}) {
  return (
    <Table size='lg' variant='striped'>
        <Thead>
            <Tr>
                <Th textAlign='center' fontSize="xl">Слово</Th>
                <Th textAlign='center' fontSize="xl">Переклад</Th>
            </Tr>
        </Thead>
        <Tbody>
            {dictionary.map(word => <TableRow key={word.id} element={word} />)}
        </Tbody>
    </Table>
  )
}

import { TableRow } from './TableRow'
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th
} from '@chakra-ui/react'

export function DictionaryTable({dictionary}) {
    return (
        <Table size='lg' variant='striped'>
            <Thead>
                <Tr>
                    <Th textAlign='center' fontSize="xl">Слово</Th>
                    <Th textAlign='center' fontSize="xl">Переклад</Th>
                </Tr>
            </Thead>
            <Tbody>
                {dictionary.map(({id, word, translate}) => <TableRow key={id} word={word} translate={translate} />)}
            </Tbody>
        </Table>
    )
}

import TableRow from "./TableRow/TableRow"

export default function dictionaryTable({dictionary}) {
  return (
    <table>
        <thead>
            <tr>
                <th>Слово</th>
                <th>Переклад</th>
            </tr>
        </thead>
        <tbody>
            {dictionary.map(word => <TableRow key={word.id} element={word} />)}
        </tbody>
    </table>
  )
}

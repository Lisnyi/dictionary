export default function TableRow({element}) {
    const {word, translate} = element
    
    return (
        <tr>
            <td>{word}</td>
            <td>{translate}</td>
        </tr>
    )
}

export default function RowCustome({index, value}:{index: number; value: string}) {
    return (
        <tr>
            <td>{index}</td>
            <td>{value}</td>
        </tr>
    )
}
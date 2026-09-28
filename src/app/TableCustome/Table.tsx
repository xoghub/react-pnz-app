import RowCustome from './Row';

export default function TableCustome() {
    return (
        <table border={1}>
            <tbody>
                <RowCustome index={1} value='Satu'></RowCustome>
                <RowCustome index={2} value='Dua'></RowCustome>
                <RowCustome index={3} value='Tiga'></RowCustome>
            </tbody>
        </table>
    )
}
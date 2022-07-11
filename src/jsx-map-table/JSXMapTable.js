import data from './data/products.json';
import './MapDemo.css';
import useLog from '../hooks/useLog';

function JSXMapTable() {
    useLog('abc');
    return (
        <table id="products">
            <thead>
                <tr>
                    <th>name</th>
                    <th>pic</th>
                    <th>price</th>
                    <th>stock</th>
                    <th>tags</th>
                </tr>
            </thead>
            <tbody>
                {data.map((v, i) => {
                    return (
                        <tr key={v.id}>
                            <td>{v.name}</td>
                            <td>
                                <img src={v.picture} alt="pic" />
                            </td>
                            <td>{v.stock}</td>
                            <td>{v.price}</td>
                            <td>{v.tags}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

export default JSXMapTable;

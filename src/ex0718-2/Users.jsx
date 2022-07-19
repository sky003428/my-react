import axios from 'axios';
import { Fragment, useEffect, useState } from 'react';

function Users() {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchWords, setSearchWords] = useState('');

    const [rawData, setRawData] = useState([]);
    const [searchData, setSearchData] = useState([]);

    const getData = async () => {
        try {
            const r = await axios.get(
                'https://my-json-server.typicode.com/eyesofkids/json-fake-data/users'
            );
            console.log(r);

            setUsers(r.data);
            setRawData(r.data);
        } catch (error) {
            throw new Error(error);
        }
    };

    useEffect(() => {
        setIsLoading(true);
        getData();
        setTimeout(() => {
            setIsLoading();
        }, 1000);
    }, []);

    const loading = (
        <>
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden"></span>
            </div>
        </>
    );

    const table = (
        <>
            <table>
                <tbody>
                    {users.map((v, i) => {
                        return (
                            <tr key={v.id}>
                                <td>ID:{v.id}</td>
                                <td>{v.name}</td>
                                <td>{v.birth}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );

    function search(val) {
        setUsers(rawData);
        if (val) {
            setUsers((pre) => pre.filter((v) => v.name.includes(val)));
        }
        console.log(val);
    }

    return (
        <Fragment>
            <h2>User 資料</h2>
            <input
                type="text"
                value={searchWords}
                onChange={(e) => {
                    setSearchWords(e.target.value);

                    search(e.target.value);
                }}
            />
            <button onClick={() => search(searchWords)}>搜尋</button>
            {isLoading ? loading : table}
        </Fragment>
    );
}

export default Users;

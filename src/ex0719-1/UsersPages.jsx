import axios from 'axios';
import { Fragment, useEffect, useState, useMemo } from 'react';

function UsersPages() {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchWords, setSearchWords] = useState('');

    const [rawData, setRawData] = useState([]);
    const [searchData, setSearchData] = useState([]);

    const perPage = 5;
    const totalPage = useMemo(() => Math.ceil(users.length / perPage), [users]);
    const [nowPage, setNowPage] = useState(1);

    useEffect(() => {
        setIsLoading(true);
        getData();
        setTimeout(() => {
            setIsLoading();
        }, 500);
    }, []);

    const showData = useMemo(() => {
        console.log('users');
        console.log(perPage * nowPage);

        return users.filter((v, i) => {
            return i < perPage * nowPage && i >= perPage * (nowPage - 1);
        });
    }, [nowPage, users]);

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
                    {showData.map((v, i) => {
                        return (
                            <tr key={i}>
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
        setNowPage(1);
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
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item">
                        <a
                            className="page-link"
                            href="#/"
                            onClick={() => {
                                if (nowPage > 1) {
                                    setNowPage(nowPage - 1);
                                }
                            }}
                        >
                            Previous
                        </a>
                    </li>

                    {Array(totalPage)
                        .fill(1)
                        .map((v, i) => {
                            return (
                                <li className="page-item" key={i}>
                                    <a
                                        className="page-link"
                                        href="#/"
                                        onClick={(e) => {
                                            setNowPage(i + 1);
                                        }}
                                    >
                                        {i + 1}
                                    </a>
                                </li>
                            );
                        })}
                    <li className="page-item">
                        <a
                            className="page-link"
                            href="#/"
                            onClick={() => {
                                if (nowPage < totalPage) {
                                    setNowPage(nowPage + 1);
                                }
                            }}
                        >
                            Next
                        </a>
                    </li>
                </ul>
            </nav>
            {isLoading ? loading : table}
        </Fragment>
    );
}

export default UsersPages;

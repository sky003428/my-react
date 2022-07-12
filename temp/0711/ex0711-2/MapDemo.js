import { Fragment, useState, useEffect } from 'react';
// import { data } from './data/student';
import data from './data/student.json';

function MapDemo() {
    const [student, setStudent] = useState(data);
    // const student = data;

    const [sortMethod, setSortMethod] = useState('');

    function sorting(event) {
        const newArr = [...student];
        // console.log(student);
        if (event.target.value === 'DESC') {
            newArr.sort((a, b) => {
                return b.id - a.id;
            });
        } else if (event.target.value === 'ASC') {
            newArr.sort((a, b) => {
                return a.id - b.id;
            });
        }
        setStudent(newArr);
        // setSortMethod(event.target.value);
    }

    // useEffect(() => {
    //     if (sortMethod === 'ASC') {
    //         setStudent((pre) => {
    //             return [...pre].sort((a, b) => {
    //                 return a.id - b.id;
    //             });
    //         });
    //     } else if (sortMethod === 'DESC') {
    //         setStudent((pre) => {
    //             return [...pre].sort((a, b) => {
    //                 return b.id - a.id;
    //             });
    //         });
    //     }
    // }, [sortMethod]);

    return (
        <>
            <h1>Map Demo</h1>
            <select onChange={(event) => sorting(event)} value={sortMethod}>
                <option value={''} disabled>
                    請選擇
                </option>
                <option value={'ASC'}>id小到大</option>
                <option value={'DESC'}>id大到小</option>
            </select>
            <div>
                {student.map((v, i) => {
                    return (
                        <Fragment key={v.id}>
                            <h2>ID:{v.id}</h2>
                            <p>{v.name}</p>
                        </Fragment>
                    );
                })}
            </div>
        </>
    );
}

export default MapDemo;

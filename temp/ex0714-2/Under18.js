import React, { useState, useMemo } from 'react';
function Under18() {
    const yearOption = [];
    for (let i = 2020; i >= 1920; i--) {
        yearOption.push(i);
    }
    const monthOption = [];
    for (let i = 1; i <= 12; i++) {
        monthOption.push(i);
    }

    const [year, setYear] = useState(1999);
    const [month, setMonth] = useState(1);
    const [day, setDay] = useState(15);

    const date = useMemo(() => {
        if (year && month) {
            const arr = [];
            const maxDay = new Date(year, month, 0).getDate();

            for (let i = 1; i <= maxDay; i++) {
                arr.push(i);
            }
            return arr;
        } else {
            return [];
        }
    }, [year, month]);

    function isAge() {
        if (year && month && day) {
            const timeStamp = new Date(year, month - 1, day).getTime();
            const now = new Date().getTime();

            console.log(now - timeStamp);

            if (now - timeStamp > 568036800000) {
                alert('已滿18');
            } else {
                alert('未滿18!!!');
            }
        } else {
            alert('請輸入生日');
        }
    }

    return (
        <>
        
            <div>
                <select
                    value={year}
                    onChange={(e) => {
                        setYear(e.target.value);
                    }}
                >
                    <option value={''} disabled>
                        請選擇
                    </option>

                    {yearOption.map((v, i) => {
                        return (
                            <option key={i} value={v}>
                                {v}
                            </option>
                        );
                    })}
                </select>
                <label>年</label>
            </div>
            <div>
                <select
                    value={month}
                    onChange={(e) => {
                        setMonth(e.target.value);
                    }}
                >
                    <option value={''} disabled>
                        請選擇
                    </option>

                    {monthOption.map((v, i) => {
                        return (
                            <option key={i} value={v}>
                                {v}
                            </option>
                        );
                    })}
                </select>
                <label>月</label>
            </div>
            <div>
                <select
                    value={day}
                    onChange={(e) => {
                        setDay(e.target.value);
                    }}
                >
                    <option value={''} disabled>
                        請選擇
                    </option>

                    {date.map((v, i) => {
                        return (
                            <option key={i} value={v}>
                                {v}
                            </option>
                        );
                    })}
                </select>
                <label>日</label>
            </div>
            <button onClick={isAge}>判斷</button>
        </>
    );
}

export default Under18;

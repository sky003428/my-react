import { useState, useMemo } from 'react';

function BMICal() {
    const [height, setHeight] = useState(0);
    const [weight, setWeight] = useState(0);
    const bmi = useMemo(() => {
        if (height && weight) {
            return weight / Math.pow(height / 100, 2);
        } else {
            return 0;
        }
    }, [height, weight]);

    return (
        <>
            <h2>BMI計算機</h2>
            <label>身高(公分)</label>
            <input
                type="number"
                value={height}
                onChange={(e) => {
                    setHeight(+e.target.value);
                }}
            />
            <label>體重(公斤)</label>
            <input
                type="number"
                value={weight}
                onChange={(e) => {
                    setWeight(+e.target.value);
                }}
            />
            <p style={{ color: bmi > 24 ? 'red' : '' }}>
                BMI值是{bmi > 0 ? bmi.toFixed(1) : ''}
            </p>
        </>
    );
}

export default BMICal;

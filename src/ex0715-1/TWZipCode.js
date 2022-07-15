import React, { useState } from 'react';
import { countries, townships, postcodes } from './data/townships';

function TWZipCode() {
    const [countryInd, setCountryInd] = useState(-1);
    const [dist, setDist] = useState(-1);

    return (
        <>
            <select
                value={countryInd}
                onChange={(e) => {
                    setCountryInd(+e.target.value);
                    setDist(-1);
                }}
            >
                <option value="-1">請選擇縣市</option>
                {countries.map((v, i) => {
                    return (
                        <option key={i} value={i}>
                            {v}
                        </option>
                    );
                })}
            </select>
            <select
                value={dist}
                onChange={(e) => {
                    setDist(+e.target.value);
                }}
            >
                <option value="-1">請選擇區域</option>
                {countryInd > -1 &&
                    townships[countryInd].map((v, i) => {
                        return (
                            <option key={i} value={i}>
                                {v}
                            </option>
                        );
                    })}
            </select>
            <p>
                郵遞區號:
                {countryInd > -1 && dist && -1 && postcodes[countryInd][dist]}
            </p>
        </>
    );
}
export default TWZipCode;

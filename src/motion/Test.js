import { motion } from 'framer-motion';
import { useState, useCallback } from 'react';

function Test() {
    const [animateObj, setAnimateObj] = useState({ scale: 1 });
    const [isShow, setIsShow] = useState(false);

    const add = useCallback(() => {
        setAnimateObj({ ...animateObj, scale: animateObj.scale + 1 });
    }, [animateObj]);

    // function oriAdd() {
    //     setAnimateObj({ ...animateObj, scale: animateObj.scale + 1 });
    // }

    // const num = useMemo(() => {
    //     return { ...animateObj, scale: animateObj.scale + 1 };
    // }, [animateObj]);
    const variants = {
        hidden: { opacity: 0.3 },
        visible: { opacity: 1 },
    };

    return (
        <>
            <motion.div
                onClick={add}
                initial="hidden"
                style={{
                    width: '100px',
                    height: '100px',
                    backgroundColor: '#ccc',
                }}
                animate={animateObj}
            />
            <motion.div
                style={{
                    width: '100px',
                    height: '100px',
                    backgroundColor: '#faa',
                }}
                onClick={() => {
                    setIsShow(!isShow);
                }}
                initial="hidden"
                animate={isShow ? 'visible' : 'hidden'}
                variants={variants}
            />
            <motion.div
                drag="x"
                dragConstraints={{ left: -50, right: 100 }}
                style={{
                    width: '100px',
                    height: '100px',
                    backgroundColor: '#faa',
                }}
                whileTap={{ scale: 0.9 }}
            />
        </>
    );
}
export default Test;

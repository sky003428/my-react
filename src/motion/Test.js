import { motion } from 'framer-motion';
import { useState, useCallback, useRef } from 'react';
import './test.css';

function Test() {
    const [animateObj, setAnimateObj] = useState({ scale: 1 });
    const [isShow, setIsShow] = useState(false);
    const constraintsRef = useRef(null);
    const [customCursor, setCustomCursor] = useState('grab');

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
        <div>
            {/* 每點一次scale+1 */}
            <motion.div
                className="mr-auto"
                onClick={add}
                initial="hidden"
                style={{
                    width: '100px',
                    height: '100px',
                    backgroundColor: '#ccc',
                }}
                animate={animateObj}
            />
            {/* opacity toggle */}
            <motion.div
                className="mr-auto"
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
                drag
                className="drag-wrap mr-auto d-flex d-justify-contents d-align-items"
                ref={constraintsRef}
            >
                <motion.div
                    drag
                    dragConstraints={constraintsRef}
                    dragMomentum={false}
                    style={{
                        // width: '200px',
                        height: '100%',
                        backgroundPosition: 'center center',
                        aspectRatio: 'auto 650 / 433',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        cursor: `${customCursor}`,

                        backgroundImage:
                            'url("https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcTGuOfiL1QqUzx0LbryIwaK5OM38J7JxL3RbAIO2SBfg63s8o7DjxiriaSrnc64tAN3QBu8FeuJztoWqdbLChI")',
                    }}
                    whileTap={{ opacity: 0.8 }}
                    transition={{ delay: 1 }}
                    onMouseDown={() => {
                        setCustomCursor('grabbing');
                        console.log('md');
                    }}
                    onMouseUp={() => {
                        setCustomCursor('grab');
                        console.log('mu');
                    }}
                >
                    {customCursor}
                </motion.div>
            </motion.div>
        </div>
    );
}
export default Test;

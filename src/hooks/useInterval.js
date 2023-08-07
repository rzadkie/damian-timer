import { useEffect, useRef, useState } from "react";

const Interval = (initTime, callback, delay) => {
    const callbackRef = useRef();
    const [time, setTime] = useState(initTime);
    if (!delay){
        delay = 1000;
    }

    useEffect(() =>{
        callbackRef.current = callback;
    })

    useEffect(() => {
        if (!delay) {
            return () => {}
        }

        const interval = setInterval(() => {
            if (time > 0) setTime((prev) => prev - delay)
        }, delay);

        if (time === 0) callback()


        return () => clearInterval(interval);
    }, [time]);

    return time
}

export default Interval
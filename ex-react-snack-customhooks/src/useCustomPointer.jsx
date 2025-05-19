import { useEffect, useState } from "react";

export default function useCustomPointer(component) {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const mouseMov = (event) => {
            setPosition({ x: event.clientX, y: event.clientY });
        };

        document.addEventListener("mousemove", mouseMov);
        return () => {
            document.removeEventListener("mousemove", mouseMov);
        };
    }, []);

    return { position, component };
}

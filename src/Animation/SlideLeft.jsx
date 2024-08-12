import React, { useState, useEffect, useRef } from 'react';

const SlideInFromLeft = ({ children }) => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <div
            ref={ref}
            className={`transition-transform duration-500 ease-in-out ${
                isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
            }`}
        >
            {children}
        </div>
    );
};

export default SlideInFromLeft;

import React, { useEffect, useState } from 'react'

const ScrollToTopButton = () => {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);


    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }


    return (
        visible && (
            <button
                onClick={scrollToTop}
                style={{
                    position: "fixed",
                    bottom: "20px",
                    right: "20px",
                    padding: "10px 15px",
                    fontSize: "18px",
                    background: "#007bff",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                }}
            >
                <i class="bi bi-arrow-up"></i>
            </button>
        )
    );
};

export default ScrollToTopButton
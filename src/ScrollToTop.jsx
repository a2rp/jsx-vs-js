import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";
import styled from "styled-components";

const Button = styled.button`
    position: fixed;
    right: 22px;
    bottom: 22px;
    z-index: 15;
    display: grid;
    place-items: center;
    width: 42px;
    height: 42px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    border-radius: 50%;
    background: #12121a;
    color: #61dafb;
    cursor: pointer;
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.28);
    transition: border-color 180ms ease, box-shadow 180ms ease, transform 180ms ease;
    &:hover { border-color: #61dafb; box-shadow: 0 0 18px rgba(97, 218, 251, 0.18); transform: translateY(-3px); }
`;

export default function ScrollToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 320);
        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    if (!visible) return null;
    return <Button type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Go to top"><FiArrowUp /></Button>;
}

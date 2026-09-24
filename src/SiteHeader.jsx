import { useState } from "react";
import { FiBookOpen, FiGithub, FiMenu, FiX } from "react-icons/fi";
import styled from "styled-components";

const Header = styled.header`
    position: fixed;
    z-index: 20;
    top: 0;
    left: 0;
    width: 100%;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(11, 11, 15, 0.92);
    backdrop-filter: blur(14px);
`;

const Inner = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: min(1060px, calc(100% - 36px));
    min-height: 70px;
    margin: 0 auto;
`;

const Brand = styled.a`
    display: inline-flex;
    align-items: center;
    gap: 10px;
    color: #e6e7ea;
    text-decoration: none;
    img { width: 38px; height: 38px; object-fit: contain; border: 1px solid rgba(255, 255, 255, 0.15); border-radius: 9px; }
    span { display: grid; gap: 2px; }
    small { color: #61dafb; font-size: 10px; letter-spacing: 0.14em; text-transform: uppercase; }
    strong { font-size: 14px; }
`;

const Navigation = styled.nav`
    display: flex;
    align-items: center;
    gap: 8px;
    a, button { display: inline-flex; align-items: center; justify-content: center; gap: 7px; min-height: 36px; padding: 8px 11px; border: 1px solid rgba(255, 255, 255, 0.15); border-radius: 9px; background: transparent; color: #bfc3cf; font: inherit; font-size: 12px; text-decoration: none; cursor: pointer; transition: border-color 180ms ease, box-shadow 180ms ease, color 180ms ease; }
    a:hover, button:hover { border-color: #61dafb; box-shadow: 0 0 15px rgba(97, 218, 251, 0.12); color: #fff; }
    .menu { display: none; }
    .links { display: flex; gap: 8px; }
    @media (max-width: 620px) {
        .menu { display: inline-flex; }
        .github { display: none; }
        .links { position: absolute; top: 68px; left: 18px; right: 18px; display: ${({ open }) => open ? "grid" : "none"}; gap: 7px; padding: 10px; border: 1px solid rgba(255, 255, 255, 0.15); border-radius: 12px; background: #12121a; box-shadow: 0 16px 34px rgba(0, 0, 0, 0.4); }
    }
`;

export default function SiteHeader() {
    const [open, setOpen] = useState(false);

    return (
        <Header>
            <Inner>
                <Brand href="#top" onClick={() => setOpen(false)}>
                    <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Ashish Ranjan logo" />
                    <span><small>React concept</small><strong>JSX vs JS</strong></span>
                </Brand>
                <Navigation open={open} aria-label="Primary navigation">
                    <div className="links">
                        <a href="#comparison" onClick={() => setOpen(false)}><FiBookOpen /> Comparison</a>
                        <a href="#notes" onClick={() => setOpen(false)}>Notes</a>
                    </div>
                    <a className="github" href="https://github.com/a2rp/jsx-vs-js" target="_blank" rel="noopener noreferrer"><FiGithub /> GitHub</a>
                    <button className="menu" type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-label={open ? "Close menu" : "Open menu"}>{open ? <FiX /> : <FiMenu />}</button>
                </Navigation>
            </Inner>
        </Header>
    );
}

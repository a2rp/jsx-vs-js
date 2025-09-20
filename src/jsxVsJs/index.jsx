import React, { useState } from "react";
import { Styled } from "./styled";

/**
 * JSX vs JS (React.createElement)
 *
 * Goal for beginners:
 * 1) Show that JSX is just syntax sugar that compiles to React.createElement.
 * 2) Render the same UI two ways (JSX on the left, createElement on the right).
 * 3) Prove both stay in sync when state changes.
 *
 * Usage:
 *   In src/App.jsx:
 *     import JsxVsJs from "./jsxVsJs";
 *     export default () => <JsxVsJs />;
 */

// A tiny presentational component used by both trees
function FancyHello({ label, clicks }) {
    return (
        <Styled.DemoBox aria-live="polite">
            <div style={{ display: "flex", justifyContent: "space-between", gap: 8 }}>
                <strong>{label}</strong>
                <span style={{ opacity: 0.85 }}>Clicks: {clicks}</span>
            </div>
        </Styled.DemoBox>
    );
}

export default function JsxVsJs() {
    const [clicks, setClicks] = useState(0);
    const label = clicks % 2 === 0 ? "Hello from JSX / JS" : "Same UI, different syntax";

    // Left: JSX syntax
    const jsxTree = (
        <>
            <Styled.SectionTitle>JSX Syntax</Styled.SectionTitle>
            <FancyHello label={label} clicks={clicks} />
            <Styled.CodeBox aria-label="JSX example code">
                {String.raw`// JSX
<FancyHello label={label} clicks={clicks} />`}
            </Styled.CodeBox>
        </>
    );

    // Right: createElement syntax (what JSX compiles to)
    const jsTree =
        React.createElement(
            React.Fragment,
            null,
            React.createElement(Styled.SectionTitle, null, "React.createElement"),
            React.createElement(FancyHello, { label, clicks }),
            React.createElement(
                Styled.CodeBox,
                { "aria-label": "createElement example code" },
                `// JS (no JSX)
React.createElement(FancyHello, { label, clicks })`
            )
        );

    return (
        <Styled.Wrapper>
            <Styled.Card role="region" aria-labelledby="title">
                <Styled.Title id="title">JSX vs JS</Styled.Title>
                <Styled.Sub>
                    JSX is <em>syntax sugar</em> for <code>React.createElement</code>. Both produce the same React
                    elements and the same UI. Change state below and watch both sides update identically.
                </Styled.Sub>

                <Styled.Badges aria-label="Tech">
                    <Styled.Badge>React 18</Styled.Badge>
                    <Styled.Badge>Vite</Styled.Badge>
                    <Styled.Badge>styled-components</Styled.Badge>
                    <Styled.Badge>JSX ⇄ createElement</Styled.Badge>
                </Styled.Badges>

                <Styled.Actions>
                    <Styled.Button
                        onClick={() => setClicks((c) => c + 1)}
                        aria-label="Increment demo counter"
                        title="Click to increment"
                    >
                        Click Me ({clicks})
                    </Styled.Button>
                    <Styled.Button onClick={() => setClicks(0)} title="Reset counter">
                        Reset
                    </Styled.Button>
                </Styled.Actions>

                <Styled.Columns>
                    <Styled.Col>{jsxTree}</Styled.Col>
                    <Styled.Col>{jsTree}</Styled.Col>
                </Styled.Columns>

                <Styled.Footer>
                    Code:&nbsp;
                    <a href="https://github.com/a2rp/jsx-vs-js" target="_blank" rel="noreferrer">github.com/a2rp/jsx-vs-js</a>
                    &nbsp;• Live:&nbsp;
                    <a href="https://a2rp.github.io/jsx-vs-js/" target="_blank" rel="noreferrer">a2rp.github.io/jsx-vs-js</a>
                </Styled.Footer>
            </Styled.Card>
        </Styled.Wrapper>
    );
}

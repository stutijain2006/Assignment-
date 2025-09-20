import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ColoredText = React.forwardRef((props, ref) => {
    const words = [
        [{ char: "N", color: "rgb(255,100,0)" }, { char: "o", color: "blue" }, { char: "", color: "white" }],
        [{ word: "developers,", color: "white" }],
        [{ char: "n", color: "rgb(255,100,0)" }, { char: "o", color: "blue" }, { char: "", color: "white" }],
        [{ word: "complexity.", color: "white" }],
        [{ word: "Just", color: "white" }],
        [{ word: "select,", color: "white" }],
        [{ word: "customise,", color: "white" }],
        [{ word: "and", color: "white" }],
        [{ word: "deploy.", color: "white" }],
        [{ word: "Go", color: "white" }],
        [{ word: "live", color: "white" }],
        [{ word: "within", color: "white" }],
        [{ word: "minutes,", color: "white" }],
        [{ word: "and", color: "white" }],
        [{ word: "let", color: "white" }],
        [{ word: "engagement", color: "white" }],
        [{ word: "soar.", color: "white" }]
    ];

    return (
        <div
            ref={ref}
            style={{
                position: "absolute",
                top: 0,
                left: "20%",
                maxWidth: "60vw",
                margin: "0 auto",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                fontWeight: "bold",
                fontSize: "2.2rem",
                color: "white",
                textAlign: "center",
                lineHeight: "1.5"
            }}
        >
            <span>
                {words.map((parts, i) => (
                    <span key={i} style={{ display: "inline-block", opacity: 0, marginRight: "0.6ch" }}>
                        {parts.map((piece, j) =>
                            piece.char ?
                                <span
                                    key={j}
                                    style={{ color: piece.color, display: "inline-block" }}
                                >
                                    {piece.char}
                                </span>
                                :
                                <span
                                    key={j}
                                    style={{ color: piece.color, display: "inline-block" }}
                                >
                                    {piece.word}
                                </span>
                        )}
                    </span>
                ))}
            </span>
        </div>
    );
});

export default function MainSection() {
    const sectionRef = useRef(null);
    const textRef = useRef(null);
    const cardsref = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const chars = textRef.current.querySelectorAll("span");
            gsap.set(chars, { y: 10, opacity: 0 });

            gsap.to(chars, {
                opacity: 1,
                y: 0,
                stagger: 0.1,
                duration: 0.7,
                ease: "power1.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 5%",
                    end: "bottom center",
                    scrub: true,
                    pin: true,
                },
            });

            const cards = cardsref.current.children;
            gsap.set(cards, { x: 300, opacity: 0 });

            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "center center",
                    end: "bottom center",
                    scrub: true,
                    pin: true,
                    pinSpacing: true,
                },
            });

            timeline.to(
                textRef.current,
                {
                    opacity: 0,
                    duration: 0.5,
                    ease: "power1.out",
                },
                0
            );

            timeline.to(
                cards,
                {
                    x: 0,
                    opacity: 1,
                    stagger: { each: 0.22, amount: 0.66 },
                    duration: 0.7,
                    ease: "power1.out",
                },
                0.25
            );
        }, [sectionRef, textRef, cardsref]);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className=" relative min-h-[100vh] min-w-[90vw] flex flex-col justify-center items-center text-center p-4 mb-[2vh]">
            <div className="relative flex justify-center items-center text-center flex-col" style={{ width: "60vw", height: "12vh" }}>
                <ColoredText ref={textRef} />
                <div ref={cardsref} className="absolute top-0 left-0 w-full h-full flex justify-center items-center gap-4 flex-wrap" style={{ pointerEvents: "none" }}>
                    <div className="bg-black p-6 rounded-lg shadow-lg w-64 text-white">
                        <img src="/assets/image.png" alt="Icon 1" className="mb-4 mx-auto" />
                        <h3 className="text-xl font-semibold mb-2">Choose a game</h3>
                        <p className="text-gray-600">Browse our collection of interactive games that fits your audience. </p>
                    </div>
                    <div className="bg-black p-6 rounded-lg shadow-lg w-64 text-white">
                        <img src="/assets/image.png" alt="Icon 1" className="mb-4 mx-auto" />
                        <h3 className="text-xl font-semibold mb-2">Customize & configure</h3>
                        <p className="text-grey-600">Set up triggers, rewards and visual elements without writing code.</p>
                    </div>
                    <div className="bg-black p-6 rounded-lg shadow-lg w-64 text-white">
                        <img src="/assets/image.png" alt="Icon 1" className="mb-4 mx-auto" />
                        <h3 className="text-xl font-semibold mb-2">Deploy Instantly</h3>
                        <p className="text-grey-600">Add a single line of code and start boosting engagement immediately. </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
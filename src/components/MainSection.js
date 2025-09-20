import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function MainSection() {
    const textRef = useRef(null);
    const cardsref = useRef(null);

    useEffect(() => {
        gsap.fromTo(textRef.current, {
            opacity: 0, color: '#fff', 
        },{
            opacity: 1, color: '#000',
            scrollTrigger: {
                trigger: textRef.current,
                start: 'top center',
                end: 'bottom top',
                scrub: true,
            }
        });

        gsap.to(textRef.current, {
            filter: 'blur(4px)',
            scrollTrigger:{
                trigger: cardsref.current,
                start: 'top center',
                end: 'bottom top',
                scrub: true,
            }
        });

        const cards = cardsref.current.children;
        gsap.fromTo(cards, {
            x: 300, opacity: 0,
        }, {
            x: 0,
            opacity: 1,
            stagger: 0.5,
            scrollTrigger: {
                trigger: cardsref.current,
                start: 'bottom center',
                end: 'top top',
                scrub: true,
            },
        }
        );
    }, []);

    return (
        <section className="main-line min-h-100vh flex flex-col justify-center items-center text-center p-4">
            <div ref={textRef} className="text-4xl md:text-6xl font-bold mb-8">
                No developers, no complexity. Just select, customise, and deploy.
                Go live within minutes, and let engagement soar.
            </div>
            <div ref={cardsref} className="flex justify-center items-center gap-4 flex-wrap">
                <div className="bg-black p-6 rounded-lg shadow-lg w-64">
                    <img src="/images/icon1.png" alt="Icon 1" className="mb-4 mx-auto" />
                    <h3 className="text-xl font-semibold mb-2">Choose a game</h3>
                    <p>Browse our collection of interactive games that fits your audience. </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg w-64">
                    <img src="/images/icon1.png" alt="Icon 1" className="mb-4 mx-auto" />
                    <h3 className="text-xl font-semibold mb-2">Customize & configure</h3>
                    <p>Set up triggers, rewards and visual elements without writing code.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg w-64">
                    <img src="/images/icon1.png" alt="Icon 1" className="mb-4 mx-auto" />
                    <h3 className="text-xl font-semibold mb-2">Deploy Instantly</h3>
                    <p>Add a single line of code and start boosting engagement immediately. </p>
                </div>
            </div>
        </section>
    );
}
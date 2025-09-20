export default function HeroSection() {
    return (
        <section className="flex justify-between items-center min-h-[100vh] min-w-[100vw]">
            <div className="left-side w-[34vw] flex flex-col items-center justify-center text-left ml-[6vw] mt-[5rem] gap-[0.733vh]">
                <h1 className="text-[3rem] font-semibold text-[rgba(255,255,255,0.59)] ">AI powered shortcut for gamification!</h1>
                <p className="text-[1.3rem] text-[rgba(255,255,255,0.78)]">Add fully‑branded mini‑games onto any website. Increase engagement, collect leads, and reward customers</p>
                <div className="buttons flex gap-[1rem] items-start justify-start mt-[4.3rem]">
                    <button className="bg-white text-black font-medium rounded-[32px] px-[0.9rem] py-[0.75rem] text-[0.8125rem]">Try early access</button>
                    <button className="bg-white text-black font-medium rounded-[32px] px-[0.9rem] py-[0.75rem] text-[0.8125rem]">View demo</button>
                </div>
            </div>

            <div className="flex w-[45vw] h-[18.4vh] bg-[rgba(23, 23, 23, 1)]"></div>
        </section>
    );
}
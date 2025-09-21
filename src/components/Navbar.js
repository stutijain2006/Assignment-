export default function Navbar() {
    return (
        <div className="w-full max-w-[90vw] flex justify-center mb-4">
            <nav className="mx-auto flex flex-wrap justify-center items-center bg-[rgba(24,24,24,1)] mt-[1.8rem] p-[0.75rem_1.06rem] rounded-[200px] gap-[2.75rem] text-[rgba(255,255,255,0.78)] text-[1rem] font-normal ">
                <div>Link 1</div>
                <div>Link 2</div>
                <div>Link 3</div>
                <div>Link 4</div>
                <div>Link 5</div>
                <div className=" bg-[rgba(255,255,255,1)] font-medium text-[0.8rem] text-[rgba(23,23,25,1)] rounded-[32px] p-[0.62rem_0.75rem]">Login</div>
            </nav>
        </div>
    );
}
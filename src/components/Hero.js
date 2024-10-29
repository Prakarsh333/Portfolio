import Laptop from "./images/Laptop.jpg"
function Header() {
    return (
        <>
        <div class="relative h-screen w-full">
    <img src={Laptop} alt="Background Image" class="object-cover object-center w-full h-full" />
    <img src="" alt="Background Image" class="absolute inset-0 w-full h-full object-cover filter blur-sm"/>
    <div class="absolute inset-0 bg-black bg-opacity-50"></div>
    <div class="text-white absolute inset-0 flex flex-col items-center justify-center translate-y-[0%]">
    <h1 class="text-7xl text-center mb-4 font-mono font-bold animate-bounce animate-delay-300 animate-infinite ">Hello, I'm</h1>
    <h2 class="uppercase bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text text-7xl mt-4 text-center font-calibre mb-4 animate-bounce animate-bounce animate-delay-100 animate-infinite ">Ayush Raghuvanshi</h2>
    <h3 class="text-white/70 text-xl font-mono ">I am a Full Stack Developer and Electronics Enthusiast</h3>
    </div>
    </div>
        </>
    );
}

export default Header;
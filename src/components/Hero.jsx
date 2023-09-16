import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="sumai_logo" className="w-28 object-contain" />

        <button type="button" onClick={() => window.open("https://github.com/SaschaStg/ai-summarizer")} className="black_btn">
          GitHub
        </button>
      </nav>

      <h1 className="head_text">
        Summarize Articles <span className="blue_gradient">with AI</span>
      </h1>
      <h2 className="desc">
        Simplify text with SumAI, an open-source article summarizer that transforms long articles into short and easy to read summaries
      </h2>
    </header>
  );
};

export default Hero;

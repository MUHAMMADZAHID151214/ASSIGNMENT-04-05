import Link from "next/link";
export default function About() {
  return (
    <div className="about">
      <p className="about-container">
        <span className="about-span">So, who am I?</span>
        <br /><br></br>
        Hi, I am Muhammad Zahid, a BSCS student at PAF-KIET, specializing in
        emerging fields like Web3.0, Metaverse, and AI. My focus is on pushing
        boundaries and developing practical solutions with future-oriented
        technologies. Currently enrolled in a certification from the Governor
        Sindh Initiative, I am excited to explore innovative solutions that can
        reshape industries and improve peoples lives.
      </p>
      <div className="bounce-animation">
        <img
          src="/programmer.png"
          alt="Programmer"
          className="programmer-image"
        />
      </div>
    </div>
  );
}

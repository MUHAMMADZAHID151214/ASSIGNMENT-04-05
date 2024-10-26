import Link from "next/link";
export default function Body() {
  return (
    <div className="container">
      <div className="homeContainer">
        <p>
          Hey,
          <br />
          My Name is <span className="pinkColor">Muhammad Zahid</span>
          <br />I am Next JS Developer
        </p>
        <div className="bounce-animation">
          <img
            src="/programmer.png"
            alt="Programmer"
            className="programmer-image"
          />
        </div>
      </div>
      <section className="blog-section">
        <h1>Latest Blogs</h1>
        <div className="blog-container">
          <Link href={"/blog1"}>
            <div className="blog">
              <img src="typescript.jpg" alt="TypeScript Image" />
              <h2>Why TypeScript is a Game-Changer in the IT World</h2>
              <p>
                TypeScript is revolutionizing the development landscape by
                offering a robust, scalable, and strongly typed language that
                enhances the reliability of JavaScript code. Its seamless
                integration with popular frameworks, along with features like
                static typing, make it essential for building large-scale
                applications.TypeScript is favored for its ability to create
                more reliable applications.
              </p>
            </div>
          </Link>
          <Link href={"/blog2"}>
          <div className="blog">
            <img src="nextjs.jpg" alt="Next.js Blog Image" />
            <h2>Next.js: Elevating Web Development with Scalability</h2>
            <p>
              Next.js has rapidly become one of the most powerful frameworks for
              building fast, scalable, and SEO-friendly web applications. It
              offers server-side rendering, and an easy way to handle APIs,
              making it an essential tool for modern web development. In the IT
              industry, where speed, and user experience are key, Next.js plays
              a critical role in delivering high-quality applications.
            </p>
          </div>
          </Link>
          <Link href={"/blog3"}>
          <div className="blog">
            <img src="ai.jpg" alt="AI Image" />
            <h2>
              Artificial Intelligence: Driving Innovation Across Industries
            </h2>
            <p>
              Artificial Intelligence (AI) is transforming industries by
              automating processes, enhancing decision-making, and enabling the
              development of intelligent systems. Its ability to process vast
              amounts of data and learn from it has made AI a key player in
              fields like healthcare, finance, and technology. With advancements
              in machine learning, natural language processing, and deep
              learning.
            </p>
          </div>
          </Link>
          <Link href={"/blog4"}>
          <div className="blog">
            <img src="metaverrse.jpg" alt="Blog 4 Image" />
            <h2>The Metaverse: A New Frontier in Digital Interaction</h2>
            <p>
              The Metaverse is revolutionizing the digital landscape by creating
              immersive, interconnected virtual worlds where people can
              socialize, work, and play. This cutting-edge concept leverages VR,
              AR, and AI technologies to offer experiences beyond the physical
              world, making it essential for industries aiming to build
              interactive, engaging, and scalable digital environments for users
              globally.
            </p>
          </div>
          </Link>
          <Link href={"/blog5"}>
          <div className="blog">
            <img src="web3.0.jpg" alt="Blog 5 Image" />
            <h2>Web3.0: The Decentralized Revolution Shaping the Future</h2>
            <p>
              Web3.0 is transforming the digital landscape by introducing a
              decentralized, user-centric internet that enhances data privacy
              and ownership. Built on blockchain technology, Web3.0 enables
              peer-to-peer transactions, removing intermediaries and fostering a
              more transparent, secure online environment. This evolution is
              crucial for creating an equitable, resilient digital ecosystem,
              shaping the future of the web.
            </p>
          </div>
          </Link>
          <Link href={"/blog6"}>
          <div className="blog">
            <img src="blockchain.jpg" alt="Blog 6 Image" />
            <h2>Blockchain: The Backbone of a Decentralized Future</h2>
            <p>
              Blockchain is reshaping industries by providing a decentralized,
              transparent, and immutable ledger system that enhances security
              and trust. By enabling peer-to-peer transactions without
              intermediaries, blockchain technology reduces costs, increases
              efficiency, from finance and healthcare to supply chain
              management, marking it as the next-generation digital backbone.
            </p>
          </div>
          </Link>
        </div>
      </section>
    </div>
  );
}

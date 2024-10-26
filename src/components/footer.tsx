import Link from "next/link";
export default function Footer() {
  return (
    <div>
      <div className="footer">
        <Link href={"https://www.facebook.com/" } target="_blank">
          <img src="./facebook.png" alt="facebook" />
        </Link>
        <Link href={"https://www.instagram.com/"} target="_blank">
          <img src="./instagram.png" alt="instagram" />
        </Link>
        <Link href={"https://www.linkedin.com/feed/"} target="_blank">
          <img src="./linkedin.png" alt="linkedin" />
        </Link>
        <Link href={"https://github.com/MUHAMMADZAHID151214?tab=repositories"} target="_blank">
          <img src="./github.png" alt="github" />
        </Link>
      </div>
      <div>
        <ul className="footer-navbar">
          <Link href={"/"}>
            <li>Home</li>
          </Link>
          <Link href={"/about-us"}>
            <li>About us</li>
          </Link>
          <Link href={"/contact-us"}>
            <li>Contact us</li>
          </Link>
          <Link href={"/education"}>
            <li>Education</li>
          </Link>
        </ul>
        <br />
      </div>
      <div className="footer-bottom">
        <p>
          <br />
          Copyright ©2024: Developed by MZ <br />
          <br />
        </p>
      </div>
    </div>
  );
}

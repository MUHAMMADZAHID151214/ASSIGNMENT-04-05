import Link from "next/link";
export default function Header() {
  return (
    <div className="container">
      <div className="header">
        <div className="logo">
          <img src="/logo.png" alt="Logo" className="logo-image" />
        </div>
        <ul className="nav-items">
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
      </div>
    </div>
  );
}

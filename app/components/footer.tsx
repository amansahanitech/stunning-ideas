import Link from "next/link";


const Footer = () => {
    return (
      <footer className="bg-black text-white py-6">
        <div className="mx-2">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-center">&copy; {new Date().getFullYear()} The Stunning Ideas. All rights reserved.</p>
            </div>
            <nav>
              <ul className="flex flex-col justify-center items-center space-x-3 m-1 sm:flex-row ">
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
                <li>
                  <Link href="/terms">Terms of Service</Link>
                </li>
                <li>
                  <Link href="/privacy">Privacy Policy</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  

import { Link } from "react-router-dom";
import { socialConfig } from "../../data";
import { GithubIcon, LinkedinIcon } from "lucide-react";

const Footer = () => {
  return (
    <footer className="px-4 divide-y dark:bg-gray-100 dark:text-gray-800">
      <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
        <div className="lg:w-1/3">
          <a
            rel="noopener noreferrer"
            href="#"
            className="flex justify-center space-x-3 lg:justify-start"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full dark:bg-violet-600">
              <img src="/logo.jpg" />
            </div>
            <span className="self-center text-2xl font-semibold">
              CopyPaste UI
            </span>
          </a>
        </div>
        <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase dark:text-gray-900">
              Product
            </h3>
            <ul className="space-y-1">
              <li>
                <a rel="noopener noreferrer" href="#">
                  Features
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">
                  Integrations
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase dark:text-gray-900">
              Company
            </h3>
            <ul className="space-y-1">
              <li>
                <a rel="noopener noreferrer" href="#">
                  Privacy
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="uppercase dark:text-gray-900">Developers</h3>
            <ul className="space-y-1">
              <li>
                <a rel="noopener noreferrer" href="#">
                  Documentation
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">
                  Guides
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <div className="uppercase dark:text-gray-900">Social media</div>
            <div className="flex justify-start space-x-3">
              <Link
                to={socialConfig.linkedin}
                className="no-underline bg-black p-2 rounded-full text-white"
              >
                <LinkedinIcon className="h-4 w-4" />
              </Link>
              <Link
                to={socialConfig.github}
                className="no-underline bg-black p-2 rounded-full text-white"
              >
                <GithubIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="py-6 text-sm text-center dark:text-gray-600 flex justify-between items-center">
        <p>© {new Date().getFullYear()} CopyPaste UI. All rights reserved.</p>
        <p>created by <a href={socialConfig.githubPersonal} className="font-bold hover:underline">Satvickk</a></p>
      </div>
    </footer>
  );
};

export default Footer;

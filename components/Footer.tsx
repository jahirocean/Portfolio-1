import Link from "next/link";
import { SOCIALS } from "@/constants/socials";

export default function Footer() {
  return (
    <footer className="bg-slate-900 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="text-2xl font-bold text-sky-400">
              YourName
            </Link>
            <p className="text-slate-400 mt-2">
              © {new Date().getFullYear()} All Rights Reserved
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex gap-6 mb-6">
              {SOCIALS.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-sky-400 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
            <p className="text-slate-400 text-center md:text-right">
              Designed and built with ❤️ by YourName
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
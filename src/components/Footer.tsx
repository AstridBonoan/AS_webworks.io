interface FooterProps {
  onNavigate: (path: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const logoLightSrc = `${import.meta.env.BASE_URL}logo-light.png`;
  const logoDarkSrc = `${import.meta.env.BASE_URL}logo-dark.png`;

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 pb-12 border-b border-slate-800">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <img
                src={logoLightSrc}
                alt="A&S WebWorks"
                className="h-16 w-auto dark:hidden"
              />
              <img
                src={logoDarkSrc}
                alt="A&S WebWorks"
                className="hidden h-16 w-auto dark:block mix-blend-lighten opacity-90 brightness-110 contrast-110"
              />
              <h3 className="text-2xl font-bold">A&S WebWorks</h3>
            </div>
            <p className="text-slate-400">
              Creating exceptional digital experiences that transform businesses.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/')}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/services')}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Services & Pricing
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/contact')}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Get In Touch</h4>
            <p className="text-slate-400 mb-2">
              Ready to start your next project?
            </p>
            <button
              type="button"
              onClick={() => onNavigate('/contact')}
              className="inline-block px-4 py-2 bg-white text-slate-900 rounded-lg font-semibold hover:bg-slate-100 transition-colors"
            >
              Contact Me
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-slate-400 text-sm">
          <p>&copy; 2024 A&S WebWorks. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

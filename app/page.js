"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function HomePage() {
  const [logoRef, logoInView] = useInView({ triggerOnce: false, threshold: 0.2 });
  const [resCardRef, resInView] = useInView({ triggerOnce: false, threshold: 0.2 });
  const [comCardRef, comInView] = useInView({ triggerOnce: false, threshold: 0.2 });
  const [msgCardRef, msgInView] = useInView({ triggerOnce: false, threshold: 0.2 });
  const [kcRef, kcInView] = useInView({ triggerOnce: false, threshold: 0.2 });

  const [kcTextIndex, setKcTextIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const kcTexts = [
    "Kansas City metro-based",
    "Completely free diagnostics - No surprises",
    "Remote desktop support",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setKcTextIndex((prev) => (prev + 1) % kcTexts.length);
        setFade(true);
      }, 500);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="space-y-32"
      style={{
        backgroundColor: "#dacebaff",
        color: "#1F355E",
      }}
    >
      {/* HOME */}
      <section
        id="home"
        className="min-h-screen flex flex-col items-center justify-center text-center px-6"
      >
        <div className="max-w-3xl">
          <img
            ref={logoRef}
            src="/smithdalelogo.png"
            alt="Smith-Dale Computer Repair Logo"
            className={`mx-auto mb-6 transition-all duration-1000 ease-out transform ${
              logoInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ maxWidth: "100%", height: "auto" }}
          />

          <p className="text-small text-[#3C557A] max-w-2xl mx-auto mb-10">
            Trusted computer repair for the American home user.
          </p>

          <div
            ref={kcRef}
            className={`relative w-full h-64 rounded-2xl overflow-hidden shadow-xl transition-all duration-1000 ease-out transform ${
              kcInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <img
              src="/kcskyline.png"
              alt="Kansas City Skyline"
              className="absolute inset-0 w-full h-full object-cover z-0"
            />

            <div className="absolute inset-0 bg-[#1F355E]/50 z-10" />

            <div className="relative z-20 flex flex-col justify-center items-center h-full text-white">
              <span
                className={`text-xl font-semibold transition-opacity duration-500 ease-in-out ${
                  fade ? "opacity-100" : "opacity-0"
                }`}
              >
                {kcTexts[kcTextIndex]}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="min-h-screen flex flex-col items-center justify-center px-6 py-20"
      >
        <h2 className="text-4xl font-bold text-[#1F355E] mb-10">
          Offered Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full">

          {/* Residential */}

          <div
            ref={resCardRef}
            className={`relative rounded-3xl shadow-2xl overflow-hidden transition-all duration-1000 ease-out transform ${
              resInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <img
              src="/prairiefire.png"
              alt="Residential"
              className="absolute inset-0 w-full h-full object-cover z-0"
            />

            <div className="absolute inset-0 bg-gradient-to-br from-[#1F355E]/90 via-[#2E4C7E]/85 to-[#B22234]/85 z-10" />

            <div className="relative z-20 p-8 text-white">
              <h3 className="text-2xl font-semibold mb-4">
                🏠 Residential Computer Repair
              </h3>

              <p className="mb-4">
                <span className="font-semibold">
                  Technology That Just Works
                </span>
                <br />
                From slow computers to stubborn Wi-Fi, Smith-Dale provides
                honest, affordable computer repair and technical support
                throughout the Kansas City metro.
              </p>

              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Windows PC and laptop diagnostics at no charge</li>
                <li>Virus & malware removal</li>
                <li>PC tune-ups and performance optimization</li>
                <li>Printer, Wi-Fi & network troubleshooting</li>
                <li>Software installation and Windows repair</li>
                <li>Remote desktop support for many issues</li>
              </ul>
            </div>
          </div>

          {/* Remote */}

          <div
            ref={comCardRef}
            className={`relative rounded-3xl shadow-2xl overflow-hidden transition-all duration-1000 ease-out transform ${
              comInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <img
              src="/olathecourt.png"
              alt="Remote"
              className="absolute inset-0 w-full h-full object-cover z-0"
            />

            <div className="absolute inset-0 bg-gradient-to-br from-[#B22234]/90 via-[#8E2432]/85 to-[#1F355E]/85 z-10" />

            <div className="relative z-20 p-8 text-white">
              <h3 className="text-2xl font-semibold mb-4">
                💻 Remote & Software Services
              </h3>

              <p className="mb-4">
                <span className="font-semibold">
                  Fast Help Without Leaving Home
                </span>
                <br />
                Many software issues don't require an in-home visit. Secure
                remote support gets you back up and running quickly.
              </p>

              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Windows troubleshooting & updates</li>
                <li>Email and Microsoft 365 setup</li>
                <li>Data backup and file recovery assistance</li>
                <li>Driver installation and software configuration</li>
                <li>New PC setup and data migration</li>
                <li>Remote troubleshooting and support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* MESSAGE */}

      <section
        id="message"
        className="flex flex-col justify-center text-center px-6 py-20"
      >
        <h2 className="text-4xl font-semibold mb-10 text-[#1F355E]">
          Message
        </h2>

        <div
          ref={msgCardRef}
          className={`relative rounded-3xl shadow-2xl overflow-hidden max-w-4xl mx-auto min-h-[900px] transition-all duration-1000 ease-out transform ${
            msgInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <img
            src="/daleportrait.png"
            alt="Message"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />

          <div className="absolute inset-0 bg-gradient-to-br from-[#8697a7]/55 via-[#233B67]/50 to-[#B22234]/50 z-10" />

          <div className="relative z-20 p-8 text-white">
            <p className="max-w-2xl mx-auto mb-4">
              A Family Legacy
            </p>

            <ul className="list-disc list-inside text-sm max-w-2xl mx-auto space-y-1">
 <p>
            <strong>Smith-Dale</strong> began as a family-owned home décor
            company founded by my grandfather Dale Minard in Johnson County, Kansas.
            Long before online shopping, Smith-Dale offered thoughtfully crafted home décor with a
            commitment to quality and timeless designs.
          </p>

          <p>
            As a child, I remember spending time around the business —
            stamping outgoing mail, learning to use the various office workstations, watching catalogs enter and leave the showroom,
            and seeing firsthand what it meant to take pride in your work. Those experiences left a lasting impression.
          </p>

          <p>
            Today, Smith-Dale has been reimagined as a computer repair and
            technical support business. While the services may be different,
            the values are not. The same commitment to honest service,
            dependable workmanship, and American craftsmanship continues
            to guide every repair, upgrade, and support call.
          </p>

          <p className="italic text">
            This new company is dedicated to the memory of my grandfather and
            to preserving the standards he believed every customer deserved.
          </p>
            </ul>
          </div>
        </div>
      </section>

      {/* CONTACT */}

      <section
        id="contact"
        className="min-h-screen flex flex-col justify-center text-center"
      >
        <div>
          <h2 className="text-4xl font-semibold mb-4 text-[#1F355E]">
            Contact
          </h2>

          <p className="text-[#3C557A] max-w-2xl mx-auto">
            Need your computer fixed? Reach out today for free diagnostics and
            honest advice.
          </p>

          <a
            href="/intake"
            className="mt-6 inline-block px-6 py-3 rounded-lg font-semibold text-white bg-[#B22234] hover:bg-[#99202E] transition duration-200 shadow-lg"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
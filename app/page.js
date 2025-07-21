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
    "Packages for local business owners and families"
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
    <div className="space-y-32">
      {/* HOME SECTION */}
      <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <div className="max-w-3xl">
          <img
            ref={logoRef}
            src="/CSVE_logo_lg.png"
            alt="Caustic Monitoring Solutions Logo"
            className={`mx-auto mb-6 transition-all duration-1000 ease-out transform ${logoInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ maxWidth: '100%', height: 'auto' }}
          />
          <p className="text-small text-gray-400 max-w-2xl mx-auto mb-10">
            Real-time surveillance system monitoring — because playback isn't protection.
          </p>
          <div
            ref={kcRef}
            className={`relative w-full h-64 rounded-xl overflow-hidden transition-all duration-1000 ease-out transform ${kcInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <img
              src="/kcskyline.png"
              alt="Kansas City Skyline"
              className="absolute inset-0 w-full h-full object-cover z-0"
            />
            <div className="absolute inset-0 bg-black opacity-40 z-10" />
            <div className="relative z-20 flex flex-col justify-center items-center h-full text-white">
              <span
                className={`text-xl font-semibold transition-opacity duration-500 ease-in-out ${fade ? 'opacity-100' : 'opacity-0'}`}
              >
                {kcTexts[kcTextIndex]}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="min-h-screen flex flex-col items-center justify-center px-6 py-20">
        <h2 className="text-4xl font-bold text-white mb-10">Offered Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full">
          {/* Residential Card */}
          <div
            ref={resCardRef}
            className={`relative rounded-2xl shadow-lg overflow-hidden transition-all duration-1000 ease-out transform ${resInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <img src="/residentialcam.png" alt="Residential" className="absolute inset-0 w-full h-full object-cover z-0" />
            <div className="absolute inset-0 bg-gradient-to-br from-orange-900 via-orange-700 to-yellow-600 opacity-80 z-10" />
            <div className="relative z-20 p-8 text-white">
              <h3 className="text-2xl font-semibold mb-4">🔒 Residential Monitoring</h3>
              <p className="mb-4">
                <span className="font-semibold">Peace of Mind Starts at Home</span><br />
                Active camera monitoring for homes, apartments, and personal property. Whether you're at work, asleep, or out of town, your feeds are watched in real time — not just motion alerts.
              </p>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Active surveillance of outdoor and indoor cameras</li>
                <li>Fast notification of suspicious activity</li>
                <li>Affordable monthly plans for individuals or families</li>
                <li>Great for monitoring during vacations or remote property showings</li>
              </ul>
            </div>
          </div>

          {/* Commercial Card */}
          <div
            ref={comCardRef}
            className={`relative rounded-2xl shadow-lg overflow-hidden transition-all duration-1000 ease-out transform ${comInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <img src="/warehousecam.png" alt="Commercial" className="absolute inset-0 w-full h-full object-cover z-0" />
            <div className="absolute inset-0 bg-gradient-to-br from-red-900 via-red-700 to-rose-700 opacity-80 z-10" />
            <div className="relative z-20 p-8 text-white">
              <h3 className="text-2xl font-semibold mb-4">🏢 Commercial Monitoring</h3>
              <p className="mb-4">
                <span className="font-semibold">Your Business Deserves More Than a Lazy Night Guard</span><br />
                Real-time, human-monitored surveillance that helps prevent theft, catch loiterers, and respond before damage is done.
              </p>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Active monitoring by trained personnel</li>
                <li>Incident reporting with time-stamped video</li>
                <li>Coordination with law enforcement</li>
                <li>Scalable for multi-site businesses</li>
                <li>Perfect for retail, construction, warehouses, and more</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* MESSAGE SECTION */}
      <section id="message" className="flex flex-col justify-center text-center px-6 py-20">
        <h2 className="text-4xl font-semibold mb-10 text-white">Message</h2>
        <div
          ref={msgCardRef}
          className={`relative rounded-2xl shadow-lg overflow-hidden max-w-4xl mx-auto min-h-[900px] transition-all duration-1000 ease-out transform ${msgInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <img src="/lazyguard.png" alt="Lazy Security Guard" className="absolute inset-0 w-full h-full object-cover z-0" />
          <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-gray-800 opacity-80 z-10" />
          <div className="relative z-20 p-8 text-white">
            <p className="max-w-2xl mx-auto mb-4">
              Real protection comes from vigilance, not a body in a chair. I personally monitor all camera feeds, ensuring that every alert and every moment of downtime is watched by someone who actually cares about what's happening. I've been a victim of theft and vandalism myself, and I take this responsibility seriously. I know how damaging it is to have your property violated — emotionally and financially — and I don't take that lightly.
            </p>
            <ul className="list-disc list-inside text-sm max-w-2xl mx-auto space-y-1">
              <li>No third-party monitoring centers or outsourcing.</li>
              <li>Direct communication with me if something happens.</li>
              <li>This is my business, and your safety is my priority.</li>
              <li>Future personnel will be carefully vetted to meet CMS monitoring standards.</li>
              <li>The goal is quality over volume — attention, not automation.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="min-h-screen flex flex-col justify-center text-center">
        <div>
          <h2 className="text-4xl font-semibold mb-4">Contact</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Ready to upgrade your surveillance strategy? Contact me for a custom consultation.
          </p>
          <a href="/intake" className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200">
  Get in Touch
</a>
        </div>
      </section>
    </div>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function IntakePage() {
  const [manufacturer, setManufacturer] = useState("Dell");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mwlelrjg", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setFormSubmitted(true);
        form.reset();
        setManufacturer("Dell");
      } else {
        alert("There was an error submitting the form.");
      }
    } catch (error) {
      alert("There was an error submitting the form.");
    }
  };

  const fieldClasses =
    "w-full p-3 rounded-lg bg-[#F7F2E8] border border-[#A58D69] text-[#142541] placeholder:text-[#756A5B] focus:outline-none focus:ring-2 focus:ring-[#B22234] focus:border-[#B22234] transition-colors";

  const selectClasses =
    "w-full p-3 rounded-lg bg-[#F7F2E8] border border-[#A58D69] text-[#142541] text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#B22234] focus:border-[#B22234] transition-colors";

  return (
    <div className="min-h-screen py-20 px-6 bg-[#D8C6A5] text-[#142541]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto bg-[#EADDC5] p-10 rounded-2xl border border-[#B9A27C] shadow-[0_18px_45px_rgba(20,37,65,0.22)]"
      >
        <div className="w-20 h-1 bg-[#B22234] mx-auto mb-6 rounded-full" />

        <h1 className="text-4xl font-bold mb-8 text-center text-[#1F355E]">
          Client Intake Form
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="hidden"
            name="_subject"
            value="New Smith-Dale Client Intake Submission"
          />

          {/* Full Name */}
          <div>
            <label className="block mb-2 text-sm font-semibold text-[#1F355E]">
              Full Name
            </label>

            <input
              name="fullName"
              type="text"
              className={fieldClasses}
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 text-sm font-semibold text-[#1F355E]">
              Email Address
            </label>

            <input
              name="email"
              type="email"
              className={fieldClasses}
              required
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block mb-2 text-sm font-semibold text-[#1F355E]">
              Phone Number
            </label>

            <input
              name="phone"
              type="tel"
              className={fieldClasses}
              required
            />
          </div>

          {/* Address */}
          <div>
            <label className="block mb-2 text-sm font-semibold text-[#1F355E]">
              Street Address
            </label>

            <input
              name="address"
              type="text"
              className={fieldClasses}
              required
            />
          </div>

          {/* City / State / ZIP */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block mb-2 text-sm font-semibold text-[#1F355E]">
                City
              </label>

              <input
                name="city"
                type="text"
                className={fieldClasses}
                required
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-semibold text-[#1F355E]">
                State
              </label>

              <input
                name="state"
                type="text"
                className={fieldClasses}
                required
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-semibold text-[#1F355E]">
                ZIP
              </label>

              <input
                name="zip"
                type="text"
                className={fieldClasses}
                required
              />
            </div>
          </div>

          {/* Computer Manufacturer */}
          <div>
            <label className="block mb-2 text-sm font-semibold text-[#1F355E]">
              Computer Manufacturer
            </label>

            <select
              name="manufacturer"
              className={selectClasses}
              value={manufacturer}
              onChange={(e) => setManufacturer(e.target.value)}
              required
            >
              <option value="Dell">Dell</option>
              <option value="HP">HP</option>
              <option value="Lenovo">Lenovo</option>
              <option value="Acer">Acer</option>
              <option value="ASUS">ASUS</option>
              <option value="Apple">Apple</option>
              <option value="Microsoft">Microsoft</option>
              <option value="Samsung">Samsung</option>
              <option value="Custom Built">Custom Built</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Issue Description */}
          <div>
            <label className="block mb-2 text-sm font-semibold text-[#1F355E]">
              Please Describe Your Issue
            </label>

            <textarea
              name="issueDescription"
              rows="6"
              className={fieldClasses}
              placeholder="Please describe the problem you're experiencing with your computer..."
              required
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3.5 bg-[#B22234] hover:bg-[#941D2B] rounded-lg text-white font-semibold shadow-md hover:shadow-lg transition-all duration-200"
          >
            Submit Form
          </button>
        </form>

        {/* Success Message */}
        <AnimatePresence>
          {formSubmitted && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4 }}
              className="mt-6 p-4 text-[#244B2C] border border-[#6E8D62] rounded-lg bg-[#DCE8D2] text-center font-medium"
            >
              ✓ Your request has been submitted successfully. Smith-Dale will
              be in touch with you soon.
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
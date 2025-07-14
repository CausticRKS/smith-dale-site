"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function IntakePage() {
  const [propertyType, setPropertyType] = useState("Residential");
  const [monitoringHours, setMonitoringHours] = useState("Overnight");
  const [residentialAgreement, setResidentialAgreement] = useState(false);
  const [residentialProof, setResidentialProof] = useState(false);
  const [commercialAgreement, setCommercialAgreement] = useState(false);
  const [commercialProof, setCommercialProof] = useState(false);

  return (
    <div className="min-h-screen py-20 px-6 bg-black text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto bg-gradient-to-br from-red-800/80 to-gray-900/90 p-10 rounded-xl shadow-xl"
      >
        <h1 className="text-4xl font-bold mb-8 text-center">Client Intake Form</h1>
        <form
          action="https://formspree.io/f/xzzvpaoz"
          method="POST"
          className="space-y-6"
        >
          <input type="hidden" name="_subject" value="New Intake Submission" />

          <div>
            <label className="block mb-2 text-sm font-medium">Full Name</label>
            <input name="fullName" type="text" className="w-full p-3 rounded bg-gray-800 border border-gray-600" required />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">Email Address</label>
            <input name="email" type="email" className="w-full p-3 rounded bg-gray-800 border border-gray-600" required />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">Phone Number</label>
            <input name="phone" type="tel" className="w-full p-3 rounded bg-gray-800 border border-gray-600" required />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">Street Address</label>
            <input name="address" type="text" className="w-full p-3 rounded bg-gray-800 border border-gray-600" required />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block mb-2 text-sm font-medium">City</label>
              <input name="city" type="text" className="w-full p-3 rounded bg-gray-800 border border-gray-600" required />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium">State</label>
              <input name="state" type="text" className="w-full p-3 rounded bg-gray-800 border border-gray-600" required />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium">ZIP</label>
              <input name="zip" type="text" className="w-full p-3 rounded bg-gray-800 border border-gray-600" required />
            </div>
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">Type of Property</label>
            <select
              name="propertyType"
              className="w-full p-3 rounded bg-gray-800 border border-gray-600 text-sm font-medium"
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
              required
            >
              <option>Residential</option>
              <option>Commercial</option>
            </select>
          </div>

          <AnimatePresence>
            {propertyType === "Commercial" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3 }}
              >
                <div>
                  <label className="block mb-2 text-sm font-medium">Company Name</label>
                  <input name="company" type="text" className="w-full p-3 rounded bg-gray-800 border border-gray-600" required />
                </div>
                <div className="mt-4">
                  <label className="block mb-2 text-sm font-medium">Is this a construction site or temporary project?</label>
                  <select name="isTemporary" className="w-full p-3 rounded bg-gray-800 border border-gray-600 text-sm font-medium" required>
                    <option>No</option>
                    <option>Yes - Construction Site</option>
                    <option>Yes - Temporary Project</option>
                  </select>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div>
            <label className="block mb-2 text-sm font-medium">Number of Cameras</label>
            <select name="cameraCount" className="w-full p-3 rounded bg-gray-800 border border-gray-600 text-sm font-medium" required>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9+</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">Preferred Monitoring Hours</label>
            <select
              name="monitoringHours"
              className="w-full p-3 rounded bg-gray-800 border border-gray-600 text-sm font-medium"
              value={monitoringHours}
              onChange={(e) => setMonitoringHours(e.target.value)}
              required
            >
              <option>Overnight</option>
              <option>Daytime</option>
              <option>Custom</option>
            </select>
          </div>

          <AnimatePresence>
            {monitoringHours === "Custom" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3 }}
              >
                <label className="block mb-2 text-sm font-medium">Specify Your Preferred Monitoring Hours</label>
                <input name="customMonitoringHours" type="text" className="w-full p-3 rounded bg-gray-800 border border-gray-600" required />
              </motion.div>
            )}
          </AnimatePresence>

          <div>
            <label className="block mb-2 text-sm font-medium">Type of Surveillance System</label>
            <input name="systemType" type="text" className="w-full p-3 rounded bg-gray-800 border border-gray-600" required />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">Monitoring Software Used</label>
            <input name="softwareUsed" type="text" className="w-full p-3 rounded bg-gray-800 border border-gray-600" required />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">Remote Access Method</label>
            <input name="accessMethod" type="text" className="w-full p-3 rounded bg-gray-800 border border-gray-600" required />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">Do you have authorization to access the cameras?</label>
            <select name="authorizedAccess" className="w-full p-3 rounded bg-gray-800 border border-gray-600 text-sm font-medium" required>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">Do you grant CMS permission to monitor your system?</label>
            <select name="cmsPermission" className="w-full p-3 rounded bg-gray-800 border border-gray-600 text-sm font-medium" required>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">Describe Your Surveillance Needs</label>
            <textarea name="description" rows="5" className="w-full p-3 rounded bg-gray-800 border border-gray-600" required />
          </div>

          {/* Residential Conditions */}
          <AnimatePresence>
            {propertyType === "Residential" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="space-y-4">
                  <label className="flex items-center space-x-2">
                    <input name="residentialAgreement" type="checkbox" checked={residentialAgreement} onChange={(e) => setResidentialAgreement(e.target.checked)} required />
                    <span className="text-sm">I understand that I will be required to read and sign a Residential Service Policy Agreement.</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input name="residentialProof" type="checkbox" checked={residentialProof} onChange={(e) => setResidentialProof(e.target.checked)} required />
                    <span className="text-sm">I acknowledge I will be required to submit additional documentation related to ownership or proof of residency.</span>
                  </label>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Commercial Conditions */}
          <AnimatePresence>
            {propertyType === "Commercial" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="space-y-4">
                  <label className="flex items-center space-x-2">
                    <input name="commercialAgreement" type="checkbox" checked={commercialAgreement} onChange={(e) => setCommercialAgreement(e.target.checked)} required />
                    <span className="text-sm">I agree to abide by the Commercial Service Terms provided by CMS.</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input name="commercialProof" type="checkbox" checked={commercialProof} onChange={(e) => setCommercialProof(e.target.checked)} required />
                    <span className="text-sm">I understand that I must provide appropriate authorization and business documentation.</span>
                  </label>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <button type="submit" className="w-full py-3 bg-red-600 hover:bg-red-700 rounded text-white font-semibold">
            Submit Form
          </button>
        </form>
      </motion.div>
    </div>
  );
}

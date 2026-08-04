"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

export default function LeadForm() {
  const [formData, setFormData] = useState({
    name: "",
    countryCode: "India (+91)",
    phone: "",
    whatsappCode: "India (+91)",
    whatsapp: "",
    email: "",
    company: "",
    country: "India",
    city: "",
    budget: "",
  });

  const [phoneError, setPhoneError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/[^0-9]/g, "");
    if (val.length > 10) val = val.slice(0, 10);

    setFormData({ ...formData, phone: val });

    if (val.length > 0) {
      if (val.length < 10) {
        setPhoneError(`Enter ${10 - val.length} more digit${10 - val.length > 1 ? "s" : ""}`);
      } else if (!/^[6-9]/.test(val)) {
        setPhoneError("Indian mobile numbers must start with 6, 7, 8, or 9");
      } else {
        setPhoneError("");
      }
    } else {
      setPhoneError("");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.phone.length !== 10 || !/^[6-9]/.test(formData.phone)) {
      setPhoneError("Please enter a valid 10-digit mobile number");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <section id="start" className="py-20 bg-[#F4F0EA] text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column Meme & Visuals */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            <div className="w-full max-w-sm rounded-3xl overflow-hidden shadow-2xl border-4 border-black transform -rotate-1">
              <img
                src="https://digivirus.in/wp-content/uploads/2025/02/Ae-Chal-Form-Fill-Kar.webp"
                alt="Ae Chal Form Fill Kar Meme Graphic"
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="w-full max-w-sm rounded-2xl overflow-hidden shadow-md border-2 border-black">
              <img
                src="https://digivirus.in/wp-content/uploads/2026/02/admin-ajax-1.webp"
                alt="Digital Marketing Agency Banner"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Right Column Form Container */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#f8f3eb] border-2 border-black shadow-[-8px_8px_0px_#000000] relative">
              <h3 className="text-xl sm:text-2xl font-black text-black uppercase mb-6 text-center sm:text-left tracking-tight">
                FILL THE FORM BELOW TO REQUEST A CALLBACK
              </h3>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-amber-500/10 border-2 border-amber-500 text-center space-y-4 animate-in fade-in duration-300">
                  <CheckCircle2 className="w-16 h-16 text-[#f29627] mx-auto" />
                  <h4 className="text-2xl font-black text-black">Thank You!</h4>
                  <p className="text-gray-800 text-sm max-w-md mx-auto font-medium">
                    Your request has been submitted successfully. Our growth strategist will call you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 bg-[#f29627] text-white font-bold rounded-xl text-sm shadow-[-4px_4px_0px_#000]"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold uppercase text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-white text-black font-medium rounded-xl border border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f29627] text-sm"
                    />
                  </div>

                  {/* Phone Row */}
                  <div>
                    <label className="block text-xs font-bold uppercase text-gray-700 mb-1">
                      Phone Number *
                    </label>
                    <div className="grid grid-cols-12 gap-2">
                      <select
                        value={formData.countryCode}
                        onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                        className="col-span-5 px-3 py-3 bg-white text-black font-medium rounded-xl border border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f29627] text-xs sm:text-sm"
                      >
                        <option value="India (+91)">India (+91)</option>
                        <option value="USA (+1)">USA (+1)</option>
                        <option value="UK (+44)">UK (+44)</option>
                        <option value="UAE (+971)">UAE (+971)</option>
                        <option value="Canada (+1)">Canada (+1)</option>
                      </select>
                      <input
                        type="tel"
                        required
                        maxLength={10}
                        placeholder="Phone"
                        value={formData.phone}
                        onChange={handlePhoneChange}
                        className={`col-span-7 px-4 py-3 bg-white text-black font-medium rounded-xl border ${
                          phoneError ? "border-red-500" : "border-gray-400"
                        } focus:outline-none focus:ring-2 focus:ring-[#f29627] text-sm`}
                      />
                    </div>
                    {phoneError && (
                      <p className="text-xs text-red-600 mt-1 flex items-center gap-1 font-semibold">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {phoneError}
                      </p>
                    )}
                  </div>

                  {/* WhatsApp Number Row */}
                  <div>
                    <label className="block text-xs font-bold uppercase text-gray-700 mb-1">
                      WhatsApp Number *
                    </label>
                    <div className="grid grid-cols-12 gap-2">
                      <select
                        value={formData.whatsappCode}
                        onChange={(e) => setFormData({ ...formData, whatsappCode: e.target.value })}
                        className="col-span-5 px-3 py-3 bg-white text-black font-medium rounded-xl border border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f29627] text-xs sm:text-sm"
                      >
                        <option value="India (+91)">India (+91)</option>
                        <option value="USA (+1)">USA (+1)</option>
                        <option value="UK (+44)">UK (+44)</option>
                        <option value="UAE (+971)">UAE (+971)</option>
                      </select>
                      <input
                        type="tel"
                        required
                        maxLength={10}
                        placeholder="WhatsApp Number"
                        value={formData.whatsapp}
                        onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value.replace(/[^0-9]/g, "") })}
                        className="col-span-7 px-4 py-3 bg-white text-black font-medium rounded-xl border border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f29627] text-sm"
                      />
                    </div>
                  </div>

                  {/* Email & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="Email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-white text-black font-medium rounded-xl border border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f29627] text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase text-gray-700 mb-1">
                        Company Name
                      </label>
                      <input
                        type="text"
                        placeholder="Company Name"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 bg-white text-black font-medium rounded-xl border border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f29627] text-sm"
                      />
                    </div>
                  </div>

                  {/* Country & City */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase text-gray-700 mb-1">
                        Country *
                      </label>
                      <select
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        className="w-full px-4 py-3 bg-white text-black font-medium rounded-xl border border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f29627] text-sm"
                      >
                        <option value="India">India</option>
                        <option value="United States">United States</option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="United Arab Emirates">United Arab Emirates</option>
                        <option value="Canada">Canada</option>
                        <option value="Australia">Australia</option>
                        <option value="Singapore">Singapore</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase text-gray-700 mb-1">
                        City *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="City"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full px-4 py-3 bg-white text-black font-medium rounded-xl border border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f29627] text-sm"
                      />
                    </div>
                  </div>

                  {/* Budget */}
                  <div>
                    <label className="block text-xs font-bold uppercase text-gray-700 mb-1">
                      Marketing Budget *
                    </label>
                    <select
                      required
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 bg-white text-black font-medium rounded-xl border border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f29627] text-sm"
                    >
                      <option value="">--Select Budget--</option>
                      <option value="50K to 1 Lakh ($545 - $1,090)">
                        50K to 1 Lakh ($545 - $1,090)
                      </option>
                      <option value="1 Lakh to 2 Lakh ($1,090 - $2,180)">
                        1 Lakh to 2 Lakh ($1,090 - $2,180)
                      </option>
                      <option value="2 Lakh to 3 Lakh ($2,180 - $3,270)">
                        2 Lakh to 3 Lakh ($2,180 - $3,270)
                      </option>
                      <option value="3 Lakh to Above ($3,270 +)">
                        3 Lakh to Above ($3,270 +)
                      </option>
                    </select>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 bg-[#f29627] hover:bg-[#FFA400] text-white font-extrabold text-base rounded-xl shadow-[-6px_6px_0px_#000000] hover:shadow-[-8px_8px_0px_#000000] transition-all flex items-center justify-center gap-2 mt-4"
                  >
                    {loading ? (
                      <span className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                    ) : (
                      <>
                        Submit Request
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

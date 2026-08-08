"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const mailtoLink = `mailto:ahnaf@ahnafzamil.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nOrganization: ${formData.organization}\n\n${formData.message}`
    )}`;

    window.location.href = mailtoLink;
    setSubmitted(true);
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="flex flex-col min-h-screen bg-theme-bg">
      <Navbar />
      <main className="flex-grow">
        <section className="container max-w-4xl mx-auto my-12 text-center px-8">
          <p className="text-xl text-theme-text">
            You can send me an email at{" "}
            <span className="font-mono text-white">ahnaf@ahnafzamil.com</span> or{" "}
            <a
              href="https://calendly.com/ahnafzamil/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-500 hover:underline"
            >
              book a call here
            </a>
            .
          </p>
        </section>

        <h2 className="text-3xl text-center font-title font-bold mb-6">OR</h2>

        <section className="max-w-3xl mx-auto py-16 px-8 fadeIn">
          <h2 className="text-3xl font-bold mb-6 text-center font-title">
            CONTACT ME HERE
          </h2>

          {submitted ? (
            <p className="text-center text-theme-accent text-lg">
              Your email client should have opened. If not, please email me directly at{" "}
              <span className="font-mono text-white">ahnaf@ahnafzamil.com</span>
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  minLength={2}
                  maxLength={50}
                  className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-theme-accent-2"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  minLength={5}
                  maxLength={320}
                  className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-theme-accent-2"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="organization" className="block mb-2 text-sm font-medium">
                  Organization
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  maxLength={100}
                  className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-theme-accent-2"
                  placeholder="Your company (optional)"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block mb-2 text-sm font-medium">
                  Subject <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  minLength={5}
                  maxLength={150}
                  className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-theme-accent-2"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  minLength={5}
                  maxLength={2000}
                  rows={5}
                  className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-theme-accent-2 resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-indigo-500 hover:bg-indigo-800 cursor-pointer font-medium text-white py-3 px-6 rounded-lg transition-all disabled:opacity-50"
              >
                {isSubmitting ? "Opening email client..." : "Send Message"}
              </button>
            </form>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}


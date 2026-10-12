"use client";

import { useState } from "react";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandYoutube,
  IconBrandTiktok,
  IconPhone,
} from "@tabler/icons-react";

const socials = [
  {
    title: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61555129179931",
    Icon: IconBrandFacebook,
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/ela.pressurewashing/",
    Icon: IconBrandInstagram,
  },
  {
    title: "YouTube",
    href: "https://www.youtube.com/@elapressurewashing5332",
    Icon: IconBrandYoutube,
  },
  {
    title: "TikTok",
    href: "https://www.tiktok.com/@ela_pressure_washing",
    Icon: IconBrandTiktok,
  },
];

const initialFormData = {
  name: "",
  email: "",
  phone: "",
  message: "",
  contactMethod: {
    email: false,
    phone: false,
  },
};

const inputClassName =
  "block w-full bg-white dark:bg-neutral-900 px-4 rounded-md border-0 py-1.5 shadow-input text-black placeholder:text-gray-400 focus:ring-2 focus:ring-neutral-400 focus:outline-none sm:text-sm sm:leading-6 dark:text-white";

const labelClassName =
  "block text-sm font-medium leading-6 text-neutral-700 dark:text-neutral-400";

export function SimpleCenteredContactForm() {
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState(initialFormData);
  const [submitting, setSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (formData.name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters long.";
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(formData.email.trim())) {
      newErrors.email = "Email address is invalid.";
    }

    const normalizedPhone = formData.phone.replace(/[\s().-]/g, "");

    const phonePattern = /^\+?\d{10,15}$/;

    if (!phonePattern.test(normalizedPhone)) {
      newErrors.phone = "Enter a valid phone number (10–15 digits).";
    }

    if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    if (type === "checkbox") {
      const method = name === "contactMethodEmail" ? "email" : "phone";

      setFormData((previous) => ({
        ...previous,
        contactMethod: {
          ...previous.contactMethod,
          [method]: checked,
        },
      }));

      return;
    }

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setErrors((previous) => ({
      ...previous,
      [name]: undefined,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (submitting || !validateForm()) {
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch("/api/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));

        throw new Error(errorData?.message || "Unable to send your message.");
      }

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        contactMethod: {
          email: false,
          phone: false,
        },
      });

      setErrors({});

      alert("Your message has been sent successfully!");
    } catch (error) {
      console.error("Contact form submission failed:", error);

      alert("Error sending your message. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-slate-950 w-full flex items-center justify-center pt-20">
      <div className="flex relative px-4 z-20 items-center w-full justify-center py-10">
        <div className="mx-auto w-full max-w-lg bg-white dark:bg-neutral-950 px-4 md:px-10 py-8 shadow-input rounded-3xl">
          <div>
            <h1 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-black dark:text-white">
              Contact ELA Pressure Washing
            </h1>

            <p className="mt-4 text-neutral-600 dark:text-neutral-400 text-sm max-w-sm">
              Looking for professional pressure washing, steam cleaning or
              exterior cleaning services in Wolverhampton and the West Midlands?
              Contact ELA Pressure Washing for a free quote or to discuss your
              residential or commercial cleaning requirements.
            </p>

            <a
              href="tel:+447852435168"
              className="flex items-center justify-center mt-4 text-neutral-600 dark:text-white text-sm max-w-sm hover:underline"
              aria-label="Call ELA Pressure Washing on 07852 435168"
            >
              <IconPhone aria-hidden="true" />
              <span className="ml-2">07852 435168</span>
            </a>
          </div>

          <div className="py-10">
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div>
                <label htmlFor="name" className={labelClassName}>
                  Full Name
                </label>

                <div className="mt-2">
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    minLength={3}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    className={inputClassName}
                  />

                  {errors.name && (
                    <p
                      id="name-error"
                      role="alert"
                      className="text-red-500 text-sm mt-1"
                    >
                      {errors.name}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="email" className={labelClassName}>
                  Email Address
                </label>

                <div className="mt-2">
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="hello@example.com"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    className={inputClassName}
                  />

                  {errors.email && (
                    <p
                      id="email-error"
                      role="alert"
                      className="text-red-500 text-sm mt-1"
                    >
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="phone" className={labelClassName}>
                  Phone Number
                </label>

                <div className="mt-2">
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    placeholder="07123 456789"
                    autoComplete="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? "phone-error" : undefined}
                    className={inputClassName}
                  />

                  {errors.phone && (
                    <p
                      id="phone-error"
                      role="alert"
                      className="text-red-500 text-sm mt-1"
                    >
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              <fieldset className="py-4">
                <legend className={labelClassName}>
                  Preferred Method of Contact
                </legend>

                <div className="flex items-center mt-2">
                  <input
                    id="contact-method-email"
                    type="checkbox"
                    name="contactMethodEmail"
                    checked={formData.contactMethod.email}
                    onChange={handleChange}
                    className="mr-2"
                  />

                  <label
                    htmlFor="contact-method-email"
                    className="text-sm text-neutral-700 dark:text-neutral-400"
                  >
                    Email
                  </label>
                </div>

                <div className="flex items-center mt-2">
                  <input
                    id="contact-method-phone"
                    type="checkbox"
                    name="contactMethodPhone"
                    checked={formData.contactMethod.phone}
                    onChange={handleChange}
                    className="mr-2"
                  />

                  <label
                    htmlFor="contact-method-phone"
                    className="text-sm text-neutral-700 dark:text-neutral-400"
                  >
                    Phone
                  </label>
                </div>
              </fieldset>

              <div>
                <label htmlFor="message" className={labelClassName}>
                  Your Message
                </label>

                <div className="mt-2">
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell us about your cleaning requirements..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    minLength={10}
                    aria-invalid={!!errors.message}
                    aria-describedby={
                      errors.message ? "message-error" : undefined
                    }
                    className={inputClassName}
                  />

                  {errors.message && (
                    <p
                      id="message-error"
                      role="alert"
                      className="text-red-500 text-sm mt-1"
                    >
                      {errors.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="bg-black relative z-10 hover:bg-black/90 text-white text-sm md:text-sm transition font-medium duration-200 rounded-full px-4 py-2 flex items-center justify-center w-full dark:text-black dark:bg-white dark:hover:bg-neutral-100 dark:hover:shadow-xl disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? "Sending your enquiry..." : "Send Enquiry"}
                </button>
              </div>
            </form>
          </div>

          <div className="flex items-center justify-center space-x-4 py-4">
            {socials.map(({ title, href, Icon }) => (
              <a
                href={href}
                key={title}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Follow ELA Pressure Washing on ${title}`}
                className="text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
              >
                <Icon className="h-5 w-5" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

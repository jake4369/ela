"use client";
import Link from "next/link";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandYoutube,
  IconBrandTiktok,
  IconPhone,
} from "@tabler/icons-react";
import { useState } from "react";

const socials = [
  {
    title: "facebook",
    href: "https://www.facebook.com/profile.php?id=100083060296284",
    icon: (
      <IconBrandFacebook className="h-5 w-5 text-neutral-600 dark:text-neutral-400 hover:text-black" />
    ),
  },
  {
    title: "instagram",
    href: "https://www.instagram.com/ela.pressurewashing/",
    icon: (
      <IconBrandInstagram className="h-5 w-5 text-neutral-600 dark:text-neutral-400 hover:text-black" />
    ),
  },
  {
    title: "youtube",
    href: "www.youtube.com/@elapressurewashing5332",
    icon: (
      <IconBrandYoutube className="h-5 w-5 text-neutral-600 dark:text-neutral-400 hover:text-black" />
    ),
  },
  {
    title: "tiktok",
    href: "https://www.tiktok.com/@ela_pressure_washing",
    icon: (
      <IconBrandTiktok className="h-5 w-5 text-neutral-600 dark:text-neutral-400 hover:text-black" />
    ),
  },
];

export function SimpleCenteredContactForm() {
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const target = e.target;
    const name = target.name.value.trim();
    const email = target.email.value.trim();
    const message = target.message.value.trim();

    let newErrors = {};

    // Basic validation rules
    if (!name) {
      newErrors.name = "Full name is required.";
    } else if (name.length < 3) {
      newErrors.name = "Full name must be at least 3 characters long.";
    }

    if (!email) {
      newErrors.email = "Email address is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email address is invalid.";
    }

    if (!message) {
      newErrors.message = "Message is required.";
    } else if (message.length < 10) {
      newErrors.message = "Message must be at least 10 characters long.";
    }

    if (Object.keys(newErrors).length === 0) {
      // If there are no errors, submit the form
      console.log("Form submitted", { name, email, message });
      // Clear form or handle the submission
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="bg-gray-50 dark:bg-slate-950 w-full flex items-center justify-center pt-20">
      {/* Main content container */}
      <div
        className="flex relative px-4 z-20 items-center w-full justify-center py-10"
        role="main"
      >
        <div className="mx-auto w-full max-w-lg bg-white dark:bg-neutral-950 px-4 md:px-10 py-8 shadow-input rounded-3xl">
          <div>
            <h1 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-black dark:text-white">
              Contact Us
            </h1>
            <p className="mt-4 text-neutral-600 dark:text-neutral-400 text-sm max-w-sm">
              Have questions or ready to book a service? Give us a call or fill
              out the form below, and the ELA Pressure Washing team will get
              back to you promptly with a free quote and answers to your
              questions.
            </p>

            {/* Phone number with screen-reader accessible text */}
            <a
              href="tel:+447852435168"
              className="flex align-center justify-center mt-4 text-neutral-600 dark:text-white text-sm max-w-sm"
              aria-label="Call us at 07852435168"
            >
              <IconPhone aria-hidden="true" />
              <span className="ml-2">07852435168</span>
            </a>
          </div>

          {/* Form starts */}
          <div className="py-10">
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium leading-6 text-neutral-700 dark:text-neutral-400"
                >
                  Full Name
                </label>
                <div className="mt-2">
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    required
                    minLength={3}
                    aria-required="true"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    className="block w-full bg-white dark:bg-neutral-900 px-4 rounded-md border-0 py-1.5 shadow-input text-black placeholder:text-gray-400 focus:ring-2 focus:ring-neutral-400 focus:outline-none sm:text-sm sm:leading-6 dark:text-white"
                  />
                  {errors.name && (
                    <p id="name-error" className="text-red-500 text-sm">
                      {errors.name}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-neutral-700 dark:text-neutral-400"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="hello@johndoe.com"
                    required
                    aria-required="true"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    className="block w-full bg-white dark:bg-neutral-900 px-4 rounded-md border-0 py-1.5 shadow-input text-black placeholder:text-gray-400 focus:ring-2 focus:ring-neutral-400 focus:outline-none sm:text-sm sm:leading-6 dark:text-white"
                  />
                  {errors.email && (
                    <p id="email-error" className="text-red-500 text-sm">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium leading-6 text-neutral-700 dark:text-neutral-400"
                >
                  Message
                </label>
                <div className="mt-2">
                  <textarea
                    rows={5}
                    id="message"
                    name="message"
                    placeholder="Enter your message here"
                    required
                    minLength={10}
                    aria-required="true"
                    aria-invalid={!!errors.message}
                    aria-describedby={
                      errors.message ? "message-error" : undefined
                    }
                    className="block w-full bg-white dark:bg-neutral-900 px-4 rounded-md border-0 py-1.5 shadow-input text-black placeholder:text-gray-400 focus:ring-2 focus:ring-neutral-400 focus:outline-none sm:text-sm sm:leading-6 dark:text-white"
                  />
                  {errors.message && (
                    <p id="message-error" className="text-red-500 text-sm">
                      {errors.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="bg-black relative z-10 hover:bg-black/90 text-white text-sm md:text-sm transition font-medium duration-200 rounded-full px-4 py-2 flex items-center justify-center w-full dark:text-black dark:bg-white dark:hover:bg-neutral-100 dark:hover:shadow-xl"
                  aria-label="Submit form"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>

          {/* Social links */}
          <div className="flex items-center justify-center space-x-4 py-4">
            {socials.map((social) => (
              <Link
                href={social.href}
                key={social.title}
                target="_blank"
                aria-label={`Follow us on ${social.title}`}
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

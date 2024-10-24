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
    href: "https://www.facebook.com/profile.php?id=61555129179931",
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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "", // Added phone field
    message: "",
    contactMethod: { email: false, phone: false },
  });
  const [submitting, setSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (formData.name.length < 3) {
      newErrors.name = "Name must be at least 3 characters long.";
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid.";
    }
    if (!/^\+?\d{10,15}$/.test(formData.phone)) {
      // Add phone validation (10-15 digits)
      newErrors.phone = "Phone number is invalid.";
    }
    if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters long.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      let key;
      if (name === "contactMethodEmail") {
        key = "email";
      } else if (name === "contactMethodPhone") {
        key = "phone";
      }

      setFormData((prevData) => ({
        ...prevData,
        contactMethod: {
          ...prevData.contactMethod,
          [key]: checked,
        },
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
      // Clear error for the field being edited
      setErrors((prevErrors) => ({ ...prevErrors, [name]: undefined }));
    }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setSubmitting(true);

  //   if (!validateForm()) {
  //     return; // Don't submit if validation fails
  //   }

  //   try {
  //     // Make sure contactMethod is defined
  //     const response = await fetch("/api/emails", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(formData), // Send the form data as JSON
  //     });

  //     if (!response.ok) {
  //       // Handle the error response as needed
  //       const errorData = await response.json();
  //       throw new Error(errorData.message || "An error occurred");
  //     }

  //     // Reset the form or show success message here
  //     setFormData({
  //       name: "",
  //       email: "",
  //       phone: "",
  //       message: "",
  //       contactMethod: { email: false, phone: false }, // Reset the contact method state as well
  //     });
  //     alert("Your message has been sent successfully!"); // Example success message
  //   } catch (error) {
  //     console.error(error);
  //     // Handle submission error (e.g., display an error message)
  //   } finally {
  //     setSubmitting(false);
  //   }
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    if (!validateForm()) {
      setSubmitting(false); // Ensure setSubmitting is called when validation fails
      return; // Don't submit if validation fails
    }

    try {
      // Make sure contactMethod is defined
      const response = await fetch("/api/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), // Send the form data as JSON
      });

      if (!response.ok) {
        // Handle the error response as needed
        const errorData = await response.json();
        throw new Error(errorData.message || "An error occurred");
      }

      // Reset the form or show success message here
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        contactMethod: { email: false, phone: false }, // Reset the contact method state as well
      });
      alert("Your message has been sent successfully!"); // Example success message
    } catch (error) {
      console.error(error);
      // Handle submission error (e.g., display an error message)
      alert("Error sending message. Please try again");
    } finally {
      setSubmitting(false); // Always reset submitting state
    }
  };

  return (
    <div className="bg-gray-50 dark:bg-slate-950 w-full flex items-center justify-center pt-20">
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
            <a
              href="tel:+447852435168"
              className="flex align-center justify-center mt-4 text-neutral-600 dark:text-white text-sm max-w-sm"
              aria-label="Call us at 07852435168"
            >
              <IconPhone aria-hidden="true" />
              <span className="ml-2">07852435168</span>
            </a>
          </div>

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
                    value={formData.name}
                    onChange={handleChange}
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
                    value={formData.email}
                    onChange={handleChange}
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
                  htmlFor="phone"
                  className="block text-sm font-medium leading-6 text-neutral-700 dark:text-neutral-400"
                >
                  Phone number
                </label>
                <div className="mt-2">
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    placeholder="(123) 456-7890"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    aria-required="true"
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? "phone-error" : undefined}
                    className="block w-full bg-white dark:bg-neutral-900 px-4 rounded-md border-0 py-1.5 shadow-input text-black placeholder:text-gray-400 focus:ring-2 focus:ring-neutral-400 focus:outline-none sm:text-sm sm:leading-6 dark:text-white"
                  />
                  {errors.phone && (
                    <p id="phone-error" className="text-red-500 text-sm">
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              <div className="py-4">
                <p className="block text-sm font-medium leading-6 text-neutral-700 dark:text-neutral-400">
                  Preferred method of contact:
                </p>
                <div className="flex items-center mt-2">
                  <input
                    id="contact-method-email"
                    type="checkbox"
                    name="contactMethodEmail" // Changed name to be unique
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
                <div className="flex items-center">
                  <input
                    id="contact-method-phone"
                    type="checkbox"
                    name="contactMethodPhone" // Changed name to be unique
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
                    value={formData.message}
                    onChange={handleChange}
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
                  {submitting ? "Submitting..." : "Submit"}
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

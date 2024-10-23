import { Button, Html, Img, Link } from "@react-email/components";
import * as React from "react";

export default function Email({ name, email, phone, contactMethod, message }) {
  return (
    <Html>
      <h1>ELA Pressure Washing</h1>

      <p>
        You have contact request from <strong>{name}</strong>
      </p>

      <h2>Message</h2>
      <p>{message}</p>

      <h3>Preferred method of contact:</h3>
      <p>
        {contactMethod.phone && contactMethod.email
          ? `${email} or ${phone}`
          : contactMethod.phone
          ? phone
          : email}
      </p>
    </Html>
  );
}

import { Html, Heading, Img, Link } from "@react-email/components";
import * as React from "react";

export default function Email({
  name,
  email = "email@gmail.com",
  phone = "01902656564",
  contactMethod,
  message,
}) {
  return (
    <Html>
      <body
        style={{
          fontFamily: "sans-serif",
          // display: "flex",
          // flexDirection: "column",
        }}
      >
        <main
          style={{
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            width: "87.2%",
            maxWidth: "689px",
          }}
        >
          <h1
            style={{
              textAlign: "center",
              color: "#005080",
            }}
          >
            ELA Pressure Washing And Steam Cleaning
          </h1>

          <p
            style={{
              color: "#484848",
            }}
          >
            You have contact request from:
            <strong
              style={{ display: "block", color: "#000", marginTop: "5px" }}
            >
              {name}
            </strong>
          </p>

          <h2>Message</h2>
          <div
            style={{
              padding: "24px",
              backgroundColor: "#f2f3f3",
              borderRadius: "4px",
            }}
          >
            <quote>"{message}"</quote>
          </div>

          <h3>Preferred method of contact:</h3>

          <p>
            {contactMethod.phone && contactMethod.email ? (
              `Email: ${email} or Phone: ${phone}`
            ) : contactMethod.phone ? (
              <>
                Phone: <Link href={`tel:${phone}`}>{phone}</Link>
              </>
            ) : contactMethod.email ? (
              <>
                Email: <Link href={`mailto:${email}`}>{email}</Link>
              </>
            ) : (
              "No contact information available"
            )}
          </p>

          <Img
            src="https://i.ibb.co/drmcvWK/logo.png"
            alt="ELA logo"
            width="250"
            height="250"
            style={{
              alignSelf: "center",
            }}
          />
        </main>
      </body>
    </Html>
  );
}

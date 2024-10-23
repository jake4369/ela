import { Resend } from "resend";
import Email from "@/components/emails/Email";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { name, email, phone, contactMethod, message } = await request.json();
    console.log(name);

    const { data, error } = await resend.emails.send({
      from: `${
        process.env.NODE_ENV === "development"
          ? "Acme <onboarding@resend.dev>"
          : "ELA <samuels242@googlemail.com>"
      }`,
      to: ["samuels242@googlemail.com"],
      subject: `New Contact Form Submission from ${name}`,
      react: Email({ name, email, phone, contactMethod, message }),
    });

    if (error) {
      console.error("Email sending error:", error);
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    console.error("Email sending error:", error);
    return Response.json({ error }, { status: 500 });
  }
}
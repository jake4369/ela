import { EmailTemplate } from "../../../components/EmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST() {
//   try {
//     const { data, error } = await resend.emails.send({
//       from: data.email,
//       to: ["jsamuelsdev@gmail.com"],
//       subject: "Hello world",
//       react: EmailTemplate({ firstName: data }),
//     });

//     if (error) {
//       return Response.json({ error }, { status: 500 });
//     }

//     return Response.json(data);
//   } catch (error) {
//     return Response.json({ error }, { status: 500 });
//   }
// }

export async function POST(request) {
  try {
    const data = await request.json(); // Receive data from request body
    const { name, email, message } = data;

    const response = await resend.emails.send({
      from: email, // Use the user's email from the form
      to: ["jsamuelsdev@gmail.com"], // Recipient email
      subject: `New Contact Form Submission from ${name}`, // Subject with user's name
      react: EmailTemplate({ firstName: name, message }), // Pass user info to your email template
    });

    // If there is an error sending the email
    if (response.error) {
      return new Response(JSON.stringify({ error: response.error }), {
        status: 500,
      });
    }

    // Successful email sent response
    return new Response(
      JSON.stringify({ success: true, message: "Email sent successfully!" }),
      {
        status: 200,
      }
    );
  } catch (error) {
    // Catch and handle any errors
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}

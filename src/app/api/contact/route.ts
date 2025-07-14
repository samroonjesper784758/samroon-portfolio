import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const POST = async (request: NextRequest) => {
  try {
    const { firstname, lastname, email, message } = await request.json();

    // 1. Validate input
    if (!firstname || !lastname || !email || !message) {
      return NextResponse.json(
        {
          error:
            "All fields (firstname, lastname, email, message) are required.",
        },
        { status: 400 }
      );
    }

    // 2. Create Nodemailer transporter (Gmail SMTP)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // 3. Send email
    await transporter.sendMail({
      from: `"Portfolio Contact Form" <${process.env.SMTP_USER}>`, // ✅ From you
      to: process.env.EMAIL_TO, // ✅ To you
      subject: `New message from ${firstname} ${lastname}`,
      replyTo: email, // ✅ Reply to the visitor
      text: `
You received a new message from your portfolio contact form:

Name: ${firstname} ${lastname}
Email: ${email}

Message:
${message}
      `,
    });

    return NextResponse.json(
      { message: "Your message has been sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
};

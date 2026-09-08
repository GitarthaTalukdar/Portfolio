import { Resend } from "resend"

export async function POST(request: Request) {
  try {
    // Check API key FIRST
    const apiKey = process.env.RESEND_API_KEY

    if (!apiKey) {
      console.error("RESEND_API_KEY is missing")
      return Response.json(
        { error: "RESEND_API_KEY is missing. Check .env.local" },
        { status: 500 }
      )
    }

    // Create Resend only after confirming the key exists
    const resend = new Resend(apiKey)

    const { name, email, message } = await request.json()

    if (!name || !email || !message) {
      return Response.json(
        { error: "Name, email and message are required." },
        { status: 400 }
      )
    }

    const { data, error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: ["gitarthatalukdar04@gmail.com"],
      replyTo: email,
      subject: `Portfolio Contact from ${name}`,
      html: `
        <h2>New Portfolio Message</h2>

        <p><strong>Name:</strong> ${name}</p>

        <p><strong>Email:</strong> ${email}</p>

        <hr />

        <p><strong>Message:</strong></p>

        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    })

    if (error) {
      console.error("RESEND ERROR:", error)

      return Response.json(
        { error: error.message || "Resend rejected the email." },
        { status: 500 }
      )
    }

    console.log("EMAIL SENT:", data)

    return Response.json(
      {
        success: true,
        message: "Email sent successfully.",
      },
      { status: 200 }
    )

  } catch (error) {
    console.error("SERVER ERROR:", error)

    return Response.json(
      { error: "Server error while sending email." },
      { status: 500 }
    )
  }
}
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const TO_EMAIL = "vidhyasagarsonawane571@gmail.com";
// Use your verified sender from Resend; onboarding@resend.dev works for testing
const FROM_EMAIL = "onboarding@resend.dev";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const {
      name,
      contactNumber,
      email,
      standard,
      parentName,
      schoolName,
      boardType,
      subjects,
      comments,
    } = body;

    if (!name || !contactNumber || !email || !standard) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY is not set");
      return NextResponse.json(
        { error: "Email service not configured. Please try again later." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const subject = `New Inquiry from ${name} (${standard})`;

    const subjectList =
      Array.isArray(subjects) && subjects.length > 0
        ? subjects.join(", ")
        : "Not specified";

    const html = `
      <h2>New Inquiry Received</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Parent's Name:</strong> ${parentName || "Not specified"}</p>
      <p><strong>Contact Number:</strong> ${contactNumber}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Standard:</strong> ${standard}</p>
      <p><strong>School Name:</strong> ${schoolName || "Not specified"}</p>
      <p><strong>Board Type:</strong> ${boardType || "Not specified"}</p>
      <p><strong>Subjects Interested:</strong> ${subjectList}</p>
      <p><strong>Comments / Requirements:</strong></p>
      <p>${comments || "No additional comments provided."}</p>
    `;

    const result = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      reply_to: email,
      subject,
      html,
    } as any);

    if ((result as any)?.error) {
      console.error("Error sending email via Resend:", (result as any).error);
      return NextResponse.json(
        { error: "Failed to send email. Please try again later." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Inquiry submitted successfully. We'll contact you soon!",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Failed to process inquiry. Please try again." },
      { status: 500 }
    );
  }
}



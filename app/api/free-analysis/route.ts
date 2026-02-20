import { NextRequest, NextResponse } from "next/server";

// Placeholder API route for the "Get Free Analysis" form submission.
//
// In production you would:
//   1. Parse and validate the incoming FormData fields.
//   2. Upload the handwriting-sample file to object storage (S3 / Cloudinary).
//   3. Persist lead data in your database (PostgreSQL, Supabase, etc.).
//   4. Send a confirmation email to the user (Resend / SendGrid).
//   5. Notify Kamlesh via email / WhatsApp / CRM.

export async function POST(req: NextRequest) {
  try {
    const data = await req.formData();

    const fullName = data.get("fullName") as string | null;
    const email    = data.get("email")    as string | null;
    const whatsapp = data.get("whatsapp") as string | null;
    const goals    = data.get("goals")    as string | null;
    const sample   = data.get("sample")   as File   | null;

    // Basic server-side guard — the client also validates these.
    if (!fullName || !email || !goals) {
      return NextResponse.json(
        { success: false, message: "Missing required fields." },
        { status: 400 },
      );
    }

    // Log received data (replace with real processing).
    console.log("[free-analysis] New submission:", {
      fullName,
      email,
      whatsapp,
      goals,
      sampleName: sample?.name ?? null,
      sampleSize: sample?.size ?? null,
    });

    return NextResponse.json({
      success: true,
      message:
        "Thank you! Your request has been received. Kamlesh will be in touch within 24 hours.",
    });
  } catch (err) {
    console.error("[free-analysis] Error:", err);
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}

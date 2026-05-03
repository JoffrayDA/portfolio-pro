import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Champs manquants." }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "Portfolio <onboarding@resend.dev>",
    to: "joffray.dealberto@gmail.com",
    replyTo: email,
    subject: `Message de ${name} — Portfolio`,
    text: `Nom : ${name}\nEmail : ${email}\n\n${message}`,
  });

  if (error) {
    return NextResponse.json({ error: "Envoi échoué." }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}

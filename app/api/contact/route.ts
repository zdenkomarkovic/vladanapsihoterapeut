import { NextResponse } from "next/server";
import Mailjet from "node-mailjet";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2, "Unesite ime i prezime"),
  email: z.string().email("Unesite ispravnu mejl adresu"),
  phone: z.string().min(6, "Unesite broj telefona"),
  schedule: z.string().min(2, "Unesite okvirne termine"),
  message: z.string().optional(),
});

export async function POST(request: Request) {
  const body = await request.json();
  const result = schema.safeParse(body);

  if (!result.success) {
    return NextResponse.json(
      { error: result.error.errors[0]?.message ?? "Neispravni podaci" },
      { status: 400 }
    );
  }

  const { name, email, phone, schedule, message } = result.data;

  const mailjet = new Mailjet({
    apiKey: process.env.MAILJET_API_KEY!,
    apiSecret: process.env.MAILJET_SECRET_KEY!,
  });

  const htmlBody = `
    <h2>Novi upit sa sajta</h2>
    <table style="border-collapse:collapse;width:100%;font-family:sans-serif;font-size:14px;">
      <tr><td style="padding:8px;color:#666;width:160px;"><strong>Ime i prezime</strong></td><td style="padding:8px;">${name}</td></tr>
      <tr><td style="padding:8px;color:#666;"><strong>Mejl</strong></td><td style="padding:8px;"><a href="mailto:${email}">${email}</a></td></tr>
      <tr><td style="padding:8px;color:#666;"><strong>Telefon</strong></td><td style="padding:8px;">${phone}</td></tr>
      <tr><td style="padding:8px;color:#666;"><strong>Okvirni termini</strong></td><td style="padding:8px;">${schedule}</td></tr>
      ${message ? `<tr><td style="padding:8px;color:#666;"><strong>Poruka</strong></td><td style="padding:8px;">${message}</td></tr>` : ""}
    </table>
  `;

  await mailjet.post("send", { version: "v3.1" }).request({
    Messages: [
      {
        From: {
          Email: process.env.SITE_MAIL_SENDER!.trim(),
          Name: "Vladana Psihoterapeut",
        },
        To: [
          {
            Email: process.env.SITE_MAIL_RECEIVER!.trim(),
            Name: "Vladana",
          },
        ],
        ReplyTo: {
          Email: email,
          Name: name,
        },
        Subject: `Upit sa sajta — ${name}`,
        HTMLPart: htmlBody,
        TextPart: `Ime: ${name}\nMejl: ${email}\nTelefon: ${phone}\nTermini: ${schedule}${message ? `\nPoruka: ${message}` : ""}`,
      },
    ],
  });

  return NextResponse.json({ ok: true });
}

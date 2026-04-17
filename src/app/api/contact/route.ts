import { FormSchema } from '@/components/ui/Form/schema';

export async function POST(req: Request) {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
  const accessToken = process.env.EMAILJS_ACCESS_TOKEN;

  if (!serviceId || !templateId || !publicKey || !accessToken) {
    throw new Error('Missing EmailJS credentials');
  }

  const body = await req.json();

  const parse = FormSchema.safeParse(body);

  if (!parse.success) {
    console.error('Zod validation error:', parse.error);
    return new Response(
      JSON.stringify({ success: false, error: parse.error }),
      { status: 500 },
    );
  }

  const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      accessToken: accessToken,
      template_params: body,
    }),
  });

  const responseText = await res.text();

  if (!res.ok) {
    console.error('EmailJS API error:', responseText);

    return new Response(
      JSON.stringify({ success: false, error: responseText }),
      { status: 500 },
    );
  }

  return Response.json({ success: true });
}

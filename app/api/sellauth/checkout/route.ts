import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { productId, variantId, email } = await req.json();
    const API_KEY = process.env.SELLAUTH_API_KEY;
    const SHOP_ID = process.env.SELLAUTH_SHOP_ID;

    if (!API_KEY || !SHOP_ID) {
      return NextResponse.json({ error: 'SellAuth API credentials not set.' }, { status: 500 });
    }
    if (!productId) {
      return NextResponse.json({ error: 'Missing productId.' }, { status: 400 });
    }

    // Get IP and user agent from headers (fallbacks for local dev)
    const ip = req.headers.get('x-forwarded-for') || '127.0.0.1';
    const user_agent = req.headers.get('user-agent') || 'unknown';

    const body: any = {
      cart: [{ productId, variantId: variantId || productId, quantity: 1 }],
      ip,
      user_agent,
    };
    if (email) {
      body.email = email;
    }

    const response = await fetch(`https://api.sellauth.com/v1/shops/${SHOP_ID}/checkout`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();
    if (!data.success) {
      console.error('SellAuth API error:', response.status, data);
      return NextResponse.json({ error: 'Checkout failed', details: data }, { status: 400 });
    }

    return NextResponse.json({ url: data.url });
  } catch (error) {
    console.error('Internal server error in SellAuth checkout route:', error);
    return NextResponse.json({ error: 'Internal server error', details: error }, { status: 500 });
  }
} 
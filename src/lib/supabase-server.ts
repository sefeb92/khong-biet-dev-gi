import { createServerClient as createSSRServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';

// Async Server client helper for Next.js App Router (Server Components / Actions)
export const createServerClient = async () => {
  const cookieStore = await cookies();
  
  return createSSRServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder-url.supabase.co',
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-anon-key',
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            );
          } catch {
            // Ignored if called from Server Component
          }
        },
      },
    }
  );
};

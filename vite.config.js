import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      __HCM_SUPABASE_URL__: JSON.stringify(env.VITE_SUPABASE_URL || env.NEXT_PUBLIC_SUPABASE_URL || ''),
      __HCM_SUPABASE_KEY__: JSON.stringify(env.VITE_SUPABASE_PUBLISHABLE_KEY || env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || ''),
      __HCM_ONLINE_BACKEND__: JSON.stringify(env.VITE_ONLINE_BACKEND || 'supabase'),
    },
    server: { allowedHosts: true },
    preview: { allowedHosts: true },
  };
});

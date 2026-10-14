// Konfigurasi aplikasi Penjaga Data Klinik Sehat Bersama.
// Kunci "anon" / "publishable" AMAN berada di sini (memang dirancang publik); keamanan dijaga oleh RLS di basis data.
// JANGAN PERNAH menaruh kunci "service_role" di berkas apa pun di folder web/.
window.APP_CONFIG = {
  SUPABASE_URL: 'https://icmkbazlkdhlfbvbvthq.supabase.co',
  // Ganti dengan kunci anon/publishable proyek di atas (Supabase > Project Settings > API).
  SUPABASE_ANON_KEY: 'ISI-DENGAN-ANON-KEY',
  // Aplikasi jaringan (Petualangan Teknisi Jaringan Kampus) untuk cek kesiapan:
  // SITUS = alamat situsnya (tautan anjuran). SUPABASE_URL dan SUPABASE_ANON_KEY = proyek Supabase aplikasi jaringan,
  // dipakai untuk memeriksa kode sertifikat jaringan. Biarkan kosong bila belum ada (opsi kode sertifikat disembunyikan).
  JARINGAN: {
    NAMA: 'Petualangan Teknisi Jaringan Kampus',
    SITUS: 'https://harfcode.github.io/basic-network-and-data-security',
    SUPABASE_URL: 'https://icmkbazlkdhlfbvbvthq.supabase.co',
    SUPABASE_ANON_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImljbWtiYXpsa2RobGZidmJ2dGhxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTE5NzU5ODgsImV4cCI6MjEwNzU1MTk4OH0.LCjH1fLdH-l1N9kaCA3XhRNp9tMBsf-wd92Vbtc5W1g'
  }
};

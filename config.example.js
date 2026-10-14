// Salin berkas ini menjadi config.js lalu isi dengan data proyek Supabase Anda.
// Kunci "anon" / "publishable" AMAN berada di sini (memang dirancang publik); keamanan dijaga oleh RLS di basis data.
// JANGAN PERNAH menaruh kunci "service_role" di berkas apa pun di folder web/.
window.APP_CONFIG = {
  SUPABASE_URL: 'https://PROYEK-ANDA.supabase.co',
  SUPABASE_ANON_KEY: 'ISI-DENGAN-ANON-KEY',
  // Aplikasi jaringan (Petualangan Teknisi Jaringan Kampus) untuk cek kesiapan:
  // SITUS = alamat situsnya (tautan anjuran). SUPABASE_URL dan SUPABASE_ANON_KEY = proyek Supabase aplikasi jaringan,
  // dipakai untuk memeriksa kode sertifikat jaringan. Kosongkan bila tidak dipakai (opsi kode sertifikat disembunyikan).
  JARINGAN: {
    NAMA: 'Petualangan Teknisi Jaringan Kampus',
    SITUS: '',
    SUPABASE_URL: '',
    SUPABASE_ANON_KEY: ''
  }
};

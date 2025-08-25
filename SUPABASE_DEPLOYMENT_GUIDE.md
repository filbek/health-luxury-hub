# Supabase Deployment Kılavuzu

Bu kılavuz, Health Luxury Hub projesinin Supabase'e nasıl deploy edileceğini açıklar.

## 🎯 Deployment Özeti

Proje şu şekilde deploy edilmiştir:
- **Database**: Supabase PostgreSQL
- **Backend API**: Supabase Edge Functions
- **Frontend**: Vercel/Netlify (önerilen) veya Supabase Storage
- **Authentication**: Supabase Auth

## 📋 Tamamlanan İşlemler

### ✅ 1. Database Setup
- Admin schema ve tabloları oluşturuldu
- AI chat tabloları oluşturuldu
- Public views ve RLS politikaları ayarlandı
- Sample data (treatments, testimonials) eklendi

### ✅ 2. Edge Functions
- `gemini-chat`: Genel AI chat functionality
- `health-consultation`: Sağlık danışmanlığı

### ✅ 3. Frontend Configuration
- Production environment variables ayarlandı
- Supabase client konfigürasyonu
- Edge Functions entegrasyonu

## 🚀 Deployment Adımları

### 1. Supabase CLI Kurulumu

```bash
npm install -g supabase
```

### 2. Supabase Login

```bash
supabase login
```

### 3. Edge Functions Deploy

```bash
# Proje klasöründe
supabase functions deploy gemini-chat
supabase functions deploy health-consultation
```

### 4. Frontend Deploy (Vercel Önerilen)

#### Vercel ile Deploy:

1. Vercel hesabı oluşturun
2. GitHub repository'yi bağlayın
3. Environment variables'ları ekleyin:

```env
VITE_SUPABASE_URL=https://cfwwcxqpyxktikizjjxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNmd3djeHFweXhrdGlraXpqanh4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcwNDUyOTcsImV4cCI6MjA2MjYyMTI5N30.YUD6Uwxyd38xXs7R60UC-199FE52VYkqOZSXHtrBiH0
VITE_OPENROUTER_API_KEY=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
VITE_GEMINI_MODEL=gemini-2.5-pro
```

4. Deploy butonuna tıklayın

#### Netlify ile Deploy:

1. Netlify hesabı oluşturun
2. GitHub repository'yi bağlayın
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Environment variables'ları ekleyin (yukarıdaki gibi)

### 5. Database Migrations

Eğer yeni migration'lar varsa:

```bash
supabase db push
```

## 🔧 Konfigürasyon

### Database Tables

#### Admin Schema:
- `admin.roles` - Kullanıcı rolleri
- `admin.users` - Admin kullanıcıları
- `admin.treatments` - Tedavi bilgileri
- `admin.blog_posts` - Blog yazıları
- `admin.contact_messages` - İletişim mesajları
- `admin.settings` - Site ayarları
- `admin.activity_log` - Aktivite logları

#### AI Schema:
- `ai.chat_sessions` - Chat oturumları
- `ai.chat_messages` - Chat mesajları
- `ai.user_preferences` - Kullanıcı tercihleri

#### Public Schema:
- `public.testimonials_public` - Müşteri yorumları
- Views: `treatments_view`, `blog_posts_view`

### API Endpoints

#### Edge Functions:
- `POST /functions/v1/gemini-chat` - AI chat
- `POST /functions/v1/health-consultation` - Sağlık danışmanlığı

#### Database Functions:
- `public.submit_contact_message()` - İletişim formu

## 🔐 Security

### Row Level Security (RLS)
- Tüm admin tablolarında RLS aktif
- Kullanıcılar sadece kendi verilerine erişebilir
- Public views sadece published içerikleri gösterir

### API Security
- Supabase Auth entegrasyonu
- CORS konfigürasyonu
- Rate limiting (Supabase tarafından)

## 📊 Monitoring

### Supabase Dashboard
- Database performansı
- API kullanımı
- Error logs
- User analytics

### Edge Functions Logs
```bash
supabase functions logs gemini-chat
supabase functions logs health-consultation
```

## 🔄 Updates

### Code Updates
1. GitHub'a push yapın
2. Vercel/Netlify otomatik deploy eder

### Database Updates
```bash
supabase db push
```

### Edge Functions Updates
```bash
supabase functions deploy function-name
```

## 🌐 Custom Domain

### Vercel/Netlify
1. Platform dashboard'da domain ekleyin
2. DNS ayarlarını yapın
3. SSL otomatik aktif olur

### Supabase Custom Domain
1. Supabase dashboard'da custom domain ekleyin
2. DNS CNAME record'u ekleyin
3. SSL sertifikası otomatik oluşturulur

## 📝 Environment Variables

### Development
```env
VITE_BACKEND_URL=http://localhost:3001
VITE_SUPABASE_URL=https://cfwwcxqpyxktikizjjxx.supabase.co
VITE_SUPABASE_ANON_KEY=your_anon_key
```

### Production
```env
VITE_SUPABASE_URL=https://cfwwcxqpyxktikizjjxx.supabase.co
VITE_SUPABASE_ANON_KEY=your_anon_key
VITE_OPENROUTER_API_KEY=your_openrouter_key
```

## 🚨 Troubleshooting

### Common Issues

1. **CORS Errors**: Edge Functions'da CORS headers kontrol edin
2. **RLS Errors**: Politika ayarlarını kontrol edin
3. **Build Errors**: Environment variables'ları kontrol edin

### Logs

```bash
# Edge Functions logs
supabase functions logs function-name

# Database logs
supabase logs db

# Real-time logs
supabase logs realtime
```

## 📞 Support

- Supabase Documentation: https://supabase.com/docs
- Vercel Documentation: https://vercel.com/docs
- Netlify Documentation: https://docs.netlify.com

# Gemini CLI Entegrasyonu - Kurulum ve Kullanım Kılavuzu

Bu kılavuz, Health Luxury Hub projesine Gemini CLI entegrasyonunun nasıl kurulacağını ve kullanılacağını açıklar.

## 🎯 Entegrasyon Özeti

Proje artık iki farklı AI servis seçeneği sunuyor:
1. **Gemini CLI** (Yeni) - Yerel Gemini CLI üzerinden
2. **OpenRouter** (Mevcut) - Bulut tabanlı API

## 📋 Gereksinimler

- Node.js 18+
- Gemini CLI kurulu olmalı
- Gemini API Key

## 🚀 Kurulum Adımları

### 1. Gemini API Key Alma

1. [Google AI Studio](https://makersuite.google.com/app/apikey) adresine gidin
2. Yeni bir API key oluşturun
3. API key'i güvenli bir yerde saklayın

### 2. Backend Environment Ayarları

`backend/.env` dosyasını düzenleyin:

```env
GEMINI_API_KEY=your_actual_gemini_api_key_here
PORT=3001
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

### 3. Bağımlılıkları Yükleme

Tüm bağımlılıkları yüklemek için:

```bash
npm run setup
```

veya manuel olarak:

```bash
# Frontend bağımlılıkları
npm install

# Backend bağımlılıkları
npm run backend:install
```

## 🏃‍♂️ Çalıştırma

### Seçenek 1: Her İkisini Birlikte Çalıştırma (Önerilen)

```bash
npm run dev:full
```

Bu komut hem backend'i hem frontend'i aynı anda başlatır.

### Seçenek 2: Ayrı Ayrı Çalıştırma

Terminal 1 - Backend:
```bash
npm run backend:dev
```

Terminal 2 - Frontend:
```bash
npm run dev
```

## 🔧 Kullanım

### Frontend'de AI Assistant

1. Tarayıcıda `http://localhost:5173` adresine gidin
2. "AI Assistant" sayfasına gidin
3. Sağlık ile ilgili sorularınızı sorun
4. AI artık yerel Gemini CLI üzerinden yanıt verecek

### API Endpoints

Backend şu endpoint'leri sağlar:

- `GET /health` - Servis durumu
- `POST /api/gemini/chat` - Genel chat
- `POST /api/gemini/health-consultation` - Sağlık danışmanlığı
- `POST /api/gemini/treatment-recommendation` - Tedavi önerisi

## 🔍 Test Etme

### Backend Test

```bash
curl http://localhost:3001/health
```

### Gemini CLI Test

```bash
echo "Hello" | gemini -p "Please respond in Turkish"
```

## 🛠️ Sorun Giderme

### Gemini CLI Bulunamıyor

Eğer "gemini command not found" hatası alıyorsanız:

1. Gemini CLI'nin kurulu olduğundan emin olun
2. PATH'e eklendiğini kontrol edin
3. Terminal'i yeniden başlatın

### API Key Hatası

Eğer "GEMINI_API_KEY not found" hatası alıyorsanız:

1. `backend/.env` dosyasında API key'in doğru olduğunu kontrol edin
2. Backend'i yeniden başlatın

### CORS Hatası

Eğer frontend'den backend'e bağlanırken CORS hatası alıyorsanız:

1. Backend'in 3001 portunda çalıştığını kontrol edin
2. Frontend'in 5173 portunda çalıştığını kontrol edin

## 📁 Proje Yapısı

```
health-luxury-hub/
├── backend/                 # Backend API servisi
│   ├── routes/
│   │   └── gemini.js       # Gemini API routes
│   ├── services/
│   │   └── geminiService.js # Gemini CLI wrapper
│   ├── server.js           # Express server
│   ├── package.json
│   └── .env                # Backend environment variables
├── src/
│   └── services/
│       └── geminiService.js # Frontend servis (güncellendi)
├── package.json            # Frontend package.json (güncellendi)
└── .env                    # Frontend environment variables
```

## 🔄 Geri Dönüş Planı

Eğer Gemini CLI entegrasyonunda sorun yaşarsanız, OpenRouter'a geri dönebilirsiniz:

1. `src/services/geminiService.js` dosyasındaki API_BASE_URL'i comment out edin
2. Eski OpenRouter kodunu uncomment edin
3. Frontend'i yeniden başlatın

## 📝 Notlar

- Backend servisi 3001 portunda çalışır
- Frontend servisi 5173 portunda çalışır
- Gemini CLI responses daha hızlı olabilir çünkü yerel olarak çalışır
- API rate limiting Gemini API'nin kendi limitlerine tabidir

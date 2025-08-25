# Health Luxury Hub Backend

Bu backend servisi, Health Luxury Hub projesinin Gemini CLI entegrasyonunu sağlar.

## Özellikler

- Gemini CLI ile entegrasyon
- RESTful API endpoints
- CORS desteği
- Error handling
- Health check endpoint

## Kurulum

1. Backend klasörüne gidin:
```bash
cd backend
```

2. Bağımlılıkları yükleyin:
```bash
npm install
```

3. Environment variables dosyasını oluşturun:
```bash
cp .env.example .env
```

4. `.env` dosyasını düzenleyin ve Gemini API key'inizi ekleyin:
```
GEMINI_API_KEY=your_gemini_api_key_here
```

## Kullanım

### Development modunda çalıştırma:
```bash
npm run dev
```

### Production modunda çalıştırma:
```bash
npm start
```

## API Endpoints

### Health Check
- **GET** `/health` - Servis durumunu kontrol eder

### Gemini AI Endpoints
- **POST** `/api/gemini/chat` - Genel chat completion
- **POST** `/api/gemini/health-consultation` - Sağlık danışmanlığı
- **POST** `/api/gemini/treatment-recommendation` - Tedavi önerisi

## Gereksinimler

- Node.js 18+
- Gemini CLI kurulu olmalı
- Gemini API key

## Gemini CLI Kurulumu

Eğer Gemini CLI henüz kurulu değilse:

```bash
npm install -g @google/generative-ai-cli
```

veya

```bash
# Diğer kurulum yöntemleri için Gemini CLI dokümantasyonunu kontrol edin
```

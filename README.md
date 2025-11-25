# Cloudflare JSON Formatter Worker

A **globally distributed JSON formatter, validator, and minifier** powered entirely by **Cloudflare Workers**.  
Fast, serverless, and perfect for debugging API responses at the edge.

## 🚀 Features

### **POST `/format`**
- Pretty-prints JSON  
- Also returns a minified version

### **POST `/validate`**
- Checks if JSON is syntactically valid

### **POST `/minify`**
- Returns a compact, minified JSON string

## 🌍 Live API Endpoints

> Base URL: **https://api.formatjsononline.com**

| Action | Endpoint |
|--------|----------|
| **Format JSON** | `POST https://api.formatjsononline.com/format` |
| **Validate JSON** | `POST https://api.formatjsononline.com/validate` |
| **Minify JSON** | `POST https://api.formatjsononline.com/minify` |

## 🧪 Example Usage

### **Format JSON**
```bash
curl -X POST \
  https://api.formatjsononline.com/format \
  -d '{"name":"Anil","age":30}'
```

### **Validate JSON**
```bash
curl -X POST \
  https://api.formatjsononline.com/validate \
  -d '{"name":"Anil"}'
```

### **Minify JSON**
```bash
curl -X POST \
  https://api.formatjsononline.com/minify \
  -d '{ "name": "Anil", "age": 30 }'
```

## ⚙️ Tech Stack

- **Cloudflare Workers (Edge Functions)**
- Serverless and globally distributed
- **Zero cold starts**
- Ultra-fast JSON operations

## 📦 Deploy Your Own Worker

### **1. Clone**
```bash
git clone https://github.com/YOUR-USERNAME/cloudflare-json-worker
cd cloudflare-json-worker
```

### **2. Install Wrangler**
```bash
npm install -g wrangler
```

### **3. Run Locally**
```bash
wrangler dev
```

### **4. Deploy**
```bash
wrangler deploy
```

## 💡 Why This Exists

Developers need fast, simple tools to format and validate JSON during API development.

Benefits:
- ⚡ Instant edge execution  
- 🌎 Global availability  
- 💰 Free hosting  
- 🧱 Zero dependencies  
- 🔧 Perfect for demos, tools, and CI workflows  

## ✨ Author

**Anil Peter**  
Creator of **https://FormatJSONOnline.com**

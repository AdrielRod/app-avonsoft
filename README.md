# 📱 Avontsoft Mobile App

Desenvolvido com **React Native** utilizando **Expo Bare Workflow**, com integração ao backend em NestJS.

## 🚀 Tecnologias e Bibliotecas Principais

- React Native
- Expo Bare Workflow
- TypeScript
- React Navigation
- Axios
- React Hook Form + Zod


## ⚙️ Instalação

1. Clone o repositório:

```bash
git clone https://github.com/AdrielRod/app-avontsoft.git
cd app-avontsoft
```

2. Instale as dependências:

```bash
npm install
```


3 Acesse src/infra/networking/avansoftApi e 
src/infra/networking/clientHttp para alterar a url se necessário.

> Obs: se não for rodar em emulador, será necessário usar seu ip no local. (ex: `http://192.168.0.100:3000`).

## 🧪 Executando o App

### iOS

```bash
npx expo run:ios
```

### Android

```bash
npx expo run:android
```

Ou abra o app usando o **Expo Go** com o QR Code.


## ✅ Funcionalidades

- Autenticação com token JWT ( sign in, sign up e refresh token )
- CRUD completo de clientes
- Filtros por nome e e-mail
- Dashboard com gráficos

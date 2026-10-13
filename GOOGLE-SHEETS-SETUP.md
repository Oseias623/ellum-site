# 🔧 Configuração da Integração com Google Sheets

Este guia explica como configurar a integração do formulário do simpósio com Google Sheets.

## 📋 Pré-requisitos

- Uma conta Google
- Acesso ao Google Cloud Console
- A planilha do Google Sheets já criada

## 🚀 Passo a Passo

### 1. Criar Service Account no Google Cloud

1. Acesse [Google Cloud Console](https://console.cloud.google.com/)
2. Crie um novo projeto ou selecione um existente
3. No menu lateral, vá em **APIs e Serviços** > **Biblioteca**
4. Procure por "Google Sheets API" e clique em **Ativar**

### 2. Criar Credenciais (Service Account)

1. No menu lateral, vá em **APIs e Serviços** > **Credenciais**
2. Clique em **Criar Credenciais** > **Conta de serviço**
3. Preencha os dados:
   - **Nome da conta de serviço**: `ellum-simposio-sheets`
   - **Descrição**: "Integração do formulário do simpósio com Google Sheets"
4. Clique em **Criar e continuar**
5. **Não** é necessário conceder acessos adicionais, clique em **Concluir**

### 3. Baixar a Chave JSON

1. Na lista de **Contas de serviço**, clique na conta que você acabou de criar
2. Vá na aba **Chaves**
3. Clique em **Adicionar chave** > **Criar nova chave**
4. Selecione **JSON** e clique em **Criar**
5. O arquivo JSON será baixado automaticamente - **GUARDE ESTE ARQUIVO COM SEGURANÇA**

### 4. Configurar Variáveis de Ambiente

1. Copie o arquivo `.env.example` para `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Abra o arquivo JSON baixado e copie os valores:
   - `client_email` → `GOOGLE_CLIENT_EMAIL`
   - `private_key` → `GOOGLE_PRIVATE_KEY`

3. Edite `.env.local` com os valores corretos:
   ```env
   GOOGLE_SHEETS_ID=1AbC123XyZ...
   GOOGLE_SHEETS_NAME=Leads
   GOOGLE_CLIENT_EMAIL=ellum-simposio-sheets@seu-projeto.iam.gserviceaccount.com
   GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nSUA_CHAVE_AQUI\n-----END PRIVATE KEY-----\n"
   ```

### 5. Obter o ID da Planilha

O ID da planilha está na URL:
```
https://docs.google.com/spreadsheets/d/1AbC123XyZ_ESTE_É_O_ID/edit
                                        ^^^^^^^^^^^^^^^^
```

Copie este ID e cole em `GOOGLE_SHEETS_ID` no arquivo `.env.local`.

### 6. Compartilhar a Planilha com a Service Account

**IMPORTANTE**: A Service Account precisa de permissão para escrever na planilha.

1. Abra sua planilha no Google Sheets
2. Clique em **Compartilhar** (canto superior direito)
3. Cole o email da Service Account (valor de `GOOGLE_CLIENT_EMAIL`)
4. Defina permissão como **Editor**
5. **Desmarque** a opção "Notificar pessoas"
6. Clique em **Compartilhar**

### 7. Preparar a Planilha

Crie uma aba chamada `Leads` (ou o nome definido em `GOOGLE_SHEETS_NAME`) com as seguintes colunas na primeira linha:

| A | B | C | D | E | F |
|---|---|---|---|---|---|
| Data/Hora | Nome | Email | Telefone | Cidade | Perfil |

### 8. Testar

1. Reinicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

2. Acesse `http://localhost:3000/simposio`

3. Preencha e envie o formulário

4. Verifique:
   - Você foi redirecionado para o WhatsApp ✅
   - Uma nova linha apareceu na planilha com os dados ✅
   - O console do servidor mostra "✅ Lead enviado para Google Sheets com sucesso"

## 🔒 Segurança

- **NUNCA** faça commit do arquivo `.env.local` ou das chaves JSON
- O arquivo `.gitignore` já está configurado para ignorar `.env.local`
- Em produção (Vercel), adicione as variáveis nas configurações do projeto

## 🐛 Troubleshooting

### "Variáveis de ambiente não configuradas"
- Verifique se o arquivo `.env.local` existe
- Verifique se todas as variáveis estão preenchidas
- Reinicie o servidor após editar o `.env.local`

### "Error: Insufficient Permission"
- A Service Account foi adicionada como editor na planilha?
- Aguarde alguns minutos após compartilhar (pode haver delay)

### "Error: Unable to parse range"
- O nome da aba está correto em `GOOGLE_SHEETS_NAME`?
- A aba existe na planilha?

### Private key com problemas
- Certifique-se de que o valor está entre aspas duplas
- Certifique-se de que `\n` está preservado (não substitua por quebras reais)
- Exemplo correto:
  ```env
  GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIE...\n-----END PRIVATE KEY-----\n"
  ```

## 📦 Deploy na Vercel

No painel da Vercel, adicione as variáveis de ambiente:

1. Vá em **Settings** > **Environment Variables**
2. Adicione cada variável:
   - `GOOGLE_SHEETS_ID`
   - `GOOGLE_SHEETS_NAME`
   - `GOOGLE_CLIENT_EMAIL`
   - `GOOGLE_PRIVATE_KEY`
3. Clique em **Save**
4. Faça um novo deploy

---

✅ **Pronto!** Os leads do simpósio agora serão salvos automaticamente na planilha do Google Sheets.

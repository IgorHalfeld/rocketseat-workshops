# Clean Archicture no Node.js

> Como dividir suas aplicações em camadas

## Objetivo

Vamos fazer a API de um checkout de um e-commerce. O Endpoint de checkout irá receber o seguinte payload.

```json
{
  "coupon": "BLACKFRIDAY-MAC-30",
  "user": {
    "_id": "5ddaffb0d90791a2afee404c",
    "name": "Igor Halfeld",
    "email": "igor.halfeld@gmail.com"
  },
  "items": [
    { "_id": "5ddb00d8d90791a2afee4055" }
  ]
}
```

> **Esse exemplo tenta simular da forma mais didática possivel um cenário de checkout de um e-commerce, mas como é um exemplo, precisa ser revisto antes de aplicar em produção**

## Regras

Você precisa aplicar as regras de negócio e de validação antes de efetuar a compra.
  - O body do request precisa ser validado se existe items para a compra.
  - O coupon `BLACKFRIDAY-MAC-30` garante 30% de desconto para todos os macbooks.
  - O coupon `BLACKFRIDAY-ACESSORIOS-10` garante 10% de desconto para todos os utilitários.
  - Efetuar o pagamento com o cartão principal do usuário.
  - Diminuir a quantidade do `stock`
  - Após o processamento deverá enviar um email contendo as informações da compra.
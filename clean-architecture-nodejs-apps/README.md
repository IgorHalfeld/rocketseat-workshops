# Clean Archicture no Node.js

> Como dividir suas aplicações em camadas

## Objetivo

Vamos fazer a API de um checkout de um e-commerce. O Endpoint de checkout irá receber o seguinte payload.

```json
{
  "coupon": "BLACKFRIDAY-MAC-30",
  "user": {
    "id": "KFJAS1UJF38ASK913",
    "name": "Igor Halfeld",
    "email": "igor.halfeld@gmail.com"
  },
  "items": [
    { "id": "ABC1" },
    { "id": "ABC2" }
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
  - Após o processamento deverá enviar um email contendo as informações da compra.

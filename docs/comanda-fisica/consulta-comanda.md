---
id: consulta-comanda
title: Consulta dos itens da comanda
sidebar_label: Consulta comanda
---

## Listar items

### Método: GET 

[Leia mais sobre método GET](https://restfulapi.net/http-methods/#get)

### Endpoint

http://example.com.br/api/comanda/consulta

### Header
    
    Authorization: TOKEN
    MerchantId: CODIGO_BASE_64

### Parametros
    
    barcode: código da comanda

**exemplo:** http://example.com.br/api/comanda/consulta?barcode=0001254

### Resposta de sucesso

```json
{
    "subtotal": 31.31,
    "service": 3.13,
    "discount": 0,
    "total": 34.44,
    "items": [
        {
            "item_id": 125,
            "title": "Coca cola (lata)",
            "description": "Coca cola lata 350ml",
            "unit_price": 5.5,
            "amount": 1,
            "total_price": 5.5
        },
        {
            "item_id": 569,
            "title": "Refeição Quilo",
            "description": "Refeição Quilo - Segunda a sexta",
            "unit_price": 56.6,
            "amount": 0.35,
            "total_price": 19.81
        },
        {
            "item_id": 569,
            "title": "Sobremesa gelatina",
            "description": "Sobremesa gelatina",
            "unit_price": 3,
            "amount": 2,
            "total_price": 6
        }
    ]
}
```

#### Descrição dos campos

|Campo|Tipo|Descrição|
|---|---|---|
|subtotal|Decimal|Somatória dos items|
|service|Decimal|Valor da taxa de serviço (caso exista)|
|discount|Decimal|Valor de desconto (caso exista)|
|total|Decimal|Resultado do calculo dos campos (subtotal + service - discount)|
|itens|Array|Lista de itens de consumo da comanda|

### Resposta comanda inválida ou vazia

```json
{
    "erro": true,
    "message": "Comanda inválida ou vazia."
}
```

### Resposta de token inválido  

<a class="link-block" href="/comanda-fisica/sugestao#resposta-da-api-de-token-invalido">Veja aqui qual é o padrão de resposta para token inválido</a>

### Resposta de código do restaurante inválido

<a class="link-block" href="/comanda-fisica/sugestao#resposta-da-api-codigo-do-restaurante-invalido">Veja aqui qual é o padrão de resposta para código do restaurante inválido</a>

****

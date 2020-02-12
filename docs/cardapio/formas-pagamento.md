---
id: formas-pagamento
title: Formas de pagamento
sidebar_label: Formas de pagamento
---

## Listar

É necessário sabermos quais são as formas de pagamento aceitas pelo restaurante para vincularmos todas elas no aplicativo para, no fechamento da comanda indentificarmos qual foi a forma de pagamento na Liuv com a forma de pagamento do restaurante.


### Método: GET 

[Leia mais sobre método GET](https://restfulapi.net/http-methods/#get)

### Endpoint: 

http://example.com.br/api/formas-pagamento/

### Header:
    
    Authorization: TOKEN
    MerchantId: CODIGO_BASE_64

### Resposta de sucesso

status code: 200

```json
[
    {
        "id": 1,
        "title": "Mastercard",
        "type": "credito"
    },
    {
        "id": 2,
        "title": "Mastercard",
        "type": "débito"
    },
    {
        "id": 3,
        "title": "Visa",
        "type": "débito"
    },
    {
        "id": 4,
        "title": "Visa",
        "type": "débito"
    }
    ...
]
```

### Resposta de token inválido  

<a class="link-block" href="/comanda-fisica/sugestao#resposta-da-api-de-token-invalido">Veja aqui qual é o padrão de resposta para token inválido</a>

### Resposta de código do restaurante inválido

<a class="link-block" href="/comanda-fisica/sugestao#resposta-da-api-codigo-do-restaurante-invalido">Veja aqui qual é o padrão de resposta para código do restaurante inválido</a>

****

## Adicionar

Documentação ainda não disponível
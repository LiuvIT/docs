---
id: abrir-comanda
title: Abri comanda / mesa
sidebar_label: Abrir comanda / mesa
---

## Sobre 

Necessário abrir uma comanda / mesa para enviar os itens que forem comprados pela Liuv.

### Método: POST 

[Leia mais sobre método POST](https://restfulapi.net/http-methods/#post)

### Endpoint: 

http://example.com.br/api/comanda/

http://example.com.br/api/mesa/

### Header:
    
    Authorization: TOKEN
    MerchantId: CODIGO_BASE_64

### Request
    
```json
{
    "id": "256",
    "user": [{
        "name": "Fernando A.",
        "cpf": null,
    }]
}
```

#### Descrição dos campos

|Campo|Tipo|Descrição|
|---|---|---|
|id|String|Código da mesa ou da comanda do cliente (caso não passar o valor, a resposta da api deve retornar esse código)|
|user.name|String|Código de barras da comanda para fechar|
|user.cpf|String|Caso o usuário queira CPF na nota, esse campo vai preenchido|

### Resposta de sucesso

```json
{
    "erro": false,
    "message": "Comanda / mesa aberta com sucesso.",
    "id": "256"
}
```

### Resposta com erro

```json
{
    "erro": true,
    "message": "Essa comanda / mesa já está aberta.",
    "id": "256"
}
```


### Resposta de token inválido  

<a class="link-block" href="/comanda-fisica/sugestao#resposta-da-api-de-token-invalido">Veja aqui qual é o padrão de resposta para token inválido</a>

### Resposta de código do restaurante inválido

<a class="link-block" href="/comanda-fisica/sugestao#resposta-da-api-codigo-do-restaurante-invalido">Veja aqui qual é o padrão de resposta para código do restaurante inválido</a>

****

---
id: finalizar-comanda
title: Finalizar comanda
sidebar_label: Finalizar comanda
---

## Finalizar comanda

### Método: POST 

[Leia mais sobre método POST](https://restfulapi.net/http-methods/#post)

### Endpoint

http://example.com.br/api/comanda/consulta

### Header
    
    Authorization: TOKEN
    MerchantId: CODIGO_BASE_64

### Request
    
```json
{
    "id": "0001254",
    "cpf": "00000000000",
    "subtotal": 31.31,
    "service": 3.13,
    "discount": 0,
    "total": 34.44, 
    "payment_id": 2
}
```

#### Descrição dos campos

|Campo|Tipo|Descrição|
|---|---|---|
|id|String|Código de barras da comanda / mesa para fechar|
|cpf|String|Caso o usuário queira CPF na nota, esse campo vai preenchido|
|subtotal|Decimal|Somatória dos items|
|service|Decimal|Valor da taxa de serviço (caso exista)|
|discount|Decimal|Valor de desconto (caso exista)|
|total|Decimal|Resultado do calculo dos campos (`subtotal` + `service` - `discount`)|
|payment_id|Integer|Código da forma de pagamento capturado no [listar formas de pagamento](/comanda-fisica/consulta-comanda#listar-items)|

### Resposta de sucesso

```json
{
    "erro": false,
    "message": "Comanda fechada com sucesso.",
    "sale_id": "325987"
}
```

### Resposta com erro

```json
{
    "erro": true,
    "message": "Comanda fechada com sucesso."
}
```

> As mensagens de erro podem variar de acordo com o erro no fechamento. Exemplo:

    "message": "Valor total da comanda difere do valor dos itens."

ou

    "message": "Essa comanda já foi fechada."

ou 

    "message": "Forma de pagamento não encontrada."


### Resposta de token inválido  

<a class="link-block" href="/comanda-fisica/sugestao#resposta-da-api-de-token-invalido">Veja aqui qual é o padrão de resposta para token inválido</a>

### Resposta de código do restaurante inválido

<a class="link-block" href="/comanda-fisica/sugestao#resposta-da-api-codigo-do-restaurante-invalido">Veja aqui qual é o padrão de resposta para código do restaurante inválido</a>

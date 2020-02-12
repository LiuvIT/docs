---
id: consulta-cupom-fiscal
title: Consulta do cupom fiscal da comanda fechada
sidebar_label: Consulta do cupom fiscal
---

## Cupom fiscal

Para consulta do cupom fiscal, sugerimos fazer isso num momento diferente do fechamento da comanda, pois em alguns casos, pode causar lentidão a comunicação com serviços externos, como o SAT.

### Método: POST 

[Leia mais sobre método POST](https://restfulapi.net/http-methods/#post)

### Endpoint

http://example.com.br/api/comanda/consulta-cupom-fiscal

### Header
    
    Authorization: TOKEN
    MerchantId: CODIGO_BASE_64

### Request
    
```json
{
    "barcode": "0001254",
    "sale_id": "325987"
}
```

#### Descrição dos campos

|Campo|Tipo|Descrição|
|---|---|---|
|barcode|String|Código de barras da comanda fechada|
|sale_id|String|Código da venda retornada no fechamento [Fechamento da comanda](/comanda-fisica/fechamento-comanda#resposta-de-sucesso)|

### Resposta de sucesso

```json
{
    "erro": false,
    "message": "Cupom fiscal gerado com sucesso.",
    "access_key": "CFe78965412365478963254590004992820051234567891"
}
```

> O campo `access_key` é a chave do cupom fiscal gerado pelo fechamento da comanda.

### Resposta de erro

```json
{
    "erro": true,
    "message": "Cupom fiscal ainda não disponível."
}
```
> As mensagens de erro podem variar de acordo com o erro no fechamento. Exemplo:

    "message": "Essa venda não possuí cupom fiscal."



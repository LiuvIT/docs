---
id: adicionar-itens-comanda
title: Adicionar itens comanda / mesa
sidebar_label: Adicionar itens comanda / mesa
---

## Sobre 

Necessário enviar os itens que foram consumidos pelo cliente.

### Método: POST 

[Leia mais sobre método POST](https://restfulapi.net/http-methods/#post)

### Endpoint: 

http://example.com.br/api/comanda/adicionar-items

http://example.com.br/api/mesa/adicionar-items

### Header:
    
    Authorization: TOKEN
    MerchantId: CODIGO_BASE_64

### Request
    
```json
{
	"id": 15,
	"items": [{
		"id": 1,
		"obs": "Retirar salada",
        "amount": 1,
        "print_id": 3
	}, {
		"id": 8,
		"obs": null,
        "amount": 1,
        "print_id": null
	}]
}
```

#### Descrição dos campos

|Campo|Tipo|Descrição|
|---|---|---|
|id|String|Código da mesa ou da comanda do cliente|
|items.id|Int|Código de identificação do item no sistema|
|items.obs|String|Caso o usuário queira adicionar alguma informação no pedido do item|
|items.amount|Decimal|Quantidade pedida do item|
|items.print_id|Int|Local da impressão do item|

### Resposta de sucesso

```json
{
    "erro": false,
    "message": "Itens adicionado na Comanda / mesa com sucesso.",
    "id": 15
}
```

### Resposta com erro

```json
{
    "erro": true,
    "message": "O item XXX não existe cadastrado no sistema.",
    "id": 15
}
```

### Resposta de token inválido  

<a class="link-block" href="/comanda-fisica/sugestao#resposta-da-api-de-token-invalido">Veja aqui qual é o padrão de resposta para token inválido</a>

### Resposta de código do restaurante inválido

<a class="link-block" href="/comanda-fisica/sugestao#resposta-da-api-codigo-do-restaurante-invalido">Veja aqui qual é o padrão de resposta para código do restaurante inválido</a>

****

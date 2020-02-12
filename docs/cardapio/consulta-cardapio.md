---
id: consulta-cardapio
title: Consulta de cardápio
sidebar_label: Consulta de cardápio
---

## Listar

É necessário deixarmos sincronizados o cardápio do sistema do restaurante com o cardápio do aplicativo da Liuv, dessa forma conseguimos identificar quais forma os itens vendidos ao cliente e enviar para o sistema de integração. Nesse caso a consulta do cardápio poderá ser feita de dois modelos diferentes, uma delas com categorias e os itens da categoria e o outro modelo com os itens e uma chave com as categorias do item.


### Método: GET 

[Leia mais sobre método GET](https://restfulapi.net/http-methods/#get)

### Endpoint: 

http://example.com.br/api/cardapio/

### Header:
    
    Authorization: TOKEN
    MerchantId: CODIGO_BASE_64

### Resposta de sucesso - Modelo Categoria > Items

status code: 200

```json
[
    [{
        "id": 1,
        "title": "Refrigerantes",
        "items": [{
            "id": 15,
            "title": "Coca-Cola",
            "description": "Lata 350ml",
            "unit_price": 5.5
        }, {
            "id": 16,
            "title": "Guaraná Antartica",
            "description": "600ml",
            "unit_price": 7.5
        }]
    }, {
        "id": 1,
        "title": "Salgados",
        "items": [{
            "id": 158,
            "title": "Pão de queijo",
            "description": "",
            "unit_price": 4.5
        }, {
            "id": 157,
            "title": "Mini pão de queijo",
            "description": "Balde com 6",
            "unit_price": 5.5
        }]
    }]
]
```

### Resposta de sucesso - Modelo Items > Categorias

status code: 200

```json
[{
	"id": 15,
	"title": "Coca-Cola",
	"description": "Lata 350ml",
	"unit_price": 5.5,
	"categories": [{
		"id": 1,
		"title": "Refrigerantes"
	}, {
		"id": 5,
		"title": "Bebidas"
	}]
}, {
	"id": 158,
	"title": "Pão de queijo",
	"description": "",
	"unit_price": 4.5,
	"categories": [{
		"id": 9,
		"title": "Salgados"
	}, {
		"id": 2,
		"title": "Café da manhã"
	}]
}]
```

### Resposta de token inválido  

<a class="link-block" href="/comanda-fisica/sugestao#resposta-da-api-de-token-invalido">Veja aqui qual é o padrão de resposta para token inválido</a>

### Resposta de código do restaurante inválido

<a class="link-block" href="/comanda-fisica/sugestao#resposta-da-api-codigo-do-restaurante-invalido">Veja aqui qual é o padrão de resposta para código do restaurante inválido</a>

****

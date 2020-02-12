---
id: sugestao
title: Sugestão de modelo de integração
sidebar_label: Sugestão
---

## API

### Rest 

REST significa Representational State Transfer. Em português, Transferência de Estado Representacional. Trata-se de uma abstração da arquitetura da Web. Resumidamente, o REST consiste em princípios/regras/constraints que, quando seguidas, permitem a criação de um projeto com interfaces bem definidas. Desta forma, permitindo, por exemplo, que aplicações se comuniquem.

[Leia mais sobre API Rest](https://pt.wikipedia.org/wiki/REST)

### Json

JSON (JavaScript Object Notation - Notação de Objetos JavaScript) é uma formatação leve de troca de dados. Para seres humanos, é fácil de ler e escrever. Para máquinas, é fácil de interpretar e gerar. Está baseado em um subconjunto da linguagem de programação JavaScript, Standard ECMA-262 3a Edição - Dezembro - 1999. JSON é em formato texto e completamente independente de linguagem, pois usa convenções que são familiares às linguagens C e familiares, incluindo C++, C#, Java, JavaScript, Perl, Python e muitas outras. Estas propriedades fazem com que JSON seja um formato ideal de troca de dados.

[Leia mais sobre JSON](https://pt.wikipedia.org/wiki/JSON)

## Autenticação

Para autenticação existem várias ferramentas que trabalham com troca de tokens entre as plataformas. Nesse caso, sugerimos adicionar no `header` da API um token de autorização no seguinte formato:

    Authorization: TOKEN

### Resposta da api de token inválido:

```json
{
    "erro": true,
    "message": "Token inválido"
}
```

## Identificação do restaurante

Para sistemas que no mesmo projeto estão conectados a vários restaurantes, sugerimos identificar cada um deles também no `header` passando um `MerchantId` com o código do estabelecimento codificado em [Base64](https://pt.wikipedia.org/wiki/Base64). Ficando no seguinte formato:

    MerchantId: CODIGO_BASE_64

### Resposta da api código do restaurante inválido:

```json
{
    "erro": true,
    "message": "Código de identificação do restaurante inválido ou não encontrado."
}
```

## Timeout

Necessário definição de um limite máximo de tempo de resposta da aplicação. Sugestão de 30 segundos.


### Resposta de token inválido  

<a class="link-block" href="/comanda-fisica/sugestao#resposta-da-api-de-token-invalido">Veja aqui qual é o padrão de resposta para token inválido</a>

### Resposta de código do restaurante inválido

<a class="link-block" href="/comanda-fisica/sugestao#resposta-da-api-codigo-do-restaurante-invalido">Veja aqui qual é o padrão de resposta para código do restaurante inválido</a>

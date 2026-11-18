<div class="top-accessibility-bar" style="display: flex; justify-content: flex-end; align-items: center; gap: 8px; margin: 10px 0;">
  <span style="font-size: 14px; color: #555; font-weight: bold;">Tamanho do texto:</span>
  <button onclick="diminuirFonte()" title="Diminuir texto" style="padding: 6px 12px; font-weight: bold; cursor: pointer; border: 1px solid #ccc; border-radius: 4px; background: #f8f9fa;">A-</button>
  <button onclick="resetarFonte()" title="Tamanho normal" style="padding: 6px 12px; font-weight: bold; cursor: pointer; border: 1px solid #ccc; border-radius: 4px; background: #f8f9fa;">A</button>
  <button onclick="aumentarFonte()" title="Aumentar texto" style="padding: 6px 12px; font-weight: bold; cursor: pointer; border: 1px solid #ccc; border-radius: 4px; background: #f8f9fa;">A+</button>
  
  <button onclick="window.print()" style="background-color: #0056b3; color: white; padding: 6px 16px; border: none; border-radius: 5px; font-size: 14px; cursor: pointer; box-shadow: 0 2px 4px rgba(0,0,0,0.2); margin-left: 10px;">
    🖨️ Imprimir ou baixar esta página
  </button>
</div>

<p style="font-weight: bold; color: #d9534f; margin-top: -5px; margin-bottom: 20px;">PÚBLICO-ALVO: DESENVOLVEDORES, ENGENHEIROS DE DADOS E ANALISTAS TÉCNICOS DA EQUIPE COTIN/DELOG</p>

# 4. Dicionário de KPIs e Regras de Negócio Principais

Traduz as Regras de Negócio (RN) estabelecidas nas Histórias de Usuário (HU) em lógicas de dados e tratamento no Power BI:

## Compras Únicas (RN2)

**Lógica:** Aplicação de contagem distinta (`DISTINCTCOUNT`) sobre a coluna `ChaveCompra` na tabela `pedidos_finalizados`.

:::{note}
Impede a duplicidade de contagem de uma mesma licitação que tramitou por múltiplos reprocessamentos ou versões de análise.
:::

## Taxa de Alerta (RN3)

**Lógica:** Divisão simples entre a contagem de compras únicas cujo último status registrado seja `tipo_status_id = 303` (Alerta) pelo volume geral de compras únicas do período.

## Identificação de Reprocessadas v2+ (RN11)

**Lógica:** Seleção de registros da tabela `pedidos_finalizados` onde o campo `versao >= 2` e cuja primeira iteração (`versao = 1`) possuía status de alerta (`tipo_status_id = 303`).

## Classificação de Reprocessamentos (RN13)

- **Correção Completa:** Quando o processo possui versão atualizada com `tipo_status_id = 302` (Analisado sem avisos).
- **Melhora Parcial:** Versão recente com quantidade de alertas ativos inferior ao volume da primeira versão, mas ainda superior a zero.
- **Sem Melhora:** Quando a quantidade de alertas da versão recente é igual ou maior do que a versão de origem (`v1`).

## QAP Genuíno (RN14)

**Lógica:** Contagem de licitações com `tipo_status_id = 303` na versão inicial (`versao = 1`) que não possuem registros adicionais (`versao >= 2`) no banco, indicando inexistência de tentativa de reprocessamento.

## Validação de Chaves (RN20)

**Lógica:** Validação de campo verificando se `LEN(ChaveCompra) = 17` e se todos os caracteres são estritamente numéricos (`ISNUMERIC = 1`).

## Status Geral do Sistema (RN22)

**Lógica:** Condição lógica que exige simultaneamente:

1. Zero erros de processamento no período.
2. Taxa de validade das chaves em 100%.
3. Ausência de registros duplicados nas tabelas de controle.

Caso uma das condições falhe, o status do painel passa de `"Operando Normalmente"` para `"Alerta"`.

<a href="#">⬆️ Voltar ao topo</a>

<div class="bottom-print-bar" style="text-align: right; margin: 20px 0;">
  <button onclick="window.print()" style="background-color: #0056b3; color: white; padding: 10px 20px; border: none; border-radius: 5px; font-size: 16px; cursor: pointer; box-shadow: 0 2px 4px rgba(0,0,0,0.2);">
    🖨️ Imprimir ou baixar esta página
  </button>
</div>

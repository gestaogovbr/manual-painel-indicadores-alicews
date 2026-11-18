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

# 5. Guia de Implementação e Manutenção do DAX

Para assegurar o cumprimento do **Requisito Não Funcional 3 (RNF3 — Performance)**, o processamento de dados é dividido: o SQL Server executa as consultas pesadas de agrupamento e junção, e o Power BI calcula contextos dinâmicos e temporais via DAX.

## Uso de Variáveis (`VAR`)

Todas as medidas em DAX devem seguir o padrão de declaração de variáveis locais (`VAR` e `RETURN`). Isso força o motor analítico a avaliar expressões de filtragem apenas uma vez por execução da medida, otimizando o consumo de memória e diminuindo o tempo de carregamento dos componentes.

Exemplo de estrutura padrão:

```dax
MedidaExemplo = 
VAR _totalPedidos = CALCULATE(COUNTROWS('pedidos_finalizados'))
VAR _pedidosAlerta = CALCULATE(COUNTROWS('pedidos_finalizados'), 'pedidos_finalizados'[tipo_status_id] = 303)
RETURN
DIVIDE(_pedidosAlerta, _totalPedidos, 0)
```

## Inteligência Temporal D-1

Para evitar cartões e gráficos diários vazios durante a madrugada e início da manhã, as medidas de monitoramento diário usam um desvio dinâmico. Se a hora atual da máquina de execução estiver compreendida entre **00h00 e 05h00**, os cálculos de inteligência temporal mudam seu parâmetro de referência de data de `TODAY()` para `TODAY() - 1` (dia anterior).

## Timeline HTML Dinâmica (Pipeline Airflow)

A linha do tempo do Airflow é gerada usando a função iteradora `CONCATENATEX`, que varre a tabela dimensional de pipelines do dia, analisa seu status de execução (Sucesso, Executando ou Erro) e concatena blocos de string contendo tags `<div>` e estilos CSS inline. O resultado textual é lido e renderizado visualmente pelo visual *HTML Content*.

<a href="#">⬆️ Voltar ao topo</a>

<div class="bottom-print-bar" style="text-align: right; margin: 20px 0;">
  <button onclick="window.print()" style="background-color: #0056b3; color: white; padding: 10px 20px; border: none; border-radius: 5px; font-size: 16px; cursor: pointer; box-shadow: 0 2px 4px rgba(0,0,0,0.2);">
    🖨️ Imprimir ou baixar esta página
  </button>
</div>

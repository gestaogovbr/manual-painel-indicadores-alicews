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

# Manual do Painel de Indicadores AliceWS

> **Tipo:** Manual  
> **Público-alvo:** Desenvolvedores, Engenheiros de Dados e Analistas Técnicos da equipe COTIN/DELOG  
> **Objetivo:** Documentar a arquitetura, regras de negócio, estrutura visual e lógica de desenvolvimento em DAX do Painel de Indicadores AliceWS.

**VERSÃO 1.1 – Nov/26**  
Ministério da Gestão e da Inovação em Serviços Públicos – MGI

---

## Apresentação

Este manual descreve a arquitetura de dados e a especificação técnica do **Painel de Indicadores AliceWS**, ferramenta desenvolvida para consolidar as métricas de operação, eficácia e integridade técnica da integração entre o sistema Alice e o ComprasGov.

## Páginas do Painel

O painel está estruturado em quatro visões funcionais e complementares no Power BI:

| Página | O que analisa |
|---|---|
| **Página 1: Visão Operacional** | Pulso histórico e panorama geral de volumetria: pedidos finalizados, taxa de alerta, avisos gerados, fila pendente, tendências mensais e proporção com e sem avisos |
| **Página 2: Monitoramento Diário (Delay D-1)** | Saúde técnica da integração e volumetria das últimas 24 horas: status geral, chaves carregadas, validade de 17 dígitos, volumes acumulados e timeline do Airflow |
| **Página 3: Eficácia dos Avisos** | Progressão e resolutividade das falhas sinalizadas: funil de correção, reprocessamentos (v2+), correção completa e QAP genuíno |
| **Página 4: Análise por Trilha** | Detalhamento de riscos e tipologias: trilhas ativas, trilha mais crítica, maior taxa de correção e matriz de desempenho |

---

<span style="font-size: 1.5em; font-weight: bold;">Formatos de Visualização</span>

Você pode acessar as seções específicas que quer consultar ou ver o manual completo, com todas as seções na mesma página. Para isso, selecione o que quer ler no menu ao lado ou abaixo. Você também pode ampliar qualquer imagem clicando sobre ela e baixar ou imprimir cada página ou o manual completo.

* **Padrão — escolha a seção específica que quer acessar:**
  * **Arquitetura e Tecnologia:**
    * [1. Visão Geral e Arquitetura de Dados](01-visao-geral-arquitetura.md)
    * [2. Stack Tecnológica](02-stack-tecnologica.md)
  * **3. Estrutura do Painel e Navegação:**
    * [3.1. Página 1: Visão Operacional](03-01-visao-operacional.md)
    * [3.2. Página 2: Monitoramento Diário (Delay D-1)](03-02-monitoramento-diario.md)
    * [3.3. Página 3: Eficácia dos Avisos](03-03-eficacia-avisos.md)
    * [3.4. Página 4: Análise por Trilha](03-04-analise-trilha.md)
  * **Regras e Implementação:**
    * [4. Dicionário de KPIs e Regras de Negócio Principais](04-dicionario-kpis-regras.md)
    * [5. Guia de Implementação e Manutenção do DAX](05-guia-implementacao-dax.md)
  * **Referência:**
    * [6. Histórico de Revisões](06-historico-revisoes.md)
* [Manual completo: todo o manual na mesma página](versao-impressao.md)

<div class="bottom-print-bar" style="text-align: right; margin: 20px 0;">
  <button onclick="window.print()" style="background-color: #0056b3; color: white; padding: 10px 20px; border: none; border-radius: 5px; font-size: 16px; cursor: pointer; box-shadow: 0 2px 4px rgba(0,0,0,0.2);">
    🖨️ Imprimir ou baixar esta página
  </button>
</div>

```{toctree}
:hidden:
:maxdepth: 1

Início <self>
```

```{toctree}
:hidden:
:maxdepth: 2
:caption: Arquitetura e Tecnologia

01-visao-geral-arquitetura
02-stack-tecnologica
```

```{toctree}
:hidden:
:maxdepth: 2
:caption: 3. Estrutura do Painel e Navegação

03-01-visao-operacional
03-02-monitoramento-diario
03-03-eficacia-avisos
03-04-analise-trilha
```

```{toctree}
:hidden:
:maxdepth: 2
:caption: Regras e Implementação

04-dicionario-kpis-regras
05-guia-implementacao-dax
```

```{toctree}
:hidden:
:maxdepth: 1
:caption: Referência e Versão para Impressão

06-historico-revisoes
Manual completo <versao-impressao>
```

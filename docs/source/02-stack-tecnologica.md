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

# 2. Stack Tecnológica

O ecossistema do painel é composto pelas seguintes tecnologias e responsabilidades:

- **Backend de Dados (SQL Server):** Criação de Views dedicadas que pré-processam as regras de negócio mais pesadas no servidor, otimizando a velocidade de leitura e atualização no Power BI. As Views principais utilizadas são:
  - `vw_operacao_diaria`
  - `vw_analise_eficacia`
  - `vw_api_mgi_avisos_restritos`
  - `vw_api_mgi_chaves_compras`
  - `vw_api_mgi_tickets`
  - `vw_dim_trilhas_nomes`
- **Frontend e Motor Analítico (Power BI):** Construção da interface visual e cálculo de contexto dinâmico/temporal utilizando a linguagem DAX (*Data Analysis Expressions*).
- **Componentes Visuais Customizados (HTML Content):** Utilização do componente certificado *HTML Content* (desenvolvido por Daniel Marsh-Patrick) para renderizar a linha do tempo de execução dos pipelines do Airflow por meio de tags HTML/CSS dinâmicas geradas diretamente por medidas em DAX.
- **Orquestração (Apache Airflow):** Execução das DAGs de integração que atualizam a base de dados nos horários programados: **14h, 19h, 20h e 22h**.

<a href="#">⬆️ Voltar ao topo</a>

<div class="bottom-print-bar" style="text-align: right; margin: 20px 0;">
  <button onclick="window.print()" style="background-color: #0056b3; color: white; padding: 10px 20px; border: none; border-radius: 5px; font-size: 16px; cursor: pointer; box-shadow: 0 2px 4px rgba(0,0,0,0.2);">
    🖨️ Imprimir ou baixar esta página
  </button>
</div>

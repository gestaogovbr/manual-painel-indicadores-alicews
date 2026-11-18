# Manual do Painel de Indicadores AliceWS

Documentação técnica do **Painel de Indicadores AliceWS** (Power BI), publicada com [Sphinx](https://www.sphinx-doc.org) e hospedada no [Read the Docs](https://readthedocs.org).

📖 **Acesse a documentação:** https://manual-painel-indicadores-alicews.readthedocs.io

---

## Sobre o painel

O **Painel de Indicadores AliceWS** consolida as métricas de operação, eficácia e integridade técnica da integração entre o sistema Alice (CGU) e o ComprasGov, estruturado em quatro visões complementares:

- **Visão Operacional** — panorama histórico e volumetria geral de pedidos e avisos
- **Monitoramento Diário (Delay D-1)** — acompanhamento de saúde técnica, validade de chaves e pipeline Airflow
- **Eficácia dos Avisos** — funil de correção, reprocessamentos e QAP genuíno
- **Análise por Trilha** — detalhamento de desvios e resolutividade por trilha de auditoria

## Desenvolvimento local

```bash
pip install -r docs/requirements.txt
sphinx-build -b html docs/source docs/_build/html
```

## Contribuição

Produzido por **COTIN/DELOG** — Ministério da Gestão e da Inovação em Serviços Públicos (MGI).

Etapa 0 — Preparação do projeto
Criar repositório GitHub
Criar estrutura de pastas
Criar README.md
Configurar execução com Live Server
Criar arquivo de configuração com URLs do Portal e camadas

Etapa 1 — Login
Criar tela inicial do Localizador de Imóveis
Exibir descrição da aplicação
Criar campos de usuário e senha
Validar credenciais no ArcGIS Enterprise
Tratar login válido
Tratar login inválido
Criar link de recuperação de senha
Não carregar mapa nem camadas antes do login

Etapa 2 — Mapa principal
Carregar mapa somente após autenticação
Usar basemap ArcGIS Light Gray
Configurar idioma pt-BR
Abrir na extensão do Brasil
Adicionar camada de municípios
Adicionar camada de imóveis
Configurar municípios apenas com contorno
Configurar imóveis:
azul = residencial
vermelho = comercial
Ativar clusterização dos imóveis
Adicionar controles:
zoom
bússola
home
minha localização

Etapa 3 — Layout da aplicação
Criar cabeçalho
Exibir nome do app
Adicionar logo/link da Imagem
Criar botão de ajuda
Criar botão de perfil do usuário
Exibir:
nome
e-mail
portal autenticado
tempo da sessão
botão sair

Etapa 4 — Splash inicial
Exibir splash após login
Mostrar explicação da aplicação
Mostrar total de imóveis
Mostrar data da última atualização
Botões:
OK
Não visualizar novamente

Etapa 5 — Filtro por município
Criar barra lateral esquerda
Criar seletor de município
Ao selecionar município:
filtrar camada de municípios
filtrar imóveis dentro do município
aplicar zoom automático
atualizar estatísticas
Criar botão Limpar filtro
Ao limpar:
voltar para Brasil
mostrar todos os municípios
mostrar todos os imóveis

Etapa 6 — Painel estatístico
Mostrar total de imóveis
Criar gráfico por tipo:
comercial
residencial
Criar gráfico por padrão:
alto
médio
baixo
Calcular:
valor venal mínimo
valor venal máximo
valor venal médio
valor de mercado mínimo
valor de mercado máximo
valor de mercado médio
metragem média
Formatar valores em reais
Formatar metragem em m²

Etapa 7 — Filtros interativos nos gráficos
Clique em tipo filtra o mapa
Clique em padrão filtra o mapa
Recalcular estatísticas conforme filtro ativo
Permitir limpar filtros secundários

Etapa 8 — Relatório
Criar botão Gerar relatório
Gerar resumo da pesquisa com:
município
filtros aplicados
estatísticas
data/hora
usuário logado
Primeira versão pode ser HTML para impressão

Etapa 9 — Documentação e avaliação
Atualizar README
Documentar como executar
Documentar arquitetura
Registrar dificuldades encontradas
Criar roteiro de apresentação de 20 minutos
Criar perguntas para avaliar candidatos
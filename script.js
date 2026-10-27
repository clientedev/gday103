/**
 * ESCOLA SENAI "MORVAN FIGUEIREDO" CFP 1.03 - GOOGLE DAY & GEMINI LAB
 * Script de Galeria Interativa, Filtros, Lightbox e Narrativa Visual
 * Acervo Oficial com Todas as 44 Fotografias e Recursos do Evento
 *
 * Destaques Especiais:
 * - Docente Remoter SENAI (facilitação e liderança digital de preto)
 * - Semana da Biblioteca & Plataforma Conecta (Biblioteca Digital)
 * - Apresentação de Prompts de Literatura e Lançamento da Prompioteca
 * - Endereço Oficial: Rua do Oratório, 215 - Mooca, São Paulo / SP
 */

const galleryData = [
  {
    "id": 1,
    "file": "cartaz-oficial.jpg",
    "title": "Cartaz Oficial: Um Dia SENAI + Google de IA",
    "category": "cenografia",
    "categoryLabel": "Identidade Oficial Google + SENAI",
    "tag": "Cartaz Oficial",
    "wide": false,
    "caption": "Cartaz oficial do evento 'Um Dia SENAI + Google de IA' realizado em 27 de outubro de 2026 na Escola SENAI \"Morvan Figueiredo\" CFP 1.03 (Rua do Oratório, 215 - Mooca): \"Inteligência artificial para aprender, criar e explorar novas possibilidades\"."
  },
  {
    "id": 2,
    "file": "WhatsApp Image 2026-10-27 at 13.47.05.jpeg",
    "title": "Abertura com o Docente Remoter SENAI",
    "category": "remoter",
    "categoryLabel": "Docente Remoter SENAI",
    "tag": "Remoter SENAI em Ação",
    "wide": true,
    "caption": "O Docente Remoter SENAI (com a camiseta preta oficial de facilitação e inovação digital) no palco do auditório conduzindo a abertura de 'Um Dia SENAI + Google de IA' para os estudantes da Escola SENAI \"Morvan Figueiredo\" CFP 1.03."
  },
  {
    "id": 3,
    "file": "aa73a3e2-a177-4841-a842-73d9a274e579.jpg",
    "title": "Docente Remoter Conduzindo a Imersão",
    "category": "remoter",
    "categoryLabel": "Docente Remoter SENAI",
    "tag": "Liderança Pedagógica",
    "wide": true,
    "caption": "Visão de palco do Docente Remoter SENAI, responsável pela facilitação tecnológica e metodologias ativas, articulando os desafios do Google Gemini com a formação profissional dos alunos."
  },
  {
    "id": 4,
    "file": "WhatsApp Image 2026-10-27 at 15.58.45 (1).jpeg",
    "title": "Docente Remoter e Equipe: Entrega de Prêmios",
    "category": "remoter",
    "categoryLabel": "Docente Remoter SENAI",
    "tag": "Premiação & Squeezes",
    "wide": false,
    "caption": "Registro especial com o Docente Remoter SENAI (polo preta com a insígnia Remoter), equipe organizadora e estudante premiado com squeeze térmica exclusiva após desvendar os desafios de engenharia de prompts."
  },
  {
    "id": 5,
    "file": "WhatsApp Image 2026-10-27 at 15.58.46 (1).jpeg",
    "title": "Docente Remoter na Dinâmica de Cartões de Prompt",
    "category": "remoter",
    "categoryLabel": "Docente Remoter SENAI",
    "tag": "Engenharia de Prompts",
    "wide": false,
    "caption": "O Docente Remoter SENAI com a equipe no pátio da escola coordenando a entrega e validação dos cartões de prompt sorteados durante o evento."
  },
  {
    "id": 6,
    "file": "WhatsApp Image 2026-10-27 at 15.45.56.jpeg",
    "title": "Comunidade Acadêmica e Docentes em Celebração",
    "category": "remoter",
    "categoryLabel": "Docente Remoter SENAI",
    "tag": "Celebração Geral",
    "wide": true,
    "caption": "Docentes, facilitadores Remoter e turmas da Escola SENAI \"Morvan Figueiredo\" CFP 1.03 reunidos no auditório ao final da jornada de inteligência artificial comemorando o aprendizado conjunto."
  },
  {
    "id": 7,
    "file": "WhatsApp Image 2026-10-27 at 15.58.50.jpeg",
    "title": "Semana da Biblioteca: Lançamento da Prompioteca",
    "category": "biblioteca",
    "categoryLabel": "Semana da Biblioteca & Conecta",
    "tag": "Prompioteca Oficial",
    "wide": false,
    "caption": "Na Semana da Biblioteca escolar, aluna apresenta a Prompioteca desenvolvida pelos estudantes: catálogo de comandos e prompts formatados para estudo de literatura, projetos técnicos e pesquisa na Plataforma Conecta."
  },
  {
    "id": 8,
    "file": "WhatsApp Image 2026-10-27 at 15.58.47 (1).jpeg",
    "title": "Oficina de Literatura com Inteligência Artificial",
    "category": "biblioteca",
    "categoryLabel": "Semana da Biblioteca & Conecta",
    "tag": "Literatura & IA",
    "wide": true,
    "caption": "Estudantes reunidos nas mesas redondas da biblioteca durante a Semana da Biblioteca, combinando obras literárias clássicas com comandos de IA para geração de capas e análises temáticas."
  },
  {
    "id": 9,
    "file": "WhatsApp Image 2026-10-27 at 15.58.48.jpeg",
    "title": "Workshop da Plataforma Conecta (Biblioteca Digital)",
    "category": "biblioteca",
    "categoryLabel": "Semana da Biblioteca & Conecta",
    "tag": "Plataforma Conecta SP",
    "wide": false,
    "caption": "Apresentação da Plataforma Conecta — a biblioteca digital oficial do SENAI-SP que dá acesso a milhares de livros e periódicos técnicos —, tema central do workshop literário e digital da Semana da Biblioteca."
  },
  {
    "id": 10,
    "file": "b1ef1a2d-6246-4c2c-b33d-382122c9452e.jpg",
    "title": "Roleta Interativa na Sala de Estudos da Biblioteca",
    "category": "biblioteca",
    "categoryLabel": "Semana da Biblioteca & Conecta",
    "tag": "Gamificação Literária",
    "wide": true,
    "caption": "Dinâmica da roleta interativa sorteando autores, clássicos da literatura e desafios de prompt em tempo real durante a Semana da Biblioteca na Escola SENAI \"Morvan Figueiredo\" CFP 1.03."
  },
  {
    "id": 11,
    "file": "WhatsApp Image 2026-10-27 at 15.58.47.jpeg",
    "title": "Visão Geral das Oficinas na Biblioteca Escolar",
    "category": "biblioteca",
    "categoryLabel": "Semana da Biblioteca & Conecta",
    "tag": "Ambiente Colaborativo",
    "wide": false,
    "caption": "Sala de estudos da biblioteca repleta de alunos engajados na resolução prática dos desafios de comandos e pesquisa na biblioteca digital Conecta."
  },
  {
    "id": 12,
    "file": "WhatsApp Image 2026-10-27 at 15.58.48 (1).jpeg",
    "title": "Engenharia de Prompts para Clássicos da Literatura",
    "category": "biblioteca",
    "categoryLabel": "Semana da Biblioteca & Conecta",
    "tag": "Criação Literária",
    "wide": true,
    "caption": "Alunos utilizando técnicas avançadas de prompt para estruturar resenhas, análises de personagens e capas alternativas de livros do acervo."
  },
  {
    "id": 13,
    "file": "WhatsApp Image 2026-10-27 at 15.58.49 (1).jpeg",
    "title": "Encontro de Ideias na Semana da Biblioteca",
    "category": "biblioteca",
    "categoryLabel": "Semana da Biblioteca & Conecta",
    "tag": "Conexão Criativa",
    "wide": false,
    "caption": "Turmas interagindo em torno dos resultados dos prompts, compartilhando comandos testados para alimentar o catálogo da Prompioteca da escola."
  },
  {
    "id": 14,
    "file": "WhatsApp Image 2026-10-27 at 15.58.49.jpeg",
    "title": "Pesquisa Integrada: Plataforma Conecta + Gemini",
    "category": "biblioteca",
    "categoryLabel": "Semana da Biblioteca & Conecta",
    "tag": "Pesquisa Digital",
    "wide": false,
    "caption": "Interseção prática entre a pesquisa bibliográfica na Plataforma Conecta e a sintetização inteligente de conceitos pelo modelo Gemini."
  },
  {
    "id": 15,
    "file": "WhatsApp Image 2026-10-27 at 15.58.45.jpeg",
    "title": "Mobilização na Entrada da Biblioteca Escolar",
    "category": "biblioteca",
    "categoryLabel": "Semana da Biblioteca & Conecta",
    "tag": "Semana da Biblioteca",
    "wide": true,
    "caption": "Estudantes na entrada da biblioteca para participar das sessões simultâneas da Semana da Biblioteca e dinâmicas da Plataforma Conecta."
  },
  {
    "id": 16,
    "file": "WhatsApp Image 2026-10-27 at 15.58.46.jpeg",
    "title": "Coordenação dos Desafios na Área Externa",
    "category": "biblioteca",
    "categoryLabel": "Semana da Biblioteca & Conecta",
    "tag": "Desafios Conecta",
    "wide": false,
    "caption": "Ponto de apoio aos alunos com cartões de prompt e orientações para o acesso à biblioteca digital Conecta SP."
  },
  {
    "id": 17,
    "file": "WhatsApp Image 2026-10-27 at 14.43.51.jpeg",
    "title": "Início da Jornada no Gemini AcademyLab",
    "category": "auditorio",
    "categoryLabel": "Auditório & Google Gemini",
    "tag": "Gemini AcademyLab",
    "wide": true,
    "caption": "Telão do auditório projetando o QR Code de acesso ao Gemini AcademyLab com transmissão simultânea das facilitadoras Alice Turibio e Roberta Freitas."
  },
  {
    "id": 18,
    "file": "WhatsApp Image 2026-10-27 at 11.10.37.jpeg",
    "title": "Conexão Oficial: SENAI + Google for Education",
    "category": "auditorio",
    "categoryLabel": "Auditório & Google Gemini",
    "tag": "Google Gemini Lab",
    "wide": true,
    "caption": "Auditório do SENAI Morvan Figueiredo conectado com a cenografia Gemini Lab e a transmissão ao vivo de capacitação em IA."
  },
  {
    "id": 19,
    "file": "WhatsApp Image 2026-10-27 at 11.10.34.jpeg",
    "title": "Atenção Total dos Estudantes na Palestra",
    "category": "auditorio",
    "categoryLabel": "Auditório & Google Gemini",
    "tag": "Formação Técnica",
    "wide": false,
    "caption": "Estudantes dos cursos técnicos acompanhando atentamente as demonstrações práticas de IA generativa para a indústria."
  },
  {
    "id": 20,
    "file": "WhatsApp Image 2026-10-27 at 11.10.35.jpeg",
    "title": "Engajamento no Auditório Escolar",
    "category": "auditorio",
    "categoryLabel": "Auditório & Google Gemini",
    "tag": "Auditório Conectado",
    "wide": false,
    "caption": "Momento de debate e questionamentos dos alunos sobre os impactos da inteligência artificial nas carreiras industriais."
  },
  {
    "id": 21,
    "file": "WhatsApp Image 2026-10-27 at 14.43.52 (1).jpeg",
    "title": "Participação Interativa via Smartphones",
    "category": "auditorio",
    "categoryLabel": "Auditório & Google Gemini",
    "tag": "Acesso Mobile",
    "wide": false,
    "caption": "Alunos escaneando os QR Codes das telas para testar os prompts do Google Gemini em seus próprios dispositivos móveis."
  },
  {
    "id": 22,
    "file": "WhatsApp Image 2026-10-27 at 14.43.52 (2).jpeg",
    "title": "Pesquisa Interativa em Tempo Real",
    "category": "auditorio",
    "categoryLabel": "Auditório & Google Gemini",
    "tag": "Enquete ao Vivo",
    "wide": false,
    "caption": "Enquete interativa projetada no auditório mapeando o nível de familiaridade dos alunos com as ferramentas de IA."
  },
  {
    "id": 23,
    "file": "WhatsApp Image 2026-10-27 at 14.43.52 (3).jpeg",
    "title": "Foco e Aprendizado na Formação",
    "category": "auditorio",
    "categoryLabel": "Auditório & Google Gemini",
    "tag": "Imersão Acadêmica",
    "wide": true,
    "caption": "Ambiente de imersão focado no auditório, com os alunos absorvendo boas práticas de formulação de comandos contextuais."
  },
  {
    "id": 24,
    "file": "WhatsApp Image 2026-10-27 at 14.43.52.jpeg",
    "title": "Visão Ampla do Auditório da Escola",
    "category": "auditorio",
    "categoryLabel": "Auditório & Google Gemini",
    "tag": "Auditório Pleno",
    "wide": true,
    "caption": "Auditório da Escola SENAI \"Morvan Figueiredo\" CFP 1.03 (Rua do Oratório, 215) em sua capacidade máxima durante a transmissão do Google Day."
  },
  {
    "id": 25,
    "file": "WhatsApp Image 2026-10-27 at 11.10.38.jpeg",
    "title": "Conceitos de IA Agêntica e Automação",
    "category": "auditorio",
    "categoryLabel": "Auditório & Google Gemini",
    "tag": "IA Agêntica",
    "wide": false,
    "caption": "Apresentação detalhada sobre sistemas autônomos e agentes inteligentes baseados em modelos avançados de linguagem."
  },
  {
    "id": 26,
    "file": "WhatsApp Image 2026-10-27 at 11.10.38 (1).jpeg",
    "title": "Os 4 Pilares da IA no Telão",
    "category": "auditorio",
    "categoryLabel": "Auditório & Google Gemini",
    "tag": "Fundamentos de IA",
    "wide": false,
    "caption": "Lâmina destacando aprendizado, raciocínio, resolução de problemas e criação de conteúdo como pilares pedagógicos da IA."
  },
  {
    "id": 27,
    "file": "WhatsApp Image 2026-10-27 at 14.59.22.jpeg",
    "title": "Interação Direta com Facilitadoras Google",
    "category": "auditorio",
    "categoryLabel": "Auditório & Google Gemini",
    "tag": "Google for Education",
    "wide": true,
    "caption": "Momento em que os alunos do Morvan Figueiredo puderam enviar perguntas e interagir ao vivo com as especialistas da Gemini Academy."
  },
  {
    "id": 28,
    "file": "WhatsApp Image 2026-10-27 at 11.10.30.jpeg",
    "title": "Estudante Conectado no Auditório",
    "category": "auditorio",
    "categoryLabel": "Auditório & Google Gemini",
    "tag": "Engajamento Individual",
    "wide": false,
    "caption": "Estudante participando da atividade síncrona diretamente da poltrona do auditório escolar."
  },
  {
    "id": 29,
    "file": "WhatsApp Image 2026-10-27 at 11.10.31.jpeg",
    "title": "Discussão em Grupo sobre Aplicações de IA",
    "category": "acao",
    "categoryLabel": "Estudantes em Ação",
    "tag": "Colaboração em Grupo",
    "wide": false,
    "caption": "Alunos debatendo os prompts e discutindo como aplicar a inteligência artificial generativa em seus projetos técnicos de oficina."
  },
  {
    "id": 30,
    "file": "WhatsApp Image 2026-10-27 at 11.10.31 (1).jpeg",
    "title": "Resolução Coletiva de Desafios Práticos",
    "category": "acao",
    "categoryLabel": "Estudantes em Ação",
    "tag": "Mão na Massa",
    "wide": false,
    "caption": "Trabalho colaborativo para decifrar problemas práticos propostos durante as rodadas temáticas do Google Day."
  },
  {
    "id": 31,
    "file": "WhatsApp Image 2026-10-27 at 11.10.32.jpeg",
    "title": "Troca de Ideias Entre Alunos dos Cursos Regulares",
    "category": "acao",
    "categoryLabel": "Estudantes em Ação",
    "tag": "Comunidade Estudantil",
    "wide": false,
    "caption": "Estudantes dos cursos regulares do SENAI Morvan Figueiredo interagindo e compartilhando suas soluções no auditório."
  },
  {
    "id": 32,
    "file": "WhatsApp Image 2026-10-27 at 11.10.32 (1).jpeg",
    "title": "Conexão dos Estudantes com Novas Tecnologias",
    "category": "acao",
    "categoryLabel": "Estudantes em Ação",
    "tag": "Protagonismo Jovem",
    "wide": false,
    "caption": "Jovens estudantes vivenciando na prática o poder das ferramentas cognitivas contemporâneas."
  },
  {
    "id": 33,
    "file": "WhatsApp Image 2026-10-27 at 11.10.32 (2).jpeg",
    "title": "Análise dos Resultados no Telão",
    "category": "acao",
    "categoryLabel": "Estudantes em Ação",
    "tag": "Análise Crítica",
    "wide": true,
    "caption": "Acompanhamento coletivo dos resultados gerados pelo modelo e reflexão sobre a precisão das respostas fornecidas pela IA."
  },
  {
    "id": 34,
    "file": "WhatsApp Image 2026-10-27 at 11.10.33.jpeg",
    "title": "Exploração Prática nos Dispositivos Pessoais",
    "category": "acao",
    "categoryLabel": "Estudantes em Ação",
    "tag": "Tecnologia Acessível",
    "wide": false,
    "caption": "Aluna experimentando fluxos de comandos de texto diretamente no celular durante a sessão prática."
  },
  {
    "id": 35,
    "file": "WhatsApp Image 2026-10-27 at 11.10.30 (1).jpeg",
    "title": "Sincronização dos Exercícios em Tempo Real",
    "category": "acao",
    "categoryLabel": "Estudantes em Ação",
    "tag": "Prática Conectada",
    "wide": false,
    "caption": "Estudante concentrado nas etapas de resolução do formulário de IA agêntica."
  },
  {
    "id": 36,
    "file": "WhatsApp Image 2026-10-27 at 11.12.23 (1).jpeg",
    "title": "Pausa e Convivência no Pátio Escolar",
    "category": "acao",
    "categoryLabel": "Estudantes em Ação",
    "tag": "Ambiente Escolar",
    "wide": false,
    "caption": "Estudantes no pátio arborizado da Escola SENAI \"Morvan Figueiredo\" durante o intervalo entre as sessões."
  },
  {
    "id": 37,
    "file": "WhatsApp Image 2026-10-27 at 11.12.23 (2).jpeg",
    "title": "Diálogo e Compartilhamento de Aprendizados",
    "category": "acao",
    "categoryLabel": "Estudantes em Ação",
    "tag": "Integração",
    "wide": false,
    "caption": "Grupos reunidos no pátio conversando sobre as descobertas das oficinas da manhã."
  },
  {
    "id": 38,
    "file": "WhatsApp Image 2026-10-27 at 11.12.24.jpeg",
    "title": "Movimentação e Vitalidade no Campus Morvan Figueiredo",
    "category": "acao",
    "categoryLabel": "Estudantes em Ação",
    "tag": "Campus Ativo",
    "wide": true,
    "caption": "A energia dos estudantes ocupando os espaços de convivência do SENAI Morvan Figueiredo durante o Google Day."
  },
  {
    "id": 39,
    "file": "WhatsApp Image 2026-10-27 at 11.12.22.jpeg",
    "title": "Cenografia Oficial: Painel Modular Google Gemini Lab",
    "category": "cenografia",
    "categoryLabel": "Cenografia & Detalhes",
    "tag": "Cenografia de Palco",
    "wide": false,
    "caption": "Painel cenográfico modular com a estrela de quatro pontas e a paleta oficial Google Gemini montado no palco do auditório."
  },
  {
    "id": 40,
    "file": "WhatsApp Image 2026-10-27 at 11.12.23.jpeg",
    "title": "Elementos Visuais do Google Gemini Lab",
    "category": "cenografia",
    "categoryLabel": "Cenografia & Detalhes",
    "tag": "Identidade Google",
    "wide": false,
    "caption": "Composição geométrica com os prismas coloridos representando a multimodalidade do modelo Gemini."
  },
  {
    "id": 41,
    "file": "WhatsApp Image 2026-10-27 at 11.12.24 (1).jpeg",
    "title": "Auditório e Símbolos Institucionais",
    "category": "cenografia",
    "categoryLabel": "Cenografia & Detalhes",
    "tag": "Solenidade",
    "wide": false,
    "caption": "Púlpito de conferências e pavilhões nacional e do Estado de São Paulo no auditório da Escola SENAI \"Morvan Figueiredo\" CFP 1.03."
  },
  {
    "id": 42,
    "file": "WhatsApp Image 2026-10-27 at 11.12.25.jpeg",
    "title": "Preparação e Ambientação do Auditório",
    "category": "cenografia",
    "categoryLabel": "Cenografia & Detalhes",
    "tag": "Infraestrutura",
    "wide": true,
    "caption": "Espaço do auditório preparado para receber as turmas com som, iluminação cênica e projeção em alta fidelidade."
  },
  {
    "id": 43,
    "file": "WhatsApp Image 2026-10-27 at 11.12.25 (1).jpeg",
    "title": "Iluminação e Acústica para a Transmissão",
    "category": "cenografia",
    "categoryLabel": "Cenografia & Detalhes",
    "tag": "Tecnologia de Palco",
    "wide": false,
    "caption": "Apoio técnico e infraestrutura garantindo excelente qualidade audiovisual durante toda a programação do evento."
  },
  {
    "id": 44,
    "file": "WhatsApp Image 2026-10-27 at 11.12.25 (2).jpeg",
    "title": "Ambiente Acolhedor da Escola Morvan Figueiredo",
    "category": "cenografia",
    "categoryLabel": "Cenografia & Detalhes",
    "tag": "Escola SENAI CFP 1.03",
    "wide": false,
    "caption": "Instalações arborizadas da unidade situada na Rua do Oratório, 215 - Mooca, palco desta memorável imersão em inteligência artificial."
  }
];

// Estado Global da Aplicação
const appState = {
  currentFilter: 'todos',
  filteredItems: [...galleryData],
  currentLightboxIndex: 0,
  isZoomed: false,
  touchStartX: 0,
  touchEndX: 0
};

// Elementos do DOM
const dom = {
  galleryGrid: document.getElementById('gallery-grid'),
  filterButtons: document.querySelectorAll('.filter-btn'),
  themeToggle: document.getElementById('theme-toggle'),
  header: document.getElementById('header'),
  
  // Lightbox Modal
  lightbox: document.getElementById('lightbox-modal'),
  lightboxImage: document.getElementById('lightbox-image'),
  lightboxTitle: document.getElementById('lightbox-title'),
  lightboxCategory: document.getElementById('lightbox-category'),
  lightboxCaption: document.getElementById('lightbox-caption'),
  lightboxCounter: document.getElementById('lightbox-counter'),
  lightboxClose: document.getElementById('lightbox-close'),
  lightboxPrev: document.getElementById('lightbox-prev'),
  lightboxNext: document.getElementById('lightbox-next'),
  lightboxZoom: document.getElementById('lightbox-zoom'),
  lightboxDownload: document.getElementById('lightbox-download'),
  
  // Mobile Menu
  mobileMenuToggle: document.getElementById('mobile-menu-toggle'),
  navLinks: document.querySelector('.nav-links')
};

// =============================================================================
// RENDERIZAÇÃO DA GALERIA
// =============================================================================
function renderGallery(items) {
  if (!dom.galleryGrid) return;
  dom.galleryGrid.innerHTML = '';

  if (items.length === 0) {
    dom.galleryGrid.innerHTML = `
      <div class="empty-state" style="grid-column: 1 / -1; text-align: center; padding: 60px 20px;">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--google-blue)" stroke-width="1.5">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
        <p style="margin-top: 16px; font-weight: 500; color: var(--text-secondary);">
          Nenhuma fotografia encontrada para este filtro.
        </p>
      </div>
    `;
    return;
  }

  items.forEach((item, index) => {
    const card = document.createElement('article');
    const wideClass = item.wide ? ' card-wide' : '';
    card.className = `photo-card${wideClass}`;
    card.dataset.id = item.id;
    card.dataset.index = index;
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `${item.title} - Clique para ampliar`);

    const encodedFile = encodeURIComponent(item.file);
    const badgeRemoterHtml = item.category === 'remoter' 
      ? '<span class="remoter-badge-pill">★ Remoter SENAI</span>' 
      : '';

    card.innerHTML = `
      <div class="card-thumb-container">
        <img 
          src="${encodedFile}" 
          alt="${item.title} - Escola SENAI Morvan Figueiredo CFP 1.03" 
          loading="lazy"
          onerror="this.onerror=null; this.src='senai-logo.png';"
        />
        <div class="card-overlay">
          <div class="overlay-zoom-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              <line x1="11" y1="8" x2="11" y2="14"></line>
              <line x1="8" y1="11" x2="14" y2="11"></line>
            </svg>
          </div>
          <span class="overlay-hint">Ampliar registro</span>
        </div>
        <div class="card-badges-top">
          <span class="photo-category-pill cat-${item.category}">
            ${item.tag || item.categoryLabel}
          </span>
          ${badgeRemoterHtml}
        </div>
      </div>
      <div class="card-content">
        <h3 class="card-title">${item.title}</h3>
        <p class="card-caption">${item.caption}</p>
      </div>
    `;

    card.addEventListener('click', () => openLightbox(index));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openLightbox(index);
      }
    });

    dom.galleryGrid.appendChild(card);
  });
}

// =============================================================================
// FILTRAGEM DE CATEGORIAS
// =============================================================================
function handleFilterClick(e) {
  const button = e.currentTarget;
  const filter = button.dataset.filter;

  if (filter === appState.currentFilter) return;

  dom.filterButtons.forEach(btn => {
    btn.classList.remove('active');
    btn.setAttribute('aria-selected', 'false');
  });
  button.classList.add('active');
  button.setAttribute('aria-selected', 'true');

  appState.currentFilter = filter;

  if (filter === 'todos') {
    appState.filteredItems = [...galleryData];
  } else {
    appState.filteredItems = galleryData.filter(item => item.category === filter);
  }

  renderGallery(appState.filteredItems);
}

function updateFilterCounts() {
  const counts = {
    todos: galleryData.length,
    biblioteca: galleryData.filter(i => i.category === 'biblioteca').length,
    remoter: galleryData.filter(i => i.category === 'remoter').length,
    auditorio: galleryData.filter(i => i.category === 'auditorio').length,
    acao: galleryData.filter(i => i.category === 'acao').length,
    cenografia: galleryData.filter(i => i.category === 'cenografia').length
  };

  dom.filterButtons.forEach(btn => {
    const filter = btn.dataset.filter;
    const countTag = btn.querySelector('.count-tag');
    if (countTag && counts[filter] !== undefined) {
      countTag.textContent = counts[filter];
    }
  });
}

// =============================================================================
// LIGHTBOX MODAL
// =============================================================================
function openLightbox(index) {
  if (!dom.lightbox || !appState.filteredItems[index]) return;

  appState.currentLightboxIndex = index;
  updateLightboxContent();

  dom.lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
  dom.lightboxClose.focus();
}

function closeLightbox() {
  if (!dom.lightbox) return;

  dom.lightbox.classList.remove('active');
  document.body.style.overflow = '';
  resetZoom();

  const currentCard = dom.galleryGrid.querySelector(`[data-index="${appState.currentLightboxIndex}"]`);
  if (currentCard) currentCard.focus();
}

function updateLightboxContent() {
  const item = appState.filteredItems[appState.currentLightboxIndex];
  if (!item) return;

  resetZoom();

  const encodedFile = encodeURIComponent(item.file);
  dom.lightboxImage.src = encodedFile;
  dom.lightboxImage.alt = `${item.title} - Escola SENAI Morvan Figueiredo CFP 1.03`;
  dom.lightboxTitle.textContent = item.title;
  dom.lightboxCategory.textContent = item.categoryLabel;
  dom.lightboxCategory.className = `lightbox-category-tag cat-${item.category}`;
  dom.lightboxCaption.textContent = item.caption;

  if (dom.lightboxCounter) {
    dom.lightboxCounter.textContent = `${appState.currentLightboxIndex + 1} de ${appState.filteredItems.length}`;
  }
}

function showPrevImage() {
  if (appState.currentLightboxIndex > 0) {
    appState.currentLightboxIndex--;
  } else {
    appState.currentLightboxIndex = appState.filteredItems.length - 1;
  }
  updateLightboxContent();
}

function showNextImage() {
  if (appState.currentLightboxIndex < appState.filteredItems.length - 1) {
    appState.currentLightboxIndex++;
  } else {
    appState.currentLightboxIndex = 0;
  }
  updateLightboxContent();
}

function toggleZoom() {
  appState.isZoomed = !appState.isZoomed;
  if (appState.isZoomed) {
    dom.lightboxImage.classList.add('zoomed');
    dom.lightboxZoom.classList.add('active');
  } else {
    resetZoom();
  }
}

function resetZoom() {
  appState.isZoomed = false;
  dom.lightboxImage.classList.remove('zoomed');
  dom.lightboxZoom.classList.remove('active');
}

function downloadCurrentImage() {
  const item = appState.filteredItems[appState.currentLightboxIndex];
  if (!item) return;

  const link = document.createElement('a');
  link.href = encodeURIComponent(item.file);
  link.download = `SENAI-Morvan-GoogleDay-${item.file}`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// =============================================================================
// TEMA CLARO / ESCURO (GOOGLE LIGHT / GEMINI DARK)
// =============================================================================
function initTheme() {
  const savedTheme = localStorage.getItem('gday_theme') || 'light';
  applyTheme(savedTheme);

  if (dom.themeToggle) {
    dom.themeToggle.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      applyTheme(newTheme);
      localStorage.setItem('gday_theme', newTheme);
    });
  }
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  if (!dom.themeToggle) return;

  if (theme === 'dark') {
    dom.themeToggle.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
      </svg>
    `;
    dom.themeToggle.title = "Alternar para Tema Claro Google";
  } else {
    dom.themeToggle.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>
    `;
    dom.themeToggle.title = "Alternar para Modo Gemini Lab Dark";
  }
}

// =============================================================================
// NAVEGAÇÃO SUAVE E SCROLL
// =============================================================================
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links .nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      const sectionId = section.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        current = sectionId;
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

// =============================================================================
// EVENT LISTENERS GLOBAIS
// =============================================================================
function initEventListeners() {
  dom.filterButtons.forEach(btn => btn.addEventListener('click', handleFilterClick));

  if (dom.lightboxClose) dom.lightboxClose.addEventListener('click', closeLightbox);
  if (dom.lightboxPrev) dom.lightboxPrev.addEventListener('click', showPrevImage);
  if (dom.lightboxNext) dom.lightboxNext.addEventListener('click', showNextImage);
  if (dom.lightboxZoom) dom.lightboxZoom.addEventListener('click', toggleZoom);
  if (dom.lightboxDownload) dom.lightboxDownload.addEventListener('click', downloadCurrentImage);

  if (dom.lightbox) {
    dom.lightbox.addEventListener('click', (e) => {
      if (e.target === dom.lightbox) closeLightbox();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (!dom.lightbox || !dom.lightbox.classList.contains('active')) return;

    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') showPrevImage();
    if (e.key === 'ArrowRight') showNextImage();
  });

  if (dom.lightbox) {
    dom.lightbox.addEventListener('touchstart', (e) => {
      appState.touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    dom.lightbox.addEventListener('touchend', (e) => {
      appState.touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    }, { passive: true });
  }

  if (dom.mobileMenuToggle && dom.navLinks) {
    dom.mobileMenuToggle.addEventListener('click', () => {
      dom.navLinks.classList.toggle('mobile-open');
    });

    dom.navLinks.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        dom.navLinks.classList.remove('mobile-open');
      });
    });
  }
}

function handleSwipe() {
  const swipeThreshold = 50;
  const diff = appState.touchEndX - appState.touchStartX;

  if (Math.abs(diff) > swipeThreshold) {
    if (diff > 0) {
      showPrevImage();
    } else {
      showNextImage();
    }
  }
}

// =============================================================================
// INICIALIZAÇÃO DA APLICAÇÃO
// =============================================================================
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  renderGallery(appState.filteredItems);
  updateFilterCounts();
  initEventListeners();
  initScrollSpy();
});

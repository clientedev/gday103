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
    "file": "aa73a3e2-a177-4841-a842-73d9a274e579.jpg",
    "title": "Abertura Oficial no Palco com Instrutor SENAI",
    "category": "auditorio",
    "categoryLabel": "Auditório & Google Gemini",
    "tag": "Abertura Oficial",
    "wide": true,
    "caption": "Instrutor do SENAI no palco do auditório conduzindo a abertura oficial de 'Um Dia SENAI + Google de IA' para os estudantes da Escola SENAI \"Morvan Figueiredo\" CFP 1.03."
  },
  {
    "id": 2,
    "file": "WhatsApp Image 2026-10-27 at 15.45.56.jpeg",
    "title": "Comunidade Acadêmica em Celebração",
    "category": "auditorio",
    "categoryLabel": "Auditório & Google Gemini",
    "tag": "Celebração Geral",
    "wide": true,
    "caption": "Docentes, coordenação e turmas da Escola SENAI \"Morvan Figueiredo\" CFP 1.03 reunidos no auditório ao final da imersão com o painel 'Obrigado pela sua participação!'."
  },
  {
    "id": 3,
    "file": "WhatsApp Image 2026-10-27 at 11.10.37.jpeg",
    "title": "Conexão Oficial: SENAI + Google for Education",
    "category": "auditorio",
    "categoryLabel": "Auditório & Google Gemini",
    "tag": "Destaque Institucional",
    "wide": true,
    "caption": "Auditório da Escola SENAI \"Morvan Figueiredo\" CFP 1.03 em sintonia com a identidade visual do Gemini Lab, unindo o ensino profissionalizante às soluções educacionais Google."
  },
  {
    "id": 4,
    "file": "WhatsApp Image 2026-10-27 at 11.10.34.jpeg",
    "title": "Energia e Protagonismo dos Estudantes",
    "category": "auditorio",
    "categoryLabel": "Auditório & Google Gemini",
    "tag": "Juventude em Ação",
    "wide": false,
    "caption": "Estudantes compartilhando sorrisos e o orgulho de explorar de perto as tecnologias de inteligência artificial generativa."
  },
  {
    "id": 5,
    "file": "WhatsApp Image 2026-10-27 at 11.10.35.jpeg",
    "title": "Entusiasmo e Integração Entre Turmas",
    "category": "auditorio",
    "categoryLabel": "Auditório & Google Gemini",
    "tag": "Conexão Coletiva",
    "wide": false,
    "caption": "Ambiente descontraído e participativo no auditório da Escola SENAI \"Morvan Figueiredo\" CFP 1.03 durante a dinâmica do Google Day."
  },
  {
    "id": 6,
    "file": "b1ef1a2d-6246-4c2c-b33d-382122c9452e.jpg",
    "title": "Dinâmica da Roleta Interativa na Biblioteca",
    "category": "biblioteca",
    "categoryLabel": "Semana da Biblioteca & Conecta SENAI",
    "tag": "Gamificação Pedagógica",
    "wide": true,
    "caption": "Estudantes em mesas redondas na biblioteca escolar participando da dinâmica da roleta digital, sorteando categorias e desafios de IA em tempo real."
  },
  {
    "id": 7,
    "file": "WhatsApp Image 2026-10-27 at 15.58.50.jpeg",
    "title": "Lançamento da Prompioteca SENAI",
    "category": "biblioteca",
    "categoryLabel": "Semana da Biblioteca & Conecta SENAI",
    "tag": "Inovação Pedagógica",
    "wide": false,
    "caption": "Aluna apresenta a 'Prompioteca' da Escola SENAI \"Morvan Figueiredo\" CFP 1.03, catálogo de comandos e prompts formatados para estudo, projetos técnicos e pesquisa."
  },
  {
    "id": 8,
    "file": "WhatsApp Image 2026-10-27 at 15.58.47 (1).jpeg",
    "title": "Oficina de IA na Biblioteca: Engenharia de Prompts",
    "category": "biblioteca",
    "categoryLabel": "Semana da Biblioteca & Conecta SENAI",
    "tag": "Oficina Aplicada",
    "wide": true,
    "caption": "Trabalho em equipes nas mesas redondas da biblioteca escolar: estudantes refinam comandos detalhados para geração de capas de livros e recursos visuais com IA."
  },
  {
    "id": 9,
    "file": "WhatsApp Image 2026-10-27 at 15.58.47.jpeg",
    "title": "Visão Geral da Oficina de Prompts na Biblioteca",
    "category": "biblioteca",
    "categoryLabel": "Semana da Biblioteca & Conecta SENAI",
    "tag": "Ambiente Colaborativo",
    "wide": false,
    "caption": "Biblioteca escolar repleta de alunos engajados na resolução prática dos desafios de comandos projetados no telão da Escola SENAI \"Morvan Figueiredo\" CFP 1.03."
  },
  {
    "id": 10,
    "file": "WhatsApp Image 2026-10-27 at 15.58.48 (1).jpeg",
    "title": "Trabalho em Equipe e Refinamento de Resultados",
    "category": "biblioteca",
    "categoryLabel": "Semana da Biblioteca & Conecta SENAI",
    "tag": "Colaboração Ativa",
    "wide": false,
    "caption": "Alunos analisando juntos as respostas geradas pelo assistente e debatendo sobre a clareza e estrutura dos parâmetros nos prompts."
  },
  {
    "id": 11,
    "file": "WhatsApp Image 2026-10-27 at 15.58.48.jpeg",
    "title": "Alunas Protagonistas na Oficina de IA",
    "category": "auditorio",
    "categoryLabel": "Auditório & Google Gemini",
    "tag": "Protagonismo Jovem",
    "wide": false,
    "caption": "Estudantes em frente ao painel da oficina de prompts, ressaltando a participação ativa e o talento feminino na área tecnológica."
  },
  {
    "id": 12,
    "file": "WhatsApp Image 2026-10-27 at 15.58.46 (1).jpeg",
    "title": "Desafio de Prompts com QR Code no Pátio",
    "category": "acao",
    "categoryLabel": "Estudantes em Ação",
    "tag": "Interação Prática",
    "wide": false,
    "caption": "Alunos escaneando cartões com QR Code do Google Gemini Lab nos smartphones para participar dos desafios práticos de inteligência artificial."
  },
  {
    "id": 13,
    "file": "WhatsApp Image 2026-10-27 at 11.10.31 (1).jpeg",
    "title": "Tire uma Carta, Descubra um Prompt e Ganhe Brindes",
    "category": "acao",
    "categoryLabel": "Estudantes em Ação",
    "tag": "Gamificação",
    "wide": false,
    "caption": "Estudantes concentrados na bancada interativa, retirando suas cartas e desvendando novas formas de interagir com o Google Gemini."
  },
  {
    "id": 14,
    "file": "WhatsApp Image 2026-10-27 at 11.10.31.jpeg",
    "title": "Experimentação Prática na Palma da Mão",
    "category": "acao",
    "categoryLabel": "Estudantes em Ação",
    "tag": "Mão na Massa",
    "wide": false,
    "caption": "Com seus próprios celulares, os estudantes testam prompts em tempo real, explorando capacidade analítica, criatividade e síntese."
  },
  {
    "id": 15,
    "file": "WhatsApp Image 2026-10-27 at 15.58.49 (1).jpeg",
    "title": "Estudantes Premiados com Brindes Oficiais Gemini",
    "category": "acao",
    "categoryLabel": "Estudantes em Ação",
    "tag": "Reconhecimento",
    "wide": true,
    "caption": "Grupo de alunos da Escola SENAI \"Morvan Figueiredo\" CFP 1.03 comemora no pátio exibindo com satisfação as squeezes térmicas e kits do Google Gemini."
  },
  {
    "id": 16,
    "file": "WhatsApp Image 2026-10-27 at 15.58.49.jpeg",
    "title": "Convivência e Descontração no Jardim da Escola",
    "category": "acao",
    "categoryLabel": "Estudantes em Ação",
    "tag": "Vivência Escolar",
    "wide": false,
    "caption": "Alunas compartilhando a cartela de adesivos exclusivos do Gemini e a garrafa personalizada conquistada nas dinâmicas de raciocínio e prompts."
  },
  {
    "id": 17,
    "file": "WhatsApp Image 2026-10-27 at 11.10.32 (2).jpeg",
    "title": "Panorama do Pátio e Fluxo de Participantes",
    "category": "acao",
    "categoryLabel": "Estudantes em Ação",
    "tag": "Vista Panorâmica",
    "wide": true,
    "caption": "Visão ampla das áreas externas e jardins da Escola SENAI \"Morvan Figueiredo\" CFP 1.03 com os estudantes movimentando as estações do Google Day."
  },
  {
    "id": 18,
    "file": "WhatsApp Image 2026-10-27 at 11.10.32 (1).jpeg",
    "title": "Integração nos Espaços de Convivência",
    "category": "acao",
    "categoryLabel": "Estudantes em Ação",
    "tag": "Convivência Escolar",
    "wide": false,
    "caption": "Circulação ativa e troca de ideias entre alunos nos corredores e passarelas após as sessões formativas."
  },
  {
    "id": 19,
    "file": "WhatsApp Image 2026-10-27 at 14.43.52 (1).jpeg",
    "title": "Início da Jornada: Conexão via QR Code no Telão",
    "category": "auditorio",
    "categoryLabel": "Auditório & Google Gemini",
    "tag": "Interatividade Digital",
    "wide": false,
    "caption": "Estudantes no auditório com celulares a postos escaneando o código de início da jornada na plataforma Gemini Academy Lab."
  },
  {
    "id": 20,
    "file": "WhatsApp Image 2026-10-27 at 14.43.52 (2).jpeg",
    "title": "Desafio Visual: Humana ou Gemini?",
    "category": "auditorio",
    "categoryLabel": "Auditório & Google Gemini",
    "tag": "Discernimento Crítico",
    "wide": false,
    "caption": "Atividade interativa desafiando a percepção dos estudantes na identificação de elementos fotorrealistas em retratos gerados por inteligência artificial."
  },
  {
    "id": 21,
    "file": "WhatsApp Image 2026-10-27 at 14.43.52 (3).jpeg",
    "title": "Cultura e Realismo com Inteligência Artificial",
    "category": "auditorio",
    "categoryLabel": "Auditório & Google Gemini",
    "tag": "IA Generativa",
    "wide": false,
    "caption": "Análise guiada sobre fotorrealismo, representatividade e detalhes na geração de imagens de povos originários com ferramentas generativas."
  },
  {
    "id": 22,
    "file": "WhatsApp Image 2026-10-27 at 14.43.52.jpeg",
    "title": "Enquete de Nível de Experiência dos Alunos",
    "category": "biblioteca",
    "categoryLabel": "Semana da Biblioteca & Conecta SENAI",
    "tag": "Pesquisa em Tempo Real",
    "wide": false,
    "caption": "Votação em tempo real no auditório sobre o nível de familiaridade dos estudantes com inteligência artificial e seu uso no cotidiano escolar."
  },
  {
    "id": 23,
    "file": "WhatsApp Image 2026-10-27 at 14.59.22.jpeg",
    "title": "Debate Ético: Resumos por IA vs Leitura Crítica",
    "category": "auditorio",
    "categoryLabel": "Auditório & Google Gemini",
    "tag": "Ética e Responsabilidade",
    "wide": false,
    "caption": "Discussão orientada sobre o uso consciente da IA nos estudos: quando é produtivo resumir leituras e o papel insubstituível do pensamento autônomo."
  },
  {
    "id": 24,
    "file": "WhatsApp Image 2026-10-27 at 11.10.38 (1).jpeg",
    "title": "Os 4 Pilares: O Que É Inteligência Artificial?",
    "category": "auditorio",
    "categoryLabel": "Auditório & Google Gemini",
    "tag": "Fundamentos de IA",
    "wide": false,
    "caption": "Apresentação formativa detalhando os quatro pilares estruturantes: Aprendizado, Raciocínio, Solução de Problemas e Criação."
  },
  {
    "id": 25,
    "file": "WhatsApp Image 2026-10-27 at 11.10.38.jpeg",
    "title": "A Era da IA Agêntica e Autonomia Direcionada",
    "category": "auditorio",
    "categoryLabel": "Auditório & Google Gemini",
    "tag": "IA Agêntica",
    "wide": true,
    "caption": "Explanação sobre o comportamento direcionado a objetivos e a operação autônoma dos novos agentes inteligentes no mercado profissional."
  },
  {
    "id": 26,
    "file": "WhatsApp Image 2026-10-27 at 11.12.24 (1).jpeg",
    "title": "Facilitadoras Amplifica / Google for Education",
    "category": "biblioteca",
    "categoryLabel": "Semana da Biblioteca & Conecta SENAI",
    "tag": "Gemini Academy",
    "wide": false,
    "caption": "Alice Turibio e Roberta Freitas, especialistas do Gemini Academy e parceiras do Google for Education, conduzindo a formação dos alunos."
  },
  {
    "id": 27,
    "file": "WhatsApp Image 2026-10-27 at 11.12.24.jpeg",
    "title": "Boas Práticas e Diálogo com Especialistas",
    "category": "biblioteca",
    "categoryLabel": "Semana da Biblioteca & Conecta SENAI",
    "tag": "Diálogo Educacional",
    "wide": false,
    "caption": "Orientações fundamentais para os alunos da Escola SENAI \"Morvan Figueiredo\" CFP 1.03 sobre o uso seguro, ético e criativo das novas tecnologias."
  },
  {
    "id": 28,
    "file": "WhatsApp Image 2026-10-27 at 11.12.22.jpeg",
    "title": "Votação Interativa da Turma",
    "category": "biblioteca",
    "categoryLabel": "Semana da Biblioteca & Conecta SENAI",
    "tag": "Participação Coletiva",
    "wide": false,
    "caption": "Momento participativo no qual os alunos expressaram suas percepções sobre a curiosidade e o contato prévio com IA generativa."
  },
  {
    "id": 29,
    "file": "WhatsApp Image 2026-10-27 at 11.12.23 (1).jpeg",
    "title": "Auditório em Plena Imersão",
    "category": "auditorio",
    "categoryLabel": "Auditório & Google Gemini",
    "tag": "Palestra Magna",
    "wide": false,
    "caption": "Plateia concentrada durante a apresentação dos palestrantes remotos com o palco iluminado pelas cores do Google Day."
  },
  {
    "id": 30,
    "file": "WhatsApp Image 2026-10-27 at 11.12.23 (2).jpeg",
    "title": "Conforto e Infraestrutura de Ponta",
    "category": "auditorio",
    "categoryLabel": "Auditório & Google Gemini",
    "tag": "Estrutura SENAI",
    "wide": false,
    "caption": "Instalações modernas e climatizadas da Escola SENAI \"Morvan Figueiredo\" CFP 1.03 proporcionando conforto e acústica para grandes eventos."
  },
  {
    "id": 31,
    "file": "WhatsApp Image 2026-10-27 at 11.12.23.jpeg",
    "title": "Estudantes Conectados com Seus Dispositivos",
    "category": "biblioteca",
    "categoryLabel": "Semana da Biblioteca & Conecta SENAI",
    "tag": "Mundo Digital",
    "wide": false,
    "caption": "Alunos com notebooks e dispositivos portáteis acompanhando a apresentação e participando ativamente dos exercícios."
  },
  {
    "id": 32,
    "file": "WhatsApp Image 2026-10-27 at 15.58.46.jpeg",
    "title": "Preparação dos Kits e Brindes Gemini",
    "category": "cenografia",
    "categoryLabel": "Ambiente & Cenografia",
    "tag": "Organização",
    "wide": false,
    "caption": "Membros da equipe organizando as caixas de brindes e alinhando as garrafas pretas térmicas personalizadas para a premiação dos alunos."
  },
  {
    "id": 33,
    "file": "WhatsApp Image 2026-10-27 at 11.10.32.jpeg",
    "title": "Bancada Gamificada com Squeezes e Cartas",
    "category": "cenografia",
    "categoryLabel": "Ambiente & Cenografia",
    "tag": "Ponto de Interação",
    "wide": false,
    "caption": "Detalhe da estação de desafios 'Escolha uma carta e descubra seu prompt Gemini' montada para incentivar a curiosidade técnica."
  },
  {
    "id": 34,
    "file": "WhatsApp Image 2026-10-27 at 11.10.30 (1).jpeg",
    "title": "Squeeze Térmica Oficial Google Gemini",
    "category": "cenografia",
    "categoryLabel": "Ambiente & Cenografia",
    "tag": "Brinde Institucional",
    "wide": false,
    "caption": "A garrafa preta fosca com a gravação 'Google Gemini', símbolo comemorativo distribuído aos estudantes participantes."
  },
  {
    "id": 35,
    "file": "WhatsApp Image 2026-10-27 at 11.10.30.jpeg",
    "title": "Instrutor SENAI e Painel Modular Gemini Lab",
    "category": "cenografia",
    "categoryLabel": "Ambiente & Cenografia",
    "tag": "Espaço Cenográfico",
    "wide": false,
    "caption": "Educador do SENAI ao lado do painel modular com formas geométricas e cores Google, destacando o padrão institucional da escola."
  },
  {
    "id": 36,
    "file": "WhatsApp Image 2026-10-27 at 11.10.33.jpeg",
    "title": "Equipe Docente e Coordenação do SENAI",
    "category": "auditorio",
    "categoryLabel": "Auditório & Google Gemini",
    "tag": "Corpo Docente",
    "wide": false,
    "caption": "Educadores da unidade celebrando a concretização da parceria e o entusiasmo contagiante de cada aluno participante."
  },
  {
    "id": 37,
    "file": "WhatsApp Image 2026-10-27 at 11.12.25 (1).jpeg",
    "title": "Projeção de Abertura: Um Dia SENAI + Google de IA",
    "category": "cenografia",
    "categoryLabel": "Ambiente & Cenografia",
    "tag": "Abertura Oficial",
    "wide": true,
    "caption": "Projeção oficial em 27 de outubro de 2026: 'Inteligência artificial para apoiar sua aprendizagem' na Escola SENAI \"Morvan Figueiredo\" CFP 1.03."
  },
  {
    "id": 38,
    "file": "WhatsApp Image 2026-10-27 at 11.12.25 (2).jpeg",
    "title": "Palco Principal do Gemini Lab Preparado",
    "category": "cenografia",
    "categoryLabel": "Ambiente & Cenografia",
    "tag": "Cenografia de Palco",
    "wide": false,
    "caption": "Cenário planejado com a estética Google for Education e a tradicional qualidade e estrutura técnica do SENAI."
  },
  {
    "id": 39,
    "file": "WhatsApp Image 2026-10-27 at 11.12.25.jpeg",
    "title": "Composição Modular com Cores Google",
    "category": "cenografia",
    "categoryLabel": "Ambiente & Cenografia",
    "tag": "Identidade Visual",
    "wide": false,
    "caption": "Detalhe dos módulos estilizados com ícones representativos de educação, criatividade e tecnologia que acolheram a comunidade escolar."
  },
  {
    "id": 40,
    "file": "cartaz-oficial.jpg",
    "title": "Cartaz Oficial: Um Dia SENAI + Google de IA",
    "category": "cenografia",
    "categoryLabel": "Cenografia & Cartaz",
    "tag": "Cartaz Oficial",
    "wide": true,
    "caption": "Cartaz oficial do evento \"Um Dia SENAI + Google de IA\" realizado em 27 de outubro de 2026 na Escola SENAI \"Morvan Figueiredo\" CFP 1.03 (Rua do Oratório, 215 - Mooca)."
  },
  {
    "id": 41,
    "file": "WhatsApp Image 2026-10-27 at 13.47.05.jpeg",
    "title": "Palco e Abertura no Auditório",
    "category": "auditorio",
    "categoryLabel": "Auditório & Google Gemini",
    "tag": "Abertura Oficial",
    "wide": true,
    "caption": "Abertura oficial do Google Day no auditório com a cenografia Gemini Lab e acolhimento aos estudantes da Escola SENAI \"Morvan Figueiredo\" CFP 1.03."
  },
  {
    "id": 42,
    "file": "WhatsApp Image 2026-10-27 at 14.43.51.jpeg",
    "title": "Início da Jornada no Gemini AcademyLab",
    "category": "auditorio",
    "categoryLabel": "Auditório & Google Gemini",
    "tag": "Transmissão Síncrona",
    "wide": false,
    "caption": "Telão do auditório projetando o QR Code de acesso ao Gemini AcademyLab com transmissão simultânea de capacitação em IA."
  },
  {
    "id": 43,
    "file": "WhatsApp Image 2026-10-27 at 15.58.45 (1).jpeg",
    "title": "Entrega de Premiação com Squeeze Térmica",
    "category": "acao",
    "categoryLabel": "Estudantes em Ação",
    "tag": "Premiação Google",
    "wide": false,
    "caption": "Estudante premiado com squeeze térmica exclusiva após desvendar os desafios práticos de engenharia de prompts."
  },
  {
    "id": 44,
    "file": "WhatsApp Image 2026-10-27 at 15.58.45.jpeg",
    "title": "Mobilização na Entrada da Biblioteca",
    "category": "biblioteca",
    "categoryLabel": "Semana da Biblioteca & Conecta SENAI",
    "tag": "Semana da Biblioteca",
    "wide": false,
    "caption": "Estudantes na entrada da biblioteca para participar das oficinas simultâneas da Semana da Biblioteca e apresentação da Plataforma Conecta SENAI."
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
  filterButtons: document.querySelectorAll('.filter-chip, .filter-btn'),
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
  navLinks: document.querySelector('.nav-menu, .nav-links')
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
  const navLinks = document.querySelectorAll('.nav-tab, .nav-link');

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

    dom.navLinks.querySelectorAll('.nav-tab, .nav-link').forEach(link => {
      link.addEventListener('click', () => {
        dom.navLinks.classList.remove('mobile-open');
      });
    });
  }

  initRelatorioHandlers();
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
// GERAÇÃO E DOWNLOAD DO RELATÓRIO DO DIA EM PDF
// =============================================================================
function initRelatorioHandlers() {
  const btnDownload = document.getElementById('btn-download-pdf');
  const btnPrint = document.getElementById('btn-print-relatorio');
  const modal = document.getElementById('relatorio-preview-modal');
  const modalBtnDownload = document.getElementById('modal-btn-download');
  const modalBtnPrint = document.getElementById('modal-btn-print');
  const modalBtnClose = document.getElementById('modal-btn-close');
  const pdfDoc = document.getElementById('relatorio-documento-pdf');

  function baixarPDF(triggerBtn) {
    if (!pdfDoc) return;
    if (typeof html2pdf === 'undefined') {
      window.print();
      return;
    }

    const renderContainer = document.getElementById('pdf-render-container');
    if (renderContainer) {
      renderContainer.style.left = '0';
      renderContainer.style.top = '0';
      renderContainer.style.zIndex = '-99999';
    }

    const originalHtml = triggerBtn ? triggerBtn.innerHTML : '';
    if (triggerBtn) {
      triggerBtn.disabled = true;
      triggerBtn.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="animation: spin 1s linear infinite;">
          <circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle>
          <path d="M12 2a10 10 0 0 1 10 10"></path>
        </svg>
        <span>Gerando PDF Oficial...</span>
      `;
    }

    const opt = {
      margin: 0,
      filename: 'Relatorio_Google_Day_SENAI_Morvan_Figueiredo_27Out2026.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: {
        scale: 2,
        useCORS: true,
        logging: false,
        letterRendering: true,
        scrollX: 0,
        scrollY: 0,
        windowWidth: 794
      },
      jsPDF: {
        unit: 'mm',
        format: 'a4',
        orientation: 'portrait'
      },
      pagebreak: { mode: ['css', 'legacy'] }
    };

    html2pdf()
      .set(opt)
      .from(pdfDoc)
      .save()
      .then(() => {
        if (renderContainer) renderContainer.style.left = '-9999px';
        if (triggerBtn) {
          triggerBtn.disabled = false;
          triggerBtn.innerHTML = originalHtml;
        }
      })
      .catch((err) => {
        console.error('Erro na geração do PDF:', err);
        if (renderContainer) renderContainer.style.left = '-9999px';
        if (triggerBtn) {
          triggerBtn.disabled = false;
          triggerBtn.innerHTML = originalHtml;
        }
        window.print();
      });
  }

  function abrirModal() {
    if (modal && pdfDoc) {
      const slot = document.getElementById('modal-preview-slot');
      if (slot) {
        slot.innerHTML = '';
        slot.appendChild(pdfDoc.cloneNode(true));
      }
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function fecharModal() {
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  if (btnDownload) {
    btnDownload.addEventListener('click', () => baixarPDF(btnDownload));
  }

  if (btnPrint) {
    btnPrint.addEventListener('click', abrirModal);
  }

  if (modalBtnDownload) {
    modalBtnDownload.addEventListener('click', () => baixarPDF(modalBtnDownload));
  }

  if (modalBtnPrint) {
    modalBtnPrint.addEventListener('click', () => window.print());
  }

  if (modalBtnClose) {
    modalBtnClose.addEventListener('click', fecharModal);
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) fecharModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
      fecharModal();
    }
  });
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

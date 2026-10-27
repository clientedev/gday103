# Google Day na Escola SENAI "Morvan Figueiredo" CFP 1.03 — Gemini Lab (gday103)

Galeria institucional interativa, moderna e responsiva desenvolvida para documentar e celebrar os registros do **Google Day** e da **Semana da Biblioteca**, realizados em **27 de outubro de 2026** na **Escola SENAI "Morvan Figueiredo" CFP 1.03**.

📍 **Endereço Oficial:** Rua do Oratório, 215 - Mooca, São Paulo / SP — CEP 03117-000  
🌐 **Parceria:** SENAI-SP & Google for Education  

---

## 🌟 Principais Destaques do Projeto

1. **Identidade Visual Inspirada no Google & SENAI Oficial**:
   - Paleta cromática oficial do Google: Azul (`#4285F4`), Vermelho (`#EA4335`), Amarelo (`#FBBC04`) e Verde (`#34A853`).
   - Logotipo oficial do SENAI em formato raster (PNG original, sem vetorização).
   - Tipografia moderna (*Outfit* para títulos e *Inter* para o corpo de texto).
   - Alternância entre **Tema Claro Google** (padrão) e **Modo Gemini Lab Dark**.

2. **Destaque do Docente Remoter SENAI**:
   - Identificação e ênfase nas ações do **Docente Remoter SENAI** (trajado com polo preta oficial com insígnia Remoter), responsável pela facilitação pedagógica, dinâmicas de palco no auditório e entrega de premiações (squeezes térmicas) aos estudantes.

3. **Semana da Biblioteca & Plataforma Conecta SP**:
   - Seção dedicada à ação simultânea realizada na biblioteca escolar.
   - Apresentação da **Plataforma Conecta** (a biblioteca digital do SENAI-SP com acervo de milhares de títulos), que foi tema central do workshop literário.
   - Apresentação e desenvolvimento de **Prompts de Literatura** e lançamento da **Prompioteca** pelos alunos.

4. **Apresentação Oficial Google Slides Incorporada**:
   - Incorporação interativa e discreta da apresentação de slides oficial (*PROMPIOTECA - Apresentação IA & Gemini*) com controles de navegação e opção de abertura externa:
     [Acessar Google Slides](https://docs.google.com/presentation/d/1EKMKKHYsi4vLz0OcVVFUKXClSW29bW0tGvRHm16-sdI/edit?usp=sharing)

5. **Acervo Multimídia Completo**:
   - **44 Fotografias Oficiais**: Cada imagem conta com título, categoria, tags dinâmicas e legenda individual contextualizada.
   - **7 Vídeos Reais**: Registros audiovisuais em alta qualidade dos momentos de mobilização, oficinas e auditório.

6. **Lightbox Modal Interativo**:
   - Visualização em tela cheia com zoom interativo, download direto da fotografia, suporte a toques em telas móveis (*swipe*) e navegação pelas teclas de seta (`←`, `→`, `ESC`).
   - Contador dinâmico de fotos atualizado conforme o filtro ativo.

---

## 📁 Estrutura de Arquivos

```text
gday103/
├── index.html            # Estrutura semântica HTML5 acessível com metatags SEO
├── styles.css            # Design System Vanilla CSS com variáveis de cores e tema
├── script.js             # Catálogo de dados (44 fotos), filtros e lógica do lightbox
├── senai-logo.png        # Logotipo oficial SENAI em alta fidelidade
├── cartaz-oficial.jpg    # Cartaz oficial do evento Um Dia SENAI + Google de IA
├── *.jpeg / *.jpg        # 44 Fotografias oficiais do evento
├── *.mp4                 # 7 Vídeos oficiais gravados na escola
├── .gitignore            # Exclusão de arquivos temporários do sistema operacional
└── README.md             # Documentação oficial do repositório
```

---

## 🚀 Como Executar Localmente

Você pode abrir diretamente o arquivo `index.html` em qualquer navegador web moderno ou iniciar um servidor HTTP local:

```bash
# Com Python 3:
python -m http.server 8080

# Ou com Node.js (npx serve):
npx serve .
```

Acesse no navegador: `http://localhost:8080`

---

## 🏷️ Filtros de Fotografia Disponíveis

- **Todos os Registros (44)**: Acervo fotográfico integral.
- **Semana da Biblioteca & Conecta (10)**: Oficinas literárias, Prompioteca e Plataforma Conecta.
- **Docente Remoter SENAI (5)**: Atuação do docente Remoter no palco e na coordenação dos desafios.
- **Auditório & Google Gemini (12)**: Abertura, telões interativos, QR codes e conexão com as facilitadoras.
- **Estudantes em Ação (10)**: Turmas trabalhando em grupo, testando prompts e interagindo pelo campus.
- **Cenografia & Cartaz (7)**: Detalhes visuais do palco, backdrop Gemini Lab e cartaz oficial.

---

© 2026 Escola SENAI "Morvan Figueiredo" CFP 1.03 & Google for Education. Todos os direitos reservados.

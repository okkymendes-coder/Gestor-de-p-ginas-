# Gestor de Páginas - Page Agent

Um agente inteligente para gerenciamento de páginas com IA.

An intelligent agent for AI-powered page management.

## Características / Features

- ✨ Criar páginas / Create pages
- 📖 Ler páginas / Read pages
- ✏️ Atualizar páginas / Update pages
- 🗑️ Deletar páginas / Delete pages
- 🔍 Buscar páginas / Search pages
- 🏷️ Organizar com tags / Organize with tags

## Instalação / Installation

```bash
# Clone o repositório / Clone the repository
git clone https://github.com/okkymendes-coder/Gestor-de-p-ginas-.git
cd Gestor-de-p-ginas-

# Instale as dependências (se necessário) / Install dependencies (if needed)
pip install -r requirements.txt
```

## Uso / Usage

### Uso Básico / Basic Usage

```python
from page_agent import PageAgent

# Criar uma instância do agente / Create an agent instance
agent = PageAgent()

# Criar uma página / Create a page
page = agent.create_page(
    title="Minha Primeira Página",
    content="Este é o conteúdo da página",
    tags=["exemplo", "tutorial"]
)

# Listar todas as páginas / List all pages
pages = agent.list_pages()

# Buscar páginas / Search pages
results = agent.search_pages("tutorial")

# Ler uma página específica / Read a specific page
page = agent.read_page(page_id)

# Atualizar uma página / Update a page
agent.update_page(page_id, content="Novo conteúdo")

# Deletar uma página / Delete a page
agent.delete_page(page_id)
```

### Demonstração / Demo

Execute o arquivo principal para ver uma demonstração completa:

Run the main file to see a complete demonstration:

```bash
python page_agent.py
```

## Estrutura do Projeto / Project Structure

```
Gestor-de-p-ginas-/
├── page_agent.py      # Agente principal / Main agent
├── requirements.txt   # Dependências / Dependencies
├── README.md         # Documentação / Documentation
└── pages/           # Armazenamento de páginas / Page storage (auto-created)
```

## Como Funciona / How It Works

O Page Agent armazena cada página como um arquivo JSON no diretório `pages/`. Cada página contém:

The Page Agent stores each page as a JSON file in the `pages/` directory. Each page contains:

- **id**: Identificador único / Unique identifier
- **title**: Título da página / Page title
- **content**: Conteúdo da página / Page content
- **tags**: Tags para categorização / Tags for categorization
- **created_at**: Data de criação / Creation date
- **updated_at**: Data de atualização / Update date

## Contribuindo / Contributing

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

Contributions are welcome! Feel free to open issues or pull requests.

## Licença / License

MIT

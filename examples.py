"""
Exemplos de uso do Page Agent
Usage examples for Page Agent
"""

from page_agent import PageAgent


def exemplo_basico():
    """Exemplo básico de uso / Basic usage example"""
    print("\n=== Exemplo Básico / Basic Example ===\n")
    
    # Criar agente / Create agent
    agent = PageAgent(storage_path="example_pages")
    
    # Criar uma página / Create a page
    page = agent.create_page(
        title="Minha Primeira Página",
        content="Olá, mundo! Este é o conteúdo da minha página.",
        tags=["exemplo", "primeira"]
    )
    print(f"✓ Página criada: {page['title']}")
    print(f"  ID: {page['id']}")
    
    # Ler a página / Read the page
    page_lida = agent.read_page(page['id'])
    print(f"\n✓ Página lida:")
    print(f"  Título: {page_lida['title']}")
    print(f"  Conteúdo: {page_lida['content']}")
    print(f"  Tags: {', '.join(page_lida['tags'])}")


def exemplo_crud_completo():
    """Exemplo completo de CRUD / Complete CRUD example"""
    print("\n=== Exemplo CRUD Completo / Complete CRUD Example ===\n")
    
    agent = PageAgent(storage_path="example_pages")
    
    # CREATE - Criar
    print("1. CREATE - Criando nova página...")
    page = agent.create_page(
        title="Tutorial de Python",
        content="Python é uma linguagem de programação poderosa e fácil de aprender.",
        tags=["tutorial", "python", "programacao"]
    )
    print(f"   ✓ Criado: {page['title']} (ID: {page['id']})")
    
    # READ - Ler
    print("\n2. READ - Lendo a página...")
    page_lida = agent.read_page(page['id'])
    print(f"   ✓ Título: {page_lida['title']}")
    print(f"   ✓ Conteúdo: {page_lida['content']}")
    
    # UPDATE - Atualizar
    print("\n3. UPDATE - Atualizando a página...")
    page_atualizada = agent.update_page(
        page['id'],
        content="Python é uma linguagem versátil usada em web, IA, ciência de dados e muito mais!"
    )
    print(f"   ✓ Conteúdo atualizado: {page_atualizada['content']}")
    
    # DELETE - Deletar
    print("\n4. DELETE - Deletando a página...")
    sucesso = agent.delete_page(page['id'])
    print(f"   ✓ Página deletada: {sucesso}")


def exemplo_organizacao():
    """Exemplo de organização com tags / Organization with tags example"""
    print("\n=== Exemplo de Organização com Tags / Tags Organization Example ===\n")
    
    agent = PageAgent(storage_path="example_pages")
    
    # Criar páginas com diferentes tags
    print("Criando páginas organizadas por tags...")
    
    agent.create_page(
        "Introdução ao Python",
        "Aprenda o básico de Python",
        ["tutorial", "python", "iniciante"]
    )
    
    agent.create_page(
        "Python Avançado",
        "Decoradores, generators e mais",
        ["tutorial", "python", "avancado"]
    )
    
    agent.create_page(
        "Introdução ao JavaScript",
        "Aprenda JavaScript do zero",
        ["tutorial", "javascript", "iniciante"]
    )
    
    print("✓ Páginas criadas\n")
    
    # Listar páginas por tag
    print("Páginas com tag 'python':")
    for page in agent.list_pages(tag="python"):
        print(f"  - {page['title']}")
    
    print("\nPáginas com tag 'iniciante':")
    for page in agent.list_pages(tag="iniciante"):
        print(f"  - {page['title']}")


def exemplo_busca():
    """Exemplo de busca / Search example"""
    print("\n=== Exemplo de Busca / Search Example ===\n")
    
    agent = PageAgent(storage_path="example_pages")
    
    # Criar conteúdo para busca
    print("Criando conteúdo para demonstrar busca...")
    
    agent.create_page(
        "Receita de Bolo",
        "Ingredientes: farinha, açúcar, ovos, leite",
        ["culinaria", "receita"]
    )
    
    agent.create_page(
        "Receita de Pão",
        "Ingredientes: farinha, água, fermento, sal",
        ["culinaria", "receita"]
    )
    
    agent.create_page(
        "Lista de Compras",
        "Comprar: leite, ovos, pão",
        ["lista", "compras"]
    )
    
    print("✓ Conteúdo criado\n")
    
    # Buscar
    print("Buscando por 'farinha':")
    resultados = agent.search_pages("farinha")
    for page in resultados:
        print(f"  - {page['title']}")
    
    print("\nBuscando por 'leite':")
    resultados = agent.search_pages("leite")
    for page in resultados:
        print(f"  - {page['title']}")


def limpar_exemplos():
    """Limpa os arquivos de exemplo / Clean up example files"""
    import shutil
    import os
    
    example_dir = "example_pages"
    if os.path.exists(example_dir):
        shutil.rmtree(example_dir)
        print(f"\n✓ Diretório de exemplos limpo / Example directory cleaned")


if __name__ == "__main__":
    print("=" * 60)
    print("Exemplos de Uso do Page Agent")
    print("Page Agent Usage Examples")
    print("=" * 60)
    
    # Limpar antes de começar
    limpar_exemplos()
    
    # Executar exemplos
    exemplo_basico()
    exemplo_crud_completo()
    exemplo_organizacao()
    exemplo_busca()
    
    # Limpar depois
    limpar_exemplos()
    
    print("\n" + "=" * 60)
    print("✅ Todos os exemplos executados com sucesso!")
    print("All examples executed successfully!")
    print("=" * 60)

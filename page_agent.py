"""
Page Agent - AI-powered page management system
Um agente inteligente para gerenciar páginas
"""

import json
import os
import re
from datetime import datetime
from typing import Dict, List, Optional


class PageAgent:
    """
    Agente inteligente para gerenciamento de páginas.
    Intelligent agent for page management.
    """
    
    def __init__(self, storage_path: str = "pages"):
        """
        Inicializa o agente de páginas.
        Initialize the page agent.
        
        Args:
            storage_path: Caminho para armazenar as páginas
        """
        self.storage_path = storage_path
        self._ensure_storage_exists()
    
    def _ensure_storage_exists(self):
        """Garante que o diretório de armazenamento existe."""
        if not os.path.exists(self.storage_path):
            os.makedirs(self.storage_path)
    
    def create_page(self, title: str, content: str, tags: Optional[List[str]] = None) -> Dict:
        """
        Cria uma nova página.
        Creates a new page.
        
        Args:
            title: Título da página
            content: Conteúdo da página
            tags: Tags opcionais para categorização
            
        Returns:
            Dicionário com informações da página criada
        """
        page_id = self._generate_page_id(title)
        
        page = {
            "id": page_id,
            "title": title,
            "content": content,
            "tags": tags or [],
            "created_at": datetime.now().isoformat(),
            "updated_at": datetime.now().isoformat()
        }
        
        self._save_page(page_id, page)
        return page
    
    def read_page(self, page_id: str) -> Optional[Dict]:
        """
        Lê uma página existente.
        Reads an existing page.
        
        Args:
            page_id: ID da página
            
        Returns:
            Dicionário com informações da página ou None se não encontrada
        """
        page_path = os.path.join(self.storage_path, f"{page_id}.json")
        
        if not os.path.exists(page_path):
            return None
        
        with open(page_path, 'r', encoding='utf-8') as f:
            return json.load(f)
    
    def update_page(self, page_id: str, title: Optional[str] = None, 
                   content: Optional[str] = None, tags: Optional[List[str]] = None) -> Optional[Dict]:
        """
        Atualiza uma página existente.
        Updates an existing page.
        
        Args:
            page_id: ID da página
            title: Novo título (opcional)
            content: Novo conteúdo (opcional)
            tags: Novas tags (opcional)
            
        Returns:
            Dicionário com informações da página atualizada ou None se não encontrada
        """
        page = self.read_page(page_id)
        
        if page is None:
            return None
        
        if title is not None:
            page["title"] = title
        if content is not None:
            page["content"] = content
        if tags is not None:
            page["tags"] = tags
        
        page["updated_at"] = datetime.now().isoformat()
        
        self._save_page(page_id, page)
        return page
    
    def delete_page(self, page_id: str) -> bool:
        """
        Deleta uma página.
        Deletes a page.
        
        Args:
            page_id: ID da página
            
        Returns:
            True se a página foi deletada, False se não foi encontrada
        """
        page_path = os.path.join(self.storage_path, f"{page_id}.json")
        
        if not os.path.exists(page_path):
            return False
        
        os.remove(page_path)
        return True
    
    def list_pages(self, tag: Optional[str] = None) -> List[Dict]:
        """
        Lista todas as páginas.
        Lists all pages.
        
        Args:
            tag: Filtrar por tag específica (opcional)
            
        Returns:
            Lista de páginas
        """
        pages = []
        
        if not os.path.exists(self.storage_path):
            return pages
        
        for filename in os.listdir(self.storage_path):
            if filename.endswith('.json'):
                page_id = filename[:-5]
                page = self.read_page(page_id)
                
                if page and (tag is None or tag in page.get("tags", [])):
                    pages.append(page)
        
        # Ordenar por data de criação (mais recente primeiro)
        pages.sort(key=lambda x: x["created_at"], reverse=True)
        return pages
    
    def search_pages(self, query: str) -> List[Dict]:
        """
        Busca páginas por título ou conteúdo.
        Searches pages by title or content.
        
        Args:
            query: Termo de busca
            
        Returns:
            Lista de páginas que correspondem à busca
        """
        query_lower = query.lower()
        results = []
        
        for page in self.list_pages():
            if (query_lower in page["title"].lower() or 
                query_lower in page["content"].lower()):
                results.append(page)
        
        return results
    
    def _generate_page_id(self, title: str) -> str:
        """Gera um ID único para a página baseado no título e timestamp."""
        # Remove caracteres especiais e espaços
        clean_title = re.sub(r'[^\w\s-]', '', title.lower())
        clean_title = re.sub(r'[-\s]+', '-', clean_title)
        timestamp = datetime.now().strftime("%Y%m%d%H%M%S")
        return f"{clean_title[:30]}-{timestamp}"
    
    def _save_page(self, page_id: str, page: Dict):
        """Salva uma página no armazenamento."""
        page_path = os.path.join(self.storage_path, f"{page_id}.json")
        with open(page_path, 'w', encoding='utf-8') as f:
            json.dump(page, f, ensure_ascii=False, indent=2)


def main():
    """Função principal para demonstração."""
    print("=== Gestor de Páginas - Page Agent ===")
    print("Agente inteligente para gerenciamento de páginas\n")
    
    # Criar instância do agente
    agent = PageAgent()
    
    # Criar algumas páginas de exemplo
    print("Criando páginas de exemplo...")
    page1 = agent.create_page(
        "Bem-vindo ao Gestor de Páginas",
        "Este é um sistema de gerenciamento de páginas com IA.",
        ["tutorial", "inicio"]
    )
    print(f"✓ Página criada: {page1['title']}")
    
    page2 = agent.create_page(
        "Como usar o Page Agent",
        "O Page Agent permite criar, ler, atualizar e deletar páginas facilmente.",
        ["tutorial", "documentacao"]
    )
    print(f"✓ Página criada: {page2['title']}")
    
    page3 = agent.create_page(
        "Recursos Avançados",
        "Busque páginas, filtre por tags e muito mais!",
        ["recursos", "avancado"]
    )
    print(f"✓ Página criada: {page3['title']}")
    
    # Listar páginas
    print("\n--- Listando todas as páginas ---")
    for page in agent.list_pages():
        print(f"- {page['title']} (ID: {page['id']})")
        print(f"  Tags: {', '.join(page['tags'])}")
    
    # Buscar páginas
    print("\n--- Buscando páginas com 'tutorial' ---")
    results = agent.search_pages("tutorial")
    for page in results:
        print(f"- {page['title']}")
    
    # Atualizar uma página
    print("\n--- Atualizando página ---")
    updated = agent.update_page(
        page1['id'],
        content="Sistema atualizado com novos recursos!"
    )
    print(f"✓ Página atualizada: {updated['title']}")
    
    # Ler página específica
    print("\n--- Lendo página específica ---")
    page = agent.read_page(page1['id'])
    print(f"Título: {page['title']}")
    print(f"Conteúdo: {page['content']}")
    print(f"Criado em: {page['created_at']}")
    print(f"Atualizado em: {page['updated_at']}")
    
    print("\n✓ Demonstração concluída!")
    print(f"As páginas foram salvas em: {agent.storage_path}/")


if __name__ == "__main__":
    main()

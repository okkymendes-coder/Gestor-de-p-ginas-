"""
Testes básicos para o Page Agent
Basic tests for the Page Agent
"""

import os
import shutil
from page_agent import PageAgent


def test_create_and_read_page():
    """Testa criação e leitura de páginas."""
    # Setup
    test_storage = "test_pages"
    if os.path.exists(test_storage):
        shutil.rmtree(test_storage)
    
    agent = PageAgent(storage_path=test_storage)
    
    # Test create
    page = agent.create_page("Test Page", "Test Content", ["test"])
    assert page["title"] == "Test Page"
    assert page["content"] == "Test Content"
    assert "test" in page["tags"]
    
    # Test read
    read_page = agent.read_page(page["id"])
    assert read_page["title"] == "Test Page"
    assert read_page["content"] == "Test Content"
    
    # Cleanup
    shutil.rmtree(test_storage)
    print("✓ test_create_and_read_page passed")


def test_update_page():
    """Testa atualização de páginas."""
    # Setup
    test_storage = "test_pages"
    if os.path.exists(test_storage):
        shutil.rmtree(test_storage)
    
    agent = PageAgent(storage_path=test_storage)
    
    # Create and update
    page = agent.create_page("Original Title", "Original Content")
    updated = agent.update_page(page["id"], title="Updated Title", content="Updated Content")
    
    assert updated["title"] == "Updated Title"
    assert updated["content"] == "Updated Content"
    
    # Cleanup
    shutil.rmtree(test_storage)
    print("✓ test_update_page passed")


def test_delete_page():
    """Testa deleção de páginas."""
    # Setup
    test_storage = "test_pages"
    if os.path.exists(test_storage):
        shutil.rmtree(test_storage)
    
    agent = PageAgent(storage_path=test_storage)
    
    # Create and delete
    page = agent.create_page("To Delete", "Content")
    assert agent.delete_page(page["id"]) == True
    assert agent.read_page(page["id"]) is None
    
    # Try to delete non-existent page
    assert agent.delete_page("non-existent") == False
    
    # Cleanup
    shutil.rmtree(test_storage)
    print("✓ test_delete_page passed")


def test_list_pages():
    """Testa listagem de páginas."""
    # Setup
    test_storage = "test_pages"
    if os.path.exists(test_storage):
        shutil.rmtree(test_storage)
    
    agent = PageAgent(storage_path=test_storage)
    
    # Create multiple pages
    agent.create_page("Page 1", "Content 1", ["tag1"])
    agent.create_page("Page 2", "Content 2", ["tag2"])
    agent.create_page("Page 3", "Content 3", ["tag1", "tag2"])
    
    # Test list all
    all_pages = agent.list_pages()
    assert len(all_pages) == 3
    
    # Test filter by tag
    tag1_pages = agent.list_pages(tag="tag1")
    assert len(tag1_pages) == 2
    
    # Cleanup
    shutil.rmtree(test_storage)
    print("✓ test_list_pages passed")


def test_search_pages():
    """Testa busca de páginas."""
    # Setup
    test_storage = "test_pages"
    if os.path.exists(test_storage):
        shutil.rmtree(test_storage)
    
    agent = PageAgent(storage_path=test_storage)
    
    # Create pages with searchable content
    agent.create_page("Python Tutorial", "Learn Python programming")
    agent.create_page("Java Tutorial", "Learn Java programming")
    agent.create_page("Web Development", "Learn HTML and CSS")
    
    # Test search by title
    results = agent.search_pages("Python")
    assert len(results) == 1
    assert results[0]["title"] == "Python Tutorial"
    
    # Test search by content
    results = agent.search_pages("programming")
    assert len(results) == 2
    
    # Test search with no results
    results = agent.search_pages("nonexistent")
    assert len(results) == 0
    
    # Cleanup
    shutil.rmtree(test_storage)
    print("✓ test_search_pages passed")


if __name__ == "__main__":
    print("=== Executando Testes do Page Agent ===\n")
    
    test_create_and_read_page()
    test_update_page()
    test_delete_page()
    test_list_pages()
    test_search_pages()
    
    print("\n✅ Todos os testes passaram com sucesso!")
    print("All tests passed successfully!")

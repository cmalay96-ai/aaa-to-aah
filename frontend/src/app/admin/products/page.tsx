"use client";

import { useState, useEffect } from 'react';
import { LuPlus, LuPencil, LuTrash2, LuPackage, LuDollarSign, LuImage, LuX, LuSave } from 'react-icons/lu';
import { supabaseFetch } from '@/lib/supabaseClient';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image_url: string;
  category: string;
}

export default function AdminProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    image_url: '',
    category: 'Massage'
  });

  const fetchProducts = async () => {
    setLoading(true);
    try {
      // Assuming a 'products' table exists in Supabase
      const data = await supabaseFetch('products?order=name.asc');
      if (data) {
        setProducts(data);
      }
    } catch (e) {
      console.error("Failed to fetch products", e);
      // Fallback if table doesn't exist yet for demo purposes
      // setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleOpenModal = (product: Product | null = null) => {
    if (product) {
      setEditingProduct(product);
      setFormData({
        name: product.name,
        description: product.description,
        price: product.price.toString(),
        image_url: product.image_url,
        category: product.category
      });
    } else {
      setEditingProduct(null);
      setFormData({
        name: '',
        description: '',
        price: '',
        image_url: '',
        category: 'Massage'
      });
    }
    setIsModalOpen(true);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      ...formData,
      price: parseFloat(formData.price)
    };

    try {
      if (editingProduct) {
        await supabaseFetch(`products?id=eq.${editingProduct.id}`, {
          method: 'PATCH',
          body: JSON.stringify(payload)
        });
      } else {
        await supabaseFetch('products', {
          method: 'POST',
          body: JSON.stringify(payload)
        });
      }
      setIsModalOpen(false);
      fetchProducts();
    } catch (e) {
      alert("Failed to save product. Ensure the 'products' table exists in your Supabase project.");
      console.error(e);
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this product?")) {
      try {
        await supabaseFetch(`products?id=eq.${id}`, { method: 'DELETE' });
        setProducts(prev => prev.filter(p => p.id !== id));
      } catch (e) {
        alert("Failed to delete product");
        console.error(e);
      }
    }
  };

  return (
    <div className="space-y-8 relative">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-serif text-white mb-2">Product Management</h1>
          <p className="text-gray-400">Manage your services and products list.</p>
        </div>
        
        <button 
          onClick={() => handleOpenModal()}
          className="flex items-center gap-2 bg-primary text-black px-6 py-3 rounded-xl font-medium hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)]"
        >
          <LuPlus size={20} />
          Add Product
        </button>
      </div>

      {loading ? (
        <div className="p-24 text-center">
          <div className="w-10 h-10 border-2 border-primary/20 border-t-primary rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-400">Loading products...</p>
        </div>
      ) : products.length === 0 ? (
        <div className="bg-surface border border-white/5 rounded-2xl p-24 text-center">
          <LuPackage size={64} className="mx-auto mb-4 opacity-10 text-white" />
          <h3 className="text-xl font-serif text-white mb-2">No Products Found</h3>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            You haven't added any products to your catalog yet. Start by adding your first service or product.
          </p>
          <button 
            onClick={() => handleOpenModal()}
            className="text-primary border border-primary/20 hover:border-primary px-6 py-2 rounded-lg transition-all"
          >
            Create Your First Product
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-surface border border-white/5 rounded-2xl overflow-hidden group hover:border-white/20 transition-all shadow-lg flex flex-col">
              <div className="aspect-video relative overflow-hidden bg-black/40">
                {product.image_url ? (
                  <img src={product.image_url} alt={product.name} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-700">
                    <LuImage size={48} />
                  </div>
                )}
                <div className="absolute top-3 right-3 flex gap-2 translate-y-[-10px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                  <button 
                    onClick={() => handleOpenModal(product)}
                    className="p-2 bg-black/60 backdrop-blur-md text-white hover:text-primary rounded-lg transition-colors"
                  >
                    <LuPencil size={18} />
                  </button>
                  <button 
                    onClick={() => handleDelete(product.id)}
                    className="p-2 bg-black/60 backdrop-blur-md text-white hover:text-red-400 rounded-lg transition-colors"
                  >
                    <LuTrash2 size={18} />
                  </button>
                </div>
                <div className="absolute bottom-3 left-3">
                  <span className="px-2 py-1 bg-primary/20 backdrop-blur-md text-primary text-[10px] font-bold uppercase tracking-widest rounded border border-primary/20">
                    {product.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-serif text-white">{product.name}</h3>
                  <p className="text-primary font-serif font-bold">₹{product.price}</p>
                </div>
                <p className="text-gray-400 text-sm line-clamp-2 mb-4 flex-1">
                  {product.description}
                </p>
                <div className="pt-4 border-t border-white/5 flex justify-between items-center">
                  <span className="text-xs text-gray-500 uppercase tracking-tighter">Availability: In Stock</span>
                  <button className="text-xs text-primary hover:underline font-medium">View Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Product Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setIsModalOpen(false)}></div>
          <div className="relative bg-surface border border-white/10 rounded-3xl w-full max-w-lg shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
            <div className="p-6 border-b border-white/5 flex justify-between items-center">
              <h2 className="text-2xl font-serif text-white">{editingProduct ? 'Edit Product' : 'Add New Product'}</h2>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-500 hover:text-white transition-colors">
                <LuX size={24} />
              </button>
            </div>
            
            <form onSubmit={handleSave} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Product Name</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-background border border-white/10 rounded-xl py-3 px-4 text-white focus:border-primary outline-none transition-all"
                  placeholder="Deep Tissue Massage"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Price (₹)</label>
                  <div className="relative">
                    <LuDollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
                    <input 
                      type="number" 
                      required
                      value={formData.price}
                      onChange={(e) => setFormData({...formData, price: e.target.value})}
                      className="w-full bg-background border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white focus:border-primary outline-none transition-all"
                      placeholder="1999"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Category</label>
                  <select 
                    value={formData.category}
                    onChange={(e) => setFormData({...formData, category: e.target.value})}
                    className="w-full bg-background border border-white/10 rounded-xl py-3 px-4 text-white focus:border-primary outline-none transition-all appearance-none"
                  >
                    <option value="Massage">Massage</option>
                    <option value="Spa">Spa</option>
                    <option value="Healing">Healing</option>
                    <option value="Therapy">Therapy</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Image URL</label>
                <div className="relative">
                  <LuImage className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
                  <input 
                    type="url" 
                    value={formData.image_url}
                    onChange={(e) => setFormData({...formData, image_url: e.target.value})}
                    className="w-full bg-background border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white focus:border-primary outline-none transition-all"
                    placeholder="https://images.unsplash.com/..."
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Description</label>
                <textarea 
                  rows={3}
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  className="w-full bg-background border border-white/10 rounded-xl py-3 px-4 text-white focus:border-primary outline-none transition-all resize-none"
                  placeholder="Briefly describe the product or service..."
                ></textarea>
              </div>
              
              <div className="pt-4 flex gap-4">
                <button 
                  type="button" 
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 px-6 py-3 rounded-xl border border-white/10 text-white hover:bg-white/5 transition-all"
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="flex-1 bg-primary text-black font-bold px-6 py-3 rounded-xl hover:bg-primary/90 transition-all flex items-center justify-center gap-2"
                >
                  <LuSave size={20} />
                  {editingProduct ? 'Update' : 'Create'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

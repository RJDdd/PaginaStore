// Configuración de Supabase
const supabaseUrl = 'https://lrghqupggsruqgxtgsmo.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

// Obtener productos por categoría
async function getProductsByBrand(brand) {
    const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('brand', brand);
    
    if (error) console.error('Error fetching products:', error);
    return data || [];
}

// Obtener todos los productos para la página principal
async function getFeaturedProducts() {
    const { data, error } = await supabase
        .from('products')
        .select('*')
        .limit(6);
    
    if (error) console.error('Error fetching featured products:', error);
    return data || [];
}
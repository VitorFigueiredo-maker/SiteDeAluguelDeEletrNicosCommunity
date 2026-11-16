import { useState } from 'react';
import { Monitor, Laptop, Cpu, Search, Phone, Mail, MapPin, Star, Calendar, DollarSign, ChevronLeft, ChevronRight } from 'lucide-react';

type ProductCategory = 'all' | 'desktop' | 'notebook' | 'monitor';

interface Product {
  id: number;
  name: string;
  category: ProductCategory;
  specs: string[];
  pricePerDay: number;
  pricePerMonth: number;
  image: string;
  rating: number;
  available: boolean;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Desktop Gamer RTX 4070',
    category: 'desktop',
    specs: ['Intel i7-13700K', 'RTX 4070 12GB', '32GB RAM', 'SSD 1TB NVMe'],
    pricePerDay: 150,
    pricePerMonth: 3500,
    image: 'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=400',
    rating: 4.8,
    available: true,
  },
  {
    id: 2,
    name: 'Desktop Profissional',
    category: 'desktop',
    specs: ['Intel i5-12400', 'GTX 1660 Super', '16GB RAM', 'SSD 512GB'],
    pricePerDay: 80,
    pricePerMonth: 1800,
    image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400',
    rating: 4.5,
    available: true,
  },
  {
    id: 39,
    name: 'Desktop Gamer RTX 4090',
    category: 'desktop',
    specs: ['Intel i9-13900K', 'RTX 4090 24GB', '64GB RAM', 'SSD 2TB NVMe'],
    pricePerDay: 250,
    pricePerMonth: 5800,
    image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=400',
    rating: 5.0,
    available: true,
  },
  {
    id: 40,
    name: 'Desktop Workstation',
    category: 'desktop',
    specs: ['AMD Ryzen 9 7950X', 'RTX A4000 16GB', '128GB RAM', 'SSD 4TB NVMe'],
    pricePerDay: 280,
    pricePerMonth: 6500,
    image: 'https://images.unsplash.com/photo-1555680202-c86f0e12f086?w=400',
    rating: 4.9,
    available: true,
  },
  {
    id: 41,
    name: 'Desktop Gamer RTX 3060',
    category: 'desktop',
    specs: ['Intel i5-12600K', 'RTX 3060 12GB', '16GB RAM', 'SSD 512GB'],
    pricePerDay: 95,
    pricePerMonth: 2200,
    image: 'https://images.unsplash.com/photo-1600861194802-a2b11076bc51?w=400',
    rating: 4.6,
    available: true,
  },
  {
    id: 42,
    name: 'Desktop Básico',
    category: 'desktop',
    specs: ['Intel i3-12100', 'Intel UHD 730', '8GB RAM', 'SSD 256GB'],
    pricePerDay: 45,
    pricePerMonth: 1000,
    image: 'https://images.unsplash.com/photo-1623798725971-d6f8c9c23ddb?w=400',
    rating: 4.2,
    available: true,
  },
  {
    id: 43,
    name: 'Desktop AMD Ryzen 7',
    category: 'desktop',
    specs: ['AMD Ryzen 7 5800X', 'RX 6700 XT 12GB', '32GB RAM', 'SSD 1TB'],
    pricePerDay: 125,
    pricePerMonth: 2900,
    image: 'https://images.unsplash.com/photo-1601524909162-ae8725290836?w=400',
    rating: 4.7,
    available: true,
  },
  {
    id: 44,
    name: 'Desktop Office Pro',
    category: 'desktop',
    specs: ['Intel i7-12700', 'Intel UHD 770', '32GB RAM', 'SSD 1TB'],
    pricePerDay: 90,
    pricePerMonth: 2000,
    image: 'https://images.unsplash.com/photo-1625336558715-5b7f83bb3f19?w=400',
    rating: 4.5,
    available: true,
  },
  {
    id: 45,
    name: 'Desktop Mini ITX Gamer',
    category: 'desktop',
    specs: ['AMD Ryzen 5 5600X', 'RTX 3070 8GB', '16GB RAM', 'SSD 512GB'],
    pricePerDay: 110,
    pricePerMonth: 2500,
    image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=400',
    rating: 4.6,
    available: true,
  },
  {
    id: 46,
    name: 'Desktop Creator Edition',
    category: 'desktop',
    specs: ['Intel i9-12900K', 'RTX 3080 10GB', '64GB RAM', 'SSD 2TB NVMe'],
    pricePerDay: 200,
    pricePerMonth: 4600,
    image: 'https://images.unsplash.com/photo-1603201667141-5a2d4c673378?w=400',
    rating: 4.8,
    available: true,
  },
  {
    id: 3,
    name: 'Notebook Dell XPS 15',
    category: 'notebook',
    specs: ['Intel i7-12700H', 'RTX 3050 Ti', '16GB RAM', 'SSD 512GB'],
    pricePerDay: 120,
    pricePerMonth: 2800,
    image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400',
    rating: 4.9,
    available: true,
  },
  {
    id: 4,
    name: 'Notebook MacBook Pro 16"',
    category: 'notebook',
    specs: ['Apple M3 Pro', '18GB RAM', 'SSD 512GB', 'Tela Retina'],
    pricePerDay: 200,
    pricePerMonth: 4500,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400',
    rating: 5.0,
    available: true,
  },
  {
    id: 5,
    name: 'Notebook Lenovo ThinkPad',
    category: 'notebook',
    specs: ['Intel i5-1235U', 'Intel Iris Xe', '8GB RAM', 'SSD 256GB'],
    pricePerDay: 60,
    pricePerMonth: 1400,
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400',
    rating: 4.3,
    available: true,
  },
  {
    id: 6,
    name: 'Monitor LG UltraWide 34"',
    category: 'monitor',
    specs: ['34" 3440x1440', 'IPS 144Hz', 'HDR10', 'USB-C'],
    pricePerDay: 45,
    pricePerMonth: 950,
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400',
    rating: 4.7,
    available: true,
  },
  {
    id: 7,
    name: 'Monitor Samsung Odyssey 27"',
    category: 'monitor',
    specs: ['27" 2560x1440', 'VA 240Hz', 'G-Sync', 'Curvo'],
    pricePerDay: 55,
    pricePerMonth: 1200,
    image: 'https://images.unsplash.com/photo-1585792180666-f7347c490ee2?w=400',
    rating: 4.6,
    available: true,
  },
  {
    id: 8,
    name: 'Monitor Dell 24" Full HD',
    category: 'monitor',
    specs: ['24" 1920x1080', 'IPS 75Hz', 'FreeSync', 'Ajuste de altura'],
    pricePerDay: 25,
    pricePerMonth: 550,
    image: 'https://images.unsplash.com/photo-1593359863503-f598b8d4c747?w=400',
    rating: 4.4,
    available: true,
  },
  {
    id: 47,
    name: 'Monitor ASUS ROG Swift 32"',
    category: 'monitor',
    specs: ['32" 2560x1440', 'IPS 165Hz', 'G-Sync', 'HDR400'],
    pricePerDay: 65,
    pricePerMonth: 1450,
    image: 'https://images.unsplash.com/photo-1527443195645-1133f7f28990?w=400',
    rating: 4.8,
    available: true,
  },
  {
    id: 48,
    name: 'Monitor BenQ 27" 4K',
    category: 'monitor',
    specs: ['27" 3840x2160', 'IPS 60Hz', 'HDR10', 'USB-C 65W'],
    pricePerDay: 70,
    pricePerMonth: 1600,
    image: 'https://images.unsplash.com/photo-1585792180666-f7347c490ee2?w=400',
    rating: 4.7,
    available: true,
  },
  {
    id: 49,
    name: 'Monitor AOC 24" Gaming',
    category: 'monitor',
    specs: ['24" 1920x1080', 'VA 144Hz', 'FreeSync Premium', 'Curvo'],
    pricePerDay: 35,
    pricePerMonth: 800,
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400',
    rating: 4.5,
    available: true,
  },
  {
    id: 50,
    name: 'Monitor LG 29" UltraWide',
    category: 'monitor',
    specs: ['29" 2560x1080', 'IPS 75Hz', 'FreeSync', 'HDR10'],
    pricePerDay: 40,
    pricePerMonth: 900,
    image: 'https://images.unsplash.com/photo-1547082299-de196ea013d6?w=400',
    rating: 4.6,
    available: true,
  },
  {
    id: 51,
    name: 'Monitor Samsung 28" 4K',
    category: 'monitor',
    specs: ['28" 3840x2160', 'IPS 60Hz', 'HDR10+', 'PIP/PBP'],
    pricePerDay: 60,
    pricePerMonth: 1350,
    image: 'https://images.unsplash.com/photo-1530297374385-fad298cc2a4e?w=400',
    rating: 4.7,
    available: true,
  },
  {
    id: 52,
    name: 'Monitor ViewSonic 27" Pro',
    category: 'monitor',
    specs: ['27" 2560x1440', 'IPS 75Hz', 'Calibrado', '99% sRGB'],
    pricePerDay: 55,
    pricePerMonth: 1250,
    image: 'https://images.unsplash.com/photo-1593640495253-23196b27a87f?w=400',
    rating: 4.6,
    available: true,
  },
  {
    id: 53,
    name: 'Monitor Philips 32" Curvo',
    category: 'monitor',
    specs: ['32" 1920x1080', 'VA 75Hz', 'FreeSync', 'Eye Care'],
    pricePerDay: 38,
    pricePerMonth: 850,
    image: 'https://images.unsplash.com/photo-1551645120-d70bfe84c826?w=400',
    rating: 4.4,
    available: true,
  },
  {
    id: 9,
    name: 'Notebook Asus ROG Strix G15',
    category: 'notebook',
    specs: ['AMD Ryzen 9 5900HX', 'RTX 3070 8GB', '16GB RAM', 'SSD 1TB'],
    pricePerDay: 140,
    pricePerMonth: 3200,
    image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400',
    rating: 4.8,
    available: true,
  },
  {
    id: 10,
    name: 'Notebook HP Pavilion Gaming',
    category: 'notebook',
    specs: ['Intel i5-11300H', 'GTX 1650 4GB', '8GB RAM', 'SSD 512GB'],
    pricePerDay: 70,
    pricePerMonth: 1600,
    image: 'https://images.unsplash.com/photo-1593642532400-2682810df593?w=400',
    rating: 4.4,
    available: true,
  },
  {
    id: 11,
    name: 'Notebook Acer Predator Helios 300',
    category: 'notebook',
    specs: ['Intel i7-11800H', 'RTX 3060 6GB', '16GB RAM', 'SSD 512GB'],
    pricePerDay: 110,
    pricePerMonth: 2500,
    image: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=400',
    rating: 4.6,
    available: true,
  },
  {
    id: 12,
    name: 'Notebook MacBook Air M2',
    category: 'notebook',
    specs: ['Apple M2', '8GB RAM', 'SSD 256GB', 'Tela Retina 13.6"'],
    pricePerDay: 130,
    pricePerMonth: 2900,
    image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=400',
    rating: 4.9,
    available: true,
  },
  {
    id: 13,
    name: 'Notebook Dell Inspiron 15',
    category: 'notebook',
    specs: ['Intel i3-1115G4', 'Intel UHD', '4GB RAM', 'SSD 256GB'],
    pricePerDay: 40,
    pricePerMonth: 900,
    image: 'https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?w=400',
    rating: 4.1,
    available: true,
  },
  {
    id: 14,
    name: 'Notebook MSI GF63 Thin',
    category: 'notebook',
    specs: ['Intel i5-10300H', 'GTX 1650 Ti', '8GB RAM', 'SSD 512GB'],
    pricePerDay: 75,
    pricePerMonth: 1700,
    image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400',
    rating: 4.3,
    available: true,
  },
  {
    id: 15,
    name: 'Notebook Lenovo IdeaPad Gaming',
    category: 'notebook',
    specs: ['AMD Ryzen 5 5600H', 'GTX 1650 4GB', '8GB RAM', 'SSD 256GB'],
    pricePerDay: 65,
    pricePerMonth: 1500,
    image: 'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=400',
    rating: 4.4,
    available: true,
  },
  {
    id: 16,
    name: 'Notebook Asus ZenBook 14',
    category: 'notebook',
    specs: ['Intel i7-1165G7', 'Intel Iris Xe', '16GB RAM', 'SSD 512GB'],
    pricePerDay: 95,
    pricePerMonth: 2100,
    image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400',
    rating: 4.7,
    available: true,
  },
  {
    id: 17,
    name: 'Notebook Razer Blade 15',
    category: 'notebook',
    specs: ['Intel i7-12800H', 'RTX 3070 Ti 8GB', '16GB RAM', 'SSD 1TB'],
    pricePerDay: 180,
    pricePerMonth: 4000,
    image: 'https://images.unsplash.com/photo-1602524206684-76d708e346cb?w=400',
    rating: 4.9,
    available: true,
  },
  {
    id: 18,
    name: 'Notebook Samsung Galaxy Book Pro',
    category: 'notebook',
    specs: ['Intel i5-1135G7', 'Intel Iris Xe', '8GB RAM', 'SSD 256GB'],
    pricePerDay: 70,
    pricePerMonth: 1600,
    image: 'https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?w=400',
    rating: 4.5,
    available: true,
  },
  {
    id: 19,
    name: 'Notebook HP Envy 13',
    category: 'notebook',
    specs: ['Intel i7-1195G7', 'Intel Iris Xe', '16GB RAM', 'SSD 512GB'],
    pricePerDay: 100,
    pricePerMonth: 2300,
    image: 'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?w=400',
    rating: 4.6,
    available: true,
  },
  {
    id: 20,
    name: 'Notebook Acer Swift 3',
    category: 'notebook',
    specs: ['AMD Ryzen 7 5700U', 'AMD Radeon', '8GB RAM', 'SSD 512GB'],
    pricePerDay: 65,
    pricePerMonth: 1450,
    image: 'https://images.unsplash.com/photo-1512054502232-10a0a035d672?w=400',
    rating: 4.4,
    available: true,
  },
  {
    id: 21,
    name: 'Notebook Lenovo Legion 5 Pro',
    category: 'notebook',
    specs: ['AMD Ryzen 7 5800H', 'RTX 3060 6GB', '16GB RAM', 'SSD 512GB'],
    pricePerDay: 115,
    pricePerMonth: 2600,
    image: 'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?w=400',
    rating: 4.8,
    available: true,
  },
  {
    id: 22,
    name: 'Notebook Dell G15',
    category: 'notebook',
    specs: ['Intel i5-11400H', 'RTX 3050 4GB', '8GB RAM', 'SSD 512GB'],
    pricePerDay: 85,
    pricePerMonth: 1900,
    image: 'https://images.unsplash.com/photo-1618424181497-157f25b6ddd5?w=400',
    rating: 4.5,
    available: true,
  },
  {
    id: 23,
    name: 'Notebook Asus TUF Gaming F15',
    category: 'notebook',
    specs: ['Intel i7-11800H', 'RTX 3050 Ti 4GB', '16GB RAM', 'SSD 512GB'],
    pricePerDay: 95,
    pricePerMonth: 2200,
    image: 'https://images.unsplash.com/photo-1593642634443-44adaa06623a?w=400',
    rating: 4.6,
    available: true,
  },
  {
    id: 24,
    name: 'Notebook Microsoft Surface Laptop 4',
    category: 'notebook',
    specs: ['Intel i5-1145G7', 'Intel Iris Xe', '8GB RAM', 'SSD 256GB'],
    pricePerDay: 90,
    pricePerMonth: 2000,
    image: 'https://images.unsplash.com/photo-1547082299-de196ea013d6?w=400',
    rating: 4.7,
    available: true,
  },
  {
    id: 25,
    name: 'Notebook Alienware m15 R6',
    category: 'notebook',
    specs: ['Intel i7-11800H', 'RTX 3080 10GB', '32GB RAM', 'SSD 1TB'],
    pricePerDay: 220,
    pricePerMonth: 5000,
    image: 'https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?w=400',
    rating: 5.0,
    available: true,
  },
  {
    id: 26,
    name: 'Notebook LG Gram 17',
    category: 'notebook',
    specs: ['Intel i7-1165G7', 'Intel Iris Xe', '16GB RAM', 'SSD 512GB'],
    pricePerDay: 105,
    pricePerMonth: 2400,
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400',
    rating: 4.6,
    available: true,
  },
  {
    id: 27,
    name: 'Notebook Vaio FE15',
    category: 'notebook',
    specs: ['Intel i5-1035G1', 'Intel UHD', '8GB RAM', 'SSD 256GB'],
    pricePerDay: 55,
    pricePerMonth: 1250,
    image: 'https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=400',
    rating: 4.2,
    available: true,
  },
  {
    id: 28,
    name: 'Notebook Gigabyte Aero 15',
    category: 'notebook',
    specs: ['Intel i7-11800H', 'RTX 3060 6GB', '16GB RAM', 'SSD 512GB'],
    pricePerDay: 125,
    pricePerMonth: 2800,
    image: 'https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?w=400',
    rating: 4.7,
    available: true,
  },
  {
    id: 29,
    name: 'Notebook HP Omen 15',
    category: 'notebook',
    specs: ['AMD Ryzen 7 5800H', 'RTX 3070 8GB', '16GB RAM', 'SSD 1TB'],
    pricePerDay: 135,
    pricePerMonth: 3100,
    image: 'https://images.unsplash.com/photo-1588866175891-c89b1084e8b4?w=400',
    rating: 4.8,
    available: true,
  },
  {
    id: 30,
    name: 'Notebook Lenovo Yoga Slim 7',
    category: 'notebook',
    specs: ['AMD Ryzen 7 5800U', 'AMD Radeon', '16GB RAM', 'SSD 512GB'],
    pricePerDay: 85,
    pricePerMonth: 1950,
    image: 'https://images.unsplash.com/photo-1616763355548-1b606f439f86?w=400',
    rating: 4.5,
    available: true,
  },
  {
    id: 31,
    name: 'Notebook Acer Nitro 5',
    category: 'notebook',
    specs: ['Intel i5-11400H', 'GTX 1650 4GB', '8GB RAM', 'SSD 256GB'],
    pricePerDay: 68,
    pricePerMonth: 1550,
    image: 'https://images.unsplash.com/photo-1588702547919-26089e690ecc?w=400',
    rating: 4.3,
    available: true,
  },
  {
    id: 32,
    name: 'Notebook Dell Latitude 5420',
    category: 'notebook',
    specs: ['Intel i7-1185G7', 'Intel Iris Xe', '16GB RAM', 'SSD 512GB'],
    pricePerDay: 95,
    pricePerMonth: 2150,
    image: 'https://images.unsplash.com/photo-1611078489935-0cb964de46d6?w=400',
    rating: 4.6,
    available: true,
  },
  {
    id: 33,
    name: 'Notebook Asus VivoBook 15',
    category: 'notebook',
    specs: ['Intel i3-1005G1', 'Intel UHD', '4GB RAM', 'SSD 128GB'],
    pricePerDay: 35,
    pricePerMonth: 800,
    image: 'https://images.unsplash.com/photo-1609439547168-c973842210e1?w=400',
    rating: 4.0,
    available: true,
  },
  {
    id: 34,
    name: 'Notebook MSI Creator Z16',
    category: 'notebook',
    specs: ['Intel i7-11800H', 'RTX 3060 6GB', '32GB RAM', 'SSD 1TB'],
    pricePerDay: 145,
    pricePerMonth: 3300,
    image: 'https://images.unsplash.com/photo-1587614387466-0a72ca909e16?w=400',
    rating: 4.8,
    available: true,
  },
  {
    id: 35,
    name: 'Notebook Samsung Book E30',
    category: 'notebook',
    specs: ['Intel i3-1115G4', 'Intel UHD', '4GB RAM', 'SSD 256GB'],
    pricePerDay: 45,
    pricePerMonth: 1000,
    image: 'https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?w=400',
    rating: 4.1,
    available: true,
  },
  {
    id: 36,
    name: 'Notebook Positivo Motion',
    category: 'notebook',
    specs: ['Intel Celeron N4020', 'Intel UHD', '4GB RAM', 'SSD 128GB'],
    pricePerDay: 30,
    pricePerMonth: 700,
    image: 'https://images.unsplash.com/photo-1625948515291-69613efd103f?w=400',
    rating: 3.8,
    available: true,
  },
  {
    id: 37,
    name: 'Notebook Huawei MateBook D15',
    category: 'notebook',
    specs: ['Intel i5-1135G7', 'Intel Iris Xe', '8GB RAM', 'SSD 512GB'],
    pricePerDay: 75,
    pricePerMonth: 1700,
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400',
    rating: 4.5,
    available: true,
  },
  {
    id: 38,
    name: 'Notebook Lenovo ThinkBook 15',
    category: 'notebook',
    specs: ['AMD Ryzen 5 4500U', 'AMD Radeon', '8GB RAM', 'SSD 256GB'],
    pricePerDay: 60,
    pricePerMonth: 1350,
    image: 'https://images.unsplash.com/photo-1602080858428-57174f9431cf?w=400',
    rating: 4.4,
    available: true,
  },
];

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.specs.some(spec => spec.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  const handleCategoryChange = (category: ProductCategory) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Cpu className="w-8 h-8 text-blue-600" />
              <span className="font-bold text-xl text-slate-900">AlugPronTech</span>
            </div>
            <nav className="hidden md:flex gap-6">
              <a href="#catalogo" className="text-slate-600 hover:text-blue-600 transition-colors">Catálogo</a>
              <a href="#como-funciona" className="text-slate-600 hover:text-blue-600 transition-colors">Como Funciona</a>
              <a href="#contato" className="text-slate-600 hover:text-blue-600 transition-colors">Contato</a>
            </nav>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Entrar
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Alugue Equipamentos de Tecnologia
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Desktops, Notebooks e Monitores de alta qualidade para suas necessidades
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Ver Catálogo
            </button>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section id="catalogo" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Buscar equipamentos..."
                value={searchTerm}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              <button
                onClick={() => handleCategoryChange('all')}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  selectedCategory === 'all'
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                Todos
              </button>
              <button
                onClick={() => handleCategoryChange('desktop')}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors ${
                  selectedCategory === 'desktop'
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <Cpu className="w-5 h-5" />
                Desktops
              </button>
              <button
                onClick={() => handleCategoryChange('notebook')}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors ${
                  selectedCategory === 'notebook'
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <Laptop className="w-5 h-5" />
                Notebooks
              </button>
              <button
                onClick={() => handleCategoryChange('monitor')}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors ${
                  selectedCategory === 'monitor'
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <Monitor className="w-5 h-5" />
                Monitores
              </button>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {currentProducts.map(product => (
            <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48 bg-slate-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {product.available && (
                  <span className="absolute top-3 right-3 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Disponível
                  </span>
                )}
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2 text-slate-900">{product.name}</h3>
                <div className="flex items-center gap-1 mb-3">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium text-slate-700">{product.rating}</span>
                </div>
                <ul className="space-y-1 mb-4">
                  {product.specs.map((spec, index) => (
                    <li key={index} className="text-sm text-slate-600 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                      {spec}
                    </li>
                  ))}
                </ul>
                <div className="border-t pt-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1 text-slate-600">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">Por dia</span>
                    </div>
                    <span className="font-bold text-lg text-slate-900">R$ {product.pricePerDay}</span>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-slate-600">
                      <DollarSign className="w-4 h-4" />
                      <span className="text-sm">Por mês</span>
                    </div>
                    <span className="font-bold text-lg text-blue-600">R$ {product.pricePerMonth}</span>
                  </div>
                  <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    Alugar Agora
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-500 text-lg">Nenhum produto encontrado.</p>
          </div>
        )}

        {/* Pagination */}
        {filteredProducts.length > 0 && (
          <div className="bg-white rounded-xl shadow-lg p-6 mb-16">
            <div className="flex items-center justify-between">
              <button
                onClick={goToPreviousPage}
                disabled={currentPage === 1}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors ${
                  currentPage === 1
                    ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                <ChevronLeft className="w-5 h-5" />
                Anterior
              </button>

              <div className="flex items-center gap-2">
                <span className="text-slate-600">
                  Página <span className="font-bold text-slate-900">{currentPage}</span> de <span className="font-bold text-slate-900">{totalPages}</span>
                </span>
                <span className="hidden sm:inline text-slate-500">
                  ({filteredProducts.length} {filteredProducts.length === 1 ? 'produto' : 'produtos'})
                </span>
              </div>

              <button
                onClick={goToNextPage}
                disabled={currentPage === totalPages}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors ${
                  currentPage === totalPages
                    ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                Avançar
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}
      </section>

      {/* How It Works */}
      <section id="como-funciona" className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">Como Funciona</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-xl mb-2 text-slate-900">1. Escolha o Equipamento</h3>
              <p className="text-slate-600">Navegue pelo nosso catálogo e escolha o equipamento ideal para você</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-xl mb-2 text-slate-900">2. Selecione o Período</h3>
              <p className="text-slate-600">Defina por quanto tempo você precisa do equipamento</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cpu className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-xl mb-2 text-slate-900">3. Receba em Casa</h3>
              <p className="text-slate-600">Entregamos o equipamento configurado e pronto para uso</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contato" className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Cpu className="w-8 h-8 text-blue-400" />
                <span className="font-bold text-xl">AlugPronTech</span>
              </div>
              <p className="text-slate-400">
                Aluguel de equipamentos de tecnologia com qualidade e confiança.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Contato</h4>
              <div className="space-y-2 text-slate-400">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>(61) 99999-9999</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>contato@alugprontech.com.br</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Brasília, DF</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Links Rápidos</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Sobre Nós</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Termos de Uso</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Política de Privacidade</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p className="text-[16px]">&copy; 2026 AlugPronTech. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
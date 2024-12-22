const dummyData = [
  {
    categories: [
      {
        cate: "Mens Fashion",
        img: "https://via.placeholder.com/150?text=Mens+Fashion",
      },
      {
        cate: "Womens Fashion",
        img: "https://via.placeholder.com/150?text=Womens+Fashion",
      },
      {
        cate: "Appliances",
        img: "https://via.placeholder.com/150?text=Appliances",
      },
      {
        cate: "Electronics",
        img: "https://via.placeholder.com/150?text=Electronics",
      },
      {
        cate: "Accessories",
        img: "https://via.placeholder.com/150?text=Accessories",
      },
      {
        cate: "Home Furniture",
        img: "https://via.placeholder.com/150?text=Sports",
      },
      {
        cate: "Beauty",
        img: "https://via.placeholder.com/150?text=Beauty",
      },
      {
        cate: "Two wheeler",
        img: "https://via.placeholder.com/150?text=Two Wheelers",
      },
      {
        cate: "Toys",
        img: "https://via.placeholder.com/150?text=Toys",
      },
    ],
  },
  {
    category: "Mens Fashion",
    products: [
      {
        id: 3,
        name: "Crew Neck Sweatshirt",
        type: "Sweatshirt",
        neck: "Crew",
        price: 450,
        rating: "4.3",
        reviews: "180",
        image: "https://via.placeholder.com/150?text=Crew+Neck+Sweatshirt",
        description: "Warm and cozy crew neck sweatshirt for casual outings.",
        colors: ["Grey", "Black", "Navy"],
        sizes: ["M", "L", "XL", "XXL"],
      },
      {
        id: 4,
        name: "Classic Chinos",
        type: "Trousers",
        price: 600,
        rating: "4.6",
        reviews: "290",
        image: "https://via.placeholder.com/150?text=Classic+Chinos",
        description:
          "Stylish and versatile chinos suitable for work and casual wear.",
        colors: ["Beige", "Khaki", "Olive"],
        sizes: ["30", "32", "34", "36", "38"],
      },
      {
        id: 5,
        name: "Hooded Jacket",
        type: "Jacket",
        price: 1200,
        rating: "4.8",
        reviews: "400",
        image: "https://via.placeholder.com/150?text=Hooded+Jacket",
        description:
          "Durable and weather-resistant hooded jacket for outdoor adventures.",
        colors: ["Black", "Blue", "Camouflage"],
        sizes: ["M", "L", "XL", "XXL"],
      },
      {
        id: 6,
        name: "Formal Leather Shoes",
        type: "Footwear",
        price: 2500,
        rating: "4.7",
        reviews: "150",
        image: "https://via.placeholder.com/150?text=Formal+Leather+Shoes",
        description: "Elegant leather shoes designed for formal occasions.",
        colors: ["Brown", "Black"],
        sizes: ["8", "9", "10", "11", "12"],
      },
      {
        id: 7,
        name: "V-Neck Sweater",
        type: "Sweater",
        neck: "V-Neck",
        price: 500,
        rating: "4.2",
        reviews: "100",
        image: "https://via.placeholder.com/150?text=V+Neck+Sweater",
        description:
          "Classic V-neck sweater to layer over shirts or wear solo.",
        colors: ["Red", "Blue", "Black"],
        sizes: ["S", "M", "L", "XL"],
      },
      {
        id: 8,
        name: "Leather Belt",
        type: "Accessory",
        price: 350,
        rating: "4.5",
        reviews: "210",
        image: "https://via.placeholder.com/150?text=Leather+Belt",
        description: "High-quality leather belt to complete any outfit.",
        colors: ["Brown", "Black"],
        sizes: ["S", "M", "L"],
      },
    ],
  },

  {
    category: "Womens Fashion",
    products: [
      {
        id: 5,
        name: "Silk Blouse",
        type: "Top",
        price: 1500,
        rating: "4.5",
        reviews: "220",
        image: "https://via.placeholder.com/150?text=Silk+Blouse",
        description:
          "Luxurious silk blouse perfect for office or evening wear.",
        colors: ["White", "Beige", "Black"],
        sizes: ["S", "M", "L", "XL"],
      },
      {
        id: 6,
        name: "Denim Jacket",
        type: "Outerwear",
        price: 1800,
        rating: "4.8",
        reviews: "300",
        image: "https://via.placeholder.com/150?text=Denim+Jacket",
        description:
          "Classic denim jacket suitable for layering with any outfit.",
        colors: ["Blue", "Black"],
        sizes: ["S", "M", "L", "XL"],
      },
      {
        id: 7,
        name: "Pleated Skirt",
        type: "Skirt",
        price: 900,
        rating: "4.6",
        reviews: "170",
        image: "https://via.placeholder.com/150?text=Pleated+Skirt",
        description: "Chic pleated skirt for a polished and feminine look.",
        colors: ["Pink", "Navy", "Grey"],
        sizes: ["S", "M", "L"],
      },
      {
        id: 8,
        name: "Ankle Boots",
        type: "Shoes",
        price: 2000,
        rating: "4.7",
        reviews: "310",
        image: "https://via.placeholder.com/150?text=Ankle+Boots",
        description: "Versatile ankle boots for casual and semi-formal wear.",
        colors: ["Brown", "Black", "Tan"],
        sizes: ["6", "7", "8", "9", "10"],
      },
      {
        id: 9,
        name: "Knitted Cardigan",
        type: "Outerwear",
        price: 1400,
        rating: "4.4",
        reviews: "190",
        image: "https://via.placeholder.com/150?text=Knitted+Cardigan",
        description: "Soft knitted cardigan to keep you warm and stylish.",
        colors: ["White", "Beige", "Maroon"],
        sizes: ["S", "M", "L", "XL"],
      },
      {
        id: 10,
        name: "Leather Handbag",
        type: "Accessory",
        price: 2500,
        rating: "4.9",
        reviews: "400",
        image: "https://via.placeholder.com/150?text=Leather+Handbag",
        description:
          "Elegant leather handbag with ample storage for essentials.",
        colors: ["Black", "Brown", "Tan"],
        sizes: ["One Size"],
      },
    ],
  },
  {
    category: "Applicances",
    products: [
      {
        id: 7,
        name: "Smartwatch",
        type: "Wearable",
        price: 5000,
        rating: "4.6",
        reviews: "650",
        image: "https://via.placeholder.com/150?text=Smartwatch",
        description:
          "Feature-packed smartwatch with fitness tracking and notifications.",
        colors: ["Black", "Silver", "Rose Gold"],
        sizes: ["Small", "Medium", "Large"],
      },
      {
        id: 8,
        name: "Laptop",
        type: "Computer",
        price: 45000,
        rating: "4.8",
        reviews: "800",
        image: "https://via.placeholder.com/150?text=Laptop",
        description: "High-performance laptop ideal for work and gaming.",
        colors: ["Silver", "Grey", "Black"],
        storage: ["256GB SSD", "512GB SSD", "1TB SSD"],
      },
      {
        id: 9,
        name: "Wireless Speaker",
        type: "Speaker",
        price: 3000,
        rating: "4.4",
        reviews: "550",
        image: "https://via.placeholder.com/150?text=Wireless+Speaker",
        description:
          "Portable wireless speaker with powerful sound and long battery life.",
        colors: ["Black", "Blue", "Red"],
      },
      {
        id: 10,
        name: "Gaming Console",
        type: "Console",
        price: 35000,
        rating: "4.7",
        reviews: "1200",
        image: "https://via.placeholder.com/150?text=Gaming+Console",
        description:
          "Next-gen gaming console for an immersive gaming experience.",
        colors: ["Black", "White"],
      },
    ],
  },
  {
    category: "Accessories",
    products: [
      {
        id: 9,
        name: "Backpack",
        type: "Bag",
        price: 1500,
        rating: "4.5",
        reviews: "300",
        image: "https://via.placeholder.com/150?text=Backpack",
        description: "Durable and spacious backpack for travel and work.",
        colors: ["Black", "Grey", "Navy"],
      },
      {
        id: 10,
        name: "Analog Watch",
        type: "Watch",
        price: 2500,
        rating: "4.6",
        reviews: "400",
        image: "https://via.placeholder.com/150?text=Analog+Watch",
        description: "Classic analog watch with a minimalist design.",
        colors: ["Silver", "Gold", "Black"],
      },
      {
        id: 11,
        name: "Cap",
        type: "Headwear",
        price: 500,
        rating: "4.3",
        reviews: "150",
        image: "https://via.placeholder.com/150?text=Cap",
        description: "Stylish cap for sun protection and fashion.",
        colors: ["Black", "White", "Red"],
      },
      {
        id: 12,
        name: "Travel Mug",
        type: "Utility",
        price: 800,
        rating: "4.7",
        reviews: "250",
        image: "https://via.placeholder.com/150?text=Travel+Mug",
        description: "Insulated travel mug to keep your drinks hot or cold.",
        colors: ["Silver", "Black", "Blue"],
      },
      {
        id: 12,
        name: "Thermals",
        type: "Utility",
        price: 1200,
        rating: "4.1",
        reviews: "2350",
        image: "https://via.placeholder.com/150?text=Thermal+wear",
        description: "Insulated travel shirt for cold weathers.",
        colors: ["Silver", "Black", "Blue"],
      },
      {
        id: 12,
        name: "Kerchiefs",
        type: "Utility",
        price: 100,
        rating: "3.5",
        reviews: "80",
        image: "https://via.placeholder.com/150?text=Hand Kerchiefs",
        description: "Multi purpose hand kerchiefs.",
        colors: ["Silver", "Black", "Blue"],
      },
    ],
  },
  {
    category: "Electronics",
    products: [
      {
        id: 11,
        name: "Flagship Smartphone",
        type: "Mobile",
        price: 45000,
        rating: "4.8",
        reviews: "1200",
        image: "https://via.placeholder.com/150?text=Flagship+Smartphone",
        description:
          "Premium smartphone with top-notch performance and camera.",
        colors: ["Black", "White", "Blue"],
        storage: ["128GB", "256GB", "512GB"],
      },
      {
        id: 12,
        name: "Budget Smartphone",
        type: "Mobile",
        price: 10000,
        rating: "4.2",
        reviews: "800",
        image: "https://via.placeholder.com/150?text=Budget+Smartphone",
        description: "Affordable smartphone with all essential features.",
        colors: ["Grey", "Black", "Gold"],
        storage: ["32GB", "64GB"],
      },
      {
        id: 13,
        name: "10-Inch Tablet",
        type: "Tablet",
        price: 25000,
        rating: "4.5",
        reviews: "900",
        image: "https://via.placeholder.com/150?text=10-Inch+Tablet",
        description:
          "Versatile tablet with a 10-inch display, perfect for productivity and entertainment.",
        colors: ["Silver", "Black", "Gold"],
        storage: ["64GB", "128GB"],
      },
      {
        id: 14,
        name: "7-Inch Tablet",
        type: "Tablet",
        price: 15000,
        rating: "4.3",
        reviews: "600",
        image: "https://via.placeholder.com/150?text=7-Inch+Tablet",
        description: "Compact and lightweight tablet for on-the-go usage.",
        colors: ["Black", "White"],
        storage: ["32GB", "64GB"],
      },
      {
        id: 15,
        name: "Wireless Earbuds",
        type: "Earphones",
        price: 3000,
        rating: "4.6",
        reviews: "1100",
        image: "https://via.placeholder.com/150?text=Wireless+Earbuds",
        description:
          "Compact wireless earbuds with crystal-clear sound and a snug fit.",
        colors: ["Black", "White"],
      },
      {
        id: 16,
        name: "Noise Cancelling Earphones",
        type: "Earphones",
        price: 4500,
        rating: "4.7",
        reviews: "850",
        image:
          "https://via.placeholder.com/150?text=Noise+Cancelling+Earphones",
        description:
          "High-quality wired earphones with active noise cancellation.",
        colors: ["Black", "Grey"],
      },
      {
        id: 17,
        name: "Over-Ear Bluetooth Headphones",
        type: "Bluetooth Headphones",
        price: 8000,
        rating: "4.8",
        reviews: "1400",
        image: "https://via.placeholder.com/150?text=Over-Ear+Headphones",
        description:
          "Comfortable over-ear headphones with immersive sound and long battery life.",
        colors: ["Black", "Silver", "Blue"],
      },
      {
        id: 18,
        name: "Sport Bluetooth Earphones",
        type: "Bluetooth Headphones",
        price: 4000,
        rating: "4.5",
        reviews: "700",
        image: "https://via.placeholder.com/150?text=Sport+Bluetooth+Earphones",
        description:
          "Sweat-resistant Bluetooth earphones designed for active lifestyles.",
        colors: ["Black", "Red", "Blue"],
      },
    ],
  },
];

export default dummyData;
"use client";

import { FadeIn, FadeInStagger } from "./animations/fade-in";
import { motion } from "framer-motion";

const products = [
	{
		name: "Nasi Goreng",
		price: "$30",
		description: "Indonesian fried rice with chicken, egg, and crackers.",
		image: "/placeholder.svg",
		genre: "Makanan Utama", // Main Course
	},
	{
		name: "Rendang",
		price: "$40",
		description:
			"Slow-cooked beef in coconut milk and spices, a West Sumatran specialty.",
		image: "/placeholder.svg",
		genre: "Makanan Utama",
	},
	{
		name: "Sate Ayam",
		price: "$28",
		description:
			"Grilled chicken skewers served with peanut sauce and rice cakes.",
		image: "/placeholder.svg",
		genre: "Makanan Utama",
	},
	{
		name: "Gado-Gado",
		price: "$25",
		description:
			"Indonesian salad with boiled vegetables, eggs, tofu, and peanut sauce.",
		image: "/placeholder.svg",
		genre: "Makanan Utama",
	},
	{
		name: "Bakso",
		price: "$22",
		description:
			"Indonesian beef meatballs served in a savory broth with noodles.",
		image: "/placeholder.svg",
		genre: "Makanan Utama",
	},
	{
		name: "Es Teh Manis",
		price: "$8",
		description: "Sweet iced tea, a refreshing Indonesian classic.",
		image: "/placeholder.svg",
		genre: "Minuman", // Drinks
	},
	{
		name: "Es Cendol",
		price: "$12",
		description:
			"Iced dessert drink with green rice flour jelly, coconut milk, and palm sugar syrup.",
		image: "/placeholder.svg",
		genre: "Minuman",
	},
	{
		name: "Klepon",
		price: "$10",
		description:
			"Sweet rice cake balls filled with palm sugar and coated in grated coconut.",
		image: "/placeholder.svg",
		genre: "Makanan Penutup", // Desserts
	},
	{
		name: "Dadar Gulung",
		price: "$11",
		description:
			"Green pancake rolls filled with sweet coconut and palm sugar.",
		image: "/placeholder.svg",
		genre: "Makanan Penutup",
	},
	{
		name: "Lemper",
		price: "$9",
		description:
			"Sticky rice rolls filled with seasoned shredded chicken, wrapped in banana leaf.",
		image: "/placeholder.svg",
		genre: "Makanan Penutup",
	},
	{
		name: "Soto Ayam",
		price: "$27",
		description:
			"Yellow chicken soup with vermicelli, egg, and savory toppings.",
		image: "/placeholder.svg",
		genre: "Makanan Utama",
	},
	{
		name: "Teh Tarik",
		price: "$10",
		description:
			"Pulled tea with milk, served hot or cold, frothy and sweet.",
		image: "/placeholder.svg",
		genre: "Minuman",
	},
	{
		name: "Pisang Goreng",
		price: "$13",
		description: "Crispy fried banana, a popular Indonesian snack.",
		image: "/placeholder.svg",
		genre: "Makanan Penutup",
	},
	{
		name: "Wedang Jahe",
		price: "$9",
		description:
			"Warm ginger drink with palm sugar, soothing and aromatic.",
		image: "/placeholder.svg",
		genre: "Minuman",
	},
];

export function Products() {
	const groupedProducts = products.reduce<Record<string, typeof products>>(
		(acc, product) => {
			if (!acc[product.genre]) acc[product.genre] = [];
			acc[product.genre].push(product);
			return acc;
		},
		{}
	);

	return (
		<section className="bg-black py-24">
			<div className="container mx-auto px-4">
				<FadeIn>
					<h2 className="mb-16 text-center font-playfair text-4xl font-light text-white">
						Our Menu
						<br />
					</h2>
				</FadeIn>
				{Object.entries(groupedProducts).map(([genre, items]) => (
					<div key={genre} className="mb-16">
						<FadeIn>
							<h3 className="mb-8 text-2xl font-semibold text-golden font-playfair">
								{genre}
							</h3>
						</FadeIn>
						<FadeInStagger>
							<div className="grid gap-12 md:grid-cols-2">
								{items.map((product) => (
									<FadeIn key={product.name}>
										<div className="flex items-start gap-6">
											{/* Image */}
											<motion.img
												whileHover={{ scale: 1.05 }}
												transition={{ duration: 0.6 }}
												src={product.image}
												alt={product.name}
												className="w-32 h-32 rounded-lg object-cover"
											/>
											{/* Text Content */}
											<div className="flex-1">
												<div className="flex justify-between items-center">
													<h3 className="font-playfair text-xl text-white">
														{product.name}
													</h3>
													<p className="text-golden font-semibold">
														{product.price}
													</p>
												</div>
												<div className="border-b border-neutral-700 my-2"></div>
												<p className="text-sm text-neutral-400">
													{product.description}
												</p>
											</div>
										</div>
									</FadeIn>
								))}
							</div>
						</FadeInStagger>
					</div>
				))}
			</div>
		</section>
	);
}

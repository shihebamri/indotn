import React from "react";
import Script from "next/script";

export default function Review() {
	return (
		<section className="bg-[#111] py-24">
			<Script
				src="https://cdn.commoninja.com/sdk/latest/commonninja.js"
				strategy="afterInteractive"
			/>
			<div className="container mx-auto px-4 max-w-2xl">
				<h3 className="mb-2 text-center text-xs uppercase tracking-[0.3em] text-neutral-400">
					What our guests say
				</h3>
				<h2 className="mb-12 text-center font-playfair text-4xl font-light text-golden">
					Customer Reviews
				</h2>
				<div className="commonninja_component pid-13a19150-d764-4755-8c40-db8a5e9fa9fc"></div>
			</div>
		</section>
	);
}

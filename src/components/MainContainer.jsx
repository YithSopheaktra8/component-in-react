// eslint-disable-next-line no-unused-vars
import React from "react";
import CardComponent from "./card/CardComponent";
import FeedbackComponent from "./card/FeedbackComponent";

export default function MainContainer() {
	const cardCount = 8;

	return (
		<main>
			<h1 className="text-5xl text-center mb-5 font-medium mt-10">
				Products
			</h1>
			<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
				{Array.from({ length: cardCount }).map((_, index) => (
					<CardComponent key={index} />
				))}
			</div>
			<h1 className="text-5xl text-center mb-5 font-medium mt-20">
				Customer Feedback
			</h1>
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
				<FeedbackComponent />
				<FeedbackComponent />
			</div>
		</main>
	);
}

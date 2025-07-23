import { ExternalLink } from "lucide-react";

// Static data instead of database
const links = [
	{
		id: 1,
		title: "Mohammadreza Faghihi",
		description:
			"I am. @pocdastt @harcastt @creativ.eaty @emojiinations @creativeathings @movarrap @mrfaghihii",
		logo: "/images/mrfaghihi.jpg?height=48&width=48",
		link: "https://www.instagram.com/mr.faghihi/",
	},
	{
		id: 2,
		title: "Harcast",
		description:
			"هرکست، پادکستی از هرکس برای هرکس, هرکست خلق میشود به نویسندگی و روایتگریِ هُنرجویان و هنرمندانِ @creativ.eaty",
		logo: "/images/harcast.jpg?height=48&width=48",
		link: "https://www.instagram.com/harcastt/",
	},
	{
		id: 3,
		title: "Creativeathings",
		description: "Daily dose of creative sparks - by my students - @mr.faghihi",
		logo: "/images/creativeathings.jpg?height=48&width=48",
		link: "https://www.instagram.com/creativeathings/",
	},
	{
		id: 4,
		title: "Movarap",
		description:
			"Rap & Hip-Hop Music - Created by @creativ.eaty Group Students & Artists",
		logo: "/images/movarrap.jpg?height=48&width=48",
		link: "https://www.instagram.com/movarrap/",
	},
];

export default function App() {
	return (
		<div className="min-h-screen bg-background">
			<div className="container mx-auto px-4 py-12">
				<div className="text-center mb-12">
					<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
						ما را بیشتر بشناسید
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
					{links.map((item) => (
						<a
							key={item.id}
							href={item.link}
							target="_blank"
							rel="noopener noreferrer"
							className="group block"
						>
							<div className="h-full p-6 bg-card rounded-xl border border-border hover:border-primary/20 transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
								<div className="flex gap-4 items-start space-x-reverse space-x-0 space-s-4">
									<div className="flex-shrink-0 ">
										<img
											src={item.logo || "/placeholder.svg?height=48&width=48"}
											alt={`${item.title} logo`}
											width={48}
											height={48}
											className="rounded-full"
										/>
									</div>
									<div className="flex-1 min-w-0">
										<div className="flex flex-row-reverse items-center justify-between mb-2">
											<ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
											<h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
												{item.title}
											</h3>
										</div>
										<p className="text-sm text-muted-foreground leading-relaxed">
											{item.description}
										</p>
									</div>
								</div>
							</div>
						</a>
					))}
				</div>
			</div>
		</div>
	);
}

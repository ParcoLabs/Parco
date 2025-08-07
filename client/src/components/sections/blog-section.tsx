import { Container } from "@/components/ui/container";

const articles = [
  {
    title: "Guidelines on Property Tokenization",
    excerpt: "Learn the fundamentals of property tokenization and how blockchain technology is revolutionizing real estate investment.",
    date: "January 15, 2024",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
  },
  {
    title: "Future",
    excerpt: "Discover emerging trends and technologies shaping the future of real estate investment and digital assets.",
    date: "January 10, 2024",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
  },
  {
    title: "Maximizing Investment with Euros",
    excerpt: "Strategies for European investors looking to maximize their returns in the tokenized real estate market.",
    date: "January 5, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
  }
];

export default function BlogSection() {
  return (
    <section className="py-16 bg-surface">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-heading mb-4">Latest Blog Articles</h2>
          <p className="text-sub text-text">Stay informed with the latest trends and insights in real estate investing.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article key={index} className="bg-white rounded-xl shadow-card overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img 
                src={article.image} 
                alt={article.title}
                className="w-full h-48 object-cover" 
              />
              <div className="p-6">
                <div className="flex items-center text-text text-sm mb-2">
                  <time>{article.date}</time>
                  <span className="mx-2">•</span>
                  <span>{article.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold text-heading mb-3 hover:text-primary cursor-pointer transition-colors">
                  {article.title}
                </h3>
                <p className="text-text">
                  {article.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

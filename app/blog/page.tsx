import {Metadata} from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";
import {ArrowRight, Calendar, User} from "lucide-react";
import {mockPosts} from '@/lib/blogData';

// --- IMAGES ---
import blogPost1 from '/public/blog-post-1.jpg';
import blogPost2 from '/public/blog-post-2.jpg';
import blogPost3 from '/public/blog-post-3.jpg';

const postImages: { [key: string]: any } = {
    '/blog-post-1.jpg': blogPost1,
    '/blog-post-2.jpg': blogPost2,
    '/blog-post-3.jpg': blogPost3,
};

// --- STATIC METADATA ---
export const metadata: Metadata = {
    title: "Blog - Wistant Kode | Ingénierie Logicielle & DevSecOps",
    description: "Explorez les derniers articles de Wistant Kode sur l'ingénierie logicielle, les pratiques DevSecOps, l'architecture cloud et les technologies modernes.",
    keywords: ["blog", "ingénierie logicielle", "DevSecOps", "architecture cloud", "articles techniques", "tutoriels", "Wistant Kode", "Java", "React", "Next.js", "Spring Boot", "Cybersécurité", "Automatisation"],
};

// --- PAGE COMPONENT ---
const BlogPage = () => {
  const formatDate = (dateString: string) => {
      return new Date(dateString).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
      <section className="py-20 bg-background min-h-screen">
          <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                  <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-6 title3">
                      Blog Technique
                  </h1>
                  <p className="text-text-secondary text-lg max-w-2xl mx-auto title1">
                      Plongez dans mes analyses sur l'ingénierie logicielle avancée, les méthodologies DevSecOps et les
                      dernières avancées technologiques.
                  </p>
              </div>

              {/* Note: Filters are removed for this static example. For dynamic filtering, you would use client components. */}

              {mockPosts.length > 0 ? (
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {mockPosts.map((post) => (
                          <Card key={post.id}
                                className="bg-gradient-card border-border-light hover:border-primary/50 transition-smooth shadow-card hover:shadow-glow group overflow-hidden">
                              <div className="aspect-video relative">
                                  {post.image && postImages[post.image] ? (
                                      <Image
                                          src={postImages[post.image]}
                                          alt={post.title}
                                          layout="fill"
                                          objectFit="cover"
                                      />
                                  ) : (
                                      <div
                                          className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary-glow/10">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-gradient-primary rounded-full mx-auto mb-2 flex items-center justify-center">
                          <span className="text-primary-foreground font-bold text-lg">WK</span>
                        </div>
                          <p className="text-text-muted text-sm">Image à venir</p>
                      </div>
                                      </div>
                                  )}
                              </div>

                              <CardHeader>
                                  <div className="flex items-center justify-between mb-2">
                                      <Badge variant="secondary" className="text-xs">{post.category}</Badge>
                                      <div className="flex items-center text-text-muted text-sm"><Calendar
                                          className="w-3 h-3 mr-1"/>{formatDate(post.publishedAt)}</div>
                                  </div>
                                  <CardTitle
                                      className="text-xl text-text-primary group-hover:text-primary transition-smooth line-clamp-2">
                                      <Link href={`/blog/${post.id}`}>{post.title}</Link>
                                  </CardTitle>
                              </CardHeader>

                              <CardContent>
                                  <p className="text-text-secondary mb-4 line-clamp-3">{post.excerpt}</p>
                                  <div className="flex items-center justify-between">
                                      <div className="flex items-center text-sm text-text-muted"><User
                                          className="w-3 h-3 mr-1"/>{post.author}</div>
                                      <Link href={`/blog/${post.id}`} passHref>
                                          <Button variant="ghost" size="sm" className="group/btn">
                                              Lire la suite
                                              <ArrowRight
                                                  className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform"/>
                                          </Button>
                                      </Link>
                                  </div>
                              </CardContent>
                          </Card>
                      ))}
                  </div>
              ) : (
                  <div className="text-center py-16">
                      <p className="text-text-muted text-lg">Aucun article trouvé.</p>
                  </div>
              )}
          </div>
      </section>
  );
};

export default BlogPage;

export interface BlogPost {
    id: number;
    title: string;
    excerpt: string;
    content: string; // Full HTML content or markdown
    category: string;
    author: string;
    publishedAt: string;
    image?: string; // Optional image
    tags: string[];
    readingTime?: number; // Estimated reading time in minutes
}

export const mockPosts: BlogPost[] = [
    {
        id: 1,
        title: "Web Development Trends in 2024: A Senior Perspective",
        excerpt: "Delve into the cutting-edge technologies and frameworks shaping the future of robust web development. An essential read for seasoned professionals.",
        content: `
      <p>Web development is in a constant state of evolution, demanding continuous adaptation and strategic foresight. This article provides an in-depth analysis of the most impactful trends for 2024, focusing on scalability, security, and performance. We explore advancements in server-side rendering, progressive web applications, and the increasing adoption of AI-driven development tools. Understanding these shifts is crucial for maintaining a competitive edge in the rapidly evolving digital landscape.</p>
      <h2>The Rise of Edge Computing</h2>
      <p>Edge computing is gaining traction, pushing computation and data storage closer to the sources of data. This paradigm shift significantly reduces latency and bandwidth usage, crucial for real-time applications and IoT devices. Implementing edge functions requires a deep understanding of distributed systems and network architecture.</p>
      <h3>Advanced Security Protocols</h3>
      <p>With the increasing sophistication of cyber threats, advanced security protocols are no longer optional. We discuss the importance of implementing robust authentication mechanisms, end-to-end encryption, and continuous security monitoring. DevSecOps practices are paramount to embedding security throughout the development lifecycle.</p>
      <h4>Future of Frontend Frameworks</h4>
      <p>While React and Vue continue to dominate, emerging frameworks and methodologies are pushing the boundaries of frontend development. Server Components, WebAssembly, and advanced state management techniques are redefining how we build interactive and performant user interfaces.</p>
      <p>For a deeper dive into these trends, consider exploring the official documentation of Next.js for Server Components or the WebAssembly specification.</p>
    `,
        category: "Development",
        author: "Wistant Kode",
        publishedAt: "2024-01-15",
        image: "/blog-post-1.jpg",
        tags: ["React", "Web Development", "Trends", "Architecture", "Performance", "DevSecOps"],
        readingTime: 7,
    },
    {
        id: 2,
        title: "Crafting Intuitive User Interfaces: UI/UX Principles for Engineers",
        excerpt: "Master the fundamental UI/UX design principles to engineer exceptional user experiences that are both functional and aesthetically pleasing.",
        content: `
      <p>An intuitive user interface is not merely about aesthetics; it's a critical component of software engineering that directly impacts user adoption and satisfaction. This piece dissects core UI/UX principles, offering actionable insights for developers to integrate design thinking into their development lifecycle. We cover topics such as cognitive load reduction, effective feedback mechanisms, and the importance of accessibility, ensuring that your applications are not just powerful, but also a pleasure to use.</p>
      <h2>User-Centric Design Methodologies</h2>
      <p>Adopting user-centric design methodologies, such as Design Thinking and Lean UX, ensures that development efforts are aligned with user needs. This involves continuous user research, prototyping, and iterative testing to refine the user experience.</p>
      <h3>Accessibility as a Core Requirement</h3>
      <p>Building accessible interfaces is not just a compliance issue; it's a moral and technical imperative. We emphasize the importance of WCAG guidelines, semantic HTML, and assistive technology compatibility to ensure that applications are usable by everyone.</p>
      <h4>The Role of Microinteractions</h4>
      <p>Subtle microinteractions can significantly enhance the perceived quality and responsiveness of an application. From button hovers to form validations, well-designed microinteractions provide immediate feedback and guide users through the interface seamlessly.</p>
    `,
        category: "Design",
        author: "Wistant Kode",
        publishedAt: "2024-01-10",
        image: "/blog-post-2.jpg",
        tags: ["UI/UX", "Design", "User Experience", "Frontend", "Engineering", "Accessibility"],
        readingTime: 5,
    },
    {
        id: 3,
        title: "Advanced Web Performance Optimization Techniques",
        excerpt: "Implement advanced strategies to significantly enhance the speed and performance of your web applications, ensuring optimal user engagement and SEO.",
        content: `
      <p>Optimizing web performance is a continuous endeavor that directly correlates with user retention and business success. This article outlines advanced techniques beyond basic caching and minification. We explore critical rendering path optimization, efficient resource loading strategies, server-side rendering benefits, and the impact of modern image formats. For engineers aiming to deliver lightning-fast web experiences, these insights are indispensable for achieving top-tier performance metrics.</p>
      <h2>Critical Rendering Path Optimization</h2>
      <p>Understanding and optimizing the Critical Rendering Path (CRP) is fundamental to achieving fast initial page loads. This involves prioritizing critical resources, deferring non-essential assets, and optimizing CSS and JavaScript delivery.</p>
      <h3>Efficient Resource Loading</h3>
      <p>Techniques such as lazy loading images and videos, preloading critical assets, and using responsive images can drastically reduce initial page weight and improve perceived performance. Strategic use of HTTP/2 and HTTP/3 protocols also plays a significant role.</p>
      <h4>Server-Side Rendering (SSR) vs. Static Site Generation (SSG)</h4>
      <p>Choosing between SSR and SSG depends on the application's specific requirements for data freshness and build times. Both offer significant performance advantages over client-side rendering by delivering fully formed HTML to the browser, improving both user experience and SEO.</p>
    `,
        category: "Performance",
        author: "Wistant Kode",
        publishedAt: "2024-01-05",
        image: "/blog-post-3.jpg",
        tags: ["Performance", "Optimization", "Web", "Speed", "SEO", "Frontend", "Backend"],
        readingTime: 8,
    }
];

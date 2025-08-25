import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Mail, Phone, MapPin, Calendar, Award, Users, Zap, ExternalLink, Code, Search } from "lucide-react"
import { AnimatedBackground } from "@/components/animated-background"
import { FloatingElements } from "@/components/floating-elements"
import Image from "next/image"
import { TerminalBorder } from "@/components/terminal-border"
import { TypewriterText } from "@/components/typewriter-text"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background relative">
      <AnimatedBackground />
      <FloatingElements />

      <TerminalBorder side="left" />
      <TerminalBorder side="right" />

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold text-primary">Soumil Baldota</h1>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                About
              </a>
              <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
                Projects
              </a>
              <a href="#experience" className="text-muted-foreground hover:text-primary transition-colors">
                Experience
              </a>
              <a href="#skills" className="text-muted-foreground hover:text-primary transition-colors">
                Skills
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-8">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <Image
                  src="/images/headshot.jpeg"
                  alt="Soumil Baldota"
                  width={200}
                  height={200}
                  className="rounded-full border-4 border-primary/20 shadow-2xl transform hover:scale-105 transition-all duration-300"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-secondary/20 animate-pulse"></div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="py-8 my-12">
                <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                  <TypewriterText
                    texts={["Software Engineer", "Backend Developer", "DevOps Engineer", "System Architect"]}
                    className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent"
                  />
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Building scalable backend systems and optimizing performance at enterprise scale. Currently pursuing MS
                in Computer Science at Columbia University.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                className="bg-primary hover:bg-primary/90 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <a href="#contact">Get In Touch</a>
              </Button>
              <Button
                variant="outline"
                asChild
                className="transform hover:scale-105 transition-all duration-200 hover:shadow-lg bg-transparent"
              >
                <a href="https://github.com/soumilbaldota" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 bg-card/50 backdrop-blur-sm relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate software engineer with expertise in building high-performance backend systems and
                implementing DevOps best practices. My experience spans from optimizing database performance to
                architecting multi-tenant systems that serve thousands of users.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Currently pursuing my Master's in Computer Science at Columbia University, I've had the privilege of
                working with industry leaders like CERN, Samsung Research, and Maximl Labs, where I've consistently
                delivered solutions that improve system performance and developer productivity.
              </p>
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  New York City, NY
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  Available for opportunities
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <Card className="transform hover:scale-105 transition-all duration-200 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <Award className="w-8 h-8 text-primary" />
                    <div>
                      <h3 className="font-semibold">Dean's Scholarship</h3>
                      <p className="text-sm text-muted-foreground">Academic Excellence Award</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="transform hover:scale-105 transition-all duration-200 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <Users className="w-8 h-8 text-primary" />
                    <div>
                      <h3 className="font-semibold">10,000+ Users</h3>
                      <p className="text-sm text-muted-foreground">Managed across multi-tenant systems</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="transform hover:scale-105 transition-all duration-200 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <Zap className="w-8 h-8 text-primary" />
                    <div>
                      <h3 className="font-semibold">90% Performance Boost</h3>
                      <p className="text-sm text-muted-foreground">API response time improvements</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Current Projects Section */}
      <section id="projects" className="py-16 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Current Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Hoppr Project */}
            <Card className="transform hover:scale-[1.02] transition-all duration-300 hover:shadow-xl">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Search className="w-6 h-6 text-primary" />
                    <div>
                      <CardTitle className="text-xl">Hoppr</CardTitle>
                      <CardDescription className="text-base">Job Search Engine</CardDescription>
                    </div>
                  </div>
                 <Badge className="bg-blue-100 text-blue-800 border-blue-200">
                    In Development
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  A modern job search engine built to help job seekers find opportunities more efficiently. 
                  Features advanced filtering, company insights, and personalized recommendations.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">PostgreSQL</Badge>
                  <Badge variant="secondary">Docker</Badge>
                </div>
                <div className="flex gap-3">
                  <Button
                    asChild
                    size="sm"
                    className="bg-primary hover:bg-primary/90"
                  >
                    <a href="http://hoppr.duckdns.org" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Live
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* QDB Project */}
            <Card className="transform hover:scale-[1.02] transition-all duration-300 hover:shadow-xl">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Code className="w-6 h-6 text-primary" />
                    <div>
                      <CardTitle className="text-xl">QDB</CardTitle>
                      <CardDescription className="text-base">Queryable Database in Rust</CardDescription>
                    </div>
                  </div>
                  <Badge className="bg-blue-100 text-blue-800 border-blue-200">
                    In Development
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  A high-performance queryable database implementation built from scratch in Rust. 
                  Focuses on memory efficiency, concurrent access, and SQL-like query capabilities.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">Rust</Badge>
                  <Badge variant="secondary">Database</Badge>
                  <Badge variant="secondary">Systems Programming</Badge>
                  <Badge variant="secondary">Performance</Badge>
                </div>
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    asChild
                    size="sm"
                  >
                    <a href="https://github.com/soumilbaldota/qdb/" target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </a>
                  </Button>
                </div>
                <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                  <h4 className="font-medium text-sm mb-2">Key Features:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Custom storage engine with B-tree indexing</li>
                    <li>• SQL query parser and optimizer</li>
                    <li>• ACID transaction support</li>
                    <li>• Memory-mapped file I/O for performance</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-6 bg-card/50 backdrop-blur-sm relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
          <div className="space-y-8">
            {/* Maximl Labs - Software Engineer */}
            <Card className="transform hover:scale-[1.02] transition-all duration-300 hover:shadow-xl">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <CardTitle className="text-xl">Software Engineer</CardTitle>
                    <CardDescription className="text-lg font-medium text-primary">Maximl Labs</CardDescription>
                  </div>
                  <Badge variant="secondary" className="w-fit">
                    Jun 2024 – Jul 2025
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">
                      Built a reusable BullMQ-based job processing library with retries, scheduling, and monitoring in
                      NestJS; adopted by 90% of the company's microservices, reducing job-related bugs by 70% and
                      boosting developer velocity by 30%
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">
                      Reverse-engineered Oracle Primavera P6 and MS Project formats to enable scheduling automation,
                      cutting manual syncing time by 90% for multiple enterprise clients
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">
                      Implemented multi-tenancy using PostgreSQL Row-Level Security (RLS) policies, enabling secure data
                      isolation for tenants; eliminated possibility of cross-tenant data leaks
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">
                      Developed a centralized User Management Service to manage 10,000+ users across multi-tenant
                      environments, improving consistency and reducing user-related support tickets by 40%
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Maximl Labs - Intern */}
            <Card className="transform hover:scale-[1.02] transition-all duration-300 hover:shadow-xl">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <CardTitle className="text-xl">Software Engineering Intern</CardTitle>
                    <CardDescription className="text-lg font-medium text-primary">Maximl Labs</CardDescription>
                  </div>
                  <Badge variant="secondary" className="w-fit">
                    Jun 2023 – Jun 2024
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">
                      Improved database performance by optimizing schemas, constraints, and indexes; achieved 3x faster
                      query execution for core APIs and enhanced uptime during peak usage
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">
                      Reduced API response times by up to 90% by identifying performance bottlenecks through performance
                      profiling, restructuring code and queries
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">
                      Boosted test coverage from 40% to 90% using Jest-based E2E tests; decreased post-deployment
                      regression issues by 60% over two release cycles
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Samsung Research */}
            <Card className="transform hover:scale-[1.02] transition-all duration-300 hover:shadow-xl">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <CardTitle className="text-xl">Software Engineering Intern (Prism)</CardTitle>
                    <CardDescription className="text-lg font-medium text-primary">Samsung Research</CardDescription>
                  </div>
                  <Badge variant="secondary" className="w-fit">
                    Jun 2022 – Sep 2022
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">
                      Scraped 50,000+ text samples across diverse domains and augmented them using BERT, generating
                      120,000+ high-quality training samples
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">
                      Developed a multi-modal benchmark model (LSTM, SVM, Regression) for document classification on
                      low-powered mobile devices, achieving 95% accuracy on validation and test datasets
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CERN */}
            <Card className="transform hover:scale-[1.02] transition-all duration-300 hover:shadow-xl">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <CardTitle className="text-xl">Software Contributor</CardTitle>
                    <CardDescription className="text-lg font-medium text-primary">
                      CERN, Google Summer of Code
                    </CardDescription>
                  </div>
                  <Badge variant="secondary" className="w-fit">
                    Jun 2022 – Sep 2022
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">
                      Created an automatic code generation interface between the AidaSoft/podio data model library and
                      Julia for high-energy physics research
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">
                      Conducted rigorous performance testing and benchmarking to compare C++ and Julia language
                      interfaces
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-6 bg-card/50 backdrop-blur-sm relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="transform hover:scale-105 transition-all duration-200 hover:shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">Programming Languages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["Java", "Go", "TypeScript", "JavaScript", "Python"].map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="transform hover:scale-105 transition-all duration-200 hover:shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">Backend & DevOps</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["NestJS", "PostgreSQL", "Redis", "Docker", "Kubernetes", "GitLab CI/CD"].map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="transform hover:scale-105 transition-all duration-200 hover:shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">Tools & Technologies</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["BullMQ", "Helm Charts", "ELK Stack", "Datadog", "Jest", "ArgoCD"].map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="transform hover:scale-105 transition-all duration-200 hover:shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">Master of Science in Computer Science</CardTitle>
                <CardDescription className="text-lg font-medium text-primary">Columbia University</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <p className="text-muted-foreground">New York City, NY</p>
                  <Badge variant="secondary">Aug 2025 - Present</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="transform hover:scale-105 transition-all duration-200 hover:shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">Bachelor of Technology Computer Science</CardTitle>
                <CardDescription className="text-lg font-medium text-primary">
                  SRM Institute of Technology
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <p className="text-muted-foreground">Chennai, Tamil Nadu</p>
                    <Badge variant="secondary">Jun 2020 - Jun 2024</Badge>
                  </div>
                  <p className="text-sm font-medium">GPA: 9.56/10</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 bg-card/50 backdrop-blur-sm relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Let's Connect</h2>
          <p className="text-lg text-muted-foreground mb-8">
            I'm always interested in discussing new opportunities and innovative projects.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <a href="mailto:soumilbaldota@gmail.com">
                <Mail className="w-4 h-4 mr-2" />
                Email Me
              </a>
            </Button>
            <Button
              variant="outline"
              asChild
              className="transform hover:scale-105 transition-all duration-200 hover:shadow-lg bg-transparent"
            >
              <a href="https://linkedin.com/in/soumilbaldota" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </a>
            </Button>
            <Button
              variant="outline"
              asChild
              className="transform hover:scale-105 transition-all duration-200 hover:shadow-lg bg-transparent"
            >
              <a href="https://github.com/soumilbaldota" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </a>
            </Button>
            <Button
              variant="outline"
              asChild
              className="transform hover:scale-105 transition-all duration-200 hover:shadow-lg bg-transparent"
            >
              <a href="tel:+16463268135">
                <Phone className="w-4 h-4 mr-2" />
                Call Me
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground">© 2025 Soumil Baldota. Built with Next.js and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  )
}
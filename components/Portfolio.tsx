"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ChevronDown, Code, Rocket, Zap, Shield, Target, Palette, Menu } from 'lucide-react'
import { Button } from "../shadnc/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../shadnc/components/ui/card"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "../shadnc/components/ui/sheet"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../shadnc/components/ui/tabs"
import { ScrollArea } from "../shadnc/components/ui/scroll-area"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../shadnc/components/ui/tooltip"

const iconMap = {
  Code, Rocket, Zap, Shield, Target, Palette
}

export default function Portfolio({ projects, services }) {
  const [activeSection, setActiveSection] = useState('hero')
  const [ref, inView] = useInView({
    threshold: 0.5,
  })

  useEffect(() => {
    if (inView) {
      setActiveSection('services')
    }
  }, [inView])

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="/" className="text-2xl font-bold text-primary">Sideral Network</a>
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="text-gray-600 hover:text-primary transition-colors">Accueil</a>
            <a href="/#services" className="text-gray-600 hover:text-primary transition-colors">Services</a>
            <a href="/#projects" className="text-gray-600 hover:text-primary transition-colors">Projets</a>
            <a href="/a-propos" className="text-gray-600 hover:text-primary transition-colors">À propos</a>
            <a href="/nous-contacter" className="text-gray-600 hover:text-primary transition-colors">Contactez-Nous</a>
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">FR</Button>
            <Button size="sm">Démarrer un projet</Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                  <SheetDescription>
                    Naviguez à travers les différentes sections du site.
                  </SheetDescription>
                </SheetHeader>
                <div className="grid gap-4 py-4">
                  <a href="#" className="text-gray-600 hover:text-primary transition-colors">Accueil</a>
                  <a href="#services" className="text-gray-600 hover:text-primary transition-colors">Services</a>
                  <a href="#projects" className="text-gray-600 hover:text-primary transition-colors">Projets</a>
                  <a href="/about" className="text-gray-600 hover:text-primary transition-colors">À propos</a>
                  <a href="#" className="text-gray-600 hover:text-primary transition-colors">Contact</a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <main className="pt-20">
        <section id="hero" className="min-h-screen flex items-center justify-center text-center px-4">
          <div className="max-w-3xl">
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Propulsez votre vision digitale
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              De l'esquisse à la réalité numérique, nous orchestrons chaque pixel pour donner vie à vos ambitions les plus audacieuses.
            </motion.p>
            <motion.div 
              className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button size="lg">Lancez votre odyssée digitale</Button>
              <Button variant="outline" size="lg">Explorez nos services</Button>
            </motion.div>
          </div>
        </section>

        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown className="w-10 h-10 text-primary" />
        </motion.div>

        <section id="services" ref={ref} className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Notre arsenal d'innovation</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const Icon = iconMap[service.icon]
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                      <CardHeader>
                        <Icon className="w-12 h-12 text-primary mb-4" />
                        <CardTitle>{service.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription>{service.description}</CardDescription>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        <section id="projects" className="py-20 px-4 bg-gray-50">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Nos chefs-d'œuvre numériques</h2>
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
                <TabsTrigger value="all">Tous</TabsTrigger>
                <TabsTrigger value="web">Web</TabsTrigger>
                <TabsTrigger value="mobile">Mobile</TabsTrigger>
                <TabsTrigger value="design">Design</TabsTrigger>
              </TabsList>
              <ScrollArea className="h-[600px] w-full rounded-md border p-4">
                <TabsContent value="all" className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} index={index} />
                  ))}
                </TabsContent>
                <TabsContent value="web" className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {projects.filter(p => p.category === 'web').map((project, index) => (
                    <ProjectCard key={index} project={project} index={index} />
                  ))}
                </TabsContent>
                <TabsContent value="mobile" className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {projects.filter(p => p.category === 'mobile').map((project, index) => (
                    <ProjectCard key={index} project={project} index={index} />
                  ))}
                </TabsContent>
                <TabsContent value="design" className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {projects.filter(p => p.category === 'design').map((project, index) => (
                    <ProjectCard key={index} project={project} index={index} />
                  ))}
                </TabsContent>
              </ScrollArea>
            </Tabs>
          </div>
        </section>

        <section className="py-20 px-4 bg-primary text-white text-center">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-4xl font-bold mb-6">Prêt à transcender le numérique ?</h2>
            <p className="text-xl mb-8">Embarquez pour un voyage au cœur de l'innovation. Ensemble, réinventons le futur digital.</p>
            <Button size="lg" variant="secondary">Initier votre métamorphose digitale</Button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Sideral Network</h3>
              <p className="text-gray-400">Forgé avec passion à Douai, France</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="/website-" className="text-gray-400 hover:text-white transition-colors">Création de Site-Internet</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Liens rapides</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Accueil</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">À propos</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Projets</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Suivez-nous</h4>
              <div className="flex space-x-4">
                <a href="https://github.com/Sideral Network-official/" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-400">&copy; 2024 Sideral Network. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        <CardHeader>
          <CardTitle>{project.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>{project.description}</CardDescription>
        </CardContent>
        <CardFooter>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">En savoir plus</Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Cliquez pour voir les détails du projet</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
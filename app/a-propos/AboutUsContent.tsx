"use client";

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../shadnc/components/ui/card"
import { Badge } from "../../shadnc/components/ui/badge"
import { Button } from "../../shadnc/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "../../shadnc/components/ui/avatar"
import { Laptop, Brain, Rocket, Users, Mail, Menu } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "../../shadnc/components/ui/sheet"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../shadnc/components/ui/tabs"
import { ScrollArea } from "../../shadnc/components/ui/scroll-area"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../../shadnc/components/ui/tooltip"

export default function AboutUsContent() {
  const skills = [
    "HTML", "CSS", "PHP", "JavaScript", "TypeScript", "Java",  
    "Node.Js", "Python", "Next.Js", "React", "Bash", "Docker",
    "AWS", "Git", "Bootstrap", "Linux", "MariaDB", "MongoDB",
    "Nginx", "Apache2"
  ]

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white">
    <header className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="/" className="text-2xl font-bold text-primary">Sideral Network</a>
        <nav className="hidden md:flex space-x-8">
          <a href="/" className="text-gray-600 hover:text-primary transition-colors">Accueil</a>
          <a href="/#services" className="text-gray-600 hover:text-primary transition-colors">Services</a>
          <a href="/#projects" className="text-gray-600 hover:text-primary transition-colors">Projets</a>
          <a href="#" className="text-gray-600 hover:text-primary transition-colors">À propos</a>
          <a href="#" className="text-gray-600 hover:text-primary transition-colors">Contact</a>
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
      <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white py-12 px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-7xl mx-auto mt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-4xl font-extrabold text-center text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl"
            {...fadeInUp}
          >
            A propos de nous
          </motion.h1>
          <motion.p 
            className="mt-5 max-w-3xl mx-auto text-xl text-gray-500 text-center"
            {...fadeInUp}
          >
           Nous sommes une équipe de développeurs passionnés, dédiée à la création de solutions numériques innovantes.
          </motion.p>

          <motion.div 
            className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            variants={{
              animate: { transition: { staggerChildren: 0.1 } }
            }}
            initial="initial"
            animate="animate"
          >
            <motion.div {...fadeInUp}>
              <Card>
                <CardHeader>
                  <Laptop className="w-10 h-10 text-primary mb-4" />
                  <CardTitle>Technologie de pointe</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Nous tirons parti des dernières technologies pour créer des applications robustes et évolutives.</CardDescription>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div {...fadeInUp}>
              <Card>
                <CardHeader>
                  <Brain className="w-10 h-10 text-primary mb-4" />
                  <CardTitle>Résolution créative de problèmes</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Notre équipe excelle dans la résolution de défis complexes grâce à des solutions innovantes.</CardDescription>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div {...fadeInUp}>
              <Card>
                <CardHeader>
                  <Rocket className="w-10 h-10 text-primary mb-4" />
                  <CardTitle>Développement Agile</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Nous utilisons des méthodologies agiles pour garantir un développement rapide et une amélioration continue.</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          <motion.div 
            className="mt-20"
            {...fadeInUp}
          >
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Nos compétences</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Badge variant="secondary" className="flex flex-col items-center text-lg py-2 px-4">
                    {skill}
                  </Badge>                
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="mt-20"
            {...fadeInUp}
          >
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Notre équipe</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-1">
              {['Bob'].map((name, index) => (
                <Card key={name}>
                  <CardHeader>
                    <Avatar className="w-24 h-24 mx-auto">
                      <AvatarImage src={`/`} alt={name} />
                      <AvatarFallback>{name[0]}</AvatarFallback>
                    </Avatar>
                    <CardTitle className="text-center mt-4">{name}</CardTitle>
                    <CardDescription className="text-center">Senior Developer</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600">Passionate about creating elegant solutions to complex problems.</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="mt-20 text-center"
            {...fadeInUp}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Entrons en Contact</h2>
            <p className="text-xl text-gray-600 mb-8">Intéressé à travailler avec nous ? Nous serions ravis de vous entendre !</p>
            <Button size="lg" className="gap-2">
              <Mail className="w-5 h-5" />
              Contactez-nous
            </Button>
          </motion.div>
        </motion.div>
      </div>
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
                <li><a href="/" className="text-gray-400 hover:text-white transition-colors">Accueil</a></li>
                <li><a href="/#services" className="text-gray-400 hover:text-white transition-colors">À propos</a></li>
                <li><a href="/#projects" className="text-gray-400 hover:text-white transition-colors">Projets</a></li>
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
"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Code2, Gamepad2, Zap, Users, ExternalLink, Copy, Check, Menu, X } from "lucide-react"

const navigation = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Top">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <Code2 className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-lg">AdFoedus</span>
            </a>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex md:items-center md:gap-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="p-2 text-muted-foreground hover:text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden py-4 border-t border-border"
          >
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-2 text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-4 block rounded-lg bg-primary px-4 py-2 text-center text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Hire Me
            </a>
          </motion.div>
        )}
      </nav>
    </header>
  )
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-chart-2/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-1.5 text-sm text-muted-foreground mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Available for commissions
          </div>
          
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            <span className="text-foreground">Crafting</span>{" "}
            <span className="gradient-text">immersive</span>
            <br />
            <span className="text-foreground">Roblox experiences</span>
          </h1>
          
          <p className="mx-auto max-w-2xl text-lg sm:text-xl text-muted-foreground mb-10">
            Professional LuaU developer specializing in game systems, UI/UX, 
            and performance-optimized scripting. Turning ideas into polished, 
            playable realities.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#projects"
              className="w-full sm:w-auto rounded-lg bg-primary px-8 py-3 text-base font-medium text-primary-foreground hover:bg-primary/90 transition-all hover:scale-105"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto rounded-lg border border-border bg-card/50 px-8 py-3 text-base font-medium text-foreground hover:bg-card transition-all hover:scale-105"
            >
              Get In Touch
            </a>
          </div>
        </motion.div>
        
        {/* Floating code block */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 mx-auto max-w-2xl"
        >
          <div className="rounded-xl border border-border bg-card/80 backdrop-blur-sm overflow-hidden animate-float">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-secondary/50">
              <div className="h-3 w-3 rounded-full bg-destructive/60" />
              <div className="h-3 w-3 rounded-full bg-chart-4/60" />
              <div className="h-3 w-3 rounded-full bg-primary/60" />
              <span className="ml-2 text-xs text-muted-foreground font-mono">GameSystem.luau</span>
            </div>
            <pre className="p-4 text-left text-sm font-mono overflow-x-auto">
              <code>
                <span className="text-chart-2">local</span>{" "}
                <span className="text-foreground">ReplicatedStorage</span> ={" "}
                <span className="text-chart-4">game</span>:GetService(<span className="text-primary">&quot;ReplicatedStorage&quot;</span>)
                {"\n\n"}
                <span className="text-muted-foreground">-- Initialize game systems</span>
                {"\n"}
                <span className="text-chart-2">local function</span>{" "}
                <span className="text-chart-4">initializeGame</span>()
                {"\n"}
                {"    "}<span className="text-chart-2">return</span> {"{"}
                {"\n"}
                {"        "}success = <span className="text-chart-4">true</span>,
                {"\n"}
                {"        "}message = <span className="text-primary">&quot;Ready to play!&quot;</span>
                {"\n"}
                {"    "}{"}"}
                {"\n"}
                <span className="text-chart-2">end</span>
              </code>
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

const stats = [
  { label: "Projects Completed", value: "50+" },
  { label: "Happy Clients", value: "30+" },
  { label: "Lines of Code", value: "100K+" },
  { label: "Years Experience", value: "3+" },
]

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              Hey there! I&apos;m AdFoedus, a passionate Roblox developer with a deep love for 
              creating engaging game experiences. I specialize in LuaU scripting, focusing on 
              clean, efficient, and scalable code.
            </p>
            <p className="text-muted-foreground text-lg mb-8">
              Whether it&apos;s complex combat systems, intuitive UI frameworks, or custom game 
              mechanics, I bring ideas to life with attention to detail and a commitment to 
              quality. My goal is to help creators build the games they&apos;ve always envisioned.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="rounded-lg border border-border bg-card p-4"
                >
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-2xl border border-border bg-card overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-chart-2/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto rounded-full bg-secondary flex items-center justify-center mb-4 ring-4 ring-primary/20">
                    <Gamepad2 className="w-16 h-16 text-primary" />
                  </div>
                  <div className="text-xl font-bold">@AdFoedus</div>
                  <div className="text-muted-foreground">Roblox Developer</div>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-xl border border-border bg-card flex items-center justify-center animate-float">
              <Code2 className="w-10 h-10 text-primary" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-20 h-20 rounded-xl border border-border bg-card flex items-center justify-center animate-float" style={{ animationDelay: "1s" }}>
              <Zap className="w-8 h-8 text-chart-4" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

const projects = [
  {
    title: "Combat System Framework",
    description: "A fully modular combat system featuring hitboxes, combos, abilities, and networked damage. Optimized for performance with client-side prediction.",
    tags: ["Combat", "Framework", "Networking"],
    image: "🗡️",
  },
  {
    title: "Advanced Inventory System",
    description: "Complete inventory management with drag-and-drop UI, item stacking, equipment slots, and data persistence using ProfileService.",
    tags: ["UI/UX", "DataStore", "Systems"],
    image: "🎒",
  },
  {
    title: "Open World RPG Systems",
    description: "Quest system, NPC dialogue, skill trees, and progression mechanics for an open-world RPG experience with thousands of active players.",
    tags: ["RPG", "Quests", "NPCs"],
    image: "🏰",
  },
  {
    title: "Custom Physics Engine",
    description: "Vehicle physics, ragdoll systems, and custom collision handling for realistic gameplay interactions and smooth performance.",
    tags: ["Physics", "Vehicles", "Optimization"],
    image: "🚗",
  },
  {
    title: "Multiplayer Framework",
    description: "Lobby system, matchmaking, team management, and spectator mode with seamless server-to-server teleportation.",
    tags: ["Multiplayer", "Matchmaking", "Networking"],
    image: "👥",
  },
  {
    title: "Admin Dashboard",
    description: "In-game administration panel with player management, analytics, moderation tools, and live server monitoring.",
    tags: ["Admin", "Analytics", "Tools"],
    image: "📊",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-card/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my work across various game genres and system types. 
            Each project demonstrates my commitment to quality and performance.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group rounded-xl border border-border bg-card overflow-hidden hover:border-primary/50 transition-all card-glow"
            >
              <div className="aspect-video bg-secondary/50 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300">
                {project.image}
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const skills = [
  { name: "LuaU Scripting", level: 95 },
  { name: "Game Systems Design", level: 90 },
  { name: "UI/UX Development", level: 85 },
  { name: "Networking & Replication", level: 88 },
  { name: "Performance Optimization", level: 92 },
  { name: "Data Persistence", level: 85 },
]

const services = [
  {
    icon: Code2,
    title: "Custom Scripting",
    description: "Tailored LuaU solutions for any game mechanic or system you need.",
  },
  {
    icon: Gamepad2,
    title: "Game Systems",
    description: "Combat, inventory, quests, and other core gameplay systems.",
  },
  {
    icon: Zap,
    title: "Optimization",
    description: "Performance improvements and code refactoring for smooth gameplay.",
  },
  {
    icon: Users,
    title: "Multiplayer",
    description: "Networking, matchmaking, and server-side logic implementation.",
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Skills & <span className="gradient-text">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Years of experience building for the Roblox platform have given me 
            a diverse skillset to tackle any development challenge.
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Skills bars */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-6">Technical Proficiency</h3>
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="h-2 rounded-full bg-secondary overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-primary to-chart-2"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Services grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-xl border border-border bg-card p-6 hover:border-primary/50 transition-all card-glow"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">{service.title}</h4>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function Contact() {
  const [copied, setCopied] = useState<string | null>(null)

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text)
    setCopied(label)
    setTimeout(() => setCopied(null), 2000)
  }

  const socials = [
    {
      label: "Roblox",
      value: "@AdFoedus",
      href: "https://www.roblox.com/users/profile",
      copyable: "AdFoedus",
    },
    {
      label: "Discord",
      value: "@adfoedus",
      href: null,
      copyable: "adfoedus",
    },
  ]

  return (
    <section id="contact" className="py-24 bg-card/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to bring your game idea to life? Get in touch and let&apos;s discuss 
            your project. I&apos;m always excited to work on new and challenging projects.
          </p>
        </motion.div>
        
        <div className="max-w-lg mx-auto space-y-4">
          {socials.map((social, index) => (
            <motion.div
              key={social.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center justify-between rounded-xl border border-border bg-card p-4 hover:border-primary/50 transition-all"
            >
              <div>
                <div className="text-sm text-muted-foreground">{social.label}</div>
                <div className="font-medium">{social.value}</div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => copyToClipboard(social.copyable, social.label)}
                  className="p-2 rounded-lg hover:bg-secondary transition-colors"
                  title="Copy"
                >
                  {copied === social.label ? (
                    <Check className="w-5 h-5 text-primary" />
                  ) : (
                    <Copy className="w-5 h-5 text-muted-foreground" />
                  )}
                </button>
                {social.href && (
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg hover:bg-secondary transition-colors"
                  >
                    <ExternalLink className="w-5 h-5 text-muted-foreground" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-6 py-3">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-sm font-medium">Currently accepting new projects</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <Code2 className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-bold">AdFoedus</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} AdFoedus. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

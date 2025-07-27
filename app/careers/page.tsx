"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Briefcase, MapPin, Clock, DollarSign, Users, Zap, Send } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import MatrixRain from "@/components/matrix-rain"

interface JobPosition {
  title: string
  department: string
  location: string
  type: string
  salary: string
  description: string
  requirements: string[]
  responsibilities: string[]
  benefits: string[]
}

interface CompanyBenefit {
  icon: React.ElementType
  title: string
  description: string
  color: string
}

interface ApplicationFormData {
  name: string
  email: string
  position: string
  resume: File | null
  coverLetter: string
  portfolio: string
}

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<number | null>(null)

  const openPositions: JobPosition[] = [
    {
      title: "Senior Security Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      salary: "$120k - $180k",
      description:
        "Lead the development of advanced anti-detection systems and security features for our gaming enhancement software.",
      requirements: [
        "5+ years of experience in cybersecurity",
        "Strong knowledge of reverse engineering",
        "Experience with anti-cheat bypass techniques",
        "Proficiency in C++ and Assembly",
        "Understanding of Windows internals",
      ],
      responsibilities: [
        "Design and implement security features",
        "Research anti-cheat systems and develop bypasses",
        "Collaborate with the development team on security architecture",
        "Conduct security audits and vulnerability assessments",
        "Stay updated on the latest security trends and threats",
      ],
      benefits: [
        "Competitive salary and equity",
        "Flexible remote work",
        "Health and dental insurance",
        "Professional development budget",
        "Latest hardware and software",
      ],
    },
    {
      title: "Frontend Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      salary: "$90k - $140k",
      description: "Build beautiful and intuitive user interfaces for our desktop applications and web platforms.",
      requirements: [
        "3+ years of React/TypeScript experience",
        "Strong knowledge of modern web technologies",
        "Experience with Electron or similar frameworks",
        "Understanding of UI/UX principles",
        "Portfolio of previous work",
      ],
      responsibilities: [
        "Develop and maintain user interfaces",
        "Collaborate with designers on implementation",
        "Optimize applications for performance",
        "Write clean, maintainable code",
        "Participate in code reviews and testing",
      ],
      benefits: [
        "Competitive salary and equity",
        "Flexible remote work",
        "Health and dental insurance",
        "Professional development budget",
        "Latest hardware and software",
      ],
    },
    {
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "Remote",
      type: "Full-time",
      salary: "$100k - $160k",
      description: "Manage and scale our cloud infrastructure to support millions of users worldwide.",
      requirements: [
        "4+ years of DevOps experience",
        "Strong knowledge of AWS/Azure/GCP",
        "Experience with Docker and Kubernetes",
        "Proficiency in Infrastructure as Code",
        "Understanding of CI/CD pipelines",
      ],
      responsibilities: [
        "Design and maintain cloud infrastructure",
        "Implement monitoring and alerting systems",
        "Automate deployment processes",
        "Ensure high availability and scalability",
        "Optimize costs and performance",
      ],
      benefits: [
        "Competitive salary and equity",
        "Flexible remote work",
        "Health and dental insurance",
        "Professional development budget",
        "Latest hardware and software",
      ],
    },
    {
      title: "Community Manager",
      department: "Marketing",
      location: "Remote",
      type: "Full-time",
      salary: "$60k - $90k",
      description: "Build and nurture our gaming community across Discord, social media, and other platforms.",
      requirements: [
        "2+ years of community management experience",
        "Strong communication and interpersonal skills",
        "Experience with Discord and social media",
        "Understanding of gaming culture",
        "Ability to handle difficult situations",
      ],
      responsibilities: [
        "Manage Discord community and events",
        "Create engaging content for social media",
        "Handle customer support inquiries",
        "Organize community events and tournaments",
        "Gather feedback and insights from users",
      ],
      benefits: [
        "Competitive salary and equity",
        "Flexible remote work",
        "Health and dental insurance",
        "Professional development budget",
        "Gaming hardware allowance",
      ],
    },
    {
      title: "QA Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      salary: "$70k - $110k",
      description: "Ensure the quality and reliability of our software through comprehensive testing and automation.",
      requirements: [
        "3+ years of QA experience",
        "Experience with automated testing",
        "Knowledge of testing frameworks",
        "Understanding of software development lifecycle",
        "Attention to detail and problem-solving skills",
      ],
      responsibilities: [
        "Design and execute test plans",
        "Develop automated testing scripts",
        "Identify and report bugs and issues",
        "Collaborate with developers on fixes",
        "Maintain testing documentation",
      ],
      benefits: [
        "Competitive salary and equity",
        "Flexible remote work",
        "Health and dental insurance",
        "Professional development budget",
        "Latest hardware and software",
      ],
    },
  ]

  const companyBenefits: CompanyBenefit[] = [
    {
      icon: DollarSign,
      title: "Competitive Compensation",
      description: "Market-leading salaries plus equity in a fast-growing company.",
      color: "from-green-600 to-emerald-600",
    },
    {
      icon: MapPin,
      title: "Remote-First Culture",
      description: "Work from anywhere in the world with flexible hours.",
      color: "from-blue-600 to-cyan-600",
    },
    {
      icon: Users,
      title: "Amazing Team",
      description: "Work with passionate experts who love what they do.",
      color: "from-purple-600 to-violet-600",
    },
    {
      icon: Zap,
      title: "Growth Opportunities",
      description: "Continuous learning and career advancement opportunities.",
      color: "from-yellow-600 to-amber-600",
    },
  ]

  const [formData, setFormData] = useState<ApplicationFormData>({
    name: "",
    email: "",
    position: "",
    resume: null,
    coverLetter: "",
    portfolio: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Application submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData,
        resume: e.target.files[0],
      })
    }
  }

  const scrollToApplicationForm = () => {
    const applicationSection = document.getElementById("application-form")
    if (applicationSection) {
      applicationSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black text-white pt-32 pb-20 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/10 to-black"></div>
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-red-500/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-red-500/10 rounded-full filter blur-3xl"></div>
          <div className="absolute inset-0 opacity-30">
            <MatrixRain />
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Hero Section */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Join Our Team
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Help us build the future of gaming enhancement software. Join a team of passionate experts working on
              cutting-edge technology.
            </motion.p>
          </motion.div>

          {/* Company Benefits */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Why Work With Us?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We offer more than just a job - we offer a career with purpose
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {companyBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="bg-black/50 backdrop-blur-sm border border-red-500/20 rounded-2xl overflow-hidden shadow-lg hover:shadow-red-500/10 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="p-8 text-center">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-6 mx-auto shadow-lg`}
                    >
                      <benefit.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white">{benefit.title}</h3>
                    <p className="text-gray-300">{benefit.description}</p>
                  </div>
                  <div className={`h-1 bg-gradient-to-r ${benefit.color}`}></div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Open Positions */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Open Positions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Find your perfect role and help us shape the future of gaming
              </p>
            </div>

            <div className="space-y-6">
              {openPositions.map((job, index) => (
                <motion.div
                  key={index}
                  className="bg-black/50 backdrop-blur-sm border border-red-500/20 rounded-xl overflow-hidden shadow-lg hover:shadow-red-500/10 transition-all duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.1 }}
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-2">{job.title}</h3>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-4">
                          <span className="flex items-center">
                            <Briefcase className="h-4 w-4 mr-1" />
                            {job.department}
                          </span>
                          <span className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {job.location}
                          </span>
                          <span className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {job.type}
                          </span>
                          <span className="flex items-center">
                            <DollarSign className="h-4 w-4 mr-1" />
                            {job.salary}
                          </span>
                        </div>
                        <p className="text-gray-300 mb-4">{job.description}</p>
                      </div>
                      <motion.button
                        onClick={() => setSelectedJob(selectedJob === index ? null : index)}
                        className="ml-6 px-6 py-3 bg-gradient-to-r from-red-600 to-red-500 rounded-lg font-bold text-white hover:from-red-500 hover:to-red-400 transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {selectedJob === index ? "Hide Details" : "View Details"}
                      </motion.button>
                    </div>

                    {selectedJob === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t border-red-500/20 pt-6 mt-6"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                          <div>
                            <h4 className="text-lg font-bold text-white mb-3">Requirements</h4>
                            <ul className="space-y-2">
                              {job.requirements.map((req, reqIndex) => (
                                <li key={reqIndex} className="text-gray-300 text-sm flex items-start">
                                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                  {req}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-lg font-bold text-white mb-3">Responsibilities</h4>
                            <ul className="space-y-2">
                              {job.responsibilities.map((resp, respIndex) => (
                                <li key={respIndex} className="text-gray-300 text-sm flex items-start">
                                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                  {resp}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-lg font-bold text-white mb-3">Benefits</h4>
                            <ul className="space-y-2">
                              {job.benefits.map((benefit, benefitIndex) => (
                                <li key={benefitIndex} className="text-gray-300 text-sm flex items-start">
                                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                  {benefit}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <div className="mt-6 pt-6 border-t border-red-500/20">
                          <motion.button
                            onClick={() => {
                              setFormData({ ...formData, position: job.title })
                              scrollToApplicationForm()
                            }}
                            className="w-full flex items-center justify-center px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 rounded-lg font-bold text-white hover:from-red-500 hover:to-red-400 transition-all duration-300 shadow-lg shadow-red-900/20"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            Apply for this Position
                          </motion.button>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Application Form */}
          <motion.div
            id="application-form"
            className="mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Apply Now
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Ready to join our team? Submit your application below
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-black/50 backdrop-blur-sm border border-red-500/20 rounded-2xl overflow-hidden shadow-lg p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-black/50 border border-red-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500/50 transition-colors"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-black/50 border border-red-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500/50 transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="position" className="block text-sm font-medium text-gray-300 mb-2">
                      Position
                    </label>
                    <select
                      id="position"
                      name="position"
                      value={formData.position}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black/50 border border-red-500/20 rounded-lg text-white focus:outline-none focus:border-red-500/50 transition-colors"
                    >
                      <option value="" className="bg-black">
                        Select a position
                      </option>
                      {openPositions.map((job, index) => (
                        <option key={index} value={job.title} className="bg-black">
                          {job.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="resume" className="block text-sm font-medium text-gray-300 mb-2">
                      Resume/CV
                    </label>
                    <input
                      type="file"
                      id="resume"
                      name="resume"
                      onChange={handleFileChange}
                      className="w-full px-4 py-3 bg-black/50 border border-red-500/20 rounded-lg text-white focus:outline-none focus:border-red-500/50 transition-colors"
                      accept=".pdf,.doc,.docx"
                    />
                    <p className="text-xs text-gray-400 mt-1">PDF, DOC, or DOCX files only (Max 5MB)</p>
                  </div>

                  <div>
                    <label htmlFor="portfolio" className="block text-sm font-medium text-gray-300 mb-2">
                      Portfolio/LinkedIn URL (Optional)
                    </label>
                    <input
                      type="url"
                      id="portfolio"
                      name="portfolio"
                      value={formData.portfolio}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black/50 border border-red-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500/50 transition-colors"
                      placeholder="https://your-portfolio.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-300 mb-2">
                      Cover Letter
                    </label>
                    <textarea
                      id="coverLetter"
                      name="coverLetter"
                      value={formData.coverLetter}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-black/50 border border-red-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500/50 transition-colors resize-none"
                      placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full flex items-center justify-center px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 rounded-lg font-bold text-white hover:from-red-500 hover:to-red-400 transition-all duration-300 shadow-lg shadow-red-900/20"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Submit Application
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-black/50 backdrop-blur-sm border border-red-500/20 rounded-2xl overflow-hidden shadow-lg p-12">
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Questions About Working Here?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Don't see a position that fits? Have questions about our culture or benefits? We'd love to hear from
                you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="/contact-support"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 rounded-lg font-bold text-white hover:from-red-500 hover:to-red-400 transition-all duration-300 shadow-lg shadow-red-900/20"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact HR
                </motion.a>
                <motion.a
                  href="/our-team"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-gray-600 to-gray-500 rounded-lg font-bold text-white hover:from-gray-500 hover:to-gray-400 transition-all duration-300 shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Meet the Team
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  )
}

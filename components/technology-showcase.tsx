"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Code, Cpu, Layers, Zap, Lock, RefreshCw } from "lucide-react"

export default function TechnologyShowcase() {
  const [mounted, setMounted] = useState(false)
  const [activeTab, setActiveTab] = useState("architecture")

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section className="container mx-auto px-4 py-16">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">
          Cutting-Edge Technology
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg">
          Explore the advanced technology behind our gaming enhancement tools
        </p>
      </motion.div>

      <div className="bg-black/40 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden">
        <div className="flex flex-wrap border-b border-gray-800">
          <button
            className={`px-6 py-4 text-sm font-medium flex items-center ${
              activeTab === "architecture" ? "text-red-400 border-b-2 border-red-400" : "text-gray-400 hover:text-white"
            }`}
            onClick={() => setActiveTab("architecture")}
          >
            <Layers className="w-4 h-4 mr-2" />
            Architecture
          </button>
          <button
            className={`px-6 py-4 text-sm font-medium flex items-center ${
              activeTab === "kernel" ? "text-red-400 border-b-2 border-red-400" : "text-gray-400 hover:text-white"
            }`}
            onClick={() => setActiveTab("kernel")}
          >
            <Cpu className="w-4 h-4 mr-2" />
            Kernel Integration
          </button>
          <button
            className={`px-6 py-4 text-sm font-medium flex items-center ${
              activeTab === "ai" ? "text-red-400 border-b-2 border-red-400" : "text-gray-400 hover:text-white"
            }`}
            onClick={() => setActiveTab("ai")}
          >
            <Zap className="w-4 h-4 mr-2" />
            AI System
          </button>
          <button
            className={`px-6 py-4 text-sm font-medium flex items-center ${
              activeTab === "code" ? "text-red-400 border-b-2 border-red-400" : "text-gray-400 hover:text-white"
            }`}
            onClick={() => setActiveTab("code")}
          >
            <Code className="w-4 h-4 mr-2" />
            Code Injection
          </button>
        </div>

        <div className="p-6">
          {activeTab === "architecture" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
              <h3 className="text-2xl font-bold mb-4">Multi-Layer Architecture</h3>
              <p className="text-gray-300 mb-6">
                Our software utilizes a sophisticated multi-layer architecture that separates functionality across
                different system levels for maximum performance and undetectability.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="bg-black/60 border border-gray-800 rounded-lg p-4">
                  <h4 className="font-bold mb-2 text-red-400">User Interface Layer</h4>
                  <p className="text-gray-400 text-sm">
                    Clean, intuitive interface with real-time feedback and customization options
                  </p>
                </div>
                <div className="bg-black/60 border border-gray-800 rounded-lg p-4">
                  <h4 className="font-bold mb-2 text-orange-400">Processing Layer</h4>
                  <p className="text-gray-400 text-sm">
                    Handles data processing, game state analysis, and decision making
                  </p>
                </div>
                <div className="bg-black/60 border border-gray-800 rounded-lg p-4">
                  <h4 className="font-bold mb-2 text-yellow-400">Kernel Layer</h4>
                  <p className="text-gray-400 text-sm">
                    Deep system integration for direct memory access and hardware communication
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-lg p-4">
                <div className="flex items-start">
                  <Lock className="w-5 h-5 text-red-400 mr-2 mt-1" />
                  <div>
                    <h4 className="font-bold mb-1">Security First Design</h4>
                    <p className="text-gray-400 text-sm">
                      Every layer of our architecture is designed with security in mind, ensuring your account remains
                      protected at all times.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "kernel" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
              <h3 className="text-2xl font-bold mb-4">Kernel-Level Integration</h3>
              <p className="text-gray-300 mb-6">
                Our kernel-level driver provides the deepest possible integration with your system, bypassing
                traditional detection methods used by anti-cheat software.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-black/60 border border-gray-800 rounded-lg p-4">
                  <h4 className="font-bold mb-2 text-blue-400">Direct Memory Access</h4>
                  <p className="text-gray-400 text-sm">
                    Secure, low-level memory access that bypasses user-mode restrictions for undetectable operation
                  </p>
                </div>
                <div className="bg-black/60 border border-gray-800 rounded-lg p-4">
                  <h4 className="font-bold mb-2 text-purple-400">Hardware Interaction</h4>
                  <p className="text-gray-400 text-sm">
                    Direct communication with hardware components for HWID spoofing and input simulation
                  </p>
                </div>
              </div>

              <div className="relative bg-black/60 border border-gray-800 rounded-lg p-4 overflow-hidden">
                <div className="relative z-10">
                  <h4 className="font-bold mb-2">Kernel Driver Specifications</h4>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                      Signed driver with certificate spoofing
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                      Self-protection against memory scanning
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                      Dynamic code execution paths
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                      Encrypted communication channels
                    </li>
                  </ul>
                </div>

                {/* Code-like background effect */}
                <div className="absolute inset-0 opacity-5 pointer-events-none overflow-hidden">
                  {[...Array(10)].map((_, i) => (
                    <div
                      key={i}
                      className="text-xs font-mono"
                      style={{ position: "absolute", top: `${i * 10}%`, left: 0 }}
                    >
                      {`0x${Math.floor(Math.random() * 16777215)
                        .toString(16)
                        .padStart(6, "0")} 0x${Math.floor(Math.random() * 16777215)
                        .toString(16)
                        .padStart(6, "0")} 0x${Math.floor(Math.random() * 16777215)
                        .toString(16)
                        .padStart(6, "0")}`}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "ai" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
              <h3 className="text-2xl font-bold mb-4">AI-Powered Systems</h3>
              <p className="text-gray-300 mb-6">
                Our advanced AI systems provide human-like behavior patterns that adapt to your playstyle, making
                detection virtually impossible.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="bg-black/60 border border-gray-800 rounded-lg p-4">
                  <h4 className="font-bold mb-2 text-green-400">Adaptive Learning</h4>
                  <p className="text-gray-400 text-sm">
                    AI that learns from your gameplay and adjusts its behavior to match your style
                  </p>
                </div>
                <div className="bg-black/60 border border-gray-800 rounded-lg p-4">
                  <h4 className="font-bold mb-2 text-teal-400">Pattern Recognition</h4>
                  <p className="text-gray-400 text-sm">
                    Identifies enemy patterns and predicts movements for more accurate targeting
                  </p>
                </div>
                <div className="bg-black/60 border border-gray-800 rounded-lg p-4">
                  <h4 className="font-bold mb-2 text-cyan-400">Human Simulation</h4>
                  <p className="text-gray-400 text-sm">
                    Mimics human reaction times, aim patterns, and decision making
                  </p>
                </div>
              </div>

              <div className="relative bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-lg p-4">
                <div className="flex items-start">
                  <RefreshCw className="w-5 h-5 text-green-400 mr-2 mt-1" />
                  <div>
                    <h4 className="font-bold mb-1">Continuous Updates</h4>
                    <p className="text-gray-400 text-sm">
                      Our AI models are continuously trained on new data to improve performance and adapt to game
                      updates.
                    </p>
                  </div>
                </div>

                {/* Neural network visualization */}
                <div className="absolute right-4 bottom-4 w-24 h-24 opacity-30">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="absolute w-full" style={{ top: `${i * 20}%` }}>
                      {[...Array(4)].map((_, j) => (
                        <div
                          key={j}
                          className="absolute w-2 h-2 bg-green-400 rounded-full"
                          style={{ left: `${j * 33}%` }}
                        />
                      ))}
                    </div>
                  ))}
                  {[...Array(20)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute bg-green-400/30"
                      style={{
                        height: "1px",
                        width: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 50}%`,
                        transform: `rotate(${Math.random() * 360}deg)`,
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "code" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
              <h3 className="text-2xl font-bold mb-4">Advanced Code Injection</h3>
              <p className="text-gray-300 mb-6">
                Our proprietary code injection techniques allow for seamless integration with game processes without
                triggering security alerts.
              </p>

              <div className="bg-black/60 border border-gray-800 rounded-lg p-4 mb-6 font-mono text-sm overflow-auto">
                <pre className="text-gray-400">
                  <span className="text-blue-400">void</span> <span className="text-green-400">InjectCode</span>(
                  <span className="text-orange-400">HANDLE</span> hProcess,{" "}
                  <span className="text-orange-400">LPVOID</span> lpBaseAddress) {"{"}
                  <br /> <span className="text-blue-400">DWORD</span> oldProtect;
                  <br /> <span className="text-purple-400">VirtualProtectEx</span>(hProcess, lpBaseAddress,{" "}
                  <span className="text-red-400">sizeof</span>(shellcode), PAGE_EXECUTE_READWRITE, &oldProtect);
                  <br /> <span className="text-purple-400">WriteProcessMemory</span>(hProcess, lpBaseAddress, shellcode,{" "}
                  <span className="text-red-400">sizeof</span>(shellcode), <span className="text-red-400">NULL</span>);
                  <br /> <span className="text-purple-400">CreateRemoteThread</span>(hProcess,{" "}
                  <span className="text-red-400">NULL</span>, 0, (
                  <span className="text-orange-400">LPTHREAD_START_ROUTINE</span>)lpBaseAddress,{" "}
                  <span className="text-red-400">NULL</span>, 0, <span className="text-red-400">NULL</span>);
                  <br /> <span className="text-green-400">// Additional obfuscation and anti-detection measures</span>
                  <br /> <span className="text-purple-400">ObfuscateMemorySignature</span>(hProcess, lpBaseAddress);
                  <br /> <span className="text-purple-400">ImplementHookBypass</span>();
                  <br /> <span className="text-purple-400">VirtualProtectEx</span>(hProcess, lpBaseAddress,{" "}
                  <span className="text-red-400">sizeof</span>(shellcode), oldProtect, &oldProtect);
                  <br />
                  {"}"}
                </pre>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-black/60 border border-gray-800 rounded-lg p-4">
                  <h4 className="font-bold mb-2 text-purple-400">Dynamic Memory Allocation</h4>
                  <p className="text-gray-400 text-sm">
                    Allocates memory in unpredictable patterns to avoid detection by memory scanners
                  </p>
                </div>
                <div className="bg-black/60 border border-gray-800 rounded-lg p-4">
                  <h4 className="font-bold mb-2 text-pink-400">Hook Bypassing</h4>
                  <p className="text-gray-400 text-sm">
                    Advanced techniques to bypass API hooks placed by anti-cheat systems
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}

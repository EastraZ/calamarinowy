"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Zap, Settings, Monitor, Cpu, HardDrive, Gauge, BarChart3, Shield, Target, Save, RotateCcw } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import MatrixRain from "@/components/matrix-rain"
import { useAuth } from "@/lib/auth"
import { useRouter } from "next/navigation"

export default function PerformancePage() {
  const { user, isAuthenticated, updateUserProfile } = useAuth()
  const router = useRouter()

  const [settings, setSettings] = useState({
    // Graphics Settings
    graphicsQuality: 75,
    renderDistance: 60,
    antiAliasing: true,
    shadows: true,
    textureQuality: 80,
    effectsQuality: 70,

    // Performance Settings
    fpsLimit: 240,
    priorityMode: "performance",
    vsync: false,
    fullscreen: true,

    // Game Enhancement Settings
    aimAssist: 85,
    recoilControl: 90,
    espDistance: 500,
    wallhackOpacity: 30,

    // Security Settings
    hwidSpoof: true,
    streamProof: true,
    antiScreenshot: false,

    // Advanced Settings
    memoryOptimization: true,
    cpuPriority: "high",
    networkOptimization: true,
    diskCache: true,
  })

  const [notification, setNotification] = useState({ show: false, message: "", type: "" })
  const [hasChanges, setHasChanges] = useState(false)

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/")
    }
  }, [isAuthenticated, router])

  if (!isAuthenticated) {
    return null
  }

  const showNotification = (message: string, type: "success" | "error") => {
    setNotification({ show: true, message, type })
    setTimeout(() => setNotification({ show: false, message: "", type: "" }), 3000)
  }

  const handleSettingChange = (key: string, value: any) => {
    setSettings((prev) => ({ ...prev, [key]: value }))
    setHasChanges(true)
  }

  const handleSaveSettings = async () => {
    // In a real implementation, this would save to the backend
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Update user profile with performance settings
    await updateUserProfile({ performanceSettings: settings })

    setHasChanges(false)
    showNotification("Performance settings saved successfully!", "success")
  }

  const handleResetSettings = () => {
    setSettings({
      graphicsQuality: 75,
      renderDistance: 60,
      antiAliasing: true,
      shadows: true,
      textureQuality: 80,
      effectsQuality: 70,
      fpsLimit: 240,
      priorityMode: "performance",
      vsync: false,
      fullscreen: true,
      aimAssist: 85,
      recoilControl: 90,
      espDistance: 500,
      wallhackOpacity: 30,
      hwidSpoof: true,
      streamProof: true,
      antiScreenshot: false,
      memoryOptimization: true,
      cpuPriority: "high",
      networkOptimization: true,
      diskCache: true,
    })
    setHasChanges(true)
    showNotification("Settings reset to defaults", "success")
  }

  const SliderSetting = ({
    label,
    value,
    onChange,
    min = 0,
    max = 100,
    step = 1,
    unit = "",
    description,
  }: {
    label: string
    value: number
    onChange: (value: number) => void
    min?: number
    max?: number
    step?: number
    unit?: string
    description?: string
  }) => (
    <div className="bg-black/30 rounded-lg p-4">
      <div className="flex items-center justify-between mb-2">
        <label className="text-white font-medium">{label}</label>
        <span className="text-red-400 font-bold">
          {value}
          {unit}
        </span>
      </div>
      {description && <p className="text-gray-400 text-sm mb-3">{description}</p>}
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
      />
      <div className="flex justify-between text-xs text-gray-500 mt-1">
        <span>
          {min}
          {unit}
        </span>
        <span>
          {max}
          {unit}
        </span>
      </div>
    </div>
  )

  const ToggleSetting = ({
    label,
    value,
    onChange,
    description,
  }: {
    label: string
    value: boolean
    onChange: (value: boolean) => void
    description?: string
  }) => (
    <div className="bg-black/30 rounded-lg p-4">
      <div className="flex items-center justify-between">
        <div>
          <label className="text-white font-medium">{label}</label>
          {description && <p className="text-gray-400 text-sm mt-1">{description}</p>}
        </div>
        <div
          className={`w-12 h-6 rounded-full relative cursor-pointer transition-colors ${
            value ? "bg-red-500" : "bg-gray-700"
          }`}
          onClick={() => onChange(!value)}
        >
          <div
            className={`absolute w-4 h-4 bg-white rounded-full top-1 transition-transform ${
              value ? "transform translate-x-6" : "translate-x-1"
            }`}
          ></div>
        </div>
      </div>
    </div>
  )

  const SelectSetting = ({
    label,
    value,
    onChange,
    options,
    description,
  }: {
    label: string
    value: string
    onChange: (value: string) => void
    options: { value: string; label: string }[]
    description?: string
  }) => (
    <div className="bg-black/30 rounded-lg p-4">
      <label className="block text-white font-medium mb-2">{label}</label>
      {description && <p className="text-gray-400 text-sm mb-3">{description}</p>}
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-black/50 border border-gray-700 rounded-lg py-2 px-3 text-white focus:outline-none focus:border-red-500"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black text-white pt-32 pb-20 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/10 to-black"></div>
          <div className="absolute inset-0 opacity-30">
            <MatrixRain />
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Page Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Performance Settings
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Optimize your gaming experience with advanced performance and enhancement settings
            </motion.p>
          </motion.div>

          {/* Notification */}
          {notification.show && (
            <motion.div
              className={`fixed top-24 right-4 z-50 p-4 rounded-lg shadow-lg ${
                notification.type === "success" ? "bg-green-500" : "bg-red-500"
              }`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
            >
              <p className="text-white">{notification.message}</p>
            </motion.div>
          )}

          {/* Action Buttons */}
          <div className="flex justify-center space-x-4 mb-8">
            <button
              onClick={handleSaveSettings}
              disabled={!hasChanges}
              className={`px-6 py-3 rounded-lg font-medium text-white flex items-center ${
                hasChanges
                  ? "bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600"
                  : "bg-gray-700 cursor-not-allowed"
              } transition-colors`}
            >
              <Save className="h-5 w-5 mr-2" />
              Save Settings
            </button>
            <button
              onClick={handleResetSettings}
              className="px-6 py-3 border border-gray-700 rounded-lg font-medium text-white hover:border-gray-500 transition-colors flex items-center"
            >
              <RotateCcw className="h-5 w-5 mr-2" />
              Reset to Defaults
            </button>
          </div>

          {/* Settings Sections */}
          <div className="space-y-8">
            {/* Graphics Settings */}
            <motion.div
              className="bg-black/50 backdrop-blur-sm border border-red-500/20 rounded-2xl p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-500 rounded-full flex items-center justify-center mr-4">
                  <Monitor className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">Graphics Settings</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <SliderSetting
                  label="Graphics Quality"
                  value={settings.graphicsQuality}
                  onChange={(value) => handleSettingChange("graphicsQuality", value)}
                  description="Overall graphics quality level"
                />
                <SliderSetting
                  label="Render Distance"
                  value={settings.renderDistance}
                  onChange={(value) => handleSettingChange("renderDistance", value)}
                  max={100}
                  unit="%"
                  description="How far objects are rendered"
                />
                <SliderSetting
                  label="Texture Quality"
                  value={settings.textureQuality}
                  onChange={(value) => handleSettingChange("textureQuality", value)}
                  description="Quality of surface textures"
                />
                <SliderSetting
                  label="Effects Quality"
                  value={settings.effectsQuality}
                  onChange={(value) => handleSettingChange("effectsQuality", value)}
                  description="Quality of visual effects and particles"
                />
                <ToggleSetting
                  label="Anti-Aliasing"
                  value={settings.antiAliasing}
                  onChange={(value) => handleSettingChange("antiAliasing", value)}
                  description="Smooth jagged edges"
                />
                <ToggleSetting
                  label="Shadows"
                  value={settings.shadows}
                  onChange={(value) => handleSettingChange("shadows", value)}
                  description="Enable dynamic shadows"
                />
              </div>
            </motion.div>

            {/* Performance Settings */}
            <motion.div
              className="bg-black/50 backdrop-blur-sm border border-red-500/20 rounded-2xl p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-500 rounded-full flex items-center justify-center mr-4">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">Performance Settings</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <SelectSetting
                  label="FPS Limit"
                  value={settings.fpsLimit.toString()}
                  onChange={(value) => handleSettingChange("fpsLimit", Number.parseInt(value))}
                  options={[
                    { value: "30", label: "30 FPS" },
                    { value: "60", label: "60 FPS" },
                    { value: "144", label: "144 FPS" },
                    { value: "240", label: "240 FPS" },
                    { value: "0", label: "Unlimited" },
                  ]}
                  description="Maximum frames per second"
                />
                <SelectSetting
                  label="Priority Mode"
                  value={settings.priorityMode}
                  onChange={(value) => handleSettingChange("priorityMode", value)}
                  options={[
                    { value: "performance", label: "Performance" },
                    { value: "balanced", label: "Balanced" },
                    { value: "quality", label: "Quality" },
                  ]}
                  description="Optimize for performance or quality"
                />
                <SelectSetting
                  label="CPU Priority"
                  value={settings.cpuPriority}
                  onChange={(value) => handleSettingChange("cpuPriority", value)}
                  options={[
                    { value: "low", label: "Low" },
                    { value: "normal", label: "Normal" },
                    { value: "high", label: "High" },
                    { value: "realtime", label: "Real-time" },
                  ]}
                  description="CPU priority for the game process"
                />
                <div className="space-y-4">
                  <ToggleSetting
                    label="V-Sync"
                    value={settings.vsync}
                    onChange={(value) => handleSettingChange("vsync", value)}
                    description="Synchronize with monitor refresh rate"
                  />
                  <ToggleSetting
                    label="Fullscreen"
                    value={settings.fullscreen}
                    onChange={(value) => handleSettingChange("fullscreen", value)}
                    description="Run in fullscreen mode"
                  />
                </div>
              </div>
            </motion.div>

            {/* Game Enhancement Settings */}
            <motion.div
              className="bg-black/50 backdrop-blur-sm border border-red-500/20 rounded-2xl p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-500 rounded-full flex items-center justify-center mr-4">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">Game Enhancement</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <SliderSetting
                  label="Aim Assist Strength"
                  value={settings.aimAssist}
                  onChange={(value) => handleSettingChange("aimAssist", value)}
                  description="Strength of aim assistance"
                />
                <SliderSetting
                  label="Recoil Control"
                  value={settings.recoilControl}
                  onChange={(value) => handleSettingChange("recoilControl", value)}
                  description="Automatic recoil compensation"
                />
                <SliderSetting
                  label="ESP Distance"
                  value={settings.espDistance}
                  onChange={(value) => handleSettingChange("espDistance", value)}
                  min={100}
                  max={1000}
                  step={50}
                  unit="m"
                  description="Maximum distance for ESP visibility"
                />
                <SliderSetting
                  label="Wallhack Opacity"
                  value={settings.wallhackOpacity}
                  onChange={(value) => handleSettingChange("wallhackOpacity", value)}
                  unit="%"
                  description="Transparency of wallhack visuals"
                />
              </div>
            </motion.div>

            {/* Security Settings */}
            <motion.div
              className="bg-black/50 backdrop-blur-sm border border-red-500/20 rounded-2xl p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-500 rounded-full flex items-center justify-center mr-4">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">Security & Protection</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ToggleSetting
                  label="HWID Spoofing"
                  value={settings.hwidSpoof}
                  onChange={(value) => handleSettingChange("hwidSpoof", value)}
                  description="Protect your hardware ID from detection"
                />
                <ToggleSetting
                  label="Stream Proof"
                  value={settings.streamProof}
                  onChange={(value) => handleSettingChange("streamProof", value)}
                  description="Hide overlays from streaming software"
                />
                <ToggleSetting
                  label="Anti-Screenshot"
                  value={settings.antiScreenshot}
                  onChange={(value) => handleSettingChange("antiScreenshot", value)}
                  description="Prevent screenshots of the overlay"
                />
              </div>
            </motion.div>

            {/* Advanced Settings */}
            <motion.div
              className="bg-black/50 backdrop-blur-sm border border-red-500/20 rounded-2xl p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-orange-500 rounded-full flex items-center justify-center mr-4">
                  <Settings className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">Advanced Optimization</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ToggleSetting
                  label="Memory Optimization"
                  value={settings.memoryOptimization}
                  onChange={(value) => handleSettingChange("memoryOptimization", value)}
                  description="Optimize memory usage for better performance"
                />
                <ToggleSetting
                  label="Network Optimization"
                  value={settings.networkOptimization}
                  onChange={(value) => handleSettingChange("networkOptimization", value)}
                  description="Optimize network settings for lower latency"
                />
                <ToggleSetting
                  label="Disk Cache"
                  value={settings.diskCache}
                  onChange={(value) => handleSettingChange("diskCache", value)}
                  description="Use disk cache for faster loading"
                />
              </div>
            </motion.div>
          </div>

          {/* Performance Stats */}
          <motion.div
            className="bg-black/50 backdrop-blur-sm border border-red-500/20 rounded-2xl p-8 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Current Performance</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <BarChart3 className="h-8 w-8 text-white" />
                </div>
                <p className="text-2xl font-bold text-white">240+</p>
                <p className="text-gray-400">Average FPS</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Gauge className="h-8 w-8 text-white" />
                </div>
                <p className="text-2xl font-bold text-white">12ms</p>
                <p className="text-gray-400">Latency</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <HardDrive className="h-8 w-8 text-white" />
                </div>
                <p className="text-2xl font-bold text-white">1.2GB</p>
                <p className="text-gray-400">Memory Usage</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Cpu className="h-8 w-8 text-white" />
                </div>
                <p className="text-2xl font-bold text-white">8%</p>
                <p className="text-gray-400">CPU Usage</p>
              </div>
            </div>
          </motion.div>

          {/* Back to Dashboard */}
          <div className="text-center mt-8">
            <button
              onClick={() => router.push("/dashboard")}
              className="px-6 py-3 border border-white/20 rounded-lg font-medium text-white hover:border-white/40 transition-colors"
            >
              Back to Dashboard
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

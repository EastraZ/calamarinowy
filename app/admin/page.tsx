"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import {
  Users,
  Key,
  Webhook,
  BarChart3,
  Settings,
  Zap,
  AlertTriangle,
  CheckCircle,
  Eye,
  EyeOff,
  Copy,
  Trash2,
  Edit,
  Send,
  Bot,
} from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import MatrixRain from "@/components/matrix-rain"
import AdminGuard from "@/components/admin-guard"
import { useAuth, type ApiKey, type WebhookConfig } from "@/lib/auth"

export default function AdminDashboard() {
  const {
    user,
    generateApiKey,
    revokeApiKey,
    getApiKeys,
    createWebhook,
    updateWebhook,
    deleteWebhook,
    getWebhooks,
    generateUserKey,
    sendWebhook,
  } = useAuth()

  const [activeTab, setActiveTab] = useState("overview")
  const [apiKeys, setApiKeys] = useState<ApiKey[]>([])
  const [webhooks, setWebhooks] = useState<WebhookConfig[]>([])
  const [showApiKey, setShowApiKey] = useState<string | null>(null)
  const [notification, setNotification] = useState({ show: false, message: "", type: "" })

  // Forms
  const [newApiKeyForm, setNewApiKeyForm] = useState({ name: "", permissions: [] as string[] })
  const [newWebhookForm, setNewWebhookForm] = useState({
    name: "",
    url: "",
    events: [] as string[],
    secret: "",
  })
  const [keyGenerationForm, setKeyGenerationForm] = useState({
    plan: "premium",
    duration: 30,
    quantity: 1,
  })

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    const [keys, hooks] = await Promise.all([getApiKeys(), getWebhooks()])
    setApiKeys(keys)
    setWebhooks(hooks)
  }

  const showNotification = (message: string, type: "success" | "error") => {
    setNotification({ show: true, message, type })
    setTimeout(() => setNotification({ show: false, message: "", type: "" }), 3000)
  }

  const handleCreateApiKey = async () => {
    if (!newApiKeyForm.name) {
      showNotification("Please enter a name for the API key", "error")
      return
    }

    const key = await generateApiKey(newApiKeyForm.name, newApiKeyForm.permissions)
    if (key) {
      setApiKeys([...apiKeys, key])
      setNewApiKeyForm({ name: "", permissions: [] })
      showNotification("API key created successfully!", "success")
    }
  }

  const handleRevokeApiKey = async (keyId: string) => {
    const success = await revokeApiKey(keyId)
    if (success) {
      setApiKeys(apiKeys.filter((key) => key.id !== keyId))
      showNotification("API key revoked successfully!", "success")
    }
  }

  const handleCreateWebhook = async () => {
    if (!newWebhookForm.name || !newWebhookForm.url) {
      showNotification("Please fill in all required fields", "error")
      return
    }

    const webhook = await createWebhook({
      name: newWebhookForm.name,
      url: newWebhookForm.url,
      events: newWebhookForm.events,
      isActive: true,
      secret: newWebhookForm.secret || undefined,
    })

    if (webhook) {
      setWebhooks([...webhooks, webhook])
      setNewWebhookForm({ name: "", url: "", events: [], secret: "" })
      showNotification("Webhook created successfully!", "success")
    }
  }

  const handleDeleteWebhook = async (webhookId: string) => {
    const success = await deleteWebhook(webhookId)
    if (success) {
      setWebhooks(webhooks.filter((webhook) => webhook.id !== webhookId))
      showNotification("Webhook deleted successfully!", "success")
    }
  }

  const handleGenerateKeys = async () => {
    const keys = []
    for (let i = 0; i < keyGenerationForm.quantity; i++) {
      const key = await generateUserKey("bulk", keyGenerationForm.plan, keyGenerationForm.duration)
      if (key) keys.push(key)
    }

    if (keys.length > 0) {
      showNotification(`Generated ${keys.length} keys successfully!`, "success")
      // In a real implementation, you'd save these keys to display or download
    }
  }

  const handleTestWebhook = async (webhookId: string) => {
    const webhook = webhooks.find((w) => w.id === webhookId)
    if (!webhook) return

    const testData = {
      event: "test_webhook",
      timestamp: new Date().toISOString(),
      data: {
        message: "This is a test webhook from Calamari Admin Dashboard",
        admin: user?.email,
      },
    }

    const success = await sendWebhook("test_webhook", testData)
    if (success) {
      showNotification("Test webhook sent successfully!", "success")
    } else {
      showNotification("Failed to send test webhook", "error")
    }
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    showNotification("Copied to clipboard!", "success")
  }

  const tabs = [
    { id: "overview", name: "Overview", icon: BarChart3 },
    { id: "api-keys", name: "API Keys", icon: Key },
    { id: "webhooks", name: "Webhooks", icon: Webhook },
    { id: "key-generation", name: "Key Generation", icon: Zap },
    { id: "users", name: "User Management", icon: Users },
    { id: "automation", name: "Automation", icon: Bot },
    { id: "settings", name: "Settings", icon: Settings },
  ]

  const availablePermissions = ["read", "write", "admin", "webhook", "user_management", "key_generation"]
  const availableEvents = [
    "user_register",
    "user_login",
    "user_logout",
    "purchase",
    "key_generated",
    "login_failed",
    "subscription_expired",
    "performance_alert",
  ]

  return (
    <AdminGuard>
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
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Admin Dashboard
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Complete control over Calamari platform - API management, webhooks, user keys, and automation
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

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center mb-8 bg-black/50 backdrop-blur-sm border border-red-500/20 rounded-2xl p-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-4 py-2 m-1 rounded-lg transition-colors ${
                  activeTab === tab.id ? "bg-red-500 text-white" : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <tab.icon className="h-4 w-4 mr-2" />
                {tab.name}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="space-y-8">
            {/* Overview Tab */}
            {activeTab === "overview" && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  <div className="bg-black/50 backdrop-blur-sm border border-red-500/20 rounded-2xl p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-400">Total Users</p>
                        <p className="text-3xl font-bold text-white">1,247</p>
                      </div>
                      <Users className="h-8 w-8 text-red-400" />
                    </div>
                  </div>
                  <div className="bg-black/50 backdrop-blur-sm border border-red-500/20 rounded-2xl p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-400">Active Keys</p>
                        <p className="text-3xl font-bold text-white">{apiKeys.length}</p>
                      </div>
                      <Key className="h-8 w-8 text-blue-400" />
                    </div>
                  </div>
                  <div className="bg-black/50 backdrop-blur-sm border border-red-500/20 rounded-2xl p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-400">Webhooks</p>
                        <p className="text-3xl font-bold text-white">{webhooks.length}</p>
                      </div>
                      <Webhook className="h-8 w-8 text-green-400" />
                    </div>
                  </div>
                  <div className="bg-black/50 backdrop-blur-sm border border-red-500/20 rounded-2xl p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-400">Revenue</p>
                        <p className="text-3xl font-bold text-white">$12,450</p>
                      </div>
                      <BarChart3 className="h-8 w-8 text-yellow-400" />
                    </div>
                  </div>
                </div>

                <div className="bg-black/50 backdrop-blur-sm border border-red-500/20 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">System Status</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="flex items-center">
                      <CheckCircle className="h-6 w-6 text-green-400 mr-3" />
                      <div>
                        <p className="text-white font-medium">API Server</p>
                        <p className="text-gray-400 text-sm">Online - 99.9% uptime</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-6 w-6 text-green-400 mr-3" />
                      <div>
                        <p className="text-white font-medium">Database</p>
                        <p className="text-gray-400 text-sm">Healthy - 2ms latency</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <AlertTriangle className="h-6 w-6 text-yellow-400 mr-3" />
                      <div>
                        <p className="text-white font-medium">CDN</p>
                        <p className="text-gray-400 text-sm">Degraded - Some regions slow</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* API Keys Tab */}
            {activeTab === "api-keys" && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Create API Key */}
                  <div className="bg-black/50 backdrop-blur-sm border border-red-500/20 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold text-white mb-6">Create API Key</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-gray-300 mb-2">Key Name</label>
                        <input
                          type="text"
                          value={newApiKeyForm.name}
                          onChange={(e) => setNewApiKeyForm({ ...newApiKeyForm, name: e.target.value })}
                          className="w-full bg-black/30 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-red-500"
                          placeholder="Enter key name"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-300 mb-2">Permissions</label>
                        <div className="grid grid-cols-2 gap-2">
                          {availablePermissions.map((permission) => (
                            <label key={permission} className="flex items-center">
                              <input
                                type="checkbox"
                                checked={newApiKeyForm.permissions.includes(permission)}
                                onChange={(e) => {
                                  if (e.target.checked) {
                                    setNewApiKeyForm({
                                      ...newApiKeyForm,
                                      permissions: [...newApiKeyForm.permissions, permission],
                                    })
                                  } else {
                                    setNewApiKeyForm({
                                      ...newApiKeyForm,
                                      permissions: newApiKeyForm.permissions.filter((p) => p !== permission),
                                    })
                                  }
                                }}
                                className="mr-2"
                              />
                              <span className="text-gray-300 text-sm">{permission}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                      <button
                        onClick={handleCreateApiKey}
                        className="w-full px-6 py-3 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg font-medium text-white hover:from-red-600 hover:to-orange-600 transition-colors"
                      >
                        Create API Key
                      </button>
                    </div>
                  </div>

                  {/* API Keys List */}
                  <div className="bg-black/50 backdrop-blur-sm border border-red-500/20 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold text-white mb-6">Existing API Keys</h3>
                    <div className="space-y-4">
                      {apiKeys.map((key) => (
                        <div key={key.id} className="bg-black/30 rounded-lg p-4">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="text-white font-medium">{key.name}</h4>
                            <div className="flex items-center space-x-2">
                              <button
                                onClick={() => setShowApiKey(showApiKey === key.id ? null : key.id)}
                                className="text-gray-400 hover:text-white"
                              >
                                {showApiKey === key.id ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                              </button>
                              <button
                                onClick={() => copyToClipboard(key.key)}
                                className="text-gray-400 hover:text-white"
                              >
                                <Copy className="h-4 w-4" />
                              </button>
                              <button
                                onClick={() => handleRevokeApiKey(key.id)}
                                className="text-red-400 hover:text-red-300"
                              >
                                <Trash2 className="h-4 w-4" />
                              </button>
                            </div>
                          </div>
                          <div className="text-gray-400 text-sm mb-2">
                            {showApiKey === key.id ? key.key : "••••••••••••••••••••••••••••••••"}
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {key.permissions.map((permission) => (
                              <span key={permission} className="px-2 py-1 bg-red-500/20 text-red-400 text-xs rounded">
                                {permission}
                              </span>
                            ))}
                          </div>
                          <div className="text-gray-500 text-xs mt-2">
                            Created: {new Date(key.createdAt).toLocaleDateString()}
                            {key.lastUsed && ` • Last used: ${new Date(key.lastUsed).toLocaleDateString()}`}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Webhooks Tab */}
            {activeTab === "webhooks" && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Create Webhook */}
                  <div className="bg-black/50 backdrop-blur-sm border border-red-500/20 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold text-white mb-6">Create Webhook</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-gray-300 mb-2">Webhook Name</label>
                        <input
                          type="text"
                          value={newWebhookForm.name}
                          onChange={(e) => setNewWebhookForm({ ...newWebhookForm, name: e.target.value })}
                          className="w-full bg-black/30 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-red-500"
                          placeholder="Discord Notifications"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-300 mb-2">Webhook URL</label>
                        <input
                          type="url"
                          value={newWebhookForm.url}
                          onChange={(e) => setNewWebhookForm({ ...newWebhookForm, url: e.target.value })}
                          className="w-full bg-black/30 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-red-500"
                          placeholder="https://discord.com/api/webhooks/..."
                        />
                      </div>
                      <div>
                        <label className="block text-gray-300 mb-2">Secret (Optional)</label>
                        <input
                          type="text"
                          value={newWebhookForm.secret}
                          onChange={(e) => setNewWebhookForm({ ...newWebhookForm, secret: e.target.value })}
                          className="w-full bg-black/30 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-red-500"
                          placeholder="Webhook secret for verification"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-300 mb-2">Events</label>
                        <div className="grid grid-cols-2 gap-2 max-h-40 overflow-y-auto">
                          {availableEvents.map((event) => (
                            <label key={event} className="flex items-center">
                              <input
                                type="checkbox"
                                checked={newWebhookForm.events.includes(event)}
                                onChange={(e) => {
                                  if (e.target.checked) {
                                    setNewWebhookForm({
                                      ...newWebhookForm,
                                      events: [...newWebhookForm.events, event],
                                    })
                                  } else {
                                    setNewWebhookForm({
                                      ...newWebhookForm,
                                      events: newWebhookForm.events.filter((e) => e !== event),
                                    })
                                  }
                                }}
                                className="mr-2"
                              />
                              <span className="text-gray-300 text-sm">{event}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                      <button
                        onClick={handleCreateWebhook}
                        className="w-full px-6 py-3 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg font-medium text-white hover:from-red-600 hover:to-orange-600 transition-colors"
                      >
                        Create Webhook
                      </button>
                    </div>
                  </div>

                  {/* Webhooks List */}
                  <div className="bg-black/50 backdrop-blur-sm border border-red-500/20 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold text-white mb-6">Active Webhooks</h3>
                    <div className="space-y-4">
                      {webhooks.map((webhook) => (
                        <div key={webhook.id} className="bg-black/30 rounded-lg p-4">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="text-white font-medium">{webhook.name}</h4>
                            <div className="flex items-center space-x-2">
                              <button
                                onClick={() => handleTestWebhook(webhook.id)}
                                className="text-blue-400 hover:text-blue-300"
                                title="Test webhook"
                              >
                                <Send className="h-4 w-4" />
                              </button>
                              <button className="text-gray-400 hover:text-white" title="Edit webhook">
                                <Edit className="h-4 w-4" />
                              </button>
                              {/* <button className="text-gray-400 hover:text-white" title="Add Image">
                                <ImageIcon className="h-4 w-4" />
                              </button> */}
                              <button
                                onClick={() => handleDeleteWebhook(webhook.id)}
                                className="text-red-400 hover:text-red-300"
                                title="Delete webhook"
                              >
                                <Trash2 className="h-4 w-4" />
                              </button>
                            </div>
                          </div>
                          <div className="text-gray-400 text-sm mb-2 break-all">{webhook.url}</div>
                          <div className="flex items-center justify-between">
                            <div className="flex flex-wrap gap-1">
                              {webhook.events.slice(0, 3).map((event) => (
                                <span key={event} className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded">
                                  {event}
                                </span>
                              ))}
                              {webhook.events.length > 3 && (
                                <span className="px-2 py-1 bg-gray-500/20 text-gray-400 text-xs rounded">
                                  +{webhook.events.length - 3} more
                                </span>
                              )}
                            </div>
                            <div className="flex items-center">
                              <div
                                className={`w-2 h-2 rounded-full mr-2 ${
                                  webhook.isActive ? "bg-green-400" : "bg-red-400"
                                }`}
                              ></div>
                              <span className="text-gray-400 text-xs">{webhook.isActive ? "Active" : "Inactive"}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Key Generation Tab */}
            {activeTab === "key-generation" && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <div className="bg-black/50 backdrop-blur-sm border border-red-500/20 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Generate User Keys</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div>
                      <label className="block text-gray-300 mb-2">Plan Type</label>
                      <select
                        value={keyGenerationForm.plan}
                        onChange={(e) => setKeyGenerationForm({ ...keyGenerationForm, plan: e.target.value })}
                        className="w-full bg-black/30 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-red-500"
                      >
                        <option value="basic">Basic - $9.99</option>
                        <option value="premium">Premium - $19.99</option>
                        <option value="ultimate">Ultimate - $39.99</option>
                        <option value="lifetime">Lifetime - $199.99</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-gray-300 mb-2">Duration (Days)</label>
                      <input
                        type="number"
                        value={keyGenerationForm.duration}
                        onChange={(e) =>
                          setKeyGenerationForm({ ...keyGenerationForm, duration: Number.parseInt(e.target.value) })
                        }
                        className="w-full bg-black/30 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-red-500"
                        min="1"
                        max="365"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 mb-2">Quantity</label>
                      <input
                        type="number"
                        value={keyGenerationForm.quantity}
                        onChange={(e) =>
                          setKeyGenerationForm({ ...keyGenerationForm, quantity: Number.parseInt(e.target.value) })
                        }
                        className="w-full bg-black/30 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-red-500"
                        min="1"
                        max="100"
                      />
                    </div>
                  </div>
                  <button
                    onClick={handleGenerateKeys}
                    className="w-full px-6 py-3 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg font-medium text-white hover:from-red-600 hover:to-orange-600 transition-colors"
                  >
                    Generate {keyGenerationForm.quantity} Key{keyGenerationForm.quantity > 1 ? "s" : ""}
                  </button>
                </div>
              </motion.div>
            )}

            {/* Automation Tab */}
            {activeTab === "automation" && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="bg-black/50 backdrop-blur-sm border border-red-500/20 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold text-white mb-6">Discord Integration</h3>
                    <div className="space-y-4">
                      <div className="bg-black/30 rounded-lg p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="text-white font-medium">Auto Role Assignment</h4>
                            <p className="text-gray-400 text-sm">Automatically assign roles based on subscription</p>
                          </div>
                          <div className="w-12 h-6 bg-green-500 rounded-full relative cursor-pointer">
                            <div className="absolute w-4 h-4 bg-white rounded-full top-1 right-1"></div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-black/30 rounded-lg p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="text-white font-medium">Purchase Notifications</h4>
                            <p className="text-gray-400 text-sm">Send notifications for new purchases</p>
                          </div>
                          <div className="w-12 h-6 bg-green-500 rounded-full relative cursor-pointer">
                            <div className="absolute w-4 h-4 bg-white rounded-full top-1 right-1"></div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-black/30 rounded-lg p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="text-white font-medium">Welcome Messages</h4>
                            <p className="text-gray-400 text-sm">Send welcome DMs to new users</p>
                          </div>
                          <div className="w-12 h-6 bg-gray-700 rounded-full relative cursor-pointer">
                            <div className="absolute w-4 h-4 bg-white rounded-full top-1 left-1"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-black/50 backdrop-blur-sm border border-red-500/20 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold text-white mb-6">AI Integration</h3>
                    <div className="space-y-4">
                      <div className="bg-black/30 rounded-lg p-4">
                        <h4 className="text-white font-medium mb-2">AI Support Bot</h4>
                        <p className="text-gray-400 text-sm mb-4">Automatically respond to common support questions</p>
                        <button className="px-4 py-2 bg-blue-500 rounded-lg text-white text-sm">Configure AI</button>
                      </div>
                      <div className="bg-black/30 rounded-lg p-4">
                        <h4 className="text-white font-medium mb-2">Performance Analysis</h4>
                        <p className="text-gray-400 text-sm mb-4">AI-powered performance optimization suggestions</p>
                        <button className="px-4 py-2 bg-purple-500 rounded-lg text-white text-sm">
                          Enable Analysis
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </AdminGuard>
  )
}

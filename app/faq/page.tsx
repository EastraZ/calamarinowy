"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
import {
  ShieldCheck,
  Lock,
  ShoppingCart,
  Users,
  RefreshCw,
  Send,
  RotateCcw,
  FileText,
  Layers,
  UploadCloud,
  AlertCircle,
  EyeOff,
  ListChecks,
  MousePointerClick,
  WifiOff,
  ClipboardSignature,
  ArrowLeft,
} from "lucide-react"
import { useState } from "react"

const generalFaqs = [
  {
    icon: ShieldCheck,
    question: "Is Calamari safe to use?",
    answer:
      "We prioritize safety and employ advanced techniques to minimize detection risks. However, using any cheat carries inherent risks. We recommend using features responsibly.",
  },
  {
    icon: Lock,
    question: "Will my data be secure?",
    answer:
      "Yes, we take data security very seriously. All personal information and payment details are encrypted and handled with utmost care according to industry best practices.",
  },
  {
    icon: ShoppingCart,
    question: "How can I purchase game clients?",
    answer:
      "You can purchase clients directly from our website. Select your desired product and subscription period, then proceed to checkout. We accept various payment methods.",
  },
  {
    icon: Users,
    question: "Do you provide customer support?",
    answer:
      "We offer 24/7 customer support through our Discord server and support ticket system. Our team is ready to assist you with any questions or issues.",
  },
  {
    icon: RefreshCw,
    question: "Is Calamari updated after game patches and updates?",
    answer:
      "Yes, we strive to update our cheats promptly after game updates to ensure compatibility and functionality. Update times may vary depending on the complexity of the game update.",
  },
  {
    icon: Send,
    question: "How quickly will I receive access to Calamari after payment?",
    answer:
      "Access is typically granted instantly after successful payment confirmation. You will receive instructions on how to download and use the loader via email and in your account dashboard.",
  },
  {
    icon: RotateCcw,
    question: "Can I get a refund?",
    answer:
      "Refund policies are outlined in our terms of service. Generally, due to the digital nature of our products, refunds are limited. Please review the policy or contact support for specific cases.",
  },
]

const instructionsFaqsRustExternal = [
  {
    icon: FileText,
    question: "System Requirements",
    answer:
      "Windows 10 or Windows 11 23H2 & under (24H2 is not supported). You also need to have various Windows Settings configured correctly, which will be provided in the instructions sent to you after purchase.",
  },
  {
    icon: UploadCloud,
    question: "How to Inject",
    answer:
      "Launch the loader application, log in with your credentials, select the Rust External cheat, and follow the on-screen instructions to inject it into the game process. Always run the loader as administrator.",
  },
]

const commonIssuesFaqs = [
  {
    icon: AlertCircle,
    question: "0x399",
    answer: (
      <>
        <div>This error occurs when the game injection process fails due to an invalid or empty process name. Ensure that you have the game is running before attempting to inject.</div>
        <div className="mt-2 font-semibold">Possible Causes & Solutions</div>
        <ul className="list-disc pl-6 mt-1 space-y-1">
          <li><b>Game Not Running</b> – Ensure the game is launched before injecting.</li>
          <li><b>Permissions Issue</b> – Try running the game as an administrator.</li>
          <li><b>Antivirus Interference</b> – Some security software may block the injection process. Temporarily disable it to test.</li>
        </ul>
      </>
    ),
  },
  {
    icon: AlertCircle,
    question: "0x400",
    answer: (
      <>
        <div>This error occurs when the specified process name does not have a valid process ID, meaning the game may not be running or was not detected.</div>
        <div className="mt-2 font-semibold">Possible Causes & Solutions</div>
        <ul className="list-disc pl-6 mt-1 space-y-1">
          <li><b>Game Not Running</b> – Ensure the game is launched before injecting.</li>
          <li><b>Game Crashed or Closed</b> – If the game closed unexpectedly, restart it and try again.</li>
          <li><b>Delayed Process Detection</b> – Wait a few seconds after launching the game, then attempt injection again.</li>
          <li><b>Restart & Retry</b> – Close the game completely, restart it, and attempt injection again.</li>
        </ul>
      </>
    ),
  },
  {
    icon: AlertCircle,
    question: "0x402",
    answer: (
      <>
        <div>This error occurs when the mapped payload handle is missing, indicating that the driver was not successfully mapped in the loader before attempting injection.</div>
        <div className="mt-2 font-semibold">Possible Causes & Solutions</div>
        <ul className="list-disc pl-6 mt-1 space-y-1">
          <li><b>Driver Not Loaded</b> – Ensure that the driver was properly mapped before injecting. Restart the loader and try again.</li>
          <li><b>Insufficient Permissions</b> – Run the loader with administrator privileges.</li>
          <li><b>Antivirus or Security Software</b> – Some security programs may block the driver from being mapped. Temporarily disable them to test.</li>
          <li><b>Driver Crash or Unload</b> – If the driver was unloaded unexpectedly, restart the system and reload the driver before injecting.</li>
          <li><b>Corrupt or Missing Loader Files</b> – Reinstall the loader to ensure all necessary files are present.</li>
        </ul>
      </>
    ),
  },
  {
    icon: AlertCircle,
    question: "0x403",
    answer: (
      <>
        <div>This error occurs when the payload handle exists, but no communication is received from it, indicating a failure in establishing a connection between the cheat and the driver.</div>
        <div className="mt-2 font-semibold">Possible Causes & Solutions</div>
        <ul className="list-disc pl-6 mt-1 space-y-1">
          <li><b>Communication Blocked</b> – Security software or Windows Kernel protections may be interfering. Temporarily disable them to test.</li>
          <li><b>Reboot & Retry</b> – Restart the system to reload necessary modules and try again.</li>
          <li><b>Corrupt or Missing Files</b> – Reinstall the injector or verify game files.</li>
        </ul>
      </>
    ),
  },
  {
    icon: AlertCircle,
    question: "0x406",
    answer: (
      <>
        <div>This error occurs when there is an issue in the render setup, causing a common failure in the rendering process.</div>
        <div className="mt-2">This error occurs when the system fails to load a required module during the initialization process. This prevents certain features from functioning correctly, typically affecting windowing and user interface operations.</div>
        <div className="mt-2 font-semibold">Possible Causes & Solutions</div>
        <ul className="list-disc pl-6 mt-1 space-y-1">
          <li><b>Corrupt System Files</b> – Verify and repair the integrity of your system files through tools like <span className="font-mono">sfc /scannow</span> to ensure no system files are missing or corrupt.</li>
          <li><b>Incorrect System Configuration</b> – Check that your system's environment variables and settings are correctly configured.</li>
          <li><b>Missing or Blocked System Dependencies</b> – Ensure all required system dependencies are available and not blocked by security software or other restrictions.</li>
          <li><b>Reboot & Retry</b> – Restart the system to reload necessary modules and try again.</li>
        </ul>
      </>
    ),
  },
  {
    icon: AlertCircle,
    question: "0x409",
    answer: (
      <>
        <div>This error occurs when DirectX fails, preventing the system from initializing DirectX for rendering. This typically indicates issues with graphics configuration or system compatibility.</div>
        <div className="mt-2 font-semibold">Possible Causes & Solutions</div>
        <ul className="list-disc pl-6 mt-1 space-y-1">
          <li><b>Outdated Graphics Drivers</b> – Ensure your graphics drivers are up to date. Visit your GPU manufacturer's website to download the latest drivers:<br/>
            <a href="https://www.nvidia.com/Download/index.aspx" className="text-red-400 underline" target="_blank">NVIDIA Drivers</a><br/>
            <a href="https://www.amd.com/en/support" className="text-red-400 underline" target="_blank">AMD Drivers</a><br/>
            <a href="https://www.intel.com/content/www/us/en/download-center/home.html" className="text-red-400 underline" target="_blank">Intel Drivers</a>
          </li>
          <li><b>DirectX Installation Issue</b> – Verify that DirectX is correctly installed and up to date. You can reinstall or update it from Microsoft's website:<br/>
            <a href="https://www.microsoft.com/en-us/download/details.aspx?id=35" className="text-red-400 underline" target="_blank">DirectX End-User Runtime Web Installer</a>
          </li>
          <li><b>Insufficient System Resources</b> – Check if the system has enough resources (memory, GPU power) available for Direct3D to initialize properly.</li>
          <li><b>Graphics Hardware Compatibility</b> – Ensure your hardware meets the minimum requirements for DirectX. Older or unsupported GPUs may cause issues.</li>
          <li><b>Reinject & Retry</b> – Try reinjecting the loader and retry the operation after updating drivers or DirectX.</li>
        </ul>
      </>
    ),
  },
]

export default function FaqPage() {
  const [selectedTab, setSelectedTab] = useState("tos")
  const tabDescriptions: Record<string, string> = {
    instructions: "Instructions & Common Issues",
    tos: "Terms of Service & Refund Policy",
    general: "Frequently Asked Questions"
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1f2c] via-[#0a0f1a] to-[#0a0f1a] text-white pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="relative text-center mb-12">
          <Link
            href="/"
            className="absolute left-0 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition-colors flex items-center text-sm"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <header>
            <h1 className="text-4xl md:text-5xl font-bold mb-3">Guide</h1>
            <p className="text-slate-400 text-lg">
              {tabDescriptions[selectedTab]}
            </p>
          </header>
        </div>

        <Tabs defaultValue="tos" value={selectedTab} onValueChange={setSelectedTab} className="w-full max-w-3xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 bg-[#17171C] p-1 h-auto mb-8 rounded-md">
            <TabsTrigger
              value="instructions"
              className="py-2.5 text-sm data-[state=active]:bg-red-600 data-[state=active]:text-white data-[state=inactive]:text-slate-400 rounded-sm"
            >
              Setup
            </TabsTrigger>
            <TabsTrigger
              value="tos"
              className="py-2.5 text-sm data-[state=active]:bg-red-600 data-[state=active]:text-white data-[state=inactive]:text-slate-400 rounded-sm"
            >
              TOS
            </TabsTrigger>
            <TabsTrigger
              value="general"
              className="py-2.5 text-sm data-[state=active]:bg-red-600 data-[state=active]:text-white data-[state=inactive]:text-slate-400 rounded-sm"
            >
              FAQ
            </TabsTrigger>
          </TabsList>
          <TabsContent value="general">
            <Accordion type="single" collapsible className="w-full space-y-3">
              {generalFaqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-[#141823]/60 backdrop-blur-sm border border-[#2A2A32]/40 rounded-lg px-2"
                >
                  <AccordionTrigger className="text-left hover:no-underline px-4 py-3 text-sm font-medium text-slate-200">
                    <faq.icon className="w-5 h-5 mr-3 text-red-500 flex-shrink-0" />
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4 pt-1 text-sm text-slate-400 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </TabsContent>
          <TabsContent value="instructions">
            <div className="space-y-8">
              <div>
                <p className="text-sm text-slate-400 mb-6 flex items-center">
                  <ClipboardSignature className="w-4 h-4 mr-2 text-red-500" />
                  Make sure you keep your license <span className="text-white font-medium mx-1">safe and secure</span>
                </p>
                <h2 className="text-xl font-semibold text-white mb-2">Basic Information</h2>
                <Accordion type="single" collapsible className="w-full space-y-3">
                  {instructionsFaqsRustExternal.map((faq, index) => (
                    <AccordionItem
                      key={`instr-${index}`}
                      value={`instr-item-${index}`}
                      className="bg-[#141823]/60 backdrop-blur-sm border border-[#2A2A32]/40 rounded-lg px-2"
                    >
                      <AccordionTrigger className="text-left hover:no-underline px-4 py-3 text-sm font-medium text-slate-200">
                        <faq.icon className="w-5 h-5 mr-3 text-red-500 flex-shrink-0" />
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="px-4 pb-4 pt-1 text-sm text-slate-400 leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <AlertCircle className="w-5 h-5 mr-2 text-yellow-400" />
                  Common issues
                </h2>
                <Accordion type="single" collapsible className="w-full space-y-3">
                  {commonIssuesFaqs.map((faq, index) => (
                    <AccordionItem
                      key={`issue-${index}`}
                      value={`issue-item-${index}`}
                      className="bg-[#141823]/60 backdrop-blur-sm border border-[#2A2A32]/40 rounded-lg px-2"
                    >
                      <AccordionTrigger className="text-left hover:no-underline px-4 py-3 text-sm font-medium text-slate-200">
                        <faq.icon className="w-5 h-5 mr-3 text-red-500 flex-shrink-0" />
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="px-4 pb-4 pt-1 text-sm text-slate-400 leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="tos">
            <div className="max-w-3xl mx-auto">
              <div className="bg-[#141823]/60 backdrop-blur-sm border border-[#2A2A32]/40 rounded-lg p-8">
                <h2 className="text-2xl font-bold text-white mb-4">Offer Agreement</h2>
                <p className="text-slate-400 text-sm mb-2">
                  By purchasing and using Calamari products, you agree to the following terms:
                </p>
                <ul className="list-disc pl-6 text-slate-400 text-sm space-y-2">
                  <li>All sales are final. Refunds are only provided in exceptional cases as outlined in our policy.</li>
                  <li>Using clients in any game carries inherent risks, including possible account bans. You accept full responsibility for any consequences.</li>
                  <li>Sharing, distributing, or reselling our software is strictly prohibited.</li>
                  <li>Attempting to reverse engineer, modify, or bypass our security is forbidden and will result in a permanent ban.</li>
                  <li>We reserve the right to update, change, or discontinue our products at any time without notice.</li>
                  <li>By using our products, you agree to comply with all applicable laws and regulations.</li>
                </ul>
                <p className="text-slate-500 text-xs mt-4">
                  Subject to change at any time without notice. Contact support if you have any questions.
                </p>
                {/* Refund Policy Section */}
                <h3 className="text-xl font-semibold text-white mt-8 mb-2">Refund Policy</h3>
                <p className="text-slate-400 text-sm mb-2">
                  Due to the nature of our products (license keys and digital goods), <span className="text-red-400 font-semibold">all sales are final and non-refundable</span>.
                </p>
                <ul className="list-disc pl-6 text-slate-400 text-sm space-y-2">
                  <li>Refunds are not provided if you change your mind or can no longer use the product for reasons outside our control.</li>
                  <li>Exceptions may be made in rare cases of mass downtime, technical issues on our end, or if you are unable to access the product due to a verified system error.</li>
                  <li>All refund requests are reviewed on a case-by-case basis and are at the sole discretion of Calamari staff.</li>
                </ul>
                <p className="text-slate-500 text-xs mt-4">
                  If you believe you qualify for a refund under these exceptions, please contact our support team with full details.
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

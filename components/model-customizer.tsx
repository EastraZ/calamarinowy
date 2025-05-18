"use client"

import React, { useCallback } from "react"
import Image from "next/image"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

export interface VisualsConfig {
  enabled: boolean
  distance: boolean
  distanceColor: string
  names: boolean
  namesColor: string
  healthBar: boolean
  weaponName: boolean
  weaponNameColor: string
  chamsEnabled: boolean
  chamsColor: string
  chamsZTest: boolean
}

interface ModelCustomizerProps {
  config?: VisualsConfig
  onChange?: (config: VisualsConfig) => void
}

// Simplified color presets with distinct colors
const colorPresets = {
  esp: [
    { name: "Red", value: "rgba(255, 0, 0, 1)" },
    { name: "Green", value: "rgba(0, 255, 0, 1)" },
    { name: "Blue", value: "rgba(0, 0, 255, 1)" },
    { name: "Cyan", value: "rgba(0, 255, 255, 1)" },
    { name: "Magenta", value: "rgba(255, 0, 255, 1)" },
    { name: "White", value: "rgba(255, 255, 255, 1)" },
  ],
  chams: [
    { name: "Red", value: "rgba(255, 0, 0, 0.7)" },
    { name: "Pink", value: "rgba(255, 105, 180, 0.7)" },
    { name: "Purple", value: "rgba(128, 0, 128, 0.7)" },
    { name: "Blue", value: "rgba(0, 0, 255, 0.7)" },
    { name: "Aqua", value: "rgba(0, 255, 255, 0.7)" },
    { name: "Green", value: "rgba(0, 255, 0, 0.7)" },
    { name: "Yellow", value: "rgba(255, 255, 0, 0.7)" },
    { name: "Orange", value: "rgba(255, 165, 0, 0.7)" },
  ],
}

export default React.memo(function ModelCustomizer({
  config = {
    enabled: true,
    distance: true,
    distanceColor: "rgba(255, 0, 0, 1)",
    names: true,
    namesColor: "rgba(0, 255, 0, 1)",
    healthBar: true,
    weaponName: true,
    weaponNameColor: "rgba(0, 0, 255, 1)",
    chamsEnabled: true,
    chamsColor: "rgba(255, 0, 255, 0.7)",
    chamsZTest: false,
  },
  onChange = () => {},
}: ModelCustomizerProps) {
  const updateConfig = useCallback(
    (updates: Partial<VisualsConfig>) => {
      onChange({ ...config, ...updates })
    },
    [config, onChange],
  )

  // Render color preset buttons
  const renderColorPresets = (color: string, onChange: (color: string) => void, type: "esp" | "chams" = "esp") => (
    <div className="flex flex-wrap gap-1 mt-1">
      {colorPresets[type].map((preset) => (
        <button
          key={preset.value}
          className={cn(
            "w-6 h-6 rounded-md border border-gray-700 hover:border-white",
            color === preset.value ? "ring-1 ring-white" : "",
          )}
          style={{ backgroundColor: preset.value }}
          onClick={() => onChange(preset.value)}
          title={preset.name}
        />
      ))}
    </div>
  )

  return (
    <Card className="bg-gray-900 border-gray-800 text-white h-[600px] relative z-20 shadow-xl">
      <CardHeader className="pb-2 bg-gray-800 relative z-20">
        <div className="flex items-center">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Calamari-diagonal-0MIPrqm68v07REXLgaOx76jFso80QO.png"
            alt="Calamari Logo"
            width={24}
            height={24}
            className="mr-2"
          />
          <CardTitle className="text-white">Visual Customization</CardTitle>
        </div>
        <CardDescription className="text-gray-300">
          Customize the appearance of the model with various ESP features
        </CardDescription>
      </CardHeader>
      <CardContent className="p-4 space-y-6 mt-4">
        <div className="flex items-center justify-between">
          <Label htmlFor="esp-enabled" className="text-base">
            Enable ESP
          </Label>
          <Switch
            id="esp-enabled"
            checked={config.enabled}
            onCheckedChange={(checked) => updateConfig({ enabled: checked })}
            className="data-[state=checked]:bg-green-600"
          />
        </div>

        <div className="space-y-4 mt-6">
          <div className="flex items-center justify-between">
            <Label htmlFor="health-bar" className="text-base">
              Health Bar
            </Label>
            <Switch
              id="health-bar"
              checked={config.healthBar}
              onCheckedChange={(checked) => updateConfig({ healthBar: checked })}
              className="data-[state=checked]:bg-green-600"
            />
          </div>

          <div className="flex items-center justify-between">
            <Label htmlFor="distance" className="text-base">
              Distance
            </Label>
            <Switch
              id="distance"
              checked={config.distance}
              onCheckedChange={(checked) => updateConfig({ distance: checked })}
              className="data-[state=checked]:bg-green-600"
            />
          </div>
          {config.distance && (
            <>
              <Label className="text-sm font-medium text-gray-300">Distance Color</Label>
              {renderColorPresets(config.distanceColor, (color) => updateConfig({ distanceColor: color }))}
            </>
          )}

          <div className="flex items-center justify-between">
            <Label htmlFor="names" className="text-base">
              Player Names
            </Label>
            <Switch
              id="names"
              checked={config.names}
              onCheckedChange={(checked) => updateConfig({ names: checked })}
              className="data-[state=checked]:bg-green-600"
            />
          </div>
          {config.names && (
            <>
              <Label className="text-sm font-medium text-gray-300">Names Color</Label>
              {renderColorPresets(config.namesColor, (color) => updateConfig({ namesColor: color }))}
            </>
          )}

          <div className="flex items-center justify-between">
            <Label htmlFor="weapon-name" className="text-base">
              Weapon Name
            </Label>
            <Switch
              id="weapon-name"
              checked={config.weaponName}
              onCheckedChange={(checked) => updateConfig({ weaponName: checked })}
              className="data-[state=checked]:bg-green-600"
            />
          </div>
          {config.weaponName && (
            <>
              <Label className="text-sm font-medium text-gray-300">Weapon Name Color</Label>
              {renderColorPresets(config.weaponNameColor, (color) => updateConfig({ weaponNameColor: color }))}
            </>
          )}

          <div className="flex items-center justify-between">
            <Label htmlFor="chams-enabled" className="text-base">
              Enable Chams
            </Label>
            <Switch
              id="chams-enabled"
              checked={config.chamsEnabled}
              onCheckedChange={(checked) => updateConfig({ chamsEnabled: checked })}
              className="data-[state=checked]:bg-green-600"
            />
          </div>
          {config.chamsEnabled && (
            <>
              <Label className="text-sm font-medium text-gray-300">Chams Color</Label>
              {renderColorPresets(config.chamsColor, (color) => updateConfig({ chamsColor: color }), "chams")}

              <div className="flex items-center justify-between mt-4">
                <Label htmlFor="chams-ztest" className="text-base">
                  See Through Walls
                </Label>
                <Switch
                  id="chams-ztest"
                  checked={config.chamsZTest}
                  onCheckedChange={(checked) => updateConfig({ chamsZTest: checked })}
                  className="data-[state=checked]:bg-green-600"
                />
              </div>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  )
})

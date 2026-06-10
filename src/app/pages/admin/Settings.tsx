import { AdminLayout } from "../../components/AdminLayout";
import { useState } from "react";
import { toast } from "sonner";
import {
  Settings as SettingsIcon,
  Bell,
  Shield,
  Globe,
  Mail,
  Save,
  ToggleLeft,
  ToggleRight,
  Key,
  Database,
} from "lucide-react";

interface ToggleProps {
  enabled: boolean;
  onChange: () => void;
}

function Toggle({ enabled, onChange }: ToggleProps) {
  return (
    <button
      onClick={onChange}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-all ${enabled ? "bg-primary" : "bg-glass-border"}`}
    >
      <span className={`inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform ${enabled ? "translate-x-6" : "translate-x-1"}`} />
    </button>
  );
}

export default function Settings() {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    autoVerify: false,
    requireProofDoc: true,
    maintenanceMode: false,
    allowRegistration: true,
    twoFactorRequired: false,
    auditLogRetention: "90",
    maxImportSize: "50",
    reviewDeadline: "3",
  });

  const toggle = (key: keyof typeof settings) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSave = () => {
    toast.success("Settings saved successfully!");
  };

  return (
    <AdminLayout>
      <div className="space-y-8 max-w-4xl">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">System Settings</h1>
            <p className="text-muted-foreground">Configure the UniSense Program Management System.</p>
          </div>
          <button
            onClick={handleSave}
            className="flex items-center gap-2 px-5 py-2.5 gradient-primary text-white rounded-xl font-semibold shadow-premium hover:shadow-premium-lg transition-all"
          >
            <Save className="w-4 h-4" />
            Save Settings
          </button>
        </div>

        {/* Notifications */}
        <div className="glass-card rounded-2xl p-6 shadow-premium">
          <div className="flex items-center gap-3 mb-5">
            <div className="bg-primary/10 p-2.5 rounded-xl"><Bell className="w-5 h-5 text-primary" /></div>
            <h2 className="text-xl font-semibold">Notifications</h2>
          </div>
          <div className="space-y-4">
            {[
              { key: "emailNotifications" as const, label: "Email Notifications", desc: "Send email alerts for new applications, approvals, and rejections" },
            ].map(({ key, label, desc }) => (
              <div key={key} className="flex items-center justify-between py-3 border-b border-glass-border last:border-0">
                <div>
                  <p className="font-medium text-foreground">{label}</p>
                  <p className="text-sm text-muted-foreground">{desc}</p>
                </div>
                <Toggle enabled={settings[key] as boolean} onChange={() => toggle(key)} />
              </div>
            ))}
          </div>
        </div>

        {/* Security */}
        <div className="glass-card rounded-2xl p-6 shadow-premium">
          <div className="flex items-center gap-3 mb-5">
            <div className="bg-accent-violet/10 p-2.5 rounded-xl"><Shield className="w-5 h-5 text-accent-violet" /></div>
            <h2 className="text-xl font-semibold">Security</h2>
          </div>
          <div className="space-y-4">
            {[
              { key: "requireProofDoc" as const, label: "Require Proof Document", desc: "Require authorization proof documents for all representative applications" },
              { key: "twoFactorRequired" as const, label: "Two-Factor Authentication", desc: "Require 2FA for all admin accounts" },
            ].map(({ key, label, desc }) => (
              <div key={key} className="flex items-center justify-between py-3 border-b border-glass-border last:border-0">
                <div>
                  <p className="font-medium text-foreground">{label}</p>
                  <p className="text-sm text-muted-foreground">{desc}</p>
                </div>
                <Toggle enabled={settings[key] as boolean} onChange={() => toggle(key)} />
              </div>
            ))}
          </div>
        </div>

        {/* Verification */}
        <div className="glass-card rounded-2xl p-6 shadow-premium">
          <div className="flex items-center gap-3 mb-5">
            <div className="bg-success/10 p-2.5 rounded-xl"><Globe className="w-5 h-5 text-success" /></div>
            <h2 className="text-xl font-semibold">Verification & Import</h2>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b border-glass-border">
              <div>
                <p className="font-medium text-foreground">Auto-Verify Sources</p>
                <p className="text-sm text-muted-foreground">Automatically validate source URLs during submission</p>
              </div>
              <Toggle enabled={settings.autoVerify} onChange={() => toggle("autoVerify")} />
            </div>
            <div className="flex items-center justify-between py-3 border-b border-glass-border">
              <div>
                <p className="font-medium text-foreground">Max Import File Size</p>
                <p className="text-sm text-muted-foreground">Maximum size for CSV/JSON import files</p>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  value={settings.maxImportSize}
                  onChange={(e) => setSettings(prev => ({ ...prev, maxImportSize: e.target.value }))}
                  className="w-20 px-3 py-2 glass-card border border-input-border rounded-xl text-center text-sm focus:outline-none focus:border-primary/50"
                />
                <span className="text-sm text-muted-foreground">MB</span>
              </div>
            </div>
            <div className="flex items-center justify-between py-3">
              <div>
                <p className="font-medium text-foreground">Review Deadline</p>
                <p className="text-sm text-muted-foreground">Target days to review submissions</p>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  value={settings.reviewDeadline}
                  onChange={(e) => setSettings(prev => ({ ...prev, reviewDeadline: e.target.value }))}
                  className="w-20 px-3 py-2 glass-card border border-input-border rounded-xl text-center text-sm focus:outline-none focus:border-primary/50"
                />
                <span className="text-sm text-muted-foreground">days</span>
              </div>
            </div>
          </div>
        </div>

        {/* System */}
        <div className="glass-card rounded-2xl p-6 shadow-premium">
          <div className="flex items-center gap-3 mb-5">
            <div className="bg-warning/10 p-2.5 rounded-xl"><Database className="w-5 h-5 text-warning" /></div>
            <h2 className="text-xl font-semibold">System</h2>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b border-glass-border">
              <div>
                <p className="font-medium text-foreground">Allow New Registrations</p>
                <p className="text-sm text-muted-foreground">Allow new users to register for the platform</p>
              </div>
              <Toggle enabled={settings.allowRegistration} onChange={() => toggle("allowRegistration")} />
            </div>
            <div className="flex items-center justify-between py-3 border-b border-glass-border">
              <div>
                <p className="font-medium text-foreground">Maintenance Mode</p>
                <p className="text-sm text-muted-foreground">Temporarily disable access for all non-admin users</p>
              </div>
              <Toggle enabled={settings.maintenanceMode} onChange={() => toggle("maintenanceMode")} />
            </div>
            <div className="flex items-center justify-between py-3">
              <div>
                <p className="font-medium text-foreground">Audit Log Retention</p>
                <p className="text-sm text-muted-foreground">How long to keep audit log records</p>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  value={settings.auditLogRetention}
                  onChange={(e) => setSettings(prev => ({ ...prev, auditLogRetention: e.target.value }))}
                  className="w-20 px-3 py-2 glass-card border border-input-border rounded-xl text-center text-sm focus:outline-none focus:border-primary/50"
                />
                <span className="text-sm text-muted-foreground">days</span>
              </div>
            </div>
          </div>
        </div>

        {/* Danger zone */}
        <div className="glass-card rounded-2xl p-6 shadow-premium" style={{ border: "1px solid rgba(239,68,68,0.2)" }}>
          <div className="flex items-center gap-3 mb-5">
            <div className="bg-destructive/10 p-2.5 rounded-xl"><Key className="w-5 h-5 text-destructive" /></div>
            <h2 className="text-xl font-semibold text-destructive">Danger Zone</h2>
          </div>
          <div className="space-y-3">
            {[
              { label: "Clear All Audit Logs", desc: "Permanently delete all audit log records", action: "Clear Logs" },
              { label: "Reset Import Queue", desc: "Clear all pending import submissions", action: "Reset Queue" },
            ].map(({ label, desc, action }) => (
              <div key={label} className="flex items-center justify-between py-3 border-b border-glass-border last:border-0">
                <div>
                  <p className="font-medium text-foreground">{label}</p>
                  <p className="text-sm text-muted-foreground">{desc}</p>
                </div>
                <button
                  onClick={() => toast.error("Action cancelled — this would be destructive in production.")}
                  className="px-4 py-2 border border-destructive/30 text-destructive rounded-xl text-sm font-semibold hover:bg-destructive/5 transition-all"
                >
                  {action}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

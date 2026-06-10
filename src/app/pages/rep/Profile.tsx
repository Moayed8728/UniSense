import { RepLayout } from "../../components/RepLayout";
import { StatusBadge } from "../../components/StatusBadge";
import { useState } from "react";
import { toast } from "sonner";
import { User, Mail, Phone, Building2, ShieldCheck, Edit, Save, Lock, Bell, Key } from "lucide-react";
import { useNavigate } from "react-router";

export default function Profile() {
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState("Ahmad Razak bin Abdullah");
  const [position, setPosition] = useState("Director of Academic Affairs");
  const [department, setDepartment] = useState("Academic Affairs Office");
  const [phone, setPhone] = useState("+607-553 1234");
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const navigate = useNavigate();

  const handleSave = () => {
    setEditing(false);
    toast.success("Profile updated successfully!");
  };

  return (
    <RepLayout>
      <div className="space-y-8 max-w-4xl">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">My Profile</h1>
            <p className="text-muted-foreground">Manage your representative account details and preferences.</p>
          </div>
          {!editing ? (
            <button
              onClick={() => setEditing(true)}
              className="flex items-center gap-2 px-5 py-2.5 glass-card border border-glass-border rounded-xl font-semibold hover:bg-primary/5 hover:border-primary/30 transition-all text-sm"
            >
              <Edit className="w-4 h-4" />
              Edit Profile
            </button>
          ) : (
            <button
              onClick={handleSave}
              className="flex items-center gap-2 px-5 py-2.5 gradient-primary text-white rounded-xl font-semibold shadow-premium hover:shadow-premium-lg transition-all text-sm"
            >
              <Save className="w-4 h-4" />
              Save Changes
            </button>
          )}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left: Profile card */}
          <div className="space-y-5">
            <div className="glass-card rounded-2xl p-6 shadow-premium text-center border-glow">
              <div className="relative mx-auto mb-4 w-fit">
                <div className="absolute inset-0 bg-primary blur-xl opacity-40" />
                <div className="relative w-20 h-20 rounded-2xl gradient-primary flex items-center justify-center text-white text-3xl font-bold shadow-premium-lg">
                  AR
                </div>
              </div>
              <h3 className="font-bold text-xl mb-1">{name}</h3>
              <p className="text-sm text-muted-foreground mb-3">{position}</p>
              <div className="flex justify-center">
                <StatusBadge status="verified" />
              </div>
            </div>

            <div className="glass-card rounded-2xl p-5 shadow-premium">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary/10 p-2.5 rounded-xl">
                  <Building2 className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Assigned University</p>
                  <p className="text-sm font-semibold">Universiti Teknologi Malaysia</p>
                </div>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 rounded-xl" style={{ background: "rgba(16,185,129,0.06)", border: "1px solid rgba(16,185,129,0.15)" }}>
                <ShieldCheck className="w-4 h-4 text-success" />
                <span className="text-xs text-success font-medium">Verified Representative</span>
              </div>
              <p className="text-xs text-muted-foreground mt-3">
                You are authorized to manage only this university. Access is restricted.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-5 shadow-premium">
              <h4 className="font-semibold mb-3 text-sm">Account Activity</h4>
              <div className="space-y-3">
                {[
                  { label: "Member Since", value: "Jan 15, 2026" },
                  { label: "Last Login", value: "May 31, 2026" },
                  { label: "Programs Managed", value: "147" },
                  { label: "Submissions", value: "23" },
                ].map(({ label, value }) => (
                  <div key={label} className="flex items-center justify-between text-sm border-b border-glass-border pb-2 last:border-0 last:pb-0">
                    <span className="text-muted-foreground">{label}</span>
                    <span className="font-semibold text-foreground">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Edit form */}
          <div className="lg:col-span-2 space-y-5">
            <div className="glass-card rounded-2xl p-6 shadow-premium">
              <h2 className="text-xl font-semibold mb-5 flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-xl"><User className="w-5 h-5 text-primary" /></div>
                Personal Information
              </h2>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Full Name</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      disabled={!editing}
                      className="w-full px-4 py-3 glass-card border border-input-border rounded-xl focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 text-foreground disabled:opacity-60 disabled:cursor-not-allowed transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Email Address</label>
                    <input
                      type="email"
                      value="rep@unisense.com"
                      disabled
                      className="w-full px-4 py-3 glass-card border border-input-border rounded-xl text-foreground opacity-50 cursor-not-allowed"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Position / Job Title</label>
                    <input
                      type="text"
                      value={position}
                      onChange={(e) => setPosition(e.target.value)}
                      disabled={!editing}
                      className="w-full px-4 py-3 glass-card border border-input-border rounded-xl focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 text-foreground disabled:opacity-60 disabled:cursor-not-allowed transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Department / Office</label>
                    <input
                      type="text"
                      value={department}
                      onChange={(e) => setDepartment(e.target.value)}
                      disabled={!editing}
                      className="w-full px-4 py-3 glass-card border border-input-border rounded-xl focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 text-foreground disabled:opacity-60 disabled:cursor-not-allowed transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Contact Number</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    disabled={!editing}
                    className="w-full px-4 py-3 glass-card border border-input-border rounded-xl focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 text-foreground disabled:opacity-60 disabled:cursor-not-allowed transition-all"
                  />
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6 shadow-premium">
              <h2 className="text-xl font-semibold mb-5 flex items-center gap-3">
                <div className="bg-accent-blue/10 p-2 rounded-xl"><Lock className="w-5 h-5 text-accent-blue" /></div>
                Security
              </h2>
              <div className="space-y-3">
                <button onClick={() => navigate("/auth/reset-password")} className="w-full flex items-center justify-between px-4 py-3.5 glass-card border border-glass-border rounded-xl hover:bg-primary/5 hover:border-primary/30 transition-all group">
                  <div className="flex items-center gap-3">
                    <Key className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm font-medium">Change Password</span>
                  </div>
                  <span className="text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity">Update →</span>
                </button>
                <button
                  onClick={() => {
                    setNotificationsEnabled((enabled) => !enabled);
                    toast.success(`Email notifications ${notificationsEnabled ? "disabled" : "enabled"}.`);
                  }}
                  className="w-full flex items-center justify-between px-4 py-3.5 glass-card border border-glass-border rounded-xl hover:bg-primary/5 hover:border-primary/30 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Bell className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm font-medium">Email Notifications</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`text-xs font-medium ${notificationsEnabled ? "text-success" : "text-muted-foreground"}`}>{notificationsEnabled ? "Enabled" : "Disabled"}</span>
                    <div className={`w-8 h-4 rounded-full border flex items-center px-0.5 ${notificationsEnabled ? "bg-success/20 border-success/30 justify-end" : "bg-muted border-glass-border justify-start"}`}>
                      <div className={`w-3 h-3 rounded-full ${notificationsEnabled ? "bg-success" : "bg-muted-foreground"}`} />
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </RepLayout>
  );
}

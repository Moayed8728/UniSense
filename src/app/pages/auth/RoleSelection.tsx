import { Link, useNavigate } from "react-router";
import { GraduationCap, Shield, Check, ArrowRight } from "lucide-react";
import { UniSenseBrandLink } from "../../components/UniSenseLogo";

export default function RoleSelection() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center px-6">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-blue/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative w-full max-w-4xl">
        {/* Logo */}
          <UniSenseBrandLink className="w-72 h-24 mx-auto mb-12" />

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Choose your account type</h2>
          <p className="text-lg text-muted-foreground">Select how you'd like to use UniSense</p>
        </div>

        {/* Role Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Student Card */}
          <div className="group relative glass-card rounded-3xl p-10 shadow-premium-xl glass-card-hover border-glow overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative">
              <div className="relative mb-6 w-fit">
                <div className="absolute inset-0 bg-accent-blue blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                <div className="relative bg-accent-blue/10 p-5 rounded-2xl group-hover:bg-accent-blue/20 transition-all duration-300">
                  <GraduationCap className="w-12 h-12 text-accent-blue" />
                </div>
              </div>

              <h3 className="text-3xl font-bold mb-4">Student</h3>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <div className="bg-accent-blue/10 p-1 rounded-full mt-0.5">
                    <Check className="w-4 h-4 text-accent-blue" />
                  </div>
                  <p className="text-muted-foreground">Search and discover university programs</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-accent-blue/10 p-1 rounded-full mt-0.5">
                    <Check className="w-4 h-4 text-accent-blue" />
                  </div>
                  <p className="text-muted-foreground">Get AI-powered recommendations</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-accent-blue/10 p-1 rounded-full mt-0.5">
                    <Check className="w-4 h-4 text-accent-blue" />
                  </div>
                  <p className="text-muted-foreground">Save and compare programs</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-success/10 p-1 rounded-full mt-0.5">
                    <Check className="w-4 h-4 text-success" />
                  </div>
                  <p className="text-muted-foreground font-semibold text-success">Access immediately</p>
                </div>
              </div>

              <button
                onClick={() => navigate("/student")}
                className="w-full bg-accent-blue text-white py-4 rounded-xl font-semibold shadow-premium hover:shadow-premium-lg hover:scale-105 transition-all flex items-center justify-center gap-2"
              >
                Continue as Student
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* University Representative Card */}
          <div className="group relative glass-card rounded-3xl p-10 shadow-premium-xl glass-card-hover border-glow overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative">
              <div className="relative mb-6 w-fit">
                <div className="absolute inset-0 bg-primary blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                <div className="relative bg-primary/10 p-5 rounded-2xl group-hover:bg-primary/20 transition-all duration-300">
                  <Shield className="w-12 h-12 text-primary" />
                </div>
              </div>

              <h3 className="text-3xl font-bold mb-4">University Representative</h3>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 p-1 rounded-full mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-muted-foreground">Apply to manage university information</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 p-1 rounded-full mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-muted-foreground">Submit official university details</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-warning/10 p-1 rounded-full mt-0.5">
                    <Check className="w-4 h-4 text-warning" />
                  </div>
                  <p className="text-muted-foreground font-semibold text-warning">Requires admin approval</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 p-1 rounded-full mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-muted-foreground">Access only after verification</p>
                </div>
              </div>

              <button
                onClick={() => navigate("/auth/apply-representative")}
                className="w-full gradient-primary text-white py-4 rounded-xl font-semibold shadow-premium hover:shadow-premium-lg hover:scale-105 transition-all flex items-center justify-center gap-2"
              >
                Apply as Representative
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Back Link */}
        <Link
          to="/"
          className="block text-center mt-8 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          ← Back to home
        </Link>
      </div>
    </div>
  );
}

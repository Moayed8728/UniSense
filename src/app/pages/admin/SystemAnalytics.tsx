import { AdminLayout } from "../../components/AdminLayout";
import { StatsCard } from "../../components/StatsCard";
import { 
  Users,
  FileText,
  Building2,
  Clock,
  CheckCircle,
  XCircle,
  Download,
  TrendingUp
} from "lucide-react";
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

export default function SystemAnalytics() {
  const submissionTrend = [
    { month: "Jan", submissions: 45 },
    { month: "Feb", submissions: 52 },
    { month: "Mar", submissions: 61 },
    { month: "Apr", submissions: 58 },
    { month: "May", submissions: 73 },
  ];

  const statusDistribution = [
    { name: "Approved", value: 156, color: "#10b981" },
    { name: "Pending", value: 23, color: "#f59e0b" },
    { name: "Rejected", value: 12, color: "#ef4444" },
  ];

  const topUniversities = [
    { name: "Harvard", programs: 45 },
    { name: "MIT", programs: 42 },
    { name: "Stanford", programs: 38 },
    { name: "UC Berkeley", programs: 35 },
    { name: "Oxford", programs: 28 },
  ];

  const sourceVerification = [
    { status: "Verified", count: 234, color: "#10b981" },
    { status: "Pending", count: 45, color: "#f59e0b" },
    { status: "Invalid", count: 18, color: "#ef4444" },
  ];

  const recentActions = [
    { admin: "Admin User", action: "Approved submission", target: "SUB-002", time: "2 hours ago" },
    { admin: "Admin User", action: "Verified source", target: "SRC-003", time: "3 hours ago" },
    { admin: "Admin User", action: "Rejected submission", target: "SUB-008", time: "5 hours ago" },
    { admin: "Sarah Admin", action: "Activated university", target: "UNI-012", time: "1 day ago" },
  ];

  return (
    <AdminLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">System Analytics</h1>
            <p className="text-gray-600">Comprehensive overview of platform metrics and performance</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2.5 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition-colors font-medium">
            <Download className="w-5 h-5" />
            Export Report
          </button>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <StatsCard
            title="Total Users"
            value={1247}
            icon={Users}
            trend="+12% this month"
            trendUp={true}
            color="purple"
          />
          <StatsCard
            title="Total Programs"
            value={856}
            icon={FileText}
            trend="+73 this month"
            trendUp={true}
            color="blue"
          />
          <StatsCard
            title="Active Universities"
            value={124}
            icon={Building2}
            trend="+8 this month"
            trendUp={true}
            color="indigo"
          />
          <StatsCard
            title="Pending Submissions"
            value={23}
            icon={Clock}
            trend="-5 vs last week"
            trendUp={true}
            color="amber"
          />
        </div>

        {/* Additional Stats */}
        <div className="grid grid-cols-2 gap-6">
          <StatsCard
            title="Approved Submissions"
            value={156}
            icon={CheckCircle}
            trend="This month"
            color="green"
          />
          <StatsCard
            title="Rejected Submissions"
            value={12}
            icon={XCircle}
            trend="This month"
            color="red"
          />
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Monthly Submission Trend */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Monthly Submission Trend</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={submissionTrend}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#fff', 
                    border: '1px solid #e5e7eb',
                    borderRadius: '0.5rem'
                  }} 
                />
                <Line 
                  type="monotone" 
                  dataKey="submissions" 
                  stroke="#8b5cf6" 
                  strokeWidth={3}
                  dot={{ fill: '#8b5cf6', r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Submission Status Distribution */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Submission Status Distribution</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={statusDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {statusDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Top Universities by Program Count */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Top Universities by Program Count</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={topUniversities}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="name" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#fff', 
                    border: '1px solid #e5e7eb',
                    borderRadius: '0.5rem'
                  }} 
                />
                <Bar dataKey="programs" fill="#8b5cf6" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Source Verification Status */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Source Verification Status</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={sourceVerification} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis type="number" stroke="#9ca3af" />
                <YAxis dataKey="status" type="category" stroke="#9ca3af" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#fff', 
                    border: '1px solid #e5e7eb',
                    borderRadius: '0.5rem'
                  }} 
                />
                <Bar dataKey="count" radius={[0, 8, 8, 0]}>
                  {sourceVerification.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Admin Actions */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Recent Admin Actions</h2>
          <div className="space-y-3">
            {recentActions.map((action, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <TrendingUp className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{action.admin}</p>
                    <p className="text-sm text-gray-600">{action.action} • {action.target}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-500">{action.time}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Average Review Time</h3>
                <p className="text-sm text-gray-600">Time from submission to decision</p>
              </div>
              <div className="bg-emerald-50 p-3 rounded-xl">
                <Clock className="w-6 h-6 text-emerald-600" />
              </div>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-gray-900">2.3</span>
              <span className="text-gray-600">days</span>
              <span className="text-sm text-emerald-600 ml-2">-15% faster</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Approval Rate</h3>
                <p className="text-sm text-gray-600">Percentage of approved submissions</p>
              </div>
              <div className="bg-blue-50 p-3 rounded-xl">
                <CheckCircle className="w-6 h-6 text-blue-600" />
              </div>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-gray-900">92.8%</span>
              <span className="text-sm text-emerald-600 ml-2">+3.2%</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Source Accuracy</h3>
                <p className="text-sm text-gray-600">Valid sources submitted</p>
              </div>
              <div className="bg-purple-50 p-3 rounded-xl">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-gray-900">88.4%</span>
              <span className="text-sm text-emerald-600 ml-2">+5.1%</span>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

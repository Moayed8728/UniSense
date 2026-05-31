import { AdminLayout } from "../../components/AdminLayout";
import { useState } from "react";
import { 
  Search,
  Filter,
  Download,
  Shield,
  CheckCircle,
  XCircle,
  Edit,
  Power,
  UserPlus
} from "lucide-react";

type ActionType = "approve" | "reject" | "verify" | "invalidate" | "suspend" | "activate" | "create" | "update";

export default function AuditLogs() {
  const [searchQuery, setSearchQuery] = useState("");
  const [actionFilter, setActionFilter] = useState<ActionType | "all">("all");

  const logs = [
    {
      id: "LOG-001",
      admin: "Admin User",
      targetType: "Submission",
      targetId: "SUB-002",
      targetName: "Bachelor of Business Administration",
      actionType: "approve" as ActionType,
      reason: "All requirements met, sources verified",
      timestamp: "2026-05-31 14:32:15",
      ipAddress: "192.168.1.100",
    },
    {
      id: "LOG-002",
      admin: "Admin User",
      targetType: "Source",
      targetId: "SRC-003",
      targetName: "PhD Program Source",
      actionType: "verify" as ActionType,
      reason: "Official university domain confirmed",
      timestamp: "2026-05-31 13:15:42",
      ipAddress: "192.168.1.100",
    },
    {
      id: "LOG-003",
      admin: "Admin User",
      targetType: "Submission",
      targetId: "SUB-008",
      targetName: "Computer Engineering Program",
      actionType: "reject" as ActionType,
      reason: "Invalid source links, requested corrections",
      timestamp: "2026-05-31 11:45:30",
      ipAddress: "192.168.1.100",
    },
    {
      id: "LOG-004",
      admin: "Sarah Admin",
      targetType: "University",
      targetId: "UNI-012",
      targetName: "Cambridge University",
      actionType: "activate" as ActionType,
      reason: "Verification completed",
      timestamp: "2026-05-30 16:20:11",
      ipAddress: "192.168.1.105",
    },
    {
      id: "LOG-005",
      admin: "Admin User",
      targetType: "Source",
      targetId: "SRC-004",
      targetName: "Tuition Source",
      actionType: "invalidate" as ActionType,
      reason: "Link redirects to general page",
      timestamp: "2026-05-30 10:05:22",
      ipAddress: "192.168.1.100",
    },
    {
      id: "LOG-006",
      admin: "Sarah Admin",
      targetType: "User",
      targetId: "USR-045",
      targetName: "John Doe",
      actionType: "suspend" as ActionType,
      reason: "Multiple policy violations",
      timestamp: "2026-05-29 14:50:33",
      ipAddress: "192.168.1.105",
    },
    {
      id: "LOG-007",
      admin: "Admin User",
      targetType: "Submission",
      targetId: "SUB-006",
      targetName: "Master of Data Analytics",
      actionType: "approve" as ActionType,
      reason: "Complete documentation, verified sources",
      timestamp: "2026-05-29 09:30:45",
      ipAddress: "192.168.1.100",
    },
  ];

  const filteredLogs = logs.filter(log => {
    const matchesSearch = 
      log.admin.toLowerCase().includes(searchQuery.toLowerCase()) ||
      log.targetName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      log.targetId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      log.reason.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesAction = actionFilter === "all" || log.actionType === actionFilter;
    
    return matchesSearch && matchesAction;
  });

  const getActionIcon = (action: ActionType) => {
    switch (action) {
      case "approve": return CheckCircle;
      case "reject": return XCircle;
      case "verify": return CheckCircle;
      case "invalidate": return XCircle;
      case "suspend": return Power;
      case "activate": return Power;
      case "create": return UserPlus;
      case "update": return Edit;
    }
  };

  const getActionColor = (action: ActionType) => {
    switch (action) {
      case "approve":
      case "verify":
      case "activate":
        return "bg-emerald-50 text-emerald-700 border-emerald-200";
      case "reject":
      case "invalidate":
      case "suspend":
        return "bg-red-50 text-red-700 border-red-200";
      case "create":
      case "update":
        return "bg-blue-50 text-blue-700 border-blue-200";
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Audit Logs</h1>
            <p className="text-gray-600">Complete traceability of all admin operations and system events</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2.5 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition-colors font-medium">
            <Download className="w-5 h-5" />
            Export Logs
          </button>
        </div>

        {/* Info Banner */}
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
          <div className="flex items-start gap-4">
            <div className="bg-blue-100 p-3 rounded-xl">
              <Shield className="w-6 h-6 text-blue-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-blue-900 mb-1">Audit Trail Information</h3>
              <p className="text-sm text-blue-700">
                All administrative actions are logged with complete details including timestamp, admin user, 
                target entity, action performed, reason provided, and IP address for security and compliance purposes.
              </p>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <div className="flex items-center justify-between gap-4">
            {/* Action Type Filters */}
            <div className="flex items-center gap-2 flex-wrap">
              {[
                { key: "all" as const, label: "All Actions" },
                { key: "approve" as const, label: "Approve" },
                { key: "reject" as const, label: "Reject" },
                { key: "verify" as const, label: "Verify" },
                { key: "invalidate" as const, label: "Invalidate" },
                { key: "suspend" as const, label: "Suspend" },
                { key: "activate" as const, label: "Activate" },
              ].map((filter) => (
                <button
                  key={filter.key}
                  onClick={() => setActionFilter(filter.key)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                    actionFilter === filter.key
                      ? "bg-purple-50 text-purple-700"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search audit logs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 w-80"
              />
            </div>
          </div>
        </div>

        {/* Audit Logs Table */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-100">
                <tr>
                  <th className="text-left px-6 py-4 text-xs font-medium text-gray-500 uppercase">Action ID</th>
                  <th className="text-left px-6 py-4 text-xs font-medium text-gray-500 uppercase">Admin</th>
                  <th className="text-left px-6 py-4 text-xs font-medium text-gray-500 uppercase">Target</th>
                  <th className="text-left px-6 py-4 text-xs font-medium text-gray-500 uppercase">Action Type</th>
                  <th className="text-left px-6 py-4 text-xs font-medium text-gray-500 uppercase">Reason</th>
                  <th className="text-left px-6 py-4 text-xs font-medium text-gray-500 uppercase">Timestamp</th>
                  <th className="text-left px-6 py-4 text-xs font-medium text-gray-500 uppercase">IP Address</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredLogs.map((log) => {
                  const ActionIcon = getActionIcon(log.actionType);
                  return (
                    <tr key={log.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <p className="text-sm font-mono text-gray-900">{log.id}</p>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-sm font-medium text-gray-900">{log.admin}</p>
                      </td>
                      <td className="px-6 py-4">
                        <div>
                          <p className="text-sm font-medium text-gray-900">{log.targetName}</p>
                          <p className="text-xs text-gray-500">{log.targetType} • {log.targetId}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-xs font-medium ${getActionColor(log.actionType)}`}>
                          <ActionIcon className="w-3.5 h-3.5" />
                          {log.actionType.charAt(0).toUpperCase() + log.actionType.slice(1)}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-sm text-gray-700 max-w-md">{log.reason}</p>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-sm text-gray-900">{new Date(log.timestamp).toLocaleDateString()}</p>
                        <p className="text-xs text-gray-500">{new Date(log.timestamp).toLocaleTimeString()}</p>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-sm font-mono text-gray-600">{log.ipAddress}</p>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {filteredLogs.length === 0 && (
            <div className="text-center py-16">
              <Shield className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-1">No audit logs found</h3>
              <p className="text-gray-500">Try adjusting your filters or search query</p>
            </div>
          )}
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <p className="text-sm text-gray-600 mb-1">Total Logs</p>
            <p className="text-2xl font-bold text-gray-900">{logs.length}</p>
          </div>
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <p className="text-sm text-gray-600 mb-1">Approvals</p>
            <p className="text-2xl font-bold text-emerald-600">{logs.filter(l => l.actionType === "approve").length}</p>
          </div>
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <p className="text-sm text-gray-600 mb-1">Rejections</p>
            <p className="text-2xl font-bold text-red-600">{logs.filter(l => l.actionType === "reject").length}</p>
          </div>
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <p className="text-sm text-gray-600 mb-1">Verifications</p>
            <p className="text-2xl font-bold text-blue-600">{logs.filter(l => l.actionType === "verify").length}</p>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

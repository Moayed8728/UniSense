import { AdminLayout } from "../../components/AdminLayout";
import { StatusBadge } from "../../components/StatusBadge";
import { useState } from "react";
import { toast } from "sonner";
import { 
  Search,
  Filter,
  Eye,
  Power,
  Users as UsersIcon,
  GraduationCap,
  Building2,
  Shield
} from "lucide-react";

type UserRole = "student" | "rep" | "admin";
type UserStatus = "active" | "pending" | "suspended";

export default function ManageUsers() {
  const [searchQuery, setSearchQuery] = useState("");
  const [roleFilter, setRoleFilter] = useState<UserRole | "all">("all");

  const users = [
    {
      id: "USR-001",
      name: "John Smith",
      email: "john.smith@harvard.edu",
      role: "rep" as UserRole,
      university: "Harvard University",
      status: "active" as UserStatus,
      lastLogin: "2026-05-30",
      submissions: 12,
    },
    {
      id: "USR-002",
      name: "Sarah Johnson",
      email: "sarah.j@mit.edu",
      role: "rep" as UserRole,
      university: "MIT",
      status: "active" as UserStatus,
      lastLogin: "2026-05-29",
      submissions: 8,
    },
    {
      id: "USR-003",
      name: "Emily Brown",
      email: "emily.b@berkeley.edu",
      role: "rep" as UserRole,
      university: "UC Berkeley",
      status: "active" as UserStatus,
      lastLogin: "2026-05-28",
      submissions: 15,
    },
    {
      id: "USR-004",
      name: "Michael Chen",
      email: "michael@student.edu",
      role: "student" as UserRole,
      university: "-",
      status: "active" as UserStatus,
      lastLogin: "2026-05-31",
      submissions: 0,
    },
    {
      id: "USR-005",
      name: "David Wilson",
      email: "david.w@stanford.edu",
      role: "rep" as UserRole,
      university: "Stanford University",
      status: "pending" as UserStatus,
      lastLogin: "2026-05-27",
      submissions: 0,
    },
    {
      id: "USR-006",
      name: "Admin User",
      email: "admin@unisense.com",
      role: "admin" as UserRole,
      university: "-",
      status: "active" as UserStatus,
      lastLogin: "2026-05-31",
      submissions: 0,
    },
  ];

  const filteredUsers = users.filter(user => {
    const matchesSearch = 
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.university.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesRole = roleFilter === "all" || user.role === roleFilter;
    
    return matchesSearch && matchesRole;
  });

  const handleToggleStatus = (id: string, name: string, currentStatus: UserStatus) => {
    const newStatus = currentStatus === "active" ? "suspended" : "active";
    toast.success(`${name} has been ${newStatus}`);
  };

  const handleViewProfile = (name: string, email: string) => {
    toast.info(`${name} profile opened (${email}).`);
  };

  const getRoleIcon = (role: UserRole) => {
    switch (role) {
      case "student": return GraduationCap;
      case "rep": return Building2;
      case "admin": return Shield;
    }
  };

  const getRoleColor = (role: UserRole) => {
    switch (role) {
      case "student": return "bg-blue-50 text-blue-700 border-blue-200";
      case "rep": return "bg-purple-50 text-purple-700 border-purple-200";
      case "admin": return "bg-red-50 text-red-700 border-red-200";
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Manage Users</h1>
          <p className="text-gray-600">View and manage all users in the system</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <div className="flex items-center gap-3">
              <div className="bg-purple-50 p-3 rounded-xl">
                <UsersIcon className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Users</p>
                <p className="text-2xl font-bold text-gray-900">{users.length}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <div className="flex items-center gap-3">
              <div className="bg-blue-50 p-3 rounded-xl">
                <GraduationCap className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Students</p>
                <p className="text-2xl font-bold text-gray-900">{users.filter(u => u.role === "student").length}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <div className="flex items-center gap-3">
              <div className="bg-purple-50 p-3 rounded-xl">
                <Building2 className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Representatives</p>
                <p className="text-2xl font-bold text-gray-900">{users.filter(u => u.role === "rep").length}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <div className="flex items-center gap-3">
              <div className="bg-red-50 p-3 rounded-xl">
                <Shield className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Admins</p>
                <p className="text-2xl font-bold text-gray-900">{users.filter(u => u.role === "admin").length}</p>
              </div>
            </div>
          </div>
        </div>

        {/* User List */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm">
          <div className="p-6 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <h2 className="text-xl font-semibold text-gray-900">All Users</h2>
                
                {/* Role Filters */}
                <div className="flex items-center gap-2 ml-6">
                  {[
                    { key: "all" as const, label: "All" },
                    { key: "student" as const, label: "Students" },
                    { key: "rep" as const, label: "Representatives" },
                    { key: "admin" as const, label: "Admins" },
                  ].map((filter) => (
                    <button
                      key={filter.key}
                      onClick={() => setRoleFilter(filter.key)}
                      className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                        roleFilter === filter.key
                          ? "bg-purple-50 text-purple-700"
                          : "text-gray-600 hover:bg-gray-50"
                      }`}
                    >
                      {filter.label}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search users..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 w-80"
                />
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-100">
                <tr>
                  <th className="text-left px-6 py-4 text-xs font-medium text-gray-500 uppercase">User</th>
                  <th className="text-left px-6 py-4 text-xs font-medium text-gray-500 uppercase">Role</th>
                  <th className="text-left px-6 py-4 text-xs font-medium text-gray-500 uppercase">University</th>
                  <th className="text-left px-6 py-4 text-xs font-medium text-gray-500 uppercase">Status</th>
                  <th className="text-left px-6 py-4 text-xs font-medium text-gray-500 uppercase">Last Login</th>
                  <th className="text-left px-6 py-4 text-xs font-medium text-gray-500 uppercase">Submissions</th>
                  <th className="text-left px-6 py-4 text-xs font-medium text-gray-500 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredUsers.map((user) => {
                  const RoleIcon = getRoleIcon(user.role);
                  return (
                    <tr key={user.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <div>
                          <p className="font-medium text-gray-900">{user.name}</p>
                          <p className="text-sm text-gray-500">{user.email}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-xs font-medium ${getRoleColor(user.role)}`}>
                          <RoleIcon className="w-3.5 h-3.5" />
                          {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-sm text-gray-900">{user.university}</p>
                      </td>
                      <td className="px-6 py-4">
                        <StatusBadge status={user.status} />
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-sm text-gray-900">{new Date(user.lastLogin).toLocaleDateString()}</p>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-sm text-gray-900">{user.submissions}</p>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleViewProfile(user.name, user.email)}
                            className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                            title="View Profile"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                          {user.role !== "admin" && (
                            <button
                              onClick={() => handleToggleStatus(user.id, user.name, user.status)}
                              className={`p-2 rounded-lg transition-colors ${
                                user.status === "active"
                                  ? "text-red-600 hover:bg-red-50"
                                  : "text-emerald-600 hover:bg-emerald-50"
                              }`}
                              title={user.status === "active" ? "Suspend" : "Activate"}
                            >
                              <Power className="w-4 h-4" />
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

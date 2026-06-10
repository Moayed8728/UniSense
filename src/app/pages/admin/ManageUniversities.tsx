import { AdminLayout } from "../../components/AdminLayout";
import { StatusBadge } from "../../components/StatusBadge";
import { useState } from "react";
import { toast } from "sonner";
import {
  Search,
  Plus,
  Building2,
  Globe,
  Edit,
  Eye,
  Power
} from "lucide-react";
import { universities as universityDatabase } from "../../data/programs";

export default function ManageUniversities() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);

  const universities = universityDatabase.map((university) => ({
    ...university,
    status: "active" as const,
    lastUpdated: "2026-05-30",
  }));

  const filteredUniversities = universities.filter(uni =>
    uni.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    uni.shortName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    uni.country.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleToggleStatus = (id: string, currentStatus: string) => {
    toast.success(`University ${currentStatus === "active" ? "deactivated" : "activated"} successfully`);
  };

  const handleView = (name: string) => toast.info(`Viewing ${name} record and ${universities.find((item) => item.name === name)?.programCount ?? 0} programs.`);
  const handleEdit = (name: string) => toast.success(`${name} opened in edit mode.`);

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Manage Universities</h1>
            <p className="text-gray-600">View and manage university records in the system</p>
          </div>
          <button
            onClick={() => setShowAddModal(true)}
            className="flex items-center gap-2 px-4 py-2.5 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition-colors font-medium"
          >
            <Plus className="w-5 h-5" />
            Add University
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <div className="flex items-center gap-3">
              <div className="bg-purple-50 p-3 rounded-xl">
                <Building2 className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Universities</p>
                <p className="text-2xl font-bold text-gray-900">{universities.length}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <div className="flex items-center gap-3">
              <div className="bg-emerald-50 p-3 rounded-xl">
                <Power className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Active</p>
                <p className="text-2xl font-bold text-gray-900">{universities.filter(u => u.status === "active").length}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <div className="flex items-center gap-3">
              <div className="bg-blue-50 p-3 rounded-xl">
                <Globe className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Countries</p>
                <p className="text-2xl font-bold text-gray-900">{new Set(universities.map(u => u.country)).size}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <div className="flex items-center gap-3">
              <div className="bg-indigo-50 p-3 rounded-xl">
                <Building2 className="w-6 h-6 text-indigo-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Programs</p>
                <p className="text-2xl font-bold text-gray-900">{universities.reduce((sum, u) => sum + u.programCount, 0)}</p>
              </div>
            </div>
          </div>
        </div>

        {/* University List */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm">
          <div className="p-6 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-900">All Universities</h2>
              
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search universities..."
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
                  <th className="text-left px-6 py-4 text-xs font-medium text-gray-500 uppercase">University</th>
                  <th className="text-left px-6 py-4 text-xs font-medium text-gray-500 uppercase">Location</th>
                  <th className="text-left px-6 py-4 text-xs font-medium text-gray-500 uppercase">Website</th>
                  <th className="text-left px-6 py-4 text-xs font-medium text-gray-500 uppercase">Programs</th>
                  <th className="text-left px-6 py-4 text-xs font-medium text-gray-500 uppercase">Status</th>
                  <th className="text-left px-6 py-4 text-xs font-medium text-gray-500 uppercase">Last Updated</th>
                  <th className="text-left px-6 py-4 text-xs font-medium text-gray-500 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredUniversities.map((university) => (
                  <tr key={university.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div>
                        <p className="font-medium text-gray-900">{university.name}</p>
                        <p className="text-sm text-gray-500">{university.shortName}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-gray-900">{university.city}, {university.country}</p>
                    </td>
                    <td className="px-6 py-4">
                      <a 
                        href={university.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-600 hover:text-blue-700 hover:underline"
                      >
                        {university.website}
                      </a>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-gray-900">{university.programCount}</p>
                    </td>
                    <td className="px-6 py-4">
                      <StatusBadge status={university.status} />
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-gray-900">{new Date(university.lastUpdated).toLocaleDateString()}</p>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleView(university.name)}
                          className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                          title="View Details"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleEdit(university.name)}
                          className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                          title="Edit"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleToggleStatus(university.id, university.status)}
                          className={`p-2 rounded-lg transition-colors ${
                            university.status === "active"
                              ? "text-red-600 hover:bg-red-50"
                              : "text-emerald-600 hover:bg-emerald-50"
                          }`}
                          title={university.status === "active" ? "Deactivate" : "Activate"}
                        >
                          <Power className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Add University Modal */}
        {showAddModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Add New University</h3>
              
              <div className="space-y-4 mb-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">University Name *</label>
                    <input 
                      type="text"
                      placeholder="Full university name"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Short Name *</label>
                    <input 
                      type="text"
                      placeholder="e.g., MIT"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Country *</label>
                    <input 
                      type="text"
                      placeholder="e.g., United States"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">City *</label>
                    <input 
                      type="text"
                      placeholder="e.g., Cambridge"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Official Website *</label>
                  <input 
                    type="url"
                    placeholder="https://university.edu"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setShowAddModal(false)}
                  className="flex-1 px-4 py-2.5 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 font-medium"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    toast.success("University added successfully!");
                    setShowAddModal(false);
                  }}
                  className="flex-1 px-4 py-2.5 bg-purple-600 text-white rounded-xl hover:bg-purple-700 font-medium"
                >
                  Add University
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}

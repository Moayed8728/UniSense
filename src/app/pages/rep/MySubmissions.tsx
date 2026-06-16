import { RepLayout } from "../../components/RepLayout";
import { StatusBadge } from "../../components/StatusBadge";
import { Link } from "react-router";
import { useEffect, useState } from "react";
import { Search, Filter, Eye, Edit, FileText } from "lucide-react";
import { getProgramSubmissions, PROTOTYPE_DATA_CHANGED_EVENT } from "../../lib/prototypeStore";

type FilterTab = "all" | "pending" | "approved" | "rejected" | "draft";

export default function MySubmissions() {
  const [activeFilter, setActiveFilter] = useState<FilterTab>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [submissions, setSubmissions] = useState(getProgramSubmissions);

  useEffect(() => {
    const sync = () => setSubmissions(getProgramSubmissions());
    window.addEventListener(PROTOTYPE_DATA_CHANGED_EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(PROTOTYPE_DATA_CHANGED_EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  const filteredSubmissions = submissions.filter(sub => {
    const matchesFilter = activeFilter === "all" || sub.status === activeFilter;
    const matchesSearch = sub.program.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         sub.university.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const tabs = [
    { key: "all" as const, label: "All", count: submissions.length },
    { key: "pending" as const, label: "Pending", count: submissions.filter(s => s.status === "pending").length },
    { key: "approved" as const, label: "Approved", count: submissions.filter(s => s.status === "approved").length },
    { key: "rejected" as const, label: "Rejected", count: submissions.filter(s => s.status === "rejected").length },
    { key: "draft" as const, label: "Drafts", count: submissions.filter(s => s.status === "draft").length },
  ];

  return (
    <RepLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Submissions & Verification Status</h1>
          <p className="text-gray-600">Track submissions for Universiti Teknologi Malaysia only.</p>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm">
          <div className="p-6 border-b border-gray-100">
            <div className="flex items-center justify-between gap-4">
              {/* Filter Tabs */}
              <div className="flex items-center gap-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveFilter(tab.key)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      activeFilter === tab.key
                        ? "bg-indigo-50 text-indigo-700"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    {tab.label}
                    <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
                      activeFilter === tab.key
                        ? "bg-indigo-100"
                        : "bg-gray-100"
                    }`}>
                      {tab.count}
                    </span>
                  </button>
                ))}
              </div>

              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search programs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 w-64"
                />
              </div>
            </div>
          </div>

          {/* Submissions Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-100">
                <tr>
                  <th className="text-left px-6 py-4 text-xs font-medium text-gray-500 uppercase">Program</th>
                  <th className="text-left px-6 py-4 text-xs font-medium text-gray-500 uppercase">Action</th>
                  <th className="text-left px-6 py-4 text-xs font-medium text-gray-500 uppercase">Status</th>
                  <th className="text-left px-6 py-4 text-xs font-medium text-gray-500 uppercase">Source</th>
                  <th className="text-left px-6 py-4 text-xs font-medium text-gray-500 uppercase">Submitted</th>
                  <th className="text-left px-6 py-4 text-xs font-medium text-gray-500 uppercase">Progress</th>
                  <th className="text-left px-6 py-4 text-xs font-medium text-gray-500 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredSubmissions.map((submission) => (
                  <tr key={submission.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div>
                        <p className="font-medium text-gray-900">{submission.program}</p>
                        <p className="text-sm text-gray-500">{submission.university}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-gray-600">{submission.actionType}</span>
                    </td>
                    <td className="px-6 py-4">
                      <StatusBadge status={submission.status} />
                    </td>
                    <td className="px-6 py-4">
                      <StatusBadge status={submission.sourceStatus} />
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-gray-900">{new Date(submission.submittedDate).toLocaleDateString()}</p>
                      <p className="text-xs text-gray-500">Updated: {new Date(submission.lastUpdated).toLocaleDateString()}</p>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="flex-1">
                          <div className="flex items-center gap-1">
                            {submission.status === "draft" && (
                              <>
                                <div className="w-2 h-2 rounded-full bg-gray-300" />
                                <div className="w-2 h-2 rounded-full bg-gray-300" />
                                <div className="w-2 h-2 rounded-full bg-gray-300" />
                                <div className="w-2 h-2 rounded-full bg-gray-300" />
                              </>
                            )}
                            {submission.status === "pending" && (
                              <>
                                <div className="w-2 h-2 rounded-full bg-amber-500" />
                                <div className="w-2 h-2 rounded-full bg-amber-500" />
                                <div className="w-2 h-2 rounded-full bg-gray-300" />
                                <div className="w-2 h-2 rounded-full bg-gray-300" />
                              </>
                            )}
                            {submission.status === "approved" && (
                              <>
                                <div className="w-2 h-2 rounded-full bg-emerald-500" />
                                <div className="w-2 h-2 rounded-full bg-emerald-500" />
                                <div className="w-2 h-2 rounded-full bg-emerald-500" />
                                <div className="w-2 h-2 rounded-full bg-emerald-500" />
                              </>
                            )}
                            {submission.status === "rejected" && (
                              <>
                                <div className="w-2 h-2 rounded-full bg-red-500" />
                                <div className="w-2 h-2 rounded-full bg-red-500" />
                                <div className="w-2 h-2 rounded-full bg-gray-300" />
                                <div className="w-2 h-2 rounded-full bg-gray-300" />
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <Link
                          to={`/rep/submissions/${submission.id}`}
                          className="p-2 text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
                          title="View Details"
                        >
                          <Eye className="w-4 h-4" />
                        </Link>
                        {(submission.status === "draft" || submission.status === "rejected") && (
                          <Link
                            to={`/rep/submissions/${submission.id}/edit`}
                            className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                            title="Edit"
                          >
                            <Edit className="w-4 h-4" />
                          </Link>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredSubmissions.length === 0 && (
            <div className="text-center py-16">
              <FileText className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-1">No submissions found</h3>
              <p className="text-gray-500">Try adjusting your filters or search query</p>
            </div>
          )}
        </div>
      </div>
    </RepLayout>
  );
}

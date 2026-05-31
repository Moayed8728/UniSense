
  # Web app conversion (Copy)

  This is a code bundle for Web app conversion (Copy). The original project is available at https://www.figma.com/design/UkkZ1cwcrakwOB9hcYEYSK/Web-app-conversion--Copy-.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.

  ## Program Discovery Subsystem (Section 3.0)

  Student-facing UI for the Program Discovery Subsystem described in
  `../3.0.docx`. Routes:

  | Module (doc) | Route | File |
  |---|---|---|
  | 3.1 Program Search & Filtering | `/discover` | `src/app/pages/discover/Search.tsx` |
  | 3.2 Browse Programs | `/browse` | `src/app/pages/discover/Browse.tsx` |
  | 3.3 View Program Details | `/programs/:id` | `src/app/pages/discover/ProgramDetails.tsx` |
  | 3.4 Smart Search | `/smart-search` | `src/app/pages/discover/SmartSearch.tsx` |

  Shared pieces: `StudentLayout`, `ProgramCard`, and mock data in
  `src/app/data/programs.ts`.
  
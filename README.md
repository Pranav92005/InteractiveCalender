


# 📅 Interactive Wall Calendar Component

A polished React component that translates a physical wall calendar aesthetic into a functional digital experience.
--> responsive design, and intuitive date range selection.

---

## 🚀 How to Run Locally

1. **Clone the repository**
2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Run the development server**
   ```bash
   npm run dev
   ```
4. **Open in browser**
   Navigate to `http://localhost:5173`.

---

## 🧠 Engineering Choices

* **Modular Architecture:** The UI is split into distinct components (`HeroHeader`, `NotesSection`, `CalendarGrid`). This keeps the code maintainable and ensures each part has a single responsibility.
* **Context-Aware Notes:** Instead of a single global note, I implemented a `Record<string, string>` state. This allows the notes section to dynamically load and save text specific to a single date or a selected range.

    
* **Date Logic:** Utilized `date-fns` for robust, immutable date calculations, ensuring the grid renders correctly regardless of the starting day of the week.

---

## 🛠 Tech Stack

* **Framework:** React (Vite)
* **Language:** TypeScript
* **Styling:** Tailwind CSS
* **Date Management:** date-fns

---


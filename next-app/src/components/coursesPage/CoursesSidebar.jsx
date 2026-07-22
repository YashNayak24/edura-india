"use client";
// import { useState } from 'react'
// import { CATEGORIES, DURATIONS } from './courseData'

// function FilterCard({ title, onClear, children }) {
//   return (
//     <div className="bg-white border border-[#DDE5F8] rounded-[18px] overflow-hidden">
//       <div className="flex items-center justify-between px-[18px] py-[14px] border-b border-[#DDE5F8]">
//         <span className="text-[12.5px] font-extrabold text-[#0D1E42] uppercase tracking-[0.03em]">{title}</span>
//         {onClear && (
//           <button onClick={onClear} className="text-[11px] font-bold text-[#094E93] bg-transparent border-none cursor-pointer hover:underline"
//             style={{ fontFamily:"inherit" }}>Clear</button>
//         )}
//       </div>
//       <div className="p-[14px] flex flex-col gap-2">{children}</div>
//     </div>
//   )
// }

// const Star = ({ filled }) => (
//   <svg viewBox="0 0 24 24" className="w-[14px] h-[14px]" fill={filled ? "#F5A623" : "#DDE5F8"}>
//     <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
//   </svg>
// )

// function SidebarContent({ cat, dur, onCat, onDur, onClearCat, onClearDur }) {
//   const levels = ["Beginner","Intermediate","Advanced","All Levels"]
//   const modes  = ["Live Online","Offline (Delhi NCR)","Self-Paced","Hybrid"]

//   return (
//     <div className="flex flex-col gap-4">

//       {/* Category */}
//       <FilterCard title="Category" onClear={onClearCat}>
//         {CATEGORIES.map(c => (
//           <div key={c.val} onClick={() => onCat(c.val)}
//             className={`flex items-center justify-between px-3 py-[9px] rounded-[9px] cursor-pointer
//               transition-all duration-[180ms] border-[1.5px] select-none
//               ${cat === c.val ? "bg-[#EBF1FF] border-[rgba(9,78,147,0.25)]" : "border-transparent hover:bg-[#F5F8FF] hover:border-[#DDE5F8]"}`}>
//             <div className="flex items-center gap-[10px]">
//               <span className="w-[10px] h-[10px] rounded-[3px] flex-shrink-0" style={{ background:c.dot }}/>
//               <span className={`text-[13px] font-semibold ${cat === c.val ? "text-[#094E93]" : "text-[#0D1E42]"}`}>{c.label}</span>
//             </div>
//             <span className={`text-[10.5px] font-bold px-[7px] py-[2px] rounded-full
//               ${cat === c.val ? "bg-[#094E93] text-white" : "bg-[#F4F7FF] border border-[#DDE5F8] text-[#5A6A8A]"}`}>
//               {c.count}
//             </span>
//           </div>
//         ))}
//       </FilterCard>

//       {/* Duration */}
//       <FilterCard title="Duration" onClear={onClearDur}>
//         <div className="flex flex-wrap gap-[6px]">
//           {DURATIONS.map(d => (
//             <button key={d.val} onClick={() => onDur(d.val)}
//               className={`px-3 py-[5px] rounded-full text-[12px] font-bold border-[1.5px] cursor-pointer transition-all duration-150
//                 ${dur === d.val ? "bg-[#094E93] text-white border-[#094E93]" : "bg-white text-[#5A6A8A] border-[#DDE5F8] hover:border-[rgba(9,78,147,0.3)] hover:text-[#094E93]"}`}
//               style={{ fontFamily:"inherit" }}>
//               {d.label}
//             </button>
//           ))}
//         </div>
//       </FilterCard>

//       {/* Level */}
//       <FilterCard title="Level">
//         {levels.map((l,i) => (
//           <label key={l} className="flex items-center gap-[9px] py-[5px] cursor-pointer group">
//             <input type="checkbox" defaultChecked={i < 2} className="w-[15px] h-[15px] cursor-pointer accent-[#094E93]"/>
//             <span className="text-[13px] font-semibold text-[#5A6A8A] group-hover:text-[#0D1E42] transition-colors">{l}</span>
//           </label>
//         ))}
//       </FilterCard>

//       {/* Mode */}
//       <FilterCard title="Learning Mode">
//         {modes.map((m,i) => (
//           <label key={m} className="flex items-center gap-[9px] py-[5px] cursor-pointer group">
//             <input type="checkbox" defaultChecked={i < 2} className="w-[15px] h-[15px] cursor-pointer accent-[#094E93]"/>
//             <span className="text-[13px] font-semibold text-[#5A6A8A] group-hover:text-[#0D1E42] transition-colors">{m}</span>
//           </label>
//         ))}
//       </FilterCard>

//       {/* Rating */}
//       {/* <FilterCard title="Rating">
//         {[5,4,3].map(r => (
//           <div key={r} className="flex items-center gap-[6px] py-[5px] cursor-pointer">
//             <div className="flex gap-[2px]">{[1,2,3,4,5].map(s => <Star key={s} filled={s<=r}/>)}</div>
//             <span className="text-[12.5px] font-semibold text-[#5A6A8A]">{r}.0 & above</span>
//           </div>
//         ))}
//       </FilterCard> */}

//     </div>
//   )
// }

// export default function CoursesSidebar({ cat, dur, onCat, onDur, onClearCat, onClearDur }) {
//   const [drawerOpen, setDrawerOpen] = useState(false)
//   const activeCount = (cat !== "all" ? 1 : 0) + (dur !== "all" ? 1 : 0)

//   return (
//     <>
//       {/* Desktop — sticky sidebar */}
//       <aside className="hidden lg:block sticky top-[86px] self-start">
//         <SidebarContent cat={cat} dur={dur} onCat={onCat} onDur={onDur} onClearCat={onClearCat} onClearDur={onClearDur}/>
//       </aside>

//       {/* Mobile — filter button */}
//       <div className="lg:hidden mb-4">
//         <button onClick={() => setDrawerOpen(true)}
//           className="flex items-center gap-2 bg-white border border-[#DDE5F8] rounded-[10px]
//             px-4 py-[10px] text-[13px] font-bold text-[#0D1E42] cursor-pointer
//             shadow-[0_2px_8px_rgba(9,78,147,0.07)] transition-all duration-200
//             hover:border-[#094E93] hover:text-[#094E93]"
//           style={{ fontFamily:"inherit" }}>
//           <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2}>
//             <line x1="4" y1="6" x2="20" y2="6"/><line x1="8" y1="12" x2="20" y2="12"/><line x1="12" y1="18" x2="20" y2="18"/>
//           </svg>
//           Filters
//           {activeCount > 0 && (
//             <span className="w-5 h-5 rounded-full bg-[#094E93] text-white text-[10px] font-black flex items-center justify-center">
//               {activeCount}
//             </span>
//           )}
//         </button>
//       </div>

//       {/* Mobile — bottom drawer */}
//       {drawerOpen && (
//         <div className="fixed inset-0 z-[500] lg:hidden">
//           <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" onClick={() => setDrawerOpen(false)}/>
//           <div className="absolute bottom-0 left-0 right-0 bg-[#F4F7FF] rounded-t-[24px] max-h-[85vh] flex flex-col shadow-[0_-8px_40px_rgba(0,0,0,0.15)]">

//             {/* Drawer header */}
//             <div className="flex items-center justify-between px-5 py-4 flex-shrink-0">
//               <div className="flex items-center gap-3">
//                 <span className="text-[16px] font-extrabold text-[#0D1E42]">Filters</span>
//                 {activeCount > 0 && (
//                   <span className="text-[11px] font-bold bg-[#094E93] text-white px-2 py-[2px] rounded-full">{activeCount} active</span>
//                 )}
//               </div>
//               <div className="flex items-center gap-3">
//                 {activeCount > 0 && (
//                   <button onClick={() => { onClearCat(); onClearDur(); }}
//                     className="text-[12px] font-bold text-[#DC2626] bg-transparent border-none cursor-pointer"
//                     style={{ fontFamily:"inherit" }}>Reset all</button>
//                 )}
//                 <button onClick={() => setDrawerOpen(false)}
//                   className="w-8 h-8 rounded-full bg-white border border-[#DDE5F8] flex items-center justify-center cursor-pointer border-none"
//                   style={{ fontFamily:"inherit" }}>
//                   <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="#5A6A8A" strokeWidth={2.5}>
//                     <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
//                   </svg>
//                 </button>
//               </div>
//             </div>

//             {/* Scrollable filters */}
//             <div className="overflow-y-auto px-5 pb-6 flex-1">
//               <SidebarContent cat={cat} dur={dur} onCat={onCat} onDur={onDur} onClearCat={onClearCat} onClearDur={onClearDur}/>
//             </div>

//             {/* Apply button */}
//             <div className="px-5 py-4 border-t border-[#DDE5F8] bg-white flex-shrink-0">
//               <button onClick={() => setDrawerOpen(false)}
//                 className="w-full py-[13px] bg-[#094E93] text-white rounded-[12px] text-[14px] font-bold border-none cursor-pointer"
//                 style={{ fontFamily:"inherit" }}>
//                 Apply Filters
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   )
// }
































import { useState } from 'react'
import { CATEGORIES, DURATIONS, LEVELS, MODES } from './courseData'

function FilterCard({ title, onClear, children }) {
  return (
    <div className="bg-white border border-[#DDE5F8] rounded-[18px] overflow-hidden">
      <div className="flex items-center justify-between px-[18px] py-[14px] border-b border-[#DDE5F8]">
        <span className="text-[12.5px] font-extrabold text-[#0D1E42] uppercase tracking-[0.03em]">{title}</span>
        {onClear && (
          <button
            onClick={onClear}
            className="text-[11px] font-bold text-[#094E93] bg-transparent border-none cursor-pointer hover:underline"
            style={{ fontFamily: "inherit" }}>
            Clear
          </button>
        )}
      </div>
      <div className="p-[14px] flex flex-col gap-2">{children}</div>
    </div>
  )
}

// ✅ Controlled checkbox row
function CheckRow({ label, checked, onChange }) {
  return (
    <label className="flex items-center gap-[9px] py-[5px] cursor-pointer group select-none">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="w-[15px] h-[15px] cursor-pointer accent-[#094E93]"
      />
      <span className={`text-[13px] font-semibold transition-colors
        ${checked ? "text-[#094E93]" : "text-[#5A6A8A] group-hover:text-[#0D1E42]"}`}>
        {label}
      </span>
    </label>
  )
}

function SidebarContent({
  cat, dur, levels, modes,
  onCat, onDur, onToggleLevel, onToggleMode,
  onClearCat, onClearDur, onClearLevels, onClearModes,
}) {
  return (
    <div className="flex flex-col gap-4">

      {/* ── Category ── */}
      <FilterCard title="Category" onClear={cat !== "all" ? onClearCat : null}>
        {CATEGORIES.map(c => (
          <div
            key={c.val}
            onClick={() => onCat(c.val)}
            className={`flex items-center justify-between px-3 py-[9px] rounded-[9px] cursor-pointer
              transition-all duration-[180ms] border-[1.5px] select-none
              ${cat === c.val
                ? "bg-[#EBF1FF] border-[rgba(9,78,147,0.25)]"
                : "border-transparent hover:bg-[#F5F8FF] hover:border-[#DDE5F8]"}`}>
            <div className="flex items-center gap-[10px]">
              <span
                className="w-[10px] h-[10px] rounded-[3px] flex-shrink-0"
                style={{ background: c.dot }}
              />
              <span className={`text-[13px] font-semibold ${cat === c.val ? "text-[#094E93]" : "text-[#0D1E42]"}`}>
                {c.label}
              </span>
            </div>
            {c.count && (
              <span className={`text-[10.5px] font-bold px-[7px] py-[2px] rounded-full
                ${cat === c.val
                  ? "bg-[#094E93] text-white"
                  : "bg-[#F4F7FF] border border-[#DDE5F8] text-[#5A6A8A]"}`}>
                {c.count}
              </span>
            )}
          </div>
        ))}
      </FilterCard>

      {/* ── Duration ── */}
      <FilterCard title="Duration" onClear={dur !== "all" ? onClearDur : null}>
        <div className="flex flex-wrap gap-[6px]">
          {DURATIONS.map(d => (
            <button
              key={d.val}
              onClick={() => onDur(d.val)}
              className={`px-3 py-[5px] rounded-full text-[12px] font-bold border-[1.5px] cursor-pointer transition-all duration-150
                ${dur === d.val
                  ? "bg-[#094E93] text-white border-[#094E93]"
                  : "bg-white text-[#5A6A8A] border-[#DDE5F8] hover:border-[rgba(9,78,147,0.3)] hover:text-[#094E93]"}`}
              style={{ fontFamily: "inherit" }}>
              {d.label}
            </button>
          ))}
        </div>
      </FilterCard>

      {/* ── Level ── ✅ FULLY CONTROLLED */}
      <FilterCard title="Level" onClear={levels.length > 0 ? onClearLevels : null}>
        {LEVELS.map(l => (
          <CheckRow
            key={l.val}
            label={l.label}
            checked={levels.includes(l.val)}
            onChange={() => onToggleLevel(l.val)}
          />
        ))}
      </FilterCard>

      {/* ── Learning Mode ── ✅ FULLY CONTROLLED */}
      <FilterCard title="Learning Mode" onClear={modes.length > 0 ? onClearModes : null}>
        {MODES.map(m => (
          <CheckRow
            key={m.val}
            label={m.label}
            checked={modes.includes(m.val)}
            onChange={() => onToggleMode(m.val)}
          />
        ))}
      </FilterCard>

    </div>
  )
}

export default function CoursesSidebar({
  cat, dur, levels, modes,
  onCat, onDur, onToggleLevel, onToggleMode,
  onClearCat, onClearDur, onClearLevels, onClearModes, onClearAll,
}) {
  const [drawerOpen, setDrawerOpen] = useState(false)

  // ✅ Count all active filters
  const activeCount =
    (cat !== "all" ? 1 : 0) +
    (dur !== "all" ? 1 : 0) +
    levels.length +
    modes.length;

  const sharedProps = {
    cat, dur, levels, modes,
    onCat, onDur, onToggleLevel, onToggleMode,
    onClearCat, onClearDur, onClearLevels, onClearModes,
  };

  return (
    <>
      {/* ── Desktop — sticky sidebar ── */}
      <aside className="hidden lg:block sticky top-[86px] self-start">
        <SidebarContent {...sharedProps} />
      </aside>

      {/* ── Mobile — filter button ── */}
      <div className="lg:hidden mb-4">
        <button
          onClick={() => setDrawerOpen(true)}
          className="flex items-center gap-2 bg-white border border-[#DDE5F8] rounded-[10px]
            px-4 py-[10px] text-[13px] font-bold text-[#0D1E42] cursor-pointer
            shadow-[0_2px_8px_rgba(9,78,147,0.07)] transition-all duration-200
            hover:border-[#094E93] hover:text-[#094E93]"
          style={{ fontFamily: "inherit" }}>
          <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2}>
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="8" y1="12" x2="20" y2="12" />
            <line x1="12" y1="18" x2="20" y2="18" />
          </svg>
          Filters
          {activeCount > 0 && (
            <span className="w-5 h-5 rounded-full bg-[#094E93] text-white text-[10px] font-black flex items-center justify-center">
              {activeCount}
            </span>
          )}
        </button>
      </div>

      {/* ── Mobile — bottom drawer ── */}
      {drawerOpen && (
        <div className="fixed inset-0 z-[500] lg:hidden">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"
            onClick={() => setDrawerOpen(false)}
          />
          <div className="absolute bottom-0 left-0 right-0 bg-[#F4F7FF] rounded-t-[24px] max-h-[85vh] flex flex-col shadow-[0_-8px_40px_rgba(0,0,0,0.15)]">

            {/* Drawer header */}
            <div className="flex items-center justify-between px-5 py-4 flex-shrink-0">
              <div className="flex items-center gap-3">
                <span className="text-[16px] font-extrabold text-[#0D1E42]">Filters</span>
                {activeCount > 0 && (
                  <span className="text-[11px] font-bold bg-[#094E93] text-white px-2 py-[2px] rounded-full">
                    {activeCount} active
                  </span>
                )}
              </div>
              <div className="flex items-center gap-3">
                {activeCount > 0 && (
                  <button
                    onClick={() => { onClearAll(); }}
                    className="text-[12px] font-bold text-[#DC2626] bg-transparent border-none cursor-pointer"
                    style={{ fontFamily: "inherit" }}>
                    Reset all
                  </button>
                )}
                <button
                  onClick={() => setDrawerOpen(false)}
                  className="w-8 h-8 rounded-full bg-white border border-[#DDE5F8] flex items-center justify-center cursor-pointer"
                  style={{ fontFamily: "inherit" }}>
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="#5A6A8A" strokeWidth={2.5}>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Scrollable filters */}
            <div className="overflow-y-auto px-5 pb-6 flex-1">
              <SidebarContent {...sharedProps} />
            </div>

            {/* Apply button */}
            <div className="px-5 py-4 border-t border-[#DDE5F8] bg-white flex-shrink-0">
              <button
                onClick={() => setDrawerOpen(false)}
                className="w-full py-[13px] bg-[#094E93] text-white rounded-[12px] text-[14px] font-bold border-none cursor-pointer"
                style={{ fontFamily: "inherit" }}>
                Show {/* optionally pass count */} Results
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
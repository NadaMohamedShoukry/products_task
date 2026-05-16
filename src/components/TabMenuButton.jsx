function TabMenuButton({ children, onClick, selected }) {
  return (
    <button
      onClick={onClick}
      className={`border border-[#ACBDAA] text-[#1E2D4C] font-semibold rounded-full px-3 py-2 transition-all duration-300
          hover:bg-[#ACBDAA]/50 hover:shadow hover:font-bold hover:translate-y-1
          ${selected && "bg-[#ACBDAA]"}`}
    >
      {children}
    </button>
  );
}

export default TabMenuButton;

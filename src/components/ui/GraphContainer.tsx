"use client";

interface GraphContainerProps {
  title: string;
  children: React.ReactNode;
  description?: string;
}

export default function GraphContainer({
  title,
  children,
  description,
}: GraphContainerProps) {
  return (
    <div className="card border-t-4 border-t-blue-500">
      <h4 className="subsection-title text-lg">{title}</h4>
      {description && (
        <p className="text-slate-400 text-sm mb-4">{description}</p>
      )}
      <div className="bg-slate-900/30 p-6 rounded border border-slate-700 overflow-x-auto">
        {children}
      </div>
    </div>
  );
}

import TopNav from "@/components/navbar/TopNav";

export const metadata = {
  title: "Millat's Tasks",
  description: "Handle your task",
};

export default function DashbaordLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col">
      <TopNav />
      <div className="h-[calc(100%-56px)]">{children}</div>
    </div>
  );
}

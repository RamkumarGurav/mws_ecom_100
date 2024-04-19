import FooterBottom from "@/components/Footer/FooterBottom";
import DashNavbar2 from "@/components/Navbars/DashNavbar2";
import Navbar from "@/components/Navbars/Navbar";
import NextTopLoader from "nextjs-toploader";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`overflow-hidden `}>
      <NextTopLoader color="#10b981" />
      <DashNavbar2>
        <main className={`md:p-4`}>{children}</main>
      </DashNavbar2>
    </div>
  );
}

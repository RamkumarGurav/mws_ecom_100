import "./globals.css";
import { Poppins } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { Providers } from "./providers";
import NextTopLoader from "nextjs-toploader";

const font = Poppins({ weight: "400", subsets: ["latin"] });
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        id="body"
        className={` ${font.className} max-w-[1536px] mx-auto bg-white `}
      >
        <Providers>
          <Toaster position="bottom-right" toastOptions={{ duration: 3000 }} />
          {children}
        </Providers>
      </body>
    </html>
  );
}

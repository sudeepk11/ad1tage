import "./globals.css";
import { Inter, Poppins } from "next/font/google";
import Layout from "../components/Layout";
import AuthProvider from "../providers/AuthProvider";
import { Toaster } from "react-hot-toast";
import TopLoader from "nextjs-toploader";

// const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "ad1tage",
  description: "Empowering Seniors",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <link
        rel="stylesheet"
        type="text/css"
        charset="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      /> */}
      <body className={`${poppins.className}`}>
        <TopLoader color="#000" />
        <AuthProvider>
          <Layout>
            <div>{children}</div>
          </Layout>
        </AuthProvider>
        <Toaster />
      </body>
    </html>
  );
}

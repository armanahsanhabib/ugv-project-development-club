import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "UGV Project Development Club",
  description:
    "The UGV Project Development Club at the University of Global Village (UGV), Barishal, is a community of innovative students passionate about science, technology, and engineering. With guidance from our esteemed moderator, Md. Masudur Rahman, and advisor, Sohag Mollik, we foster hands-on learning through projects, workshops, and teamwork. Join us in exploring new ideas, building technical skills, and making a positive impact on our community.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

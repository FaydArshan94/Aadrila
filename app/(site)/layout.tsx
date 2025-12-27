"use client";

import Navbar from "@/components/layout/Navbar";

export default function SiteLayout({
  children,

}: {
  children: React.ReactNode;
  isLoading: boolean;
}) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

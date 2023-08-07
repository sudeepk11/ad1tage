"use client";
import { useEffect, useState } from "react";
import LandingPage from "../components/LandingPage";

export default function Home() {
  const [initialRenderComplete, setInitialRenderComplete] =
    useState<boolean>(false);
  useEffect(() => {
    setInitialRenderComplete(true);
  }, []);
  if (!initialRenderComplete) return <></>;
  return (
    <div>
      <LandingPage />
    </div>
  );
}

import ScrollUp from "@/components/Common/ScrollUp";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "free online tool",
  description: "Helping you work efficiently: Free online tool platform"
};

export default function Home() {
  let HeroData = {
    title: "free online tool",
    description: "The free online tool platform provides convenient and practical tools that require no installation and can be used online anytime and anywhere to help you simplify tasks and easily complete daily operations."
  }

  let FeaturesData = [{
    title: "No installation required",
    paragraph: "Easy and convenient, no complicated installation process required, just click and use, get started quickly."
  },
  {
    title: "Online use anytime, anywhere:",
    paragraph: "Flexible and free, you can use the tool anytime, anywhere via the Internet, conveniently and quickly."
  },
  {
    title: "Data security",
    paragraph: "Strictly protect user data privacy and take security measures to ensure that your use process is safe and reliable."
  }]

  return (
    <>
      <ScrollUp />
      <Hero data={HeroData} />
      <Features
        paragraph="Why choose free online tool?"
        data={FeaturesData} />
    </>
  );
}

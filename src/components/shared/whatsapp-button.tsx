"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/data/site-data";
import { FaWhatsapp } from "react-icons/fa6";

export function WhatsAppButton() {
  return (
    <motion.a
      href={`https://wa.me/${siteConfig.whatsappNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-7 right-7 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_30px_rgba(37,211,102,0.6)] transition-shadow"
      title="Escríbenos al WhatsApp"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      animate={{ scale: [1, 1.05, 1] }}
      transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
    >
      <FaWhatsapp className="w-8 h-8 text-white" />
    </motion.a>
  );
}
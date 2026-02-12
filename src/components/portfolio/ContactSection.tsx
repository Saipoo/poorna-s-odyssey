import { motion } from "framer-motion";
import StageSection from "./StageSection";
import mountainBg from "@/assets/mountain-bg.jpg";

const ContactSection = () => {
  return (
    <StageSection id="contact" bgImage={mountainBg} stageNumber={7} stageTitle="The Connection" animatedBgTheme="cosmic">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto text-center"
      >
        <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400 mb-8">
          The Connection
        </h2>
        <p className="text-cyan-100/60 text-lg mb-12">
          Ready to embark on a journey together? Let's connect and build something extraordinary.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {[
            { icon: "📧", label: "Email", value: "poornaseshaseyanaraja@gmail.com", href: "mailto:poornaseshaseyanaraja@gmail.com" },
            { icon: "📱", label: "Phone", value: "+91 6364037478", href: "tel:+916364037478" },
            { icon: "📍", label: "Location", value: "Bengaluru, Karnataka, India", href: "#" },
            { icon: "💼", label: "LinkedIn", value: "Connect on LinkedIn", href: "https://linkedin.com" },
          ].map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-black/40 backdrop-blur-xl rounded-xl border border-cyan-500/20 p-5 hover:border-cyan-400/40 transition-all text-left group"
            >
              <span className="text-2xl">{item.icon}</span>
              <p className="text-cyan-300/50 text-xs tracking-wider uppercase mt-2">{item.label}</p>
              <p className="text-cyan-200 text-sm mt-1 group-hover:text-cyan-400 transition-colors">
                {item.value}
              </p>
            </motion.a>
          ))}
        </div>

        <div className="flex justify-center gap-4 text-sm text-cyan-300/40">
          <span>English</span>•<span>Telugu</span>•<span>Kannada</span>•<span>Tamil</span>
        </div>

        <p className="mt-12 text-cyan-500/30 text-xs tracking-wider">
          © 2025 A Poorna Seshaseyan. All rights reserved.
        </p>
      </motion.div>
    </StageSection>
  );
};

export default ContactSection;

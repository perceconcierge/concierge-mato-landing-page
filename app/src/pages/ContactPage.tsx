import { motion } from "framer-motion";
import { Copy, Mail, ArrowLeft, Check } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const ContactPage = () => {
  const [copied, setCopied] = useState(false);
  const email = "perceconcierge@gmail.com";

  const handleCopy = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSendEmail = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <div className="min-h-screen bg-mato-red flex flex-col items-center justify-center px-4 py-8">
      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="fixed top-6 left-6 z-10"
      >
        <Link to="/">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm text-mato-red rounded-full font-semibold shadow-lg hover:bg-white transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="hidden sm:inline">Back</span>
          </motion.button>
        </Link>
      </motion.div>

      {/* Profile Card */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white rounded-[32px] sm:rounded-[48px] shadow-2xl p-8 sm:p-12 max-w-md w-full text-center"
      >
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mb-6"
        >
          <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto rounded-full overflow-hidden border-4 border-mato-red/20 shadow-xl">
            <img
              src="/images/perce/IMG_3316.jpg"
              alt="Perce"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="font-heading text-3xl sm:text-4xl text-mato-dark-green mb-4"
        >
          PERCE
        </motion.h1>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-mato-dark-green/80 text-base sm:text-lg leading-relaxed mb-8"
        >
          I'm Perce, a student at Harvard University, born and raised in
          Bangkok, Thailand. My passion for food and travel inspired me to
          create Mato - a service that lets anyone eat like a local.
        </motion.p>

        {/* Email Display */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mb-6"
        >
          <p className="text-sm text-mato-dark-green/60 mb-2 uppercase tracking-wide font-medium">
            Get in touch
          </p>
          <p className="text-mato-red font-semibold text-lg break-all">
            {email}
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          {/* Copy Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleCopy}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-mato-cream text-mato-dark-green rounded-full font-semibold shadow-md hover:shadow-lg transition-all border-2 border-mato-dark-green/10"
          >
            {copied ? (
              <>
                <Check className="w-5 h-5 text-mato-green" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="w-5 h-5" />
                Copy Email
              </>
            )}
          </motion.button>

          {/* Send Email Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleSendEmail}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-mato-red text-white rounded-full font-semibold shadow-md hover:shadow-lg hover:bg-mato-red-dark transition-all"
          >
            <Mail className="w-5 h-5" />
            Send Email
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ContactPage;

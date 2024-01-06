import { BaseLayout } from "@/layouts/BaseLayout";
import ErrorIllustration from "@icons/plug-error-illustration.svg?react";
import { Button } from "react-aria-components";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <BaseLayout>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
        <ErrorIllustration />
        <h2 className="headline-l mt-6">Oops...</h2>
        <p className="body mt-2">Something went wrong</p>
        <motion.div
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.2 },
          }}
          whileTap={{
            scale: 0.9,
            transition: { duration: 0.2 },
          }}
        >
          <Button
            onPress={() => navigate(0)}
            className="mt-5 py-2 px-4 outline-none rounded-lg body-2 bg-yellow-600 text-gray-900 hover:bg-yellow-400 transition-all"
          >
            Refresh
          </Button>
        </motion.div>
      </div>
    </BaseLayout>
  );
};

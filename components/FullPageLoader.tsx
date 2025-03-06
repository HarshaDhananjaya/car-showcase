"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Define the props that FullPageLoader can accept
interface FullPageLoaderProps {
  status?: boolean; // Optional status prop
}

/**
 * FullPageLoader is a component that displays a loading spinner
 * overlay when the status is true.
 *
 * @param {FullPageLoaderProps} props - The props for the component.
 * @returns {JSX.Element | null} The loader component or null.
 */
const FullPageLoader = ({
  status = false,
}: FullPageLoaderProps): JSX.Element | null => {
  const [loading, setLoading] = useState(status);

  // Dynamically update loading state when status prop changes
  useEffect(() => {
    setLoading(status);
  }, [status]); // Only runs when the status prop changes

  // If not loading, render nothing
  if (!loading) return null;

  // Render the loading spinner
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 bg-black z-50">
      <motion.div
        className="w-16 h-16 border-4 border-violet-500 border-t-transparent rounded-full animate-spin"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />
    </div>
  );
};

export default FullPageLoader;

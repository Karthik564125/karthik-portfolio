import React from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ImageModal = ({ isOpen, imageSrc, altText, onClose }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="relative max-w-5xl w-full max-h-[90vh] bg-surface rounded-2xl border border-white/10 shadow-2xl p-2 z-10 flex flex-col"
                    >
                        <button
                            onClick={onClose}
                            className="absolute -top-12 right-0 md:-right-12 p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors"
                        >
                            <X size={24} />
                        </button>

                        <div className="w-full h-full rounded-xl overflow-hidden bg-black/50 flex items-center justify-center">
                            <img
                                src={imageSrc}
                                alt={altText || "Full view"}
                                className="max-w-full max-h-[85vh] object-contain"
                            />
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ImageModal;

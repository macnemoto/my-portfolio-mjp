import { motion, type MotionProps } from 'framer-motion';
import type { ReactNode } from 'react';

interface AnimatedSectionProps extends MotionProps {
    children: ReactNode;
    delay?: number;
}

export default function AnimatedSection({ children, delay = 0, ...props }: AnimatedSectionProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay, ease: "easeOut" }}
            {...props}
        >
            {children}
        </motion.div>
    );
}
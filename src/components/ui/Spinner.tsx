export const Spinner = ({ className = 'w-16 h-16' }: { className?: string }) => {
  return (
    <div className={`border-4 border-dashed rounded-full animate-spin border-primary ${className}`}></div>
  );
};
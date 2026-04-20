type ReelCardProps = {
  caption: string;
};

export function ReelCard({ caption }: ReelCardProps) {
  return (
    <div className="space-y-4">
      <div className="aspect-[9/16] rounded-xl border border-white/15 bg-white/[0.08]">
        <div className="flex h-full items-center justify-center">
          <span className="font-body text-[12px] font-medium uppercase tracking-[0.08em] text-white/40">
            Reel Placeholder
          </span>
        </div>
      </div>
      <p className="font-body text-[14px] leading-6 text-text-secondary">
        {caption}
      </p>
    </div>
  );
}

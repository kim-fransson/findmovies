export const DetailsSkeleton = () => {
  return (
    <div>
      <div className="h-52 skeleton rounded-none" />
      <div className="lg:px-32 md:px-8 md:py-16 p-4 flex gap-8">
        <div className="skeleton h-[420px] w-[272px] rounded-lg shrink-0 md:block hidden" />

        <div className="flex-1 flex flex-col gap-6">
          <div className="flex flex-wrap gap-4">
            <div className="w-32 h-10 skeleton" />
            <div className="w-20 h-10 skeleton" />
            <div className="w-44 h-10 skeleton" />
          </div>

          <div className="h-36 w-full skeleton" />

          <div className="grid gap-3">
            <div className="skeleton h-5 w-80" />
            <div className="skeleton h-5 w-72" />
            <div className="skeleton h-5 w-96" />
            <div className="skeleton h-5 w-64" />
          </div>
        </div>
      </div>
    </div>
  );
};

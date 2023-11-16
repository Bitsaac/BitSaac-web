export default function PreviewSkeleton() {
  return (
    <div className="flex w-full flex-col">
      <div className="w-[100%] flex flex-col   animate-pulse">
        <div className="w-[100%] my-12 flex flex-col ">
          <div className="space-y-4  w-[100%] ">
            <div className="bg-black/20 h-6 w-[40%] rounded-full" />
            <div className="flex w-[100% space-x-1">
              <div className="w-[100%] space-y-2">
                <div className="bg-black/20 h-6 w-[80%] rounded-full" />
                <div className="bg-black/20 h-6 w-[80%] rounded-full" />
              </div>
            </div>
          </div>
          <div className="space-y-2 my-10">
            <div className="bg-black/20 h-3 w-[100%] rounded-full" />
            <div className="bg-black/20 h-3 w-[100%] rounded-full" />
            <div className="bg-black/20 h-3 w-[100%] rounded-full" />
            <div className="bg-black/20 h-3 w-[100%] rounded-full" />
            <div className="bg-black/20 h-3 w-[100%] rounded-full" />
            <div className="bg-black/20 h-3 w-[100%] rounded-full" />
          </div>

          <div className="flex w-full flex-col gap-5 items-center my-10 ">
            <div className="bg-black/20 h-8 w-full max-w-[40%] rounded-full mb-5" />
            <div className="bg-black/20 h-4 w-full max-w-[70%] rounded-full" />
            <div className="bg-black/20 h-4 w-full max-w-[70%] rounded-full" />
            <div className="bg-black/20 h-4 w-full max-w-[70%] rounded-full" />
            <div className="bg-black/20 h-4 w-full max-w-[70%] rounded-full" />
            <div className="bg-black/20 h-4 w-full max-w-[70%] rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

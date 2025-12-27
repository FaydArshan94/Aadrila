export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto relative  z-10 w-full max-w-7xl xl:max-w-[80rem] px-4 sm:px-6 lg:px-8  1xl:px-20 1xl:max-w-[85rem] 3xl:max-w-[85rem] 2xl:max-w-[95rem]" >
      {children}
    </div>
  );
}

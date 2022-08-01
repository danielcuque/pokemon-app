import { RefreshIcon } from "@heroicons/react/solid";

export const Loading = () => {
  return (
    <div className="mainContainer items-center justify-center align-middle text-center text-acent text-xl h-[498px] ">
      <h1 className="font-bold">Cargando</h1>
      <RefreshIcon className="animate-spin w-12 h-12" />
    </div>
  );
};

import { ScreenTtitle } from "@/presentation/components/ScreenTitle";

const CustomSpinner = () => (
  <div className="w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin" />
);

export default function LoadingScreen() {
  return (
    <div className="flex flex-col items-center justify-center">
      <ScreenTtitle
        title={"Loading"}
        subtitle={"Loading content. Please, wait"}
      />

      <CustomSpinner />
    </div>
  );
}

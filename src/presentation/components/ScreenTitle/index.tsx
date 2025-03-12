interface TitleProps {
  title: string;
  subtitle: string;
}

export const ScreenTtitle = ({ title, subtitle }: TitleProps) => {
  return (
    <section className="text-center mb-12">
      <h1 className="text-6xl">{title}</h1>
      <p className="">{subtitle}</p>
    </section>
  );
};

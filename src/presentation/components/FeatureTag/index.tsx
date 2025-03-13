interface TagProps {
  content: string;
  bgColor: string;
}

export const FeatureTag = ({ content, bgColor }: TagProps) => {
  return (
    <span className={`${bgColor} p-2 px-4 rounded-lg w-fit max-h-fit`}>
      {content}
    </span>
  );
};

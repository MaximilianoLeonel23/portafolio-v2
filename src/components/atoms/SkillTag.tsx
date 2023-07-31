interface Props {
  tag: string;
  theme: string;
}

const SkillTag: React.FC<Props> = ({ tag, theme }) => {
  return <div className={`tag-${theme} text-xs px-3 py-1 rounded`}>{tag}</div>;
};

export default SkillTag;

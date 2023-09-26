const SectionTitles = ({ ...props }): JSX.Element => {
  const { title, subTitle, LeftSideContent } = props;
  return (
    <div className="mb-3xl flex justify-between">
      <div>
        <h3 className="mb-1 text-2xl font-bold text-clr-dark-gray-600">
          {title}
        </h3>
        <p>{subTitle}</p>
      </div>

      {LeftSideContent && LeftSideContent}
    </div>
  );
};

export default SectionTitles;

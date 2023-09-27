const SectionTitles = ({ ...props }): JSX.Element => {
  const { title, subTitle } = props;
  return (
    <div className="mb-3xl flex justify-between">
      <div>
        <h3 className="mb-1 text-2xl font-medium text-clr-dark-gray-600">
          {title}
        </h3>
        <p className="text-clr-dark-gray-400">{subTitle}</p>
      </div>

      {props?.LeftSideContent && props.LeftSideContent}
    </div>
  );
};

export default SectionTitles;

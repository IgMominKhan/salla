import Link from "next/link";

const ShowAllBtn = ({ ...props }) => {
  const { path, query } = props;
  return (
    <Link
      href={{
        pathname: path,
        query,
      }}
      className={`btn self-end ${props?.className}`}
    >
      عرض الكل
    </Link>
  );
};

export default ShowAllBtn;

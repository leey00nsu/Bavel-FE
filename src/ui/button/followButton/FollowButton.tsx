interface FollowButtonProps {
  title: string;
}

const FollowButton = ({ title }: FollowButtonProps) => {
  return (
    <button className="p-1 pl-4 pr-4 rounded-lg bg-bavel-apricot border border-bavel-orange text-bavel-orange">
      {title}
    </button>
  );
};

export default FollowButton;

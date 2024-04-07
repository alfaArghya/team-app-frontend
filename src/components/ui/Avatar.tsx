export const Avatar = ({ email }: { email: string }) => {
  return (
    <div className="cursor-pointer relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-gray-400 rounded-full mr-2">
      <span className="text-lg text-gray-600">{email[0]}</span>
    </div>
  );
};

export const CardAvatar = ({ email }: { email: string }) => {
  return (
    <div className=" mt-2 cursor-pointer relative inline-flex items-center justify-center w-24 h-24 mb-3 rounded-full shadow-lg overflow-hidden bg-gray-400 mr-2">
      <span className="text-3xl text-gray-600">{email[0]}</span>
    </div>
  );
};

const DebugText = ({ text }: { text: string }) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center">
      <p>{text}</p>
    </div>
  );
};

export default DebugText;

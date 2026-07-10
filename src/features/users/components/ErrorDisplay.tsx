type ErrorDisplayProps = {
  message?: string;
};

export default function ErrorDisplay({ message = "Something went wrong" }: ErrorDisplayProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 p-12">
      <p className="m-0 text-lg text-red-600">{message}</p>
    </div>
  );
}

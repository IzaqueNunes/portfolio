interface ButtonProps {
  label: string;
}

export function OutlineButton({ label }: ButtonProps) {
  return (
    <button className=" text-white font-medium border border-gray-300 w-full max-w-[500px] h-full hover:bg-green-600 hover:border-none">
      {label}
    </button>
  );
}

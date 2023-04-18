interface ButtonProps {
  label: string;
}

export function PrimaryButton({ label }: ButtonProps) {
  return (
    <button className=" text-white font-medium bg-green-600 w-full max-w-[500px] h-full hover:bg-green-700">
      {label}
    </button>
  );
}

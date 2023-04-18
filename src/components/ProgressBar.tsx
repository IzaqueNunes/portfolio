export type ProgressBarType = {
  id: string;
  title: string;
  level: string;
  percentage: string;
};

interface ProgressBarProps {
  data?: ProgressBarType[];
}

export function ProgressBar({ data }: ProgressBarProps) {
  return (
    <div className="w-full flex flex-col space-y-6 items-center">
      {data?.map((item) => (
        <div key={item.id} className="w-3/5">
          <div className="flex justify-between">
            <h3 className="font-bold text-gray-300">{item.title}</h3>
            <h3 className="font-bold text-gray-300">{item.level}</h3>
          </div>
          <div className="mt-2 w-full bg-gray-400 rounded-full h-2.5">
            <div
              className={`bg-green-600 h-2.5 rounded-full w-${item.percentage}`}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}

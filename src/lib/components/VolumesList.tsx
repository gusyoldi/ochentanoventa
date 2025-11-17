import { VolumeType } from '@/app/constants';
import Volume from './Volume';

type VolumesListProps = {
  volumes: VolumeType[];
};

export default function VolumesList({ volumes }: VolumesListProps) {
  return (
    <div className="mt-10 grid-cols-2 xl:mt-20">
      <div className="flex max-w-[350px] justify-between gap-5 overflow-x-auto xl:max-w-full">
        {volumes.map((volume) => (
          <Volume key={volume.title} volume={volume} />
        ))}
      </div>
    </div>
  );
}

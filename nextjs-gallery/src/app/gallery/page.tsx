import { Photo } from "@/types/gallery";
import Image from "next/image";
import Link from "next/link";

const getPhotos = async () => {
  const res = await fetch(`http://localhost:3000/api/gallery`);
  const data = await res.json();
  return data;
};

const page = async () => {
  const photos: Photo[] = await getPhotos();

  const newPhotos = photos.map((picture) => ({
    ...picture,
    thumbnailUrl: `https://placehold.co/300x300/black/white`,
    url: `https://placehold.co/1000x1000/black/white`,
  }));

  return (
    <>
      <div className="text-center my-8">
        <h1 className="text-3xl font-bold">Gallery</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 px-4 mb-8">
        {newPhotos.map((photo) => (
          <Link key={photo.id} href={`/gallery/${photo.id}`}>
            <div className="relative aspect-square">
              <Image
                src={photo.thumbnailUrl}
                alt={photo.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default page;

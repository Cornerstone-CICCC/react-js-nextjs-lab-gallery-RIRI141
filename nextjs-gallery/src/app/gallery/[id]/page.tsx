import Image from "next/image";
import Link from "next/link";
import { Photo } from "@/types/gallery";

type PhotoDetail = {
  params: { id: string };
};

const getPhotoById = async (id: string): Promise<Photo> => {
  const res = await fetch(`http://localhost:3000/api/gallery/${id}`);
  if (!res.ok) throw new Error("Failed to fetch photo");
  const data = await res.json();
  return {
    ...data,
    url: "https://placehold.co/1000x1000/black/white", // 強制上書き
  };
};

const PhotoPage = async ({ params }: PhotoDetail) => {
  const photo = await getPhotoById(params.id);

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/gallery"
          className="inline-block mb-6 text-blue-600 hover:text-blue-800 transition-colors"
        >
          ← Go back to Gallery
        </Link>

        <div className="overflow-hidden">
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">{photo.title}</h1>
          </div>
          <div className="relative aspect-square max-w-2xl mx-auto">
            <Image
              src={photo.url}
              alt={photo.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default PhotoPage;

import { getImage } from "~/server/queries";
import Image from "next/image";

export default async function FullPageImageView(props: { id: number }) {
  const image = await getImage(props.id);

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="flex-shrink flex-grow">
        <Image
          src={image.url}
          alt={image.name}
          style={{ objectFit: "contain" }}
          width={720}
          height={720}
        />
      </div>
    </div>
  );
}

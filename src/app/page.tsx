import { desc } from "drizzle-orm";
import Link from "next/link";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const mockUrls = ["", ""];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {images.map((image, index) => (
          <div key={image.id + "-" + index} className="flex w-48 flex-col">
            <img src={image.url} />
            <div>{image.name}</div>
          </div>
        ))}
      </div>
    </main>
  );
}

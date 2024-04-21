/* eslint-disable @next/next/no-img-element */
import { clerkClient } from "@clerk/nextjs/server";
import { deleteImage, getImage } from "~/server/queries";
import { Button } from "~/components/ui/button";

export default async function FullPageImageView(props: { id: number }) {
  const image = await getImage(props.id);

  const uploaderInfo = await clerkClient.users.getUser(image.userId);

  return (
    <div className="flex h-full w-full min-w-0">
      <div className="flex flex-shrink justify-center">
        <img
          src={image.url}
          alt={image.name}
          className="flex-shrink object-contain"
        />
      </div>
      <div className="flex w-96 flex-shrink-0 flex-col gap-2 border-l">
        <div className="border-b p-2 text-center text-lg">{image.name}</div>
        <div className="flex flex-col gap-2">
          <span>Uploaded by: {uploaderInfo.fullName} </span>
        </div>
        <div className="flex flex-col gap-2">
          <span>Created on: </span>
          <span>{new Date(image.createdAt).toLocaleString("en-GB")} </span>

          <div className="p-2">
            <form
              action={async () => {
                "use server";

                await deleteImage(props.id);
              }}
            >
              <Button type="submit" variant="destructive">
                Delete
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

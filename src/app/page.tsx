import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/f0064e6b-5930-40a3-87c2-0927fc2ab369-php6xu.jpg",
  "https://utfs.io/f/0379c8bd-bc71-4220-bf52-2da395dd9c8b-rxrw09.JPG",
  "https://utfs.io/f/22f14cf3-e086-4d31-9f31-ccddb1aa9242-terql6.jpeg",
  "https://utfs.io/f/857b5538-65aa-4403-a000-d28c134cc265-io7dsp.fm.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-1/2 p-4">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
      Hello (gallery in progress)
    </main>
  );
}

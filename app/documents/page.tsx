import Image from "next/image";

const documents = [
  {
    title: "Formatted Playlist CSV",
    url: https://docs.google.com/spreadsheets/d/1c7rzH98Pb1LjVocfzaAzhNaHuIPcHtav/view,
    thumbnail: "/images/CSV-image.svg",
  },
  {
    title: "Document 2",
    url: "https://drive.google.com/your-doc2-link",
    thumbnail: "/images/boostify-logo.png",
  },
  {
    title: "Document 3",
    url: "https://drive.google.com/your-doc3-link",
    thumbnail: "/images/boostify-logo.png",
  },
  {
    title: "Document 4",
    url: "https://drive.google.com/your-doc4-link",
    thumbnail: "/images/boostify-logo.png",
  },
  {
    title: "Document 5",
    url: "https://drive.google.com/your-doc5-link",
    thumbnail: "/images/boostify-logo.png",
  },
  {
    title: "Document 6",
    url: "https://drive.google.com/your-doc6-link",
    thumbnail: "/images/boostify-logo.png",
  },
];

export default function DocumentsPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center py-12">
      <h1 className="text-4xl font-bold mb-8">Documents</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-5xl px-4">
        {documents.map((doc, idx) => (
          <a
            key={idx}
            href={doc.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 rounded-lg shadow-lg flex flex-col items-center p-6 hover:bg-gray-700 transition"
          >
            <div className="w-32 h-32 mb-4 flex items-center justify-center">
              {doc.thumbnail.endsWith(".svg") ? (
                <img
                  src={doc.thumbnail}
                  alt={doc.title}
                  width={128}
                  height={128}
                  className="object-contain rounded"
                />
              ) : (
                <Image
                  src={doc.thumbnail}
                  alt={doc.title}
                  width={128}
                  height={128}
                  className="object-contain rounded"
                />
              )}
            </div>
            <span className="text-lg font-semibold text-center">{doc.title}</span>
          </a>
        ))}
      </div>
    </div>
  );
}